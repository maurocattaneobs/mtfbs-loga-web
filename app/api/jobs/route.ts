import { fetchJobs } from "../../../services/api";
export const dynamic = "force-dynamic";

export async function GET() {
  const jobs = await fetchJobs();
  return Response.json(jobs);
}
