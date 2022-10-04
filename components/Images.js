import React, { useState } from "react";
import Image from "next/image";
import imageOne from "../public/images/1.png";
import imageTwo from "../public/images/2.png";
import imageThree from "../public/images/3.png";
//https://youtu.be/ho93e0IhdTA?t=606
const featuredImages = [imageOne, imageTwo, imageThree];
let count = 0;

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
  };

  const handleOnPrevClick = () => {
    const imagesLength = featuredImages.length;

    count = (currentIndex + imagesLength - 1) % imagesLength;
    setCurrentIndex(count);
  };

  return (
    <div className="select-none">
      <Image
        src={featuredImages[currentIndex]}
        className="aspect=w-16 aspect-h-9"
        alt="/"
      />
      <div className="absolute w-[990px] top-1/2 transform -translate-y-1/2 flex justify-between items-center">
        <button onClick={handleOnPrevClick}>Previous</button>
        <button onClick={handleOnNextClick}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
