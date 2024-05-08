import { NextRequest, NextResponse } from "next/server";
import { fetchJobs } from "../../../../services/api";
export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const jobs = await fetchJobs();
  const job = jobs.find((item) => item.id == params.id);
  return Response.json(job);
}
