import React from "react";
import Image from "next/image";
import titleimage from "../public/images/title.png";

const Title = () => {
  return (
    <div>
      <Image src={titleimage} className="" alt="/" />
    </div>
  );
};

export default Title;
