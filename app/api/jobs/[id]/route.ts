import { fetchJobs } from "../../../../services/api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const jobs = await fetchJobs();
  const job = jobs.find((item) => item.id == id) || jobs[0];
  return Response.json(job);
}
