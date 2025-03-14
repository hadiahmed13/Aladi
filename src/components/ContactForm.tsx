"use client"
import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { z } from 'zod'

// Define Zod schema for client-side validation
const contactSchema = z.object({
    name: z.string()
        .max(100, "Name must be less than 100 characters"),
    email: z.string()
        .email("Please enter a valid email address")
        .max(100, "Email must be less than 100 characters"),
    message: z.string()
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message must be less than 1000 characters")
})

export function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess(false)

        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get('name')?.toString() || '',
            email: formData.get('email')?.toString() || '',
            message: formData.get('message')?.toString() || ''
        }

        try {
            // Client-side validation
            const validation = contactSchema.safeParse(data)
            if (!validation.success) {
                throw new Error(validation.error.errors[0].message)
            }

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || 'Failed to send message')
            }

            setSuccess(true)
            if (formRef.current) {
                formRef.current.reset()
            }

            // Auto-clear success message after 5 seconds
            setTimeout(() => {
                setSuccess(false)
            }, 5000)

        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to send message'
            setError(message)
            // Auto-clear error after 5 seconds
            setTimeout(() => {
                setError('')
            }, 5000)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium leading-none">
                    Full Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your name"
                />
            </div>

            <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium leading-none">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="your@email.com"
                />
            </div>

            <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium leading-none">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your project"
                />
            </div>

            {error && (
                <div className="text-red-500 text-sm flex justify-between items-center">
                    <span>{error}</span>
                    <button
                        type="button"
                        onClick={() => setError('')}
                        className="text-red-300 hover:text-red-500"
                    >
                        ×
                    </button>
                </div>
            )}

            {success ? (
                <div className="text-green-500 text-sm flex flex-col gap-2">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>Message sent successfully! We'll respond shortly.</p>
                    <Button
                        type="button"
                        variant="outline"
                        className="text-green-600 border-green-500 hover:bg-green-50"
                        onClick={() => {
                            setSuccess(false)
                            formRef.current?.reset()
                        }}
                    >
                        Send Another Message
                    </Button>
                </div>
            ) : (
                <Button
                    type="submit"
                    className="w-full"
                    disabled={loading}
                >
                    {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        'Send Message'
                    )}
                </Button>
            )}
        </form>
    )
}