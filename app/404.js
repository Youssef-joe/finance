export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">The page you're looking for does not exist.</p>
        <Link href="/" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
          Go to Home
        </Link>
      </div>
    );
  }
  