import React from "react";
import Image from "next/image";
import imageWheel from "../public/images/1.png";
import { SliderData } from "./Sliderdata";

const ImageSlider = () => {
  //embla carousel
  return (
    <>
      {SliderData.map((slide, index) => {
        return <img src={slide.image} alt="travel image" />;
      })}
    </>
  );
};

export default ImageSlider;
