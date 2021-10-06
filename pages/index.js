// Home Page
import React from 'react';
import SiteHead from '../components/site-head';
import Header from '../components/header';
import SiteContent from '../components/site-content';
import { CookiesProvider } from 'react-cookie';

const Home = () => {
  return (
    <CookiesProvider>
      <SiteHead />
      <Header />
      <SiteContent />
    </CookiesProvider>
  );
};

export default Home;
