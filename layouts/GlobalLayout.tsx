import React from "react";
import Head from "next/head";
import { Nav } from "../components/Nav";

import type { NextPage } from "next";
import { PageContainer } from "../components/blocks/PageContainer";

const GlobalLayout: NextPage = ({ children }) => {
  return (
    <>
      <Head>
        <title>Chainforest⛓️🌴</title>
        <meta name="description" content="Someday we will have a description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default GlobalLayout;
