import Link from "next/link";

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">syncd</h1>

      {/* Button */}
      <Link href="/workspaces">
        <button className="bg-blue-600 text-white px-6 py-3 text-lg rounded-md hover:bg-blue-700">
          Go to Workspaces
        </button>
      </Link>
    </div>
  );
}

