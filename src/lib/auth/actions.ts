"use server";

import { z } from "zod";
import { db } from "~/db";
import { users } from "~/db/schema";
import { Logger } from "~/lib/logger";
import bcrypt from "bcrypt";

const RegisterUserDto = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string(),
});
type RegisterUserDto = z.infer<typeof RegisterUserDto>;

export async function signUp(input: RegisterUserDto) {
  Logger.info("Signing up", input);

  const parsedInput = await RegisterUserDto.spa(input);
  if (!parsedInput.success) {
    Logger.error(parsedInput.error);
    throw new Error("invalid input");
  }

  const { email, password, name } = parsedInput.data;

  const [user] = await db
    .insert(users)
    .values({
      email,
      hashedPassword: await bcrypt.hash(password, 12),
      name,
    })
    .returning();

  Logger.info(`User ${user.id} created`);

  return Response.json(user);
}
