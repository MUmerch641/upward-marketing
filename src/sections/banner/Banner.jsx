"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

const Banner = () => {
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [activeClients, setActiveClients] = useState(0);
  const [satisfiedClients, setSatisfiedClients] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null); // Reference for the banner

  const duration = 2000; // Animation duration in milliseconds

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



  // Function to handle the animation
  const animateValue = (setter, targetValue) => {
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Cap progress at 1
      const currentValue = Math.floor(progress * targetValue);

      setter(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate); // Continue animation
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the banner is visible
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animateValue(setProjectsCompleted, 250);
      animateValue(setActiveClients, 900);
      animateValue(setSatisfiedClients, 900);
    }
  }, [isVisible]);

  return (
    <div
      ref={bannerRef}
      className="relative banner-bg to-[#1A3C3C] p-8 overflow-hidden"
    >
      {/* Content Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
        {/* Left Content */}
        <div className="text-white md:w-1/3 space-y-4">
          <h1 className="text-4xl font-bold">
            Let's Build something awesome together!
          </h1>
          <button onClick={() => handleLinkClick("#contact")}
            className="px-6 py-3 cursor-pointer text-white text-sm md:text-base bg-gradient-to-r from-[#1A3C3C] to-[#2E8B8B] rounded-lg shadow-md hover:opacity-90 focus:outline-none">
            Start Project →
          </button>
        </div>

        {/* Right Stats */}
        <div className="flex w-auto space-x-4 mt-8 md:mt-0 bg-white/10 backdrop-blur-md rounded-2xl py-2">
          {/* Single Stat */}
          <div className="p-2 md:p-4 text-center border-r-2 border-white">
            <p className="text-4xl font-bold text-[#85c9c9]">
              {projectsCompleted}+
            </p>
            <p className="text-white text-sm">complete projects</p>
          </div>
          <div className="p-2 md:p-4 text-center border-r-2 border-white">
            <p className="text-4xl font-bold text-[#85c9c9]">{activeClients}+</p>
            <p className="text-white text-sm">active clients</p>
          </div>
          <div className="p-2 md:p4rounded-lg text-center">
            <p className="text-4xl font-bold text-[#85c9c9]">{satisfiedClients}+</p>
            <p className="text-white text-sm">satisfied clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;