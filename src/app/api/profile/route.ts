export const dynamic = "force-dynamic"; // Ensures the route is dynamic
export const revalidate = 60; // Revalidate every 60 seconds (adjust as needed)

import { revalidatePath } from "next/cache";
import { profileData } from "./data/profile";

export async function GET() {
  revalidatePath("/profile");
  return new Response(JSON.stringify(profileData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
