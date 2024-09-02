'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600 text-xl">Loading...</div>
      </div>
    );
  }

  if (!session) {
    router.push('/auth/signin');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Profile</h1>
          <div className="mb-6">
            <p className="text-gray-700 mb-2">Name: {session.user.name}</p>
            <p className="text-gray-700 mb-2">Email: {session.user.email}</p>
            <p className="text-gray-700 mb-2">Role: {session.user.role || 'User'}</p>
          </div>
          <Link href="/auth/signout" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  );
}
