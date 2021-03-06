import type { NextPage } from "next";
import Head from "next/head";
import { Canvas } from "../components/Canvas";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Canvas />
    </div>
  );
};

export default Home;
