import React, { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [Jobs, setJobs] = useState([]); // renamed to "Jobs"
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {

      const ApiUrl = isHome ? 'http://localhost:8000/jobs?_limit=3' : 'http://localhost:8000/jobs' // for 3 jobs on home page with limit 3 and all 6 jobs on jobs page

      try {
        const res = await fetch(ApiUrl);
        const data = await res.json();
        setJobs(data); // store data in "Jobs"
      } 
      catch (error) {
        console.log("Error fetching data", error);
      }
       finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const jobListings = isHome ? Jobs.slice(0, 3) : Jobs;

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobListings.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
