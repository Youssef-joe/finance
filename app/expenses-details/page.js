'use client';

import { useRouter } from 'next/navigation';

export default function ExpensesDetails() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Expenses Details</h1>
          <ul className="list-disc pl-5">
            <li className="text-gray-600 mb-2">
              <span className="font-semibold">Groceries:</span> $150 on 08/29/2024
            </li>
            <li className="text-gray-600 mb-2">
              <span className="font-semibold">Utilities:</span> $200 on 08/25/2024
            </li>
            <li className="text-gray-600 mb-2">
              <span className="font-semibold">Rent:</span> $1,500 on 08/01/2024
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
