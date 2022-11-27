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

  ///OLD PUBLIC
  //const [publicKeyString, setPublicKeyString] = useState([]); //set useState variables public key from useWallet

  //set useeffect to "mount" the variable on refresh/reload of item when its updated
  //useEffect(() => {
  //  publicKey ? setPublicKeyString(publicKey.toBase58()) : "NOT CONNECTED/NULL";
  //}, [publicKey]);

  //console.log(publicKeyString.toString());//this is the public key
  ///

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
          //console.log(nftlist.updateAuthorityAddress.toBase58());
          console.log(nftlist.name);
          if (nftlist.name == "Vaxxed Doggo #1169") {
            console.log("set a useeffect to load ");
            setHolder("HiHolder"); //is holding
            console.log(holder);
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
    // make sure to catch any error
    //.catch(console.error);
  }, [address]);

  ///

  const fetchNFTs = async () => {
    try {
      const list = await mx
        .nfts()
        .findAllByOwner({ owner: new PublicKey(address) });
      setNftList(list);
      //console.log(list);

      //list through
      // const listItems = list.map((nftlist) => {
      //   if (nftlist.name == "") {
      //     console.log("LostBoy Club");
      //     console.log(nftlist.updateAuthorityAddress.toBase58());
      //     //if equal to the token update show the correct
      //   } else {
      //     console.log(nftlist.updateAuthorityAddress.toBase58());
      //   }
      // });

      //list through short
      const listItems = list.map((nftlist) => {
        //console.log(nftlist.updateAuthorityAddress.toBase58());
        console.log(nftlist.name);
      });

      //.updateAuthorityAddress.toBase58()
      //updateAuthorityAddress is the one we want
    } catch (e) {
      console.error(e);
    }
  };
  ////////////////

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
            PLAY
          </a>
        </div>
        <div className="box">
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

  /*
  const renderHolderContainer = () => (
    <>
      <div classNames="grid grid-cols-2 grid-rows-1 gap-0 ">
        <div className="box">
          <Playbutton
            filenamefull="game"
            hashfull="Qmf1k8hEFFfFFEehXLfJoCBLCs2WhT3CtYS2D94z5XfiDV"
          />
        </div>
        <div className="box">
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
  */

  const renderConnectedContainer = () => (
    <>
      <div className="grid grid-cols-2 grid-rows-1 gap-0 ">
        {holder ? (
          <div className="box">
            <Playbutton
              filenamefull="game"
              hashfull="Qmf1k8hEFFfFFEehXLfJoCBLCs2WhT3CtYS2D94z5XfiDV"
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
        {/*
        <div className="box">
          <a
            className="py-[6px] px-[26px] w-[80px] h-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 outline outline-1 rounded font-sans font-thin text-sm text-white text-center uppercase opacity-30"
            disabled
          >
            PLAY
          </a>
        </div>
        */}
        <div className="box">
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
        Status: CONNECTED + {holder ? "HOLDER" : "NON HOLDER"}
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
