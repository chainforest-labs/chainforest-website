import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

import { Nav } from "../components/Nav";

const GlobalLayout: NextPage = ({ children }) => {
  return (
    <>
      <Head>
        <title>Chainforest⛓️🌴</title>
        <meta name="description" content="Someday we will have a description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {children}
    </>
  );
};

export default GlobalLayout;
