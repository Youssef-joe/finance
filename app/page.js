import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Finance Management</h1>
        <p className="text-gray-600 mb-6">
          Manage your finances easily with our dashboard.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Income</h2>
            <p className="text-gray-600">$4,500</p>
            <Link href="/dashboard" className="text-blue-500 hover:underline mt-2 block">
              View Details
            </Link>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Expenses</h2>
            <p className="text-gray-600">$2,300</p>
            <Link href="/dashboard" className="text-blue-500 hover:underline mt-2 block">
              View Details
            </Link>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Savings</h2>
            <p className="text-gray-600">$1,200</p>
            <Link href="/dashboard" className="text-blue-500 hover:underline mt-2 block">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
