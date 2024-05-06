import { fetchJobs } from "../../../services/api";

export async function GET() {
  const jobs = await fetchJobs();
  return Response.json(jobs);
}
