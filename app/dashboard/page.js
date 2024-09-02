'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Dashboard() {
  const router = useRouter();

  // Effect to handle any redirection or setup (if needed)
  useEffect(() => {
    // You can add any necessary logic here if required
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome!</h1>
          <p className="text-gray-600 mb-6">Here’s an overview of your financial management.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-100 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-blue-700">Income</h2>
              <p className="mt-2 text-blue-600">$4,500</p>
              <Link href="/income-details" className="text-blue-500 hover:underline mt-2 block">View Details</Link>
            </div>
            <div className="p-4 bg-green-100 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-green-700">Expenses</h2>
              <p className="mt-2 text-green-600">$2,300</p>
              <Link href="/expenses-details" className="text-blue-500 hover:underline mt-2 block">View Details</Link>
            </div>
            <div className="p-4 bg-yellow-100 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-yellow-700">Savings</h2>
              <p className="mt-2 text-yellow-600">$1,200</p>
              <Link href="/savings-details" className="text-blue-500 hover:underline mt-2 block">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
