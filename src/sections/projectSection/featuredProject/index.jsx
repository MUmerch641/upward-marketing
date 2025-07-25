"use client";
import React from "react";
import { motion } from "framer-motion";
import projects from "../data/Data";
import Button from "@/components/globalcomponents/Button";

const FeatureSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="flex flex-col gap-10 p-6 w-full lg:w-[85%] m-auto">
        <h1 className="text-[#1A3C3C] text-4xl font-bold text-center">
          Projects We Have Worked On
        </h1>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative flex w-full lg:flex-row bg-transparent flex-col-reverse rounded-lg overflow-hidden transform transition-all duration-300 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <div className="lg:p-8 p-4 flex-1 flex flex-col justify-center md:min-h-[500px] shadow-2xl relative z-10 md:rounded-lg bg-white">
              <h3 className="text-[#F4A261]">Featured Project</h3>
              <h3 className="text-2xl font-semibold text-[#1A3C3C]">
                <a
                  target="_blank"
                  className="text-[#2E8B8B] hover:text-[#F4A261] transition-colors duration-300"
                  href={project.link}
                >
                  {project.title}
                </a>
              </h3>
              <p className="text-gray-600 mt-3">{project.description}</p>
              <div className="flex flex-wrap mt-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm mr-2 mt-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="w-2/3 mt-6">
                <a href={project.link} target="_blank">
                  <Button
                    text={"View Project"}
                    style={{  border: "none", padding: "10px 20px", borderRadius: "5px" }}
                  />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full relative h-[350px] md:h-[400px] lg:h-[600px] md:px-2">
              <a
                className={`flex justify-center items-center h-full w-full md:h-full object-cover rounded-lg mx-auto md:shadow-2xl ${
                  index % 2 === 0 ? "lg:-translate-x-10" : "lg:translate-x-10"
                } h-2/3 m-auto absolute`}
                target="_blank"
                href={project.link}
              >
                <motion.img
                  className={`w-full h-[300px] object-cover rounded-lg mx-auto md:shadow-2xl ${
                    index % 2 === 0 ? "lg:-translate-x-10" : "lg:translate-x-10"
                  } h-2/3 m-auto absolute`}
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;