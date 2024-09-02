'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TransferFunds() {
  const [amount, setAmount] = useState('');
  const [toAccount, setToAccount] = useState('');
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
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Transfer Funds</h1>
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
              <label htmlFor="toAccount" className="block text-gray-700 mb-2">To Account</label>
              <input
                id="toAccount"
                type="text"
                value={toAccount}
                onChange={(e) => setToAccount(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded shadow-md"
            >
              Transfer Funds
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
