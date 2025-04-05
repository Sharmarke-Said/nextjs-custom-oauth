# Custom OAuth using Discord and GitHub OAuth Providers

This is a [Next.js](https://nextjs.org) project that implements custom OAuth authentication using the [Discord OAuth2](https://discord.com/developers/docs/topics/oauth2) and [GitHub OAuth](https://docs.github.com/en/apps/oauth-apps) providers. The integration allows users to authenticate through their Discord or GitHub accounts, providing an easy and secure login experience.

## OAuth Providers Used:

### 1. **Discord OAuth**:

- Discord OAuth is integrated into the application to allow users to sign in using their Discord accounts. When a user authenticates via Discord, they are granted access to their basic user information, such as their username, discriminator, and avatar. This integration is commonly used for community-based applications or platforms that leverage Discord as a social hub.
- You will need to create a Discord application on the [Discord Developer Portal](https://discord.com/developers/applications) to obtain a `Client ID` and `Client Secret` which are used for the OAuth flow.

### 2. **GitHub OAuth**:

- GitHub OAuth provides a way for users to authenticate with their GitHub accounts. This integration is ideal for platforms that are developer-centric or need access to GitHub repositories or user data. When users authenticate via GitHub, their profile information, such as username and email (if public), is retrieved for account management.
- To set up GitHub OAuth, you'll need to register your application on [GitHub Developer Settings](https://github.com/settings/developers) to obtain your `Client ID` and `Client Secret`.

Google OAuth enables users to sign in using their Google accounts, providing a seamless authentication experience. This integration is widely used due to Google's extensive user base and reliability. Upon authentication, the application can access basic profile details like the user's name, email, and profile picture.

To configure Google OAuth, you must create a project in the Google Cloud Console, enable the Google OAuth API, and generate Client ID and Client Secret credentials. Ensure you set up authorized redirect URIs in the Google Developer Console to match your application's callback endpoints.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
