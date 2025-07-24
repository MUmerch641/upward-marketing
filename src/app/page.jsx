import AboutSection from "@/sections/aboutSection/AboutSection";
import Banner from "@/sections/banner/Banner";
import ContactForm from "@/sections/contact/ContactForm";
import FAQs from "@/sections/fags/FAQs";
import Footer from "@/sections/footer/Footer";
import HeroSection from "@/sections/heroSection/HeroSection";
import LogoBar from "@/sections/logobar/LogoBar";
import Navbar from "@/sections/navbar/Navbar";
import PortfolioGallery from "@/sections/portfolioGallery/PortfolioGallery";
import FeatureSection from "@/sections/projectSection/featuredProject";
import ProjectsSection from "@/sections/projectSection/ProjectSection";
import ServiceSection from "@/sections/serviseSection/ServiseSection";
import TeamMembers from "@/sections/teamMember/TeamMembers";
import ToolTechnologies from "@/sections/technologyies/ToolTechnologies";
import TestimonialsSection from "@/sections/testimonials/Testimonials";
import WhyCureLogics from "@/sections/whycurelogics/WhyCurelogics";
import React from "react";

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <Navbar />
      </div>
      <div id="home">
        {" "}
        <HeroSection />
      </div>
      <div id="about">
        {" "}
        <AboutSection />
      </div>
      <div id="services">
        {" "}
        <ServiceSection />
      </div>
      <div>
        <Banner />
      </div>
      <div id="projects">
        <FeatureSection />
        <ProjectsSection />
      </div>
      <div id="portfolio">
        <PortfolioGallery />
      </div>
      <div id="team">
        {/* <TeamMembers /> */}
      </div>
      <div>
        <ToolTechnologies />
      </div>
      <div>
        <LogoBar />
      </div>
      <div>
        <WhyCureLogics />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div>
        <FAQs />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/27796699507"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 1000,
          backgroundColor: "#25D366",
          borderRadius: "50%",
          width: "56px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="white"
        >
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.1L4 29l7.18-2.33C12.97 27.56 14.45 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.36 0-2.68-.27-3.92-.8l-.28-.12-4.26 1.38 1.4-4.13-.18-.29C6.89 18.08 6 16.59 6 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.18.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.97.95-.97 2.3 0 1.35.99 2.66 1.13 2.85.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
        </svg>
      </a>
    </div>
  );
};

export default LandingPage;
