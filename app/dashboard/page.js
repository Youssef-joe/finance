'use client';

import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        {/* Welcome Banner */}
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome, John Doe</h1>
          <p className="text-gray-600 text-lg">Here’s an overview of your financial management.</p>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-700">Total Income</h2>
            <p className="mt-2 text-blue-600 text-2xl">$10,500</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-700">Total Expenses</h2>
            <p className="mt-2 text-green-600 text-2xl">$6,800</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-yellow-700">Total Savings</h2>
            <p className="mt-2 text-yellow-600 text-2xl">$3,700</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activity</h2>
          <ul className="list-disc pl-5">
            <li className="text-gray-600 mb-2">
              <span className="font-semibold">Deposit:</span> $1,200 on 09/01/2024
            </li>
            <li className="text-gray-600 mb-2">
              <span className="font-semibold">Purchase:</span> Groceries - $150 on 08/29/2024
            </li>
            <li className="text-gray-600 mb-2">
              <span className="font-semibold">Transfer:</span> Savings - $500 on 08/25/2024
            </li>
          </ul>
        </div>

        {/* Financial Overview */}
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Financial Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-700">Income</h3>
              <p className="mt-2 text-blue-600 text-2xl">$4,500</p>
              <button 
                onClick={() => router.push('/income-details')}
                className="text-blue-500 hover:underline mt-2 block"
              >
                View Details
              </button>
            </div>
            <div className="p-4 bg-green-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-green-700">Expenses</h3>
              <p className="mt-2 text-green-600 text-2xl">$2,300</p>
              <button 
                onClick={() => router.push('/expenses-details')}
                className="text-green-500 hover:underline mt-2 block"
              >
                View Details
              </button>
            </div>
            <div className="p-4 bg-yellow-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-yellow-700">Savings</h3>
              <p className="mt-2 text-yellow-600 text-2xl">$1,200</p>
              <button 
                onClick={() => router.push('/savings-details')}
                className="text-yellow-500 hover:underline mt-2 block"
              >
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => router.push('/add-income')}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-md"
            >
              Add Income
            </button>
            <button 
              onClick={() => router.push('/add-expense')}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow-md"
            >
              Add Expense
            </button>
            <button 
              onClick={() => router.push('/transfer')}
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded shadow-md"
            >
              Transfer Funds
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
