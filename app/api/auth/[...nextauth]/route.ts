import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import { userModel } from "@/models/userModel";
import ConnectDB from "@/lib/ConnentDB";

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.AUTH_GITHUB_ID as string,
            clientSecret: process.env.AUTH_GITHUB_SECRET as string,
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "your@email.com" },
                password: { label: "Password", type: "password" },
                username: { label: "Username", type: "text", placeholder: "yourusername" }, // ✅ Added username
            },
            async authorize(credentials) {
                await ConnectDB();

                if (!credentials || !credentials.email || !credentials.password) {
                    throw new Error("Invalid credentials");
                }

                const user = await userModel.findOne({ email: credentials.email });
                if (!user) {
                    throw new Error("User not found");
                }

                const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                if (!isPasswordCorrect) {
                    throw new Error("Incorrect password");
                }

                return { 
                    id: user._id.toString(), 
                    email: user.email, 
                    name: user.name, 
                    username: user.username,  // ✅ Added username
                    role: user.role 
                };
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            await ConnectDB();

            try {
                const existingUser = await userModel.findOne({ email: user.email });

                if (existingUser) {
                    return true;
                }

                if (account?.provider === "github") {
                    const githubProfile = profile as { login?: string };

                    await userModel.create({
                        name: user.name,
                        email: user.email,
                        image: user.image,
                        username: githubProfile?.login, // ✅ GitHub username
                    });
                }

                return true;
            } catch (error) {
                console.error("Error in signIn callback", error);
                return false;
            }
        },

        async jwt({ token, user }) {
            if (user) {
                token.id = (user as any).id;
                token.email = user.email;
                token.name = user.name;
                token.username = (user as any).username; // ✅ Store username in token
            }
            return token;
        },

        async session({ session, token }) {
            if (session.user) {
                (session.user as { id: string }).id = token.id as string;
                session.user.email = token.email;
                session.user.name = token.name;
                (session.user as { username?: string }).username = token.username as string; // ✅ Fix TypeScript issue
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
});

export { handler as GET, handler as POST };
