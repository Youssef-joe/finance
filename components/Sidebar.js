import Link from 'next/link';
import './../styles/globals.css';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Menu</h2>
      <ul>
        <li><Link href="/" className="block py-2 hover:bg-gray-200 rounded">Home</Link></li>
        <li><Link href="/dashboard" className="block py-2 hover:bg-gray-200 rounded">Dashboard</Link></li>
        <li><Link href="/profile" className="block py-2 hover:bg-gray-200 rounded">Profile</Link></li>
        <li><Link href="/income-details" className="block py-2 hover:bg-gray-200 rounded">Income Details</Link></li>
        <li><Link href="/expenses-details" className="block py-2 hover:bg-gray-200 rounded">Expenses Details</Link></li>
        <li><Link href="/add-income" className="block py-2 hover:bg-gray-200 rounded">Add Income</Link></li>
        <li><Link href="/add-expense" className="block py-2 hover:bg-gray-200 rounded">Add Expense</Link></li>
        <li><Link href="/transfer-funds" className="block py-2 hover:bg-gray-200 rounded">Transfer Funds</Link></li>
        <li><Link href="/settings" className="block py-2 hover:bg-gray-200 rounded">Settings</Link></li>
      </ul>
    </aside>
  );
}
