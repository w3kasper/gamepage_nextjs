import React, { useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import Image from "next/image";
import profileIconRed from "../public/images/profileiconRED.svg";

// Constants

const Navbar = () => {
  // This will fetch the users' public key (wallet address) from any wallet we support
  const { publicKey } = useWallet();
  const [publicKeyString, setPublicKeyString] = useState([]); //set useState variables

  //set useeffect to "mount" the variable on refresh/reload of item when its updated
  useEffect(() => {
    publicKey ? setPublicKeyString(publicKey.toBase58()) : "NOT CONNECTED/NULL";
  }, [publicKey]);

  const renderConnectedContainer = () => (
    <div className="absolute top-0 right-[10px] py-[9px]">
      <p className="cta-user-wallet">
        {publicKeyString.toString().substring(0, 9) + "..."}
      </p>
    </div>
  );

  const renderNotConnectedContainer = () => (
    <div className="flex top-0 right-[10px] py-[17px]">
      <Image src={profileIconRed} className="" alt="/" />
      <WalletMultiButton className="w-[145px] h-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-black outline outline-1 font-sans font-thin text-sm text-white uppercase" />
    </div>
  );

  return (
    <div>
      <div className="flex justify-end pr-4 w-full h-[66px] shadow-xl z-[100] bg-zinc-800 border-b-2 border-white">
        {/* We only render the connect button if public key doesn't exist */}
        {publicKey ? renderConnectedContainer() : renderNotConnectedContainer()}
      </div>
    </div>
  );
};

export default Navbar;
