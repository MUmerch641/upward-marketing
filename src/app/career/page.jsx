"use client";
import React, { useEffect, useState } from "react";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const CareerPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("View all");

  // Job data with categories
  const jobList = [
    {
      title: "Product Designer",
      description:
        "We’re looking for a mid-level product designer to join our team.",
      category: "Design",
    },
    {
      title: "Engineering Manager",
      description:
        "We’re looking for an experienced engineering manager to join our team.",
      category: "Development",
    },
    {
      title: "Marketing Specialist",
      description: "Join our marketing team to help grow our brand.",
      category: "Marketing",
    },
    {
      title: "Customer Support Agent",
      description:
        "We need a customer service representative to assist our clients.",
      category: "Customer Service",
    },
  ];

  // Filter jobs based on the selected category
  const filteredJobs =
    selectedCategory === "View all"
      ? jobList
      : jobList.filter((job) => job.category === selectedCategory);

  useEffect(() => {
    window.scrollTo(0, 0); // Reset to the top of the page
  }, []);

  return (
    <div className="w-full z-10 relative mt-20 overflow-hidden">
      {/* Header Section */}
      <div className="relative h-full mx-auto rounded-lg backdrop-blur-2xl z-30 p-3 lg:p-12 bg-white">
        <div className="w-full mx-auto lg:text-start text-center py-12">
          <span className="p-1 px-2 text-white border rounded-full mb-2 inline-block bg-[#2E8B8B]">
            We're hiring!
          </span>
          <h1 className="text-2xl md:text-5xl font-bold text-[#1A3C3C]">
            Be part of our mission
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            We’re looking for passionate people to join us on our mission. We
            value flat hierarchies, clear communication, and full ownership and
            responsibility.
          </p>
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 mx-auto">
            {[
              "View all",
              "Development",
              "Design",
              "Marketing",
              "Customer Service",
              "Operations",
              "Finance",
              "Management",
            ].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border font-medium shadow hover:shadow-md transition cursor-pointer ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#1A3C3C] to-[#2E8B8B] text-white"
                    : "bg-white text-[#1A3C3C]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="w-full mx-auto overflow-auto">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="p-6 border-b shadow hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-[#1A3C3C]">{job.title}</h3>
                  <p className="mt-2 text-gray-600">{job.description}</p>
                  <div className="mt-4 flex gap-2">
                    <span className="px-3 py-1 text-sm font-medium text-[#1A3C3C] bg-[#1A3C3C]/20 rounded-full flex items-center gap-1">
                      <IoLocationOutline />
                      100% Remote
                    </span>
                    <span className="px-3 py-1 text-sm font-medium text-[#1A3C3C] bg-[#1A3C3C]/20 rounded-full flex items-center gap-1">
                      <IoTimeOutline />
                      Full-time
                    </span>
                  </div>
                </div>
                <Link
                  onClick={() => {
                    localStorage.setItem("jobTitle", job.title);
                  }}
                  href={`/career/apply`}
                  className="text-[#2E8B8B] font-medium hover:underline flex items-center gap-2"
                >
                  Apply
                  <FaArrowRight className="-rotate-45" />
                </Link>
              </div>
            </div>
          ))}
          {filteredJobs.length === 0 && (
            <p className="text-center text-gray-600 mt-8">
              No jobs found for "{selectedCategory}" category.
            </p>
          )}
        </div>

        {/* Contact Button */}
        <div className="text-center mt-12 md:text-end">
          <button className="px-6 py-3 cursor-pointer text-white text-sm md:text-base bg-gradient-to-r from-[#1A3C3C] to-[#2E8B8B] hover:opacity-90 rounded-lg shadow-md">
            Get in touch →
          </button>
        </div>
      </div>
      <div className="w-40 h-40 -z-30 bg-gradient-to-r from-[#1A3C3C] to-[#2E8B8B] rounded-full absolute top-0 right-0"></div>
    </div>
  );
};

export default CareerPage;