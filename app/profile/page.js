'use client';

import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        {/* Profile Header */}
        <div className="bg-white p-6 shadow-md rounded-lg mb-6 flex items-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            {/* Placeholder for profile picture */}
            <span className="text-gray-500 text-4xl">JD</span>
          </div>
          <div className="ml-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">John Doe</h1>
            <p className="text-gray-600 text-lg mb-4">johndoe@example.com</p>
            <button 
              onClick={() => router.push('/settings')}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-md"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Profile Details */}
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Personal Information</h3>
              <p className="text-gray-600"><strong>Full Name:</strong> Johnathan Doe</p>
              <p className="text-gray-600"><strong>Email:</strong> johndoe@example.com</p>
              <p className="text-gray-600"><strong>Phone:</strong> (123) 456-7890</p>
              <p className="text-gray-600"><strong>Address:</strong> 1234 Elm Street, Springfield</p>
            </div>

            {/* Account Information */}
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Account Information</h3>
              <p className="text-gray-600"><strong>Username:</strong> johndoe123</p>
              <p className="text-gray-600"><strong>Member Since:</strong> January 2020</p>
              <p className="text-gray-600"><strong>Status:</strong> Active</p>
              <button 
                onClick={() => router.push('/change-password')}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded shadow-md"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Financial Overview */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Financial Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-700">Income</h3>
              <p className="mt-2 text-blue-600">$4,500</p>
              <button 
                onClick={() => router.push('/income-details')}
                className="text-blue-500 hover:underline mt-2 block"
              >
                View Details
              </button>
            </div>
            <div className="p-4 bg-green-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-green-700">Expenses</h3>
              <p className="mt-2 text-green-600">$2,300</p>
              <button 
                onClick={() => router.push('/expenses-details')}
                className="text-green-500 hover:underline mt-2 block"
              >
                View Details
              </button>
            </div>
            <div className="p-4 bg-yellow-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-yellow-700">Savings</h3>
              <p className="mt-2 text-yellow-600">$1,200</p>
              <button 
                onClick={() => router.push('/savings-details')}
                className="text-yellow-500 hover:underline mt-2 block"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
