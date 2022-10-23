// Home Page
import React, { Fragment } from "react";
import Head from "next/head";
import Header from "../components/header";
import SiteContent from "../components/site-content";
import { CookiesProvider } from "react-cookie";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Simon Gomes - Senior Frontend Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="I'm a Senior Frontend Engineer working in the field since 2015. My core strength is planning, architecting, and building better frontend UI/UX which is easy to understand and navigate to the end users. My skills and tech stack involve - JavaScript, TypeScript, React, Next, Vue, Git, CI/CD, REST APIs."
        />
        <meta
          name="og:title"
          content="Simon Gomes - Senior Frontend Engineer"
        />
        <meta
          name="og:description"
          content="I'm a Senior Frontend Engineer working in the field since 2015. My core strength is planning, architecting, and building better frontend UI/UX which is easy to understand and navigate to the end users. My skills and tech stack involve - JavaScript, TypeScript, React, Next, Vue, Git, CI/CD, REST APIs."
        />
        <meta name="theme-color" content="#ffd201" />
      </Head>

      <CookiesProvider>
        <Header />
        <SiteContent />
      </CookiesProvider>
    </Fragment>
  );
};

export default Home;
