import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-6">
      {/* Admin Heading */}
      <h1 className="text-4xl font-bold text-center mb-4 text-red-600">
        Admin Panel
      </h1>
      <p className="text-lg text-gray-600 text-center mb-6">
        Welcome, Admin! Manage the system with full control.
      </p>

      {/* Action Buttons */}
      <Button asChild className="px-6 py-3">
        <Link href="/">Go to Home</Link>
      </Button>
    </div>
  );
}
