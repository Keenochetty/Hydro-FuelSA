import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Sidebar from "./Sidebar";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Dashboard from "./Dashboard";

function Home() {
  return (
    <div className=" ">
      <Section1 />
      <Section6 />
      <Section2 />
      {/* <Section3 /> */}
      <Section4 />
      <Section5 />
    </div>
  );
}

export default Home;
