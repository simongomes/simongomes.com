import React from 'react';
import About from '../components/contents/about';
import Location from '../components/contents/location';
import Work from '../components/contents/work';
import Skills from '../components/contents/skills';
import Connect from '../components/contents/connect';
import Chatbox from './chatbox';

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
