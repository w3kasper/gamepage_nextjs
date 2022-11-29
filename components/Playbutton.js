import React from "react";
import useIPFS from "../hooks/useIPFS";

const Playbutton = ({ hashfull, filenamefull }) => {
  const filefull = useIPFS(hashfull, filenamefull);

  return (
    <div>
      {filefull ? (
        <a
          className="py-[6px] px-[26px] w-[80px] h-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-900 hover:via-purple-900 hover:to-pink-900 outline outline-1 rounded font-sans font-thin text-sm text-white text-center uppercase"
          href={filefull}
          download="game"
        >
          FULL
        </a>
      ) : (
        <p>Downloading file...</p>
      )}
    </div>
  );
};

export default Playbutton;
