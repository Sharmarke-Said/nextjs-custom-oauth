"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SiGithub, SiGoogle, SiDiscord } from "react-icons/si";
import { oAuthSignIn, signUp } from "../actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signUpSchema } from "../schemas";
import Link from "next/link";

export function SignUpForm() {
  const [error, setError] = useState<string>();
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema), // ✅ Added resolver
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof signUpSchema>) {
    const error = await signUp(data);
    if (error) setError(error); // ✅ Ensure error exists before setting
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {error && <p className="text-destructive">{error}</p>}

        {/* OAuth Section */}
        <div className="text-center space-y-4">
          <p className="text-gray-500">Continue as</p>
          <div className="flex justify-center gap-3">
            <Button
              type="button"
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => oAuthSignIn("discord")} // ✅ Removed await
            >
              <SiDiscord className="w-5 h-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => oAuthSignIn("github")} // ✅ Removed await
            >
              <SiGithub className="w-5 h-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => oAuthSignIn("google")} // ✅ Removed await
            >
              <SiGoogle className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4 justify-end">
          <Button asChild variant="link">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </Form>
  );
}
