'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddIncome() {
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    router.push('/dashboard'); // Redirect to dashboard after submission
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Add Income</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="amount" className="block text-gray-700 mb-2">Amount</label>
              <input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="source" className="block text-gray-700 mb-2">Source</label>
              <input
                id="source"
                type="text"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-md"
            >
              Add Income
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
