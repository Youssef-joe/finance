'use client';

import { useRouter } from 'next/navigation';

export default function IncomeDetails() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Income Details</h1>
          <ul className="list-disc pl-5">
            <li className="text-gray-600 mb-2">
              <span className="font-semibold">Salary:</span> $4,000 on 08/01/2024
            </li>
            <li className="text-gray-600 mb-2">
              <span className="font-semibold">Freelance:</span> $500 on 08/15/2024
            </li>
            <li className="text-gray-600 mb-2">
              <span className="font-semibold">Investment:</span> $1,000 on 08/20/2024
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
