import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-4xl font-bold text-center">404 - Not Found</h1>
      <p className="mb-6 text-lg text-center">
        Sorry, the page you're looking for could not be found.
      </p>
      <Link href="/" className="font-medium text-purple-600 hover:underline">
        Go back to the homepage
      </Link>
    </div>
  );
}
