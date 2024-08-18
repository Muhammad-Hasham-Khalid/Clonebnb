import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { db } from "~/db";
import { accounts, users } from "~/db/schema";
import { env } from "~/env.mjs";
import {
  Credentials,
  InvalidLoginError,
  isValidCredentials,
} from "./credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
  }),
  providers: [
    GithubProvider,
    CredentialsProvider({
      credentials: {
        email: { label: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!isValidCredentials(credentials)) {
          throw new InvalidLoginError();
        }

        return await Credentials.authorize(credentials);
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  secret: env.NEXTAUTH_SECRET,
});
