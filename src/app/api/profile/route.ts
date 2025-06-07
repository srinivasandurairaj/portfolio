import { profileData } from "./data/profile";

export async function GET() {
  return new Response(JSON.stringify(profileData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
