import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list-v4";

const index = () => {
  return (
    <>
      <JobList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
