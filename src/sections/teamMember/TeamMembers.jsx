"use client";
import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const TeamMembers = () => {
  return (
    <>
      <section className="w-full lg:h-auto py-6 bg-gray-50">
        <div className="w-full mx-auto md:w-[100%] lg:w-[80%] 2xl:w-[80%] h-full flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center gap-8">
            <h1 className="text-[#F4A261] font-bold text-lg">Team Members</h1>
            <h2
              data-aos="fade-down"
              className="text-2xl md:text-4xl font-bold text-center text-[#1A3C3C]"
            >
              Meet the Brilliant Minds Behind Upward' Success
            </h2>
          </div>
          <div className="w-full relative h-full flex flex-col items-center justify-center gap-8">
            <div className="flex justify-center items-center">
              <TeamMemberCard
                title={"Founder & CEO"}
                desc={"Asim Khan"}
                img={
                  "/images/ceo.jpeg"
                }
              />
            </div>

            <div className="lg:top-[18%] w-[85%] lg:absolute flex flex-col lg:flex-row justify-around items-center gap-8">
              <TeamMemberCard
                title={"MERN Stack Developer"}
                desc={"Web Developer"}
                img={
"https://static.vecteezy.com/system/resources/previews/028/707/608/non_2x/ai-generative-3d-rich-man-business-man-cartoon-character-free-png.png"                }
              />
              <TeamMemberCard
                title={"Full Stack Developer"}
                desc={"Web Developer"}
                img={
'https://i.pinimg.com/736x/da/c7/f2/dac7f2cd1b8595c1d9bf8c67fea3b4cd.jpg'      }
              />
            </div>

            <div className="flex w-full items-center justify-between flex-col lg:flex-row gap-8">
              <TeamMemberCard
                title={"Graphic Designer"}
                desc={"Senior Graphic Designer"}
                img={
'https://static.vecteezy.com/system/resources/thumbnails/034/599/484/small_2x/ai-generated-3d-cute-cartoon-woman-character-in-white-suit-png.png'                }
              />
              <Link
                href={"/career"}
                className="relative group lg:block bottom-0 hidden self-end w-40 h-32 border border-[#2E8B8B] overflow-hidden rounded-full shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#2E8B8B] to-[#1A3C3C] translate-y-[90%] group-hover:translate-y-0 transition-all duration-500"></div>
                <div className="relative z-10 flex items-center justify-center h-full gap-2 px-3 text-xl font-bold cursor-pointer text-[#1A3C3C] group-hover:text-white">
                  <FaArrowRight />
                  Join Now
                </div>
              </Link>

              {/* Team Member Card with Transition Effect */}
              <div className="transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <TeamMemberCard
                  title={"Tester & QA"}
                  desc={"Quality Assurance specialist"}
                  img={
'https://static.vecteezy.com/system/resources/previews/034/599/482/non_2x/ai-generated-3d-cute-cartoon-woman-character-in-white-suit-png.png'                  }
                />
              </div>

              <Link
                href={"/career"}
                className="relative group bottom-0 lg:hidden self-center w-40 h-36 border border-[#2E8B8B] overflow-hidden rounded-full shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#2E8B8B] to-[#1A3C3C] translate-y-[100%] group-hover:translate-y-0 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#2E8B8B] to-[#1A3C3C] translate-y-[95%] group-hover:hidden transition-transform duration-300 rounded-t-full"></div>
                <div className="relative z-10 flex items-center justify-center h-full gap-2 px-3 text-xl font-bold cursor-pointer text-[#1A3C3C] group-hover:text-white">
                  <FaArrowRight />
                  Join Now
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMembers;