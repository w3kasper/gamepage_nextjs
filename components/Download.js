import React from "react";
import Image from "next/image";
import solLogo from "../public/images/sol-logo.svg";

const Download = () => {
  return (
    <div className="bg-zinc-800 border border-blue-300 rounded-lg p-3 pt-4">
      <div className="px-[6px] pb-3 space-x-3">
        <button className="w-[80px] h-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-900 hover:via-purple-900 hover:to-pink-900 outline outline-1 rounded font-sans font-thin text-sm text-white text-center uppercase">
          PLAY
        </button>
        <button className="w-[80px] h-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-900 hover:via-purple-900 hover:to-pink-900 outline outline-1 rounded font-sans font-thin text-sm text-white text-center uppercase">
          DEMO
        </button>
      </div>
      <div className="flex items-center space-x-3 rounded-full bg-black p-2 pl-[15px]">
        {" "}
        <Image src={solLogo} className="" height={24} width={24} alt="/" />{" "}
        <text className="font-sans font-normal text-white text-1xl text-center">
          0.75
        </text>
        <button className="w-[80px] h-[24px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-900 hover:via-purple-900 hover:to-pink-900 outline outline-1 rounded-full font-sans font-thin text-sm text-white text-center">
          BUY
        </button>
      </div>
    </div>
  );
};

export default Download;
