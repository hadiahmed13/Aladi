import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Test payment API is working' });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Test payment request body:', body);
    
    // Simulate a successful response
    return NextResponse.json({
      success: true,
      message: 'Test payment API received POST request successfully',
      url: 'https://example.com/test-success'
    });
  } catch (error: unknown) {
    console.error('Error in test payment endpoint:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 