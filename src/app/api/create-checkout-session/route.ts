import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Log environment variables (redacted)
console.log('STRIPE_SECRET_KEY exists:', !!process.env.STRIPE_SECRET_KEY);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-11-15' as any,
});

export async function POST(req: NextRequest) {
  console.log('POST request received at /api/create-checkout-session');
  
  try {
    const body = await req.json();
    console.log('Request body:', JSON.stringify({ ...body, productId: body.productId ? '[REDACTED]' : undefined }));
    const { productId } = body;
    
    if (!productId) {
      console.error('Product ID is missing in the request');
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }

    const origin = req.headers.get('origin') || 'http://localhost:3000';
    console.log('Using origin:', origin);
    
    try {
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product: productId,
              unit_amount: getUnitAmountForProduct(productId),
            },
            quantity: 1,
          },
        ],
        success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/pricing`
      });

      console.log('Stripe session created successfully:', session.id);
      return NextResponse.json({ url: session.url });
    } catch (stripeError: any) {
      console.error('Stripe API error:', stripeError.message);
      return NextResponse.json(
        { error: `Stripe error: ${stripeError.message}` },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Server error in checkout endpoint:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper function to get the unit amount based on the product ID
function getUnitAmountForProduct(productId: string): number {
  switch (productId) {
    case 'prod_SKtGY4NCeUcq50':  // Starter Site
      return 49900;  // $499.00
    case 'prod_SKtJ2tDcekTr2s':  // Business Site
      return 99900;  // $999.00
    case 'prod_SKtKDhawq0GveH':  // Pro Site
      return 179900; // $1,799.00
    case 'prod_SKtPeWgzmn1OPK':  // E-Commerce Site
      return 249900; // $2,499.00
    default:
      return 99900;  // Default fallback price
  }
} 