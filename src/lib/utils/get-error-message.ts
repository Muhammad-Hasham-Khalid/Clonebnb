import { AxiosError } from "axios";
import { ZodError } from "zod";

export function getErrorMessage(error: unknown): string {
  // handle different types of errors
  if (error instanceof AxiosError) {
    return error.message;
  }

  if (error instanceof ZodError) {
    return error.errors.map((error) => error.message).join(", ");
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "something went wrong";
}
