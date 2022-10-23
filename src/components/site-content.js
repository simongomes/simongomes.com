import React from "react";
import About from "./contents/about";
import Location from "./contents/location";
import Work from "./contents/work";
import Skills from "./contents/skills";
import Connect from "./contents/connect";
import Chatbox from "./chatbox";

const SiteContent = () => {
  return (
    <div>
      <div className="content-wrapper">
        <About />
        <Location />
        <Work />
        <Skills />
        <Connect />
        <Chatbox />
      </div>
    </div>
  );
};
export default SiteContent;
