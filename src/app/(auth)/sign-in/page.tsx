import { SignInForm } from "@/auth/nextjs/components/signInForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function SignIn({
  searchParams,
}: {
  searchParams: Promise<{ oauthError?: string }>;
}) {
  const { oauthError } = await searchParams;

  return (
    <div className="container mx-auto p-4 max-w-[750px]">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-center">Sign In</CardTitle>
          {oauthError && (
            <CardDescription className="text-destructive">
              {oauthError}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
}
