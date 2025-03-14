import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const { auth, handlers } = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
  ],
});
