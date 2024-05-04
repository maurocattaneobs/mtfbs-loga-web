import Wrapper from "@/layout/Wrapper";
import Home from "@/components/job-listing-pages/job-list-v4";
import { fetchJobs } from "@/services/api";

export default async function HomePage() {
  const jobs = await fetchJobs();
  return (
    <Wrapper>
      <Home jobs={jobs} />
    </Wrapper>
  );
}
