import React, { useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

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
    <div className="absolute top-0 right-[10px] py-[5px]">
      <p className="cta-user-wallet">
        {publicKeyString.toString().substring(0, 9) + "..."}
      </p>
    </div>
  );

  const renderNotConnectedContainer = () => (
    <div className="absolute top-0 right-[10px] py-[5px]">
      <WalletMultiButton className="cta-button-select" />
    </div>
  );

  return (
    <div>
      <main>
        <div className="h-[40px] w-screen bg-black">
          {/* We only render the connect button if public key doesn't exist */}
          {publicKey
            ? renderConnectedContainer()
            : renderNotConnectedContainer()}
        </div>
      </main>
    </div>
  );
};

export default Navbar;
