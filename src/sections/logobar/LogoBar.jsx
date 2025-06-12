"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const LogoBar = () => {
  const logos = [
    { image: "images/Group (1).png" },
    { image: "images/Group (2).png" },
    { image: "images/Group 284.png" },
    { image: "images/Group 291.png" },
    { image: "images/Group 502.png" },
    { image: "images/Group 520.png" },
    { image: "images/Group 14002.png" },
    { image: "images/Group 14006.png" },
    { image: "images/Group 14006 (1).png" },
    { image: "images/Group 14007.png" },
    { image: "images/Group 14008.png" },
    { image: "images/Group 502.png" },
    { image: "images/Group.png" },
    { image: "images/Group 14006.png" },
  ];

  const animation = { duration: 5000, easing: (t) => t };

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    breakpoints: {
      "(max-width: 640px)": {
        slides: { perView: 3, spacing: 8 },
      },
      "(min-width: 641px) and (max-width: 1024px)": {
        slides: { perView: 5, spacing: 10 },
      },
      "(min-width: 1025px)": {
        slides: { perView: 10, spacing: 12 },
      },
    },
    slides: { perView: 10, spacing: 12 },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-4 sm:py-6 overflow-hidden h-24 sm:h-32 flex items-center justify-center">
      <div ref={sliderRef} className="keen-slider">
        {logos.concat(logos).map((logo, index) => (
          <div
            key={index}
            className="keen-slider__slide flex justify-center items-center"
          >
            <img
              src={logo.image}
              alt=""
              className="w-20 md:w-24 lg:w-24 xl:w-24 px-3 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBar;
