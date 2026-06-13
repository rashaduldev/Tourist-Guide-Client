"use server";

import { serverApi } from "@/lib/server-api";

type RegisterInput = {
  name: string;
  email: string;
  password: string;
  photo?: string;
};

export type ActionResult = { ok: boolean; error?: string };

/** Create a new account in the backend. Sign-in afterwards is done client-side
 * via NextAuth's signIn('credentials'). */
export async function registerUser(
  input: RegisterInput,
): Promise<ActionResult> {
  try {
    await serverApi("/auth/register", {
      method: "POST",
      body: input,
      auth: false,
    });
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Signup failed" };
  }
}
