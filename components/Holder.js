import React from "react";
import Image from "next/image";

import holderNFT from "../public/images/holder.gif";
import { FaDiscord } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { GrTwitter } from "react-icons/gr";

const Download = () => {
  return (
    <div className="bg-neutral-900 border border-purple-500 rounded-lg p-4 space-y-0">
      <div>
        <Image src={holderNFT} className="" alt="/" />
      </div>
      <p className="text-white font-sans font-thin text-xs text-center">
        -nft holder group-
      </p>
      <h1 className="text-white font-sans font-semibold text-lg text-center">
        TRIPPIN APE TRIBE
      </h1>

      <div className="justify-items-center px-10 pt-1">
        <div class="grid justify-items-center grid-cols-4 grid-rows-1 rounded-full bg-neutral-800 h-[20px]">
          <div class="box pt-[2px]">
            <TbWorld className="text-white" />
          </div>
          <div class="box pt-[2px]">
            <FaDiscord className="text-white" />
          </div>
          <div class="box pt-[2px]">
            <GrTwitter className="text-white" />
          </div>
          <div class="box pt-[2px]">
            <GrTwitter className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
