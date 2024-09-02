// components/Sidebar.js
import './../styles/globals.css';
export default function Sidebar() {
  return (
    <aside className="w-64 bg-white p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Menu</h2>
      <ul>
        <li><a href="/" className="block py-2 hover:bg-gray-200 rounded">Home</a></li>
        <li><a href="/dashboard" className="block py-2 hover:bg-gray-200 rounded">Dashboard</a></li>
        <li><a href="/profile" className="block py-2 hover:bg-gray-200 rounded">Profile</a></li>
      </ul>
    </aside>
  );
}
