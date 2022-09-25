import React from "react";
import Image from "next/image";
import imageWheel from "../public/images/1.png";
const Images = () => {
  return (
    <div className="pt-[6px]">
      <Image src={imageWheel} className="" alt="/" />
    </div>
  );
};

export default Images;
