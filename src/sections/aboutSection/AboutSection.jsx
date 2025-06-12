"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "@/components/globalcomponents/Heading";
import Button from "@/components/globalcomponents/Button";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <section className=" md:py-16 lg:h-screen overflow-hidden bg-gray-100 grid place-items-center py-11">
        <div className="container  lg:w-[80%] h-auto md:w-full lg:h-full mx-auto flex  overflow-hidden flex-col-reverse md:flex-row-reverse items-center justify-between gap-4">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <div data-aos="fade-up" className="">
              <Heading text={"About Upward Marketing "} />
            </div>
            <h1
              data-aos="fade-up"
              className=" lg:text-[40px] font-bold leading-tight text-black"
            >
              Empowering Healthcare & Businesses Through IT
              <div className="py-1">
                <span className="text-blue-900 block">Solutions</span>
              </div>
            </h1>
            <p
              data-aos="fade-up"
              className="mt-4 text-gray-600 text-sm md:text-base "
            >
              At Upward Marketing , we’re your one-stop destination for all your
              digital needs. From software development and design to SEO,
              marketing, and beyond, we provide comprehensive solutions to
              propel your business forward. With our expertise and dedication,
              we help you achieve your goals and stand out in today’s
              competitive market
            </p>
            <div data-aos="fade-up" className="mt-6">
              <Button text={"Learn More"} />
            </div>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 flex justify-center mb-10 relative rounded">
            <div
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              className="lg:w-[450px]  lg:h-[450px] w-[300px] h-[300px]  bg-red-700 rotating-div flex justify-center items-center bg-gradient-to-r from-[#F4A261] to-[#2E8B8B]"
            ></div>
        <img
  className="absolute object-cover object-bottom-left top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded"
  src="https://plus.unsplash.com/premium_photo-1661679012183-1a09fb88942f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt=""
  style={{
    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
    width: "50%",
    height: "50%",
    objectPosition: "right bottom",
  }}
/>

             
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
