import React, { useEffect, useState } from "react";

import Demobutton from "./Demobutton";
import Playbutton from "./Playbutton";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { Metaplex } from "@metaplex-foundation/js";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";

const connection = new Connection("https://api.metaplex.solana.com/");
const mx = Metaplex.make(connection);

//check if you have NFT then show play button

const Download = () => {
  const { publicKey } = useWallet();

  ////// CHECK THE NFT OF CONNECTED WALLET ///////
  const [address, setAddress] = useState(""); //address of public key to check nfts with

  //if public key exists setaddress to it on refresh/reload of publicKey when its updated
  useEffect(() => {
    publicKey ? setAddress(publicKey.toBase58()) : "NULL";
  }, [publicKey]);

  //console.log(address.toString()); //this is the address

  const [nftList, setNftList] = useState(null); //used to look at list
  const [holder, setHolder] = useState(null); //used to look at list

  ///ON LOAD NFT LIST
  // declare the data fetching function
  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const list = await mx
          .nfts()
          .findAllByOwner({ owner: new PublicKey(address) });
        setNftList(list);
        //console.log(list);

        //list through short
        const listItems = list.map((nftlist) => {
          //console.log(nftlist.name);
          if (
            nftlist.updateAuthorityAddress.toBase58() ==
            "Fz1NzfYcHEGBJCRhkTDJRjxMgbMrZsRSTas1iVnFnK7w"
          ) {
            //console.log(nftlist.updateAuthorityAddress.toBase58());
            //console.log("set a useeffect to load ");
            setHolder("HiHolder"); //is holding
            //console.log(holder);
          }
        });

        //.updateAuthorityAddress.toBase58()
        //updateAuthorityAddress is the one we want
      } catch (e) {
        console.log("download.js try catch");
        console.log(e);
      }
    };

    // call the function
    fetchNFTs();
  }, [address]);

  //1.check wallet is connected 2.connected non holder 3.connected holder
  //check and see if has NFT that is the same
  //set choice variable if

  const renderNotConnectedContainer = () => (
    <>
      <div className="grid grid-cols-2 grid-rows-1 gap-0 ">
        <div className="box">
          <a
            className="py-[6px] px-[26px] w-[80px] h-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 outline outline-1 rounded font-sans font-thin text-sm text-white text-center uppercase opacity-30"
            disabled
          >
            FULL
          </a>
        </div>
        <div className="box">
          <Demobutton
            demohash="QmapHivzpzxvKfeu93JcmH9md73gXsJuVsr4o11zUPsM78"
            demofile="demo"
          />
        </div>
      </div>

      <div className="text-white text-centerfont-sans font-thin text-xs text-center pt-[10px]">
        -downloadable .zip file-
      </div>
    </>
  );

  const renderConnectedContainer = () => (
    <>
      <div className="grid grid-cols-2 grid-rows-1 gap-0 ">
        {holder ? (
          <div className="box">
            <Playbutton
              filenamefull="game"
              hashfull="QmYbiCiYKoM1jVHiKLKteX3NLCJqvi6YVDoUg48VCC57LF"
            />
          </div>
        ) : (
          <div className="box">
            <a
              className="py-[6px] px-[26px] w-[80px] h-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 outline outline-1 rounded font-sans font-thin text-sm text-white text-center uppercase opacity-30"
              disabled
            >
              PLAY
            </a>
          </div>
        )}

        <div className="box">
          <Demobutton
            demohash="QmapHivzpzxvKfeu93JcmH9md73gXsJuVsr4o11zUPsM78"
            demofile="demo"
          />
        </div>
      </div>

      <div className="text-white text-centerfont-sans font-thin text-xs text-center pt-[10px]">
        -downloadable .zip file-
      </div>

      {/* 
      <button className="text-white" onClick={fetchNFTs}>
        Fetch
      </button>
      */}
    </>
  );

  return (
    <div className="bg-neutral-900 border border-purple-500 rounded-lg p-3 pt-4">
      <main>
        {publicKey ? renderConnectedContainer() : renderNotConnectedContainer()}
      </main>
    </div>
  );
};

export default Download;
