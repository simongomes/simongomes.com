import React from "react";
import Head from "next/head";

const SiteHead = () => {
    return (
        <Head>
            <title>Simon Gomes</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta name="description" content="Full-Stack Developer" />
            <meta name="og:title" content="Simon Gomes" />
        </Head>
    );
};

export default SiteHead;
