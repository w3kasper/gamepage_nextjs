import React from "react";
import Image from "next/image";
import solLogo from "../public/images/sol-logo.svg";

const Download = () => {
  return (
    <div className="bg-neutral-900 border border-purple-500 rounded-lg p-3 pt-4">
      <div className="px-[6px] pb-3 space-x-3">
        <button className="w-[80px] h-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-900 hover:via-purple-900 hover:to-pink-900 outline outline-1 rounded font-sans font-thin text-sm text-white text-center uppercase">
          PLAY
        </button>
        <button className="w-[80px] h-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-900 hover:via-purple-900 hover:to-pink-900 outline outline-1 rounded font-sans font-thin text-sm text-white text-center uppercase">
          DEMO
        </button>
      </div>
      <div className="text-white text-centerfont-sans font-thin text-xs text-center">
        -downloadable .zip file-
      </div>
    </div>
  );
};

export default Download;
