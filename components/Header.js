// components/Header.js
import './../styles/globals.css'
export default function Header() {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">FinancialApp</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline text-white">Home</a></li>
            <li><a href="/dashboard" className="hover:underline text-white">Dashboard</a></li>
            <li><a href="/profile" className="hover:underline text-white">Profile</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
