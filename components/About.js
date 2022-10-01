import React from "react";
import Image from "next/image";
import aboutTitle1 from "../public/images/about/title.png";
import aboutTitle2 from "../public/images/about/title2.png";
import aboutTitle3 from "../public/images/about/title3.png";

const About = () => {
  return (
    <div className="text-white p-4">
      <h1>
        <Image src={aboutTitle1} className="" alt="/" />
      </h1>
      <h1>
        The worlds first Kiss 'Em Up! Take the classic beat 'em up formula, add
        some bullet-hell dodging and mix it up with awkward kissing. You got
        yourself a dang good game! Wishlist it! You will not regret! Minigames,
        fighting, characters, love, war. It's all here in Cops Kissing Each
        Other. - Crazy awesome levels - Fall in love - Giant bosses - Permadeath
        gameplay - Minigames about, you know, kissing - Sweet kissing movez
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
  );
};

export default About;
