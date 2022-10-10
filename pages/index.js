import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Images from "../components/Images";
import About from "../components/About";
import Download from "../components/Download";

// Constants

const App = () => {
  // This will fetch the users' public key (wallet address) from any wallet we support

  return (
    <div>
      <Head>
        <title>Game Page Example</title>
        <meta name="content" content="MY GAME INFO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="place-content-center">
        <Navbar />
      </div>
      <div class="w-full h-[100px]"></div>

      <div class="flex justify-center">
        <div class="bg-black border border-pink-500 rounded-lg max-w-5xl h-auto justify-items-center p-[30px]">
          <div className="grid grid-cols-3 grid-rows-9 gap-4">
            <div class="box col-start-1 col-end-5">
              <Title />
            </div>
            <div class="box col-start-1 col-end-5">
              <Images />
            </div>
            <div class="w-[735px] box col-start-1 col-end-4">
              <About />
            </div>
            <div class="w-[210px] box col-start-4 col-end-5">
              <Download />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
