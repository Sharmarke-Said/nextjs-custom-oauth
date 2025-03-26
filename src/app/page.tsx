// import { LogOutButton } from "@/auth/nextjs/components/logOutButton";
// import { getCurrentUser } from "@/auth/nextjs/currentUser";
// // import { getCurrentUser } from "@/auth/nextjs/currentUser";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import Link from "next/link";

// export default async function HomePage() {
//   // const fullUser = await getCurrentUser({ withFullUser: true });
//   const fullUser = await getCurrentUser({ withFullUser: true });
//   // const fullUser = null;
//   // const fullUser = { id: "", name: "Asad", role: "user" };

//   return (
//     <div className="container mx-auto p-4">
//       {fullUser == null ? (
//         <div className="flex gap-4">
//           <Button asChild>
//             <Link href="/sign-in">Sign In</Link>
//           </Button>
//           <Button asChild>
//             <Link href="/sign-up">Sign Up</Link>
//           </Button>
//         </div>
//       ) : (
//         <Card className="max-w-[500px] mt-4">
//           <CardHeader>
//             <CardTitle>User: {fullUser.name}</CardTitle>
//             <CardDescription>Role: {fullUser.role}</CardDescription>
//           </CardHeader>
//           <CardFooter className="flex gap-4">
//             <Button asChild variant="outline">
//               <Link href="/private">Private Page</Link>
//             </Button>
//             {fullUser.role === "admin" && (
//               <Button asChild variant="outline">
//                 <Link href="/admin">Admin Page</Link>
//               </Button>
//             )}
//             <LogOutButton />
//           </CardFooter>
//         </Card>
//       )}
//     </div>
//   );
// }

import { LogOutButton } from "@/auth/nextjs/components/logOutButton";
import { getCurrentUser } from "@/auth/nextjs/currentUser";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function HomePage() {
  const fullUser = await getCurrentUser({ withFullUser: true });

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-6">
      {/* Welcome Section */}
      <h1 className="text-4xl font-bold text-center mb-6">
        Welcome to Our Platform
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-md mb-8">
        {fullUser
          ? `Hello, ${fullUser.name}! Manage your account and explore your dashboard.`
          : "Join us today and experience the best features we offer!"}
      </p>

      {/* Conditional UI */}
      {fullUser == null ? (
        <div className="flex gap-4">
          <Button asChild className="px-6 py-3 text-lg">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild className="px-6 py-3 text-lg">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      ) : (
        <Card className="w-full max-w-md shadow-lg p-6">
          <CardHeader>
            <CardTitle className="text-xl">
              User: {fullUser.name}
            </CardTitle>
            <CardDescription className="text-gray-500">
              Role: {fullUser.role}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Link href="/private">Private Page</Link>
            </Button>
            {fullUser.role === "admin" && (
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Link href="/admin">Admin Page</Link>
              </Button>
            )}
            <LogOutButton />
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
