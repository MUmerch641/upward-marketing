"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProjectCard from "./ProjectCard";
import PortfolioCard from "./PortfolioCard";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Heading from "../../components/globalcomponents/Heading";
import projects from "./data/Data";
import { MoveLeft, MoveRight, X, Play } from "lucide-react";

const ProjectsSection = () => {
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Portfolio data
  const logoImages = [
    "WhatsApp Image 2025-06-30 at 11.59.05 AM.jpeg",
    "WhatsApp Image 2025-06-30 at 11.59.06 AM.jpeg",
    "WhatsApp Image 2025-06-30 at 11.59.08 AM (1).jpeg",
    "WhatsApp Image 2025-06-30 at 11.59.08 AM (2).jpeg",
    "WhatsApp Image 2025-06-30 at 11.59.08 AM.jpeg",
    "WhatsApp Image 2025-06-30 at 11.59.09 AM (1).jpeg",
    "WhatsApp Image 2025-06-30 at 11.59.09 AM.jpeg",
    "WhatsApp Image 2025-06-30 at 11.59.10 AM (1).jpeg",
    "WhatsApp Image 2025-06-30 at 11.59.10 AM.jpeg",
    "WhatsApp Image 2025-06-30 at 11.59.11 AM (1).jpeg",
    "WhatsApp Image 2025-06-30 at 11.59.11 AM.jpeg"
  ];

  const postImages = [
    "WhatsApp Image 2025-06-29 at 10.02.06 PM.jpeg",
    "WhatsApp Image 2025-06-29 at 10.02.09 PM.jpeg",
    "WhatsApp Image 2025-06-29 at 10.02.10 PM.jpeg",
    "WhatsApp Image 2025-06-29 at 10.02.11 PM.jpeg",
    "WhatsApp Image 2025-06-29 at 10.02.12 PM.jpeg",
    "WhatsApp Image 2025-06-29 at 10.02.20 PM.jpeg",
    "WhatsApp Image 2025-06-29 at 10.02.22 PM (1).jpeg",
    "WhatsApp Image 2025-06-29 at 10.02.22 PM.jpeg",
    "WhatsApp Image 2025-06-29 at 10.02.23 PM.jpeg",
    "WhatsApp Image 2025-06-29 at 10.02.24 PM.jpeg",
    "WhatsApp Image 2025-06-29 at 10.02.25 PM.jpeg",
    "WhatsApp Image 2025-06-29 at 10.02.26 PM.jpeg",
    "WhatsApp Image 2025-06-29 at 10.02.27 PM (1).jpeg",
    "WhatsApp Image 2025-06-29 at 10.02.27 PM (2).jpeg",
    "WhatsApp Image 2025-06-29 at 10.02.27 PM.jpeg",
    "WhatsApp Image 2025-06-29 at 10.02.28 PM.jpeg"
  ];

  const videoFiles = [
    "WhatsApp Video 2025-06-29 at 9.50.53 PM.mp4",
    "WhatsApp Video 2025-06-29 at 9.52.55 PM (1).mp4",
    "WhatsApp Video 2025-06-29 at 9.52.55 PM.mp4",
    "WhatsApp Video 2025-06-29 at 9.52.56 PM.mp4",
    "WhatsApp Video 2025-06-29 at 9.52.57 PM.mp4",
    "WhatsApp Video 2025-06-29 at 9.55.40 PM (1).mp4",
    "WhatsApp Video 2025-06-29 at 9.55.40 PM.mp4"
  ];

  const tabs = [
    { id: "projects", label: "Projects", count: projects.length },
    { id: "logos", label: "Logos", count: logoImages.length },
    { id: "posts", label: "Posts", count: postImages.length },
    { id: "videos", label: "Videos", count: videoFiles.length }
  ];

  // Function to navigate Swiper manually
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  // Function to handle item click and show modal
  const handleItemClick = (item, type) => {
    setSelectedItem({ ...item, type });
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Handle keyboard events for modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Render portfolio cards based on active tab
  const renderPortfolioCards = () => {
    switch (activeTab) {
      case "projects":
        return projects.map((project, index) => (
          <SwiperSlide className="h-full pb-6" key={index}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ));
      case "logos":
        return logoImages.map((logo, index) => (
          <SwiperSlide className="h-full pb-6" key={index}>
            <PortfolioCard 
              item={logo}
              type="logo"
              index={index}
              onClick={handleItemClick}
            />
          </SwiperSlide>
        ));
      case "posts":
        return postImages.map((post, index) => (
          <SwiperSlide className="h-full pb-6" key={index}>
            <PortfolioCard 
              item={post}
              type="post"
              index={index}
              onClick={handleItemClick}
            />
          </SwiperSlide>
        ));
      case "videos":
        return videoFiles.map((video, index) => (
          <SwiperSlide className="h-full pb-6" key={index}>
            <PortfolioCard 
              item={video}
              type="video"
              index={index}
              onClick={handleItemClick}
            />
          </SwiperSlide>
        ));
      default:
        return null;
    }
  };

  return (
    <section className="relative py-16 flex flex-col lg:flex-row items-center justify-center bg-white px-4">
      {/* Left Animated Gears */}
      {/* <div className="z-20 absolute md:-left-16 -left-9 md:top-[27.5%] top-[50%] rotate-[15deg]">
        <DotLottieReact
          className="md:w-96 md:h-96 w-40 h-40"
          src="https://lottie.host/906ed5c3-5320-46da-8ac4-e16ea5554b5f/Z8Sahwhs21.lottie"
          loop
          autoplay
        />
      </div> */}

      {/* Portfolio Section */}
      <div className="container md:w-[85%] relative">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="text-center lg:text-start">
            <Heading text={"Our Portfolio"} />
          </div>
          <p
            data-aos="fade-up"
            className="text-3xl font-bold text-center lg:text-start mb-8"
          >
            Explore our diverse array of creative work
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-[#F4A261] text-[#1A3C3C] shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-[#F4A261] hover:text-[#1A3C3C]'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Custom Navigation Buttons */}
          <div className="absolute top-0 right-20 space-x-4 z-10 hidden lg:flex">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#F4A261] cursor-pointer hover:text-[#1A3C3C] hover:border-[#F4A261] transition-all duration-300"
            >
              <MoveLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#F4A261] cursor-pointer hover:text-[#1A3C3C] hover:border-[#F4A261] transition-all duration-300"
            >
              <MoveRight />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          ref={swiperRef}
          className="lg:h-[43rem] w-full pb-10"
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          direction="horizontal"
          loop={true}
          pagination={false}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {renderPortfolioCards()}
        </Swiper>
      </div>

      {/* Modal for displaying selected item */}
      {isModalOpen && selectedItem && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg max-w-6xl max-h-[95vh] overflow-hidden relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Modal Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">{selectedItem.title}</h2>
              
              {selectedItem.type === "image" ? (
                <div className="flex justify-center">
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
                  />
                </div>
              ) : selectedItem.type === "video" ? (
                <div className="flex justify-center">
                  <video
                    src={selectedItem.src}
                    controls
                    className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
                    autoPlay
                    controlsList="nodownload"
                  />
                </div>
              ) : null}
              
              {/* Modal Footer */}
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                  {selectedItem.type === "image" ? "Click outside to close" : "Click outside to close"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
