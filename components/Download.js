import React, { useEffect, useState } from "react";
import Product from "./Product";
import IPFSDownload from "./IpfsDownload";
import IPFSUnconnected from "./IPFSUnconnected";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Download = () => {
  const { publicKey } = useWallet();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (publicKey) {
      fetch(`/api/fetchProducts`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          console.log("Products", data);
        });
    }
  }, [publicKey]);

  const renderNotConnectedContainer = () => (
    <>
      <div className="px-[6px] pb-3 space-x-3">
        <IPFSUnconnected
          demohash="QmdabcZ2xS72ywHnxuVGnAcR4nzyZnXfNFumpZzSK17GT3"
          demofile="demo"
        />
      </div>
      <div className="text-white text-centerfont-sans font-thin text-xs text-center">
        -downloadable .zip file-
      </div>
      <div>
        <p className="text-white">NOT CONNECTED SELECT WALLET</p>
      </div>
    </>
  );

  const renderItemBuyContainer = () => (
    <>
      <div className="px-[6px] pb-3 space-x-3">
        <IPFSDownload
          demohash="QmdabcZ2xS72ywHnxuVGnAcR4nzyZnXfNFumpZzSK17GT3"
          demofile="demo"
          filenamefull="game"
          hashfull="Qmf1k8hEFFfFFEehXLfJoCBLCs2WhT3CtYS2D94z5XfiDV"
        />
      </div>
      <div className="text-white text-centerfont-sans font-thin text-xs text-center">
        -downloadable .zip file-
      </div>
      <div className="text-white">
        <p className="text-white">CONNECTED</p>
      </div>
    </>
  );

  return (
    <div className="bg-neutral-900 border border-purple-500 rounded-lg p-3 pt-4">
      <main>
        {publicKey ? renderItemBuyContainer() : renderNotConnectedContainer()}
      </main>
    </div>
  );
};

export default Download;
