import React from "react";
import Image from "next/image";
import solLogo from "../public/images/sol-logo.svg";

const Download = () => {
  return (
    <div className="bg-zinc-900 border border-purple-500 p-2 rounded-md">
      <div className="font-sans font-normal text-white text-5xl text-center p-4">
        <Image src={solLogo} className="" height={40} width={40} alt="/" /> 0.75
      </div>

      <div className="p-2 space-x-2">
        <button className="w-[80px] h-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-black outline outline-1 rounded font-sans font-thin text-sm text-white text-center uppercase">
          BUY NOW
        </button>
        <button className="w-[80px] h-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-white outline outline-1 rounded font-sans font-thin text-sm text-white text-center uppercase">
          DEMO
        </button>
      </div>
    </div>
  );
};

export default Download;
