import React from "react";
import Image from "next/image";
import solLogo from "../public/images/sol-logo.svg";
import windowsLogo from "../public/images/windowslogo.svg";

const Buybar = () => {
  return (
    <div className="grid overflow-hidden grid-cols-8 grid-rows-1 gap-0 w-[735px] bg-neutral-900 border border-purple-500 rounded-lg p-[3px] pt-[8px] pr-[8px] text-white uppercase">
      <div className="box col-start-1 col-end-6">
        <div className="pt-[3px] pl-[12px] font-sans font-light text-2xl">
          Cops Kissing Each Other
        </div>
      </div>
      <div className="box col-start-6 col-end-7 pb-[5px] pl-10">
        <Image
          src={windowsLogo}
          className="pb-1"
          height={35}
          width={35}
          alt="/"
        />{" "}
      </div>
      <div className="box col-start-7 col-end-9">
        <div className="flex items-center space-x-3 rounded-full bg-neutral-800 p-2 pl-[15px]">
          {" "}
          <Image
            src={solLogo}
            className=""
            height={24}
            width={24}
            alt="/"
          />{" "}
          <text className="font-sans font-normal text-white text-1xl text-center">
            NFT
          </text>
          <button className="w-[80px] h-[24px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-900 hover:via-purple-900 hover:to-pink-900 outline outline-1 rounded-full font-sans font-thin text-sm text-white text-center">
            BUY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buybar;
