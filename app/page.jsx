"use client";

import { useState, useEffect } from "react";
import Wrapper from "../layout/Wrapper";
import Home from "../components/job-listing-pages/job-list-v4";

export default function HomePage() {
  const [jobs, setJobs] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/jobs", {
        method: "GET",
      });
      const data = await response?.json();
      setJobs(data);
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <Home jobs={jobs} />
    </Wrapper>
  );
}
