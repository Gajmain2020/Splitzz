import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold gradient-title mb-4">404</h1>
      <h2 className="text-2xl gradient-title font-semibold mb-5">
        Page Not Found
      </h2>
      <Link href="/" className="text-green-600 hover:text-green-700 transition">
        Go Back Home
      </Link>
    </div>
  );
}
