import React from 'react';
import Head from 'next/head';

const SiteHead = () => {
  return (
    <Head>
      <title>Simon Gomes - Full-Stack Developer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Experienced Full-Stack Web Application Developer, specialized in JavaScript, PHP, moderate
        understand on Node for server-side scripting and API development as well as Database Management and
        architecture."
      />
      <meta name="og:title" content="Simon Gomes" />
      <meta
        name="og:description"
        content="Experienced Full-Stack Web Application Developer, specialized in JavaScript, PHP, moderate
      understand on Node for server-side scripting and API development as well as Database Management and
      architecture."
      />

      <link rel="shortcut icon" href="static/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="static/favicon.ico" type="image/x-icon" />
      <meta name="theme-color" content="#ffd201" />
    </Head>
  );
};

export default SiteHead;
