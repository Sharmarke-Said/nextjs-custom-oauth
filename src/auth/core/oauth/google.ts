import { env } from "@/data/env/server";
import { OAuthClient } from "./base";
import { z } from "zod";

export function createGoogleOAuthClient() {
  return new OAuthClient({
    provider: "google",
    clientId: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
    scopes: ["openid", "profile", "email"],
    urls: {
      auth: "https://accounts.google.com/o/oauth2/v2/auth",
      token: "https://oauth2.googleapis.com/token",
      user: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    userInfo: {
      schema: z.object({
        sub: z.string(), // Google's unique user ID
        name: z.string().nullable(),
        given_name: z.string().nullable(),
        email: z.string().email(),
      }),
      parser: (user) => ({
        id: user.sub,
        name:
          user.given_name ?? user.name ?? user.email.split("@")[0], // Prefer `given_name`
        email: user.email,
      }),
    },
  });
}
