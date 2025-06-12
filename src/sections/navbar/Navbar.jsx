"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/globalcomponents/Button";
import Image from 'next/image';
import logo from "@/images/logo.jpeg"; // Placeholder for the actual hosted logo URL
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const pathname = usePathname();

  const sections = [
    { id: "#home", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#contact", label: "Contact Us" },
    { id: "#services", label: "Services" },
    { id: "#projects", label: "Projects" },
    { id: "#team", label: "Careers" },
    { id: "#testimonials", label: "Testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        sections.forEach((section) => {
          const element = document.querySelector(section.id);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            if (
              scrollPosition >= offsetTop - 100 &&
              scrollPosition < offsetTop + offsetHeight - 100
            ) {
              setActiveLink(section.id);
            }
          }
        });
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (sectionId) => {
    if (pathname !== "/") {
      window.location.href = `/${sectionId}`;
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setActiveLink(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="shadow-lg px-6 w-full fixed top-0 left-0 z-50 transition-all duration-500 bg-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center text-sm">
          <Image
            className="rounded mr-2"
            src={logo} // Placeholder for the actual hosted logo URL
            alt="Upward Marketing Logo"
            width={150}
            height={50}
            priority
          />
        </div>

        {/* Desktop Navigation with Animation */}
        <motion.div
          className="hidden lg:flex space-x-8 relative"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {sections.map((link, index) => (
            <motion.button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`relative cursor-pointer hover:text-[#F4A261] text-[#1A3C3C] font-medium transition-all duration-300 ${
                activeLink === link.id ? "text-[#F4A261]" : ""
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
              <motion.span
                layoutId="underline"
                className="absolute bottom-0 left-0 h-[2px] w-full bg-[#F4A261]"
                initial={{ width: "0%" }}
                animate={
                  activeLink === link.id ? { width: "100%" } : { width: "0%" }
                }
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Get Started Button (Desktop) */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => handleLinkClick("#contact")}
        >
          <Button
            text="Get Started"
            style={{ backgroundColor: "#F4A261", color: "#1A3C3C", border: "none", padding: "10px 20px", borderRadius: "5px" }}
          />
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          className="block lg:hidden text-[#2E8B8B] text-2xl transition-all duration-500 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <RxCross2 /> : "☰"}
        </button>
      </div>

      {/* Mobile Menu with Drop-down Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden fixed top-0 left-0 w-full bg-white shadow-lg flex flex-col items-center py-8 z-40"
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-[#2E8B8B] text-2xl"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <RxCross2 />
            </button>

            {/* Mobile Menu Links */}
            {sections.map((link, index) => (
              <motion.button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`block px-4 py-3 text-[#1A3C3C] hover:bg-[#F4A261] hover:text-white font-medium transition-all duration-300 ${
                  activeLink === link.id
                    ? "text-[#F4A261] border-b-2 border-[#F4A261]"
                    : ""
                }`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </motion.button>
            ))}

            <div className="mt-6">
              <Button
                text="Get Started"
                style={{ backgroundColor: "#F4A261", color: "#1A3C3C", border: "none", padding: "10px 20px", borderRadius: "5px" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}