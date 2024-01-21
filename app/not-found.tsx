import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center">404 - Not Found</h1>
      <p className="text-lg mb-6 text-center">
        Sorry, the page you're looking for could not be found.
      </p>
      <Link href="/" className="text-purple-600 hover:underline font-medium">
        Go back to the homepage
      </Link>
    </div>
  );
}
