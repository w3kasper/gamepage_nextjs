import React, { useEffect, useState } from "react";

import Demobutton from "./Demobutton";
import Playbutton from "./Playbutton";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { Connection, PublicKey } from "@solana/web3.js";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";

//check if you have NFT then show play button

const Download = () => {
  const publicKey = useWallet();
  const [products, setProducts] = useState([]);

  //1.check wallet is connected 2.connected non holder 3.connected holder
  //check and see if has NFT that is the same
  //set choice variable if

  const renderHolderContainer = () => (
    <>
      <div class="grid grid-cols-2 grid-rows-1 gap-0 ">
        <div class="box">
          <Playbutton
            filenamefull="game"
            hashfull="Qmf1k8hEFFfFFEehXLfJoCBLCs2WhT3CtYS2D94z5XfiDV"
          />
        </div>
        <div class="box">
          <Demobutton
            demofile="demo"
            demohash="QmdabcZ2xS72ywHnxuVGnAcR4nzyZnXfNFumpZzSK17GT3"
          />
        </div>
      </div>
      <div className="text-white text-centerfont-sans font-thin text-xs text-center pt-[10px]">
        -downloadable .zip file-
      </div>
      <div className="text-white text-centerfont-sans font-thin text-xs text-center pt-[10px]">
        Status: CONNECTED + HOLDER
      </div>
    </>
  );

  const renderNotConnectedContainer = () => (
    <>
      <div class="grid grid-cols-2 grid-rows-1 gap-0 ">
        <div class="box">
          <a
            className="py-[6px] px-[26px] w-[80px] h-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 outline outline-1 rounded font-sans font-thin text-sm text-white text-center uppercase opacity-30"
            disabled
          >
            PLAY
          </a>
        </div>
        <div class="box">
          <Demobutton
            demohash="QmdabcZ2xS72ywHnxuVGnAcR4nzyZnXfNFumpZzSK17GT3"
            demofile="demo"
          />
        </div>
      </div>

      <div className="text-white text-centerfont-sans font-thin text-xs text-center pt-[10px]">
        -downloadable .zip file-
      </div>
      <div className="text-white text-centerfont-sans font-thin text-xs text-center pt-[10px]">
        Status: NOT CONNECTED
      </div>
    </>
  );

  const renderNonholderContainer = () => (
    <>
      <div class="grid grid-cols-2 grid-rows-1 gap-0 ">
        <div class="box">
          <a
            className="py-[6px] px-[26px] w-[80px] h-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 outline outline-1 rounded font-sans font-thin text-sm text-white text-center uppercase opacity-30"
            disabled
          >
            PLAY
          </a>
        </div>
        <div class="box">
          <Demobutton
            demohash="QmdabcZ2xS72ywHnxuVGnAcR4nzyZnXfNFumpZzSK17GT3"
            demofile="demo"
          />
        </div>
      </div>

      <div className="text-white text-centerfont-sans font-thin text-xs text-center pt-[10px]">
        -downloadable .zip file-
      </div>
      <div className="text-white text-centerfont-sans font-thin text-xs text-center pt-[10px]">
        Status: CONNECTED + NONHOLDER
      </div>
    </>
  );

  return (
    <div className="bg-neutral-900 border border-purple-500 rounded-lg p-3 pt-4">
      <main>
        {publicKey ? renderNonholderContainer() : renderNotConnectedContainer()}
      </main>
    </div>
  );
};

export default Download;
