import React, { useEffect, useState } from "react";
import Product from "./Product";
import IPFSDownload from "./IpfsDownload";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Download = () => {
  const { publicKey } = useWallet();
  const [products, setProducts] = useState([]);

  const renderNotConnectedContainer = () => (
    <div>
      <p className="text-white">NOT CONNECTED SELECT WALLET</p>
    </div>
  );

  const renderItemBuyContainer = () => (
    <div className="text-white">
      <p className="text-white">CONNECTED</p>

      <IPFSDownload
        filename="games.zip"
        hash="QmdabcZ2xS72ywHnxuVGnAcR4nzyZnXfNFumpZzSK17GT3"
        cta="Download games"
      />
    </div>
  );

  return (
    <div className="bg-neutral-900 border border-purple-500 rounded-lg p-3 pt-4">
      <div className="px-[6px] pb-3 space-x-3">
        <button
          disabled
          className="w-[80px] h-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-900 hover:via-purple-900 hover:to-pink-900 outline outline-1 rounded font-sans font-thin text-sm text-white text-center uppercase disabled:opacity-30 disabled:hover:from-indigo-500 disabled:hover:via-purple-500 disabled:hover:to-pink-500"
        >
          PLAY
        </button>
        <button className="w-[80px] h-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-900 hover:via-purple-900 hover:to-pink-900 outline outline-1 rounded font-sans font-thin text-sm text-white text-center uppercase">
          DEMO
        </button>
      </div>
      <div className="text-white text-centerfont-sans font-thin text-xs text-center">
        -downloadable .zip file-
      </div>
      <main>
        {publicKey ? renderItemBuyContainer() : renderNotConnectedContainer()}
      </main>
    </div>
  );
};

export default Download;
