import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { db } from "~/db";
import { users } from "~/db/schema";
import { takeFirst } from "../utils";
import { z } from "zod";
import { CredentialsSignin } from "next-auth";

const CredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export function isValidCredentials(
  credentials: unknown,
): credentials is z.infer<typeof CredentialsSchema> {
  return CredentialsSchema.safeParse(credentials).success;
}

export class InvalidLoginError extends CredentialsSignin {
  code = "Invalid identifier or password";
}

export const Credentials = {
  async authorize(credentials: z.infer<typeof CredentialsSchema>) {
    const user = await db
      .select()
      .from(users)
      .where(eq(users.email, credentials.email))
      .limit(1)
      .then(takeFirst);

    if (!user || !user.hashedPassword) {
      throw new Error("invalid credentials");
    }

    const valid = await bcrypt.compare(
      credentials.password,
      user.hashedPassword,
    );

    if (!valid) {
      throw new Error("invalid password");
    }

    return user;
  },
} as const;
