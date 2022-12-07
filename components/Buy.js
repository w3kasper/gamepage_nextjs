import React, { useState, useMemo } from "react";
import { Keypair, Transaction, Connection } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { InfinitySpin } from "react-loader-spinner";
import IPFSDownload from "./IpfsDownload";

//import { Metaplex } from "@metaplex-foundation/js";
//const connection = new Connection("https://api.metaplex.solana.com/");
//const mx = Metaplex.make(connection);

export default function Buy({ itemID }) {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const orderID = useMemo(() => Keypair.generate().publicKey, []); // Public key used to identify the order

  const [paid, setPaid] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state of all above

  // useMemo is a React hook that only computes the value if the dependencies change

  const order = useMemo(
    () => ({
      buyer: publicKey,
      orderID: orderID.toString(),
      itemID: itemID,
    }),
    [publicKey, orderID, itemID]
  );
  //
  console.log("I am public Key");

  // Fetch the transaction object from the server
  const processTransaction = async () => {
    setLoading(true);
    const txResponse = await fetch("./api/createTransaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const txData = await txResponse.json();

    // We create a transaction object
    console.log("I am here", txData.transaction);
    const tx = Transaction.from(Buffer.from(txData.transaction, "base64"));
    console.log("Tx data is!!!!!!", tx);

    // Attempt to send the transaction to the network
    try {
      // Send the transaction to the network
      const txHash = await sendTransaction(tx, connection);
      console.log(
        `Transaction sent: https://solscan.io/tx/${txHash}?cluster=mainnet-beta`
      );
      // Even though this could fail, we're just going to set it to true for now
      setPaid(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!publicKey) {
    return (
      <div>
        <p>You need to connect your wallet to make transactions</p>
      </div>
    );
  }

  if (loading) {
    return <InfinitySpin color="gray" />;
  }

  return (
    <div>
      {paid ? (
        <IPFSDownload
          filename="emojis.zip"
          hash="QmWWH69mTL66r3H8P4wUn24t1L5pvdTJGUTKBqT11KCHS5"
          cta="Download emojis"
        />
      ) : (
        <button
          disabled={loading}
          className="buy-button"
          onClick={processTransaction}
        >
          Buy now 🠚
        </button>
      )}
    </div>
  );
}
