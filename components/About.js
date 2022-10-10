import React from "react";
import Image from "next/image";
import aboutTitle1 from "../public/images/about/title.png";
import aboutTitle2 from "../public/images/about/title2.png";
import aboutTitle3 from "../public/images/about/title3.png";

import YoutubeEmbed from "./YoutubeEmbed";
import solLogo from "../public/images/sol-logo.svg";

const About = () => {
  return (
    <>
      <div className="bg-neutral-900 border border-purple-500 rounded-lg p-[15px] font-sans font-medium text-xl text-white uppercase">
        <div>
          <span>Buy Cops Kissing Each Other</span>{" "}
          <span className="pl-[350px]">OO</span>
        </div>
      </div>
      <div className="pl-[550px]">
        <div className="flex space-x-3 border-purple-500 bg-neutral-900 -top-3">
          {" "}
          <Image
            src={solLogo}
            className=""
            height={26}
            width={26}
            alt="/"
          />{" "}
          <text className="font-sans font-normal text-white text-1xl text-center">
            0.75
          </text>
          <button className="w-[80px] h-[24px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-900 hover:via-purple-900 hover:to-pink-900 outline outline-1 rounded-full font-sans font-thin text-sm text-white text-center">
            BUY
          </button>
        </div>
      </div>

      <div className="text-white p-4">
        <h1>
          <Image src={aboutTitle1} className="" alt="/" />
        </h1>
        <h1>
          The worlds first Kiss 'Em Up! Take the classic beat 'em up formula,
          add some bullet-hell dodging and mix it up with awkward kissing. You
          got yourself a dang good game! Wishlist it! You will not regret!
          Minigames, fighting, characters, love, war. It's all here in Cops
          Kissing Each Other. - Crazy awesome levels - Fall in love - Giant
          bosses - Permadeath gameplay - Minigames about, you know, kissing -
          Sweet kissing movez
        </h1>
        <h1>
          <Image src={aboutTitle2} className="" alt="/" />
        </h1>
        <h1>GIF</h1>
        <h1>
          <Image src={aboutTitle3} className="" alt="/" />
        </h1>
        <h1>GIF</h1>
      </div>
    </>
  );
};

export default About;
