import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings"
import ViewAllJobs from "./components/ViewAllJobs";

import "./index.css"; // Make sure this imports your Tailwind CSS



const App = () => {

  return (
    <>
      <Navbar />
      <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs" />
      <HomeCards />
      <JobListings/>
      <ViewAllJobs/>

      {/* <!-- Hero --> */}

      {/* <!-- Developers and Employers --> */}

      {/* <!-- Browse Jobs --> */}

      
     
    </>
  );
};

export default App;


