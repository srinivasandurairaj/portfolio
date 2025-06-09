import { revalidatePath } from "next/cache";

import { profileData } from "./data/profile";

export async function GET() {
  revalidatePath("/profile");
  return new Response(JSON.stringify(profileData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
