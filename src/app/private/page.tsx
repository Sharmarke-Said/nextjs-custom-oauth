import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ToggleRoleButton } from "./ToggleRoleButton";
import { getCurrentUser } from "@/auth/nextjs/currentUser";

export default async function PrivatePage() {
  const currentUser = await getCurrentUser({
    redirectIfNotFound: true,
  });

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-6">
      {/* Welcome Message */}
      <h1 className="text-3xl font-bold text-center mb-4">
        Welcome to the Private Page
      </h1>
      <p className="text-lg text-gray-600 text-center mb-6">
        You are logged in as a{" "}
        <strong className="text-blue-500">{currentUser.role}</strong>.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <ToggleRoleButton />
        <Button asChild className="px-6 py-3">
          <Link href="/">Go to Home</Link>
        </Button>
      </div>
    </div>
  );
}
