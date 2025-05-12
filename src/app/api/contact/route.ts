import { NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

// Define schema with better error messages
const schema = z.object({
    name: z.string()
        .max(100, "Name must be less than 100 characters"),
    email: z.string()
        .email("Please enter a valid email address")
        .max(100, "Email must be less than 100 characters"),
    message: z.string()
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message must be less than 1000 characters")
})

export async function POST(request: Request) {
    try {
        // Validate request body
        const body = await request.json()
        const validation = schema.safeParse(body)

        if (!validation.success) {
            // Return first validation error message
            const firstError = validation.error.errors[0]
            return NextResponse.json(
                { error: firstError.message },
                { status: 400 }
            )
        }
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST, // Should be "mail.aladi.ca"
            port: Number(process.env.SMTP_PORT), // Should be 465
            secure: true, // Required for port 465 (SSL/TLS)
            auth: {
                user: process.env.EMAIL_USER, // aladi.contact@gmail.com
                pass: process.env.EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: process.env.NODE_ENV === 'production',
            },
        });

        // Email content with better sanitization
        const sanitizedMessage = validation.data.message
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\n/g, '<br>')

        const mailOptions = {
            from: `"Aladi Contact Form" <${process.env.EMAIL_USER}>`, // aladi.contact@gmail.com
            to: process.env.EMAIL_USER, // Send to yourself
            replyTo: validation.data.email, // Allow direct replies to user
            subject: `New Contact Form Submission - ${validation.data.name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a365d;">New Contact Form Submission</h2>
          <div style="margin: 20px 0; border-top: 2px solid #e2e8f0; padding-top: 20px;">
            <p><strong style="color: #2d3748;">Name:</strong> ${validation.data.name}</p>
            <p><strong style="color: #2d3748;">Email:</strong> 
              <a href="mailto:${validation.data.email}" 
                 style="color: #4299e1; text-decoration: none;">
                ${validation.data.email}
              </a>
            </p>
            <div style="margin-top: 15px;">
              <strong style="color: #2d3748; display: block; margin-bottom: 10px;">Message:</strong>
              <div style="background: #f7fafc; padding: 15px; border-radius: 4px; border: 1px solid #e2e8f0;">
                ${sanitizedMessage}
              </div>
            </div>
          </div>
          <p style="color: #718096; font-size: 0.9em; margin-top: 25px; border-top: 2px solid #e2e8f0; padding-top: 15px;">
            This message was sent from the contact form on aladi.ca
          </p>
        </div>
      `,
            text: `New Contact Form Submission\n
        Name: ${validation.data.name}\n
        Email: ${validation.data.email}\n
        Message:\n${validation.data.message}`
        }

        // Send email
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { success: true },
            { status: 200 }
        )

    } catch (error) {
        console.error('Contact API Error:', error)

        // Return specific error messages
        let errorMessage = 'Internal server error'
        if (error instanceof Error) {
            errorMessage = error.message.includes('Invalid login')
                ? 'Email configuration error'
                : error.message
        }

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        )
    }
}