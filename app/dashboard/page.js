'use client';
import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) router.push('/auth/signin');
  }, [session, status, router]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600 text-xl">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="mb-4 text-lg text-gray-700">You are not signed in.</p>
          <button onClick={() => signIn()} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome, {session.user.name}</h1>
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
