"use client"; // Add this at the top for client-side rendering
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Button from "../../components/globalcomponents/Button";
import badge from '@/images/badge.png'; // Adjust the path as necessary
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function HeroSection() {
  const features = [
    { icon: "🌐", title: "24/7 Support" },
    { icon: "🚀", title: "Scalability" },
    { icon: "🤝", title: "Customer First" },
    { icon: "🔒", title: "Security" },
    { icon: "⚡", title: "Fast Performance" },
    { icon: "🛠", title: "Custom Solutions" },
    { icon: "📊", title: "Analytics" },
  ];

   const pathname = usePathname();
    
    const handleLinkClick = (sectionId) => {
      if (pathname !== "/") {
        window.location.href = `/${sectionId}`;
      } else {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      // setIsMenuOpen(false);
    };

  const animation = { duration: 5000, easing: (t) => t };

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: { perView: 3, spacing: 10 }, // Adjust perView as needed
    created(s) {
      s.moveToIdx(3, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 3, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 3, true, animation);
    },
  });

  return (
    <section className="py-16 mt-6 md:mt-22 overflow-hidden bg-gray-50">
      <div className="w-[95%] lg:w-[75%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <div className="mb-4 ">
            <span className="inline-block px-4 py-2 mt-2 md:mt-0 text-sm font-medium text-[#2E8B8B] bg-[#2E8B8B]/10 rounded-md">
              Better Future
            </span>
          </div>
          <h1 className="lg:text-[45px] font-bold leading-tight text-[#1A3C3C]">
            Elevating Your Business with <br />
            Innovative Software <br />
            <div className="text-5xl py-2 px-2 mt-2 flex flex-col overflow-hidden h-12">
              <span className="animate-words flex flex-col">
                <span className="text-[#F4A261] block">Experties</span>
                <span className="text-[#2E8B8B] block">Services</span>
                <span className="text-[#1A3C3C] block">Agency</span>
                <span className="text-[#F4A261] block">Developers</span>
                <span className="text-[#2E8B8B] block">Design</span>
              </span>
            </div>
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            At Upward Marketing , we specialize in delivering cutting-edge software
            solutions tailored to your business needs. Our team of experts is
            dedicated to transforming your ideas into reality.
          </p>
          <motion.div
          onClick={() => handleLinkClick("#contact")}
          className="mt-6">
            <Button text={"Start Project"} className="bg-[#F4A261] hover:bg-[#F4A261]/90 text-[#1A3C3C]" />
          </motion.div>
        </div>

        {/* Image & Feature Scroller */}
        <div className="md:w-[40%] w-3/4 flex relative flex-col items-center justify-center">
          <div className="w-full flex justify-center items-center flex-col">
            {/* Feature Scroller */}
            <div
              ref={sliderRef}
              className="keen-slider w-[12rem] h-10 text-sm flex gap-"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="keen-slider__slide flex items-center gap-2 text-[#2E8B8B] text-sm w-auto"
                >
                  <div className="flex items-center gap-2 w-[20rem]">
                    <span className="">{feature.icon}</span>
                    <span className="text-sm">{feature.title}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-[#F4A261]/20">
              <img
                src="https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Developer Illustration"
                className="w-full h-auto filter brightness-105 contrast-105"
              />
            </div>
          </div>

          {/* Yellow Badge */}
          <div className="absolute bottom-0 hidden md:block rounded-full left-[0.2] transform rotating-div">
            <Image
              className="rounded filter black-shadow"
              src={badge} // Placeholder for the actual hosted logo URL
              alt="badge Logo"
              width={150}
              height={50}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}