'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

const plans = [
  { 
    name: 'Starter Site', 
    priceLabel: '$499', 
    productId: 'prod_SKtGY4NCeUcq50',
    features: [
      'Up to 3 pages',
      'Mobile responsive design',
      'Custom domain setup',
      'Basic contact form',
      '1 round of revisions'
    ],
    idealFor: 'Ideal for: Portfolios & local services'
  },
  { 
    name: 'Business Site', 
    priceLabel: '$999', 
    productId: 'prod_SKtJ2tDcekTr2s',
    popular: true,
    features: [
      'Up to 7 pages',
      'Enhanced design and animations',
      'Contact form with email integration',
      'Blog or project listing',
      'Social integrations',
      'SEO basics',
      '2 revisions'
    ],
    idealFor: 'Best for growing businesses'
  },
  { 
    name: 'Pro Site', 
    priceLabel: '$1799', 
    productId: 'prod_SKtKDhawq0GveH',
    features: [
      'Up to 12 pages',
      'Advanced interactive elements',
      'Booking or forms',
      'API integrations',
      'Newsletter signup',
      'Google Analytics',
      '3 revisions'
    ],
    idealFor: 'Ideal for advanced web needs'
  },
  { 
    name: 'E-Commerce Site', 
    priceLabel: '$2499+', 
    productId: 'prod_SKtPeWgzmn1OPK',
    features: [
      'Up to 15 product pages',
      'Shopping cart + checkout',
      'Payment gateway',
      'Inventory + customer login',
      'Security & performance',
      '3 revisions'
    ],
    idealFor: 'Perfect for online stores'
  }
];

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (productId: string) => {
    setLoading(productId);
    
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error ${response.status}`);
      }
      
      const { url, error } = await response.json();
      
      if (error) {
        throw new Error(error);
      }
      
      if (!url) {
        throw new Error('No checkout URL received from the server');
      }
      
      window.location.href = url;
    } catch (error) {
      console.error('Error during checkout:', error);
      alert(`Checkout failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setLoading(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Website Packages & Pricing</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose a package that fits your business goals.
        </p>
      </section>

      {/* Pricing Tiers */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.productId} 
              className={`border rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col ${plan.popular ? 'bg-gray-50 border-blue-500' : ''}`}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-xs uppercase font-bold tracking-wider py-1 px-2 rounded-full inline-block mb-3 self-start">
                  Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6">{plan.priceLabel}</div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <p className="italic text-sm mb-4">{plan.idealFor}</p>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
                  onClick={() => handleCheckout(plan.productId)}
                  disabled={loading === plan.productId}
                >
                  {loading === plan.productId ? 'Processing...' : 'Purchase Now'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Features Comparison</h2>
        <div className="overflow-x-auto shadow-sm border rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Feature
                </th>
                <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Starter
                </th>
                <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Business
                </th>
                <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Pro
                </th>
                <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                  E-Commerce
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Page limit</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">3 pages</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">7 pages</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">12 pages</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">15 pages</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Interactive Elements</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">Basic</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">Enhanced</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">Advanced</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">Advanced</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Contact form</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">Basic</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">Advanced</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">Advanced</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">Advanced</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">API integrations</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">No</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">No</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">Yes</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">Yes</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">E-commerce</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">No</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">No</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">No</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">Yes</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Booking system</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">No</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">No</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">Optional</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">Optional</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Add-Ons Table */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Additional Services</h2>
        <div className="max-w-4xl mx-auto overflow-x-auto shadow-sm border rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Additional page</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-right">$75/page</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Booking system</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-right">$200</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Blog setup</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-right">$150</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Admin dashboard</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-right">$350+</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Logo design</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-right">$120</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Advanced SEO</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-right">$300</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Animations</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-right">$150+</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Hosting setup</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-right">$100</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Maintenance</td>
                <td className="px-6 py-4 text-sm text-gray-500 text-right">$75/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 px-4 bg-gray-50 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Not sure which package is right for you?</h2>
        <Link href="/#contact">
          <Button size="lg" className="px-8 py-6 text-lg">
            Contact Us for a Free Consultation
          </Button>
        </Link>
      </section>
    </div>
  );
} 