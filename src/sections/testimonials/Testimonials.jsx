"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Heading from "../../components/globalcomponents/Heading";

const testimonials = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Upward transformed our digital strategy with innovative solutions. Their team's dedication exceeded our goals—highly recommend their expertise!",
    author: "Aisha Khan",
    role: "Marketing Manager",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Working with Upward was a game-changer for our project. Their professionalism and creative approach truly stood out—excellent service!",
    author: "Rahul Sharma",
    role: "Product Designer",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Upward delivered a seamless software solution with unmatched support. Their technical skills are top-notch—definitely a trusted partner!",
    author: "Priya Patel",
    role: "Software Engineer",
  },
];

export default function TestimonialsSection() {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="bg-gray-100 py-28 px-4 flex items-center justify-center md:pb-28">
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #2E8B8B; /* Icon color */
          width: 40px;
          height: 40px;
          border-radius: 50%; /* Make buttons circular */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px; /* Adjust icon size */
          font-weight: bold;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: linear-gradient(to right, #F4A261, #2E8B8B); /* Gradient color on hover */
        }
      `}</style>
      <div className="w-full lg:w-4/5 h-full mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Heading text={"Testimonials"} style={{ color: "#F4A261" }} />
          <h2
            data-aos="zoom-in"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A3C3C]"
          >
            Check what’s clients say about
            <br />
            Upward Marketing
          </h2>
          <div
            data-aos="fade-down"
            className="text-6xl text-[#2E8B8B] font-serif flex justify-center items-center mt-4"
          >
            <img
              data-aos="zoom-in-down"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxfkHXcpa-Ka7q3pRKlFegXoywXACcfVZD5Q&s"
              alt="quote"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
        </div>

        {/* Swiper Section */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            className="relative z-10 max-w-xl lg:max-w-2xl mx-auto"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col items-center text-center px-6 mb-10">
                  <p
                    data-aos="zoom-out"
                    className="text-lg md:text-xl italic text-[#1A3C3C] mb-8"
                  >
                    {testimonial.text}
                  </p>
                  <div className="flex gap-4 items-center">
                    <img
                      src={testimonial.img}
                      alt={testimonial.author}
                      className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full border-2 border-white shadow-lg"
                    />
                    <div>
                      <h4 className="font-semibold text-start text-lg text-[#2E8B8B]">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-500 text-sm md:text-base">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Background Element */}
    
      </div>
    </section>
  );
}