'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
              🎉 Thank you for your purchase!
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              We've sent a confirmation email with all the details.
            </p>
            {sessionId && (
              <p className="mt-2 text-xs text-gray-500">
                Session ID: {sessionId}
              </p>
            )}
          </div>
          
          <div className="mt-8">
            <Button asChild>
              <Link href="/">
                Return to Homepage
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
} 