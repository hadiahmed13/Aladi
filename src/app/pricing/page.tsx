import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PricingPage() {
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
          {/* Starter */}
          <div className="border rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Starter Site</h3>
            <div className="text-3xl font-bold mb-6">$499</div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li>Up to 3 pages</li>
              <li>Mobile responsive design</li>
              <li>Custom domain setup</li>
              <li>Basic contact form</li>
              <li>1 round of revisions</li>
            </ul>
            <div className="mt-auto">
              <p className="italic text-sm mb-4">Ideal for: Portfolios & local services</p>
              <Link href="/#contact">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>

          {/* Business */}
          <div className="border rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col bg-gray-50 border-blue-500">
            <div className="bg-blue-500 text-white text-xs uppercase font-bold tracking-wider py-1 px-2 rounded-full inline-block mb-3 self-start">Popular</div>
            <h3 className="text-2xl font-bold mb-2">Business Site</h3>
            <div className="text-3xl font-bold mb-6">$999</div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li>Up to 7 pages</li>
              <li>Enhanced design and animations</li>
              <li>Contact form with email integration</li>
              <li>Blog or project listing</li>
              <li>Social integrations</li>
              <li>SEO basics</li>
              <li>2 revisions</li>
            </ul>
            <div className="mt-auto">
              <p className="italic text-sm mb-4">Best for growing businesses</p>
              <Link href="/#contact">
                <Button className="w-full bg-blue-500 hover:bg-blue-600">Get Started</Button>
              </Link>
            </div>
          </div>

          {/* Pro */}
          <div className="border rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Pro Site</h3>
            <div className="text-3xl font-bold mb-6">$1799</div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li>Up to 12 pages</li>
              <li>Advanced interactive elements</li>
              <li>Booking or forms</li>
              <li>API integrations</li>
              <li>Newsletter signup</li>
              <li>Google Analytics</li>
              <li>3 revisions</li>
            </ul>
            <div className="mt-auto">
              <p className="italic text-sm mb-4">Ideal for advanced web needs</p>
              <Link href="/#contact">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>

          {/* E-Commerce */}
          <div className="border rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">E-Commerce Site</h3>
            <div className="text-3xl font-bold mb-6">$2499+</div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li>Up to 15 product pages</li>
              <li>Shopping cart + checkout</li>
              <li>Payment gateway</li>
              <li>Inventory + customer login</li>
              <li>Security & performance</li>
              <li>3 revisions</li>
            </ul>
            <div className="mt-auto">
              <p className="italic text-sm mb-4">Perfect for online stores</p>
              <Link href="/#contact">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
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