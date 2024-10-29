import { fetchJobs } from "../../../services/api";
import appConfig from "../../config";
export const dynamic = "force-dynamic";

export async function GET() {
  const remoteUrl_IS = `${appConfig.logaUrl_IS}`;
  const jobs_IS = await fetchJobs(remoteUrl_IS);

  const remoteUrl_DS = `${appConfig.logaUrl_DS}`;
  const jobs_DS = await fetchJobs(remoteUrl_DS);

  let jobs = jobs_IS.concat(jobs_DS);

  jobs = jobs.map((item, index) => {
    item.index = index;
    return item;
  });

  return Response.json(jobs);
}
