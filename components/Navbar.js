import React, { useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// Constants

const Navbar = () => {
  // This will fetch the users' public key (wallet address) from any wallet we support
  const { publicKey } = useWallet();
  const [publicKeyString, setPublicKeyString] = useState([]); //set useState variables

  //set useeffect to "mount" the variable on refresh/reload of item
  useEffect(() => {
    publicKey
      ? setPublicKeyString(publicKey.toBase58())
      : "publicKey is NOT CONNECTED/NULL";
  }, [publicKey]);

  const renderConnectedContainer = () => (
    <div>
      <p>"Connected"</p>
      <h1>{publicKeyString}</h1>
    </div>
  );

  const renderNotConnectedContainer = () => (
    <div>
      <p>not connext</p>

      <div>
        <WalletMultiButton />
      </div>
    </div>
  );

  return (
    <div className="App">
      <main>
        {/* We only render the connect button if public key doesn't exist */}
        {publicKey ? renderConnectedContainer() : renderNotConnectedContainer()}
      </main>
    </div>
  );
};

export default Navbar;
