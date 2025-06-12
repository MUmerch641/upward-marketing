"use client";
import React from "react";
import Heading from "../../components/globalcomponents/Heading";

const ToolTechnologies = () => {
  const tools = [
    {
      name: "React JS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Flutter",
      icon: "https://cdn.prod.website-files.com/5ee12d8d7f840543bde883de/5ef3a1148ac97166a06253c1_flutter-logo-white-inset.svg",
    },
    {
      name: "Vue.Js",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    },
    {
      name: "Mongo DB",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    },
    {
      name: "Laravel",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    },
    {
      name: "Next.Js",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
    {
      name: "Nest.Js",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg",
    },
    {
      name: "Adobe XD",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXJqHOf4Ikmefw3-fY-ASnBovjPpx7bfnnw&s",
    },
    {
      name: "CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "Socket.IO",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNwuGGAwYtd0_8iwfTDux5skNIlUkWjncNQ&s",
    },
    {
      name: "eCommerce",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQulipxdd7cJAdupxc6iSsgYcZPWfPHboK1mA&s",
    },
    {
      name: "Node.Js",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    },
    {
      name: "ChatGPT",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    },
    {
      name: "Meta",
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    },
    {
      name: "Figma",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    {
      name: "Photoshop",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    },
    {
      name: "HTML",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "Javascript",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    },
    {
      name: "Angular",
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    },
    {
      name: "Websocket",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/WebSocket_colored_logo.svg/250px-WebSocket_colored_logo.svg.png",
    },
    {
      name: "GraphQL",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png",
    },
    {
      name: "Illustrator",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png",
    },
  ];

  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto text-center">
        <Heading data-aos="fade-left" text="Tools & Technologies" />
        <h1
          data-aos="fade-right"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A3C3C] mt-4 sm:mt-6 mx-auto max-w-3xl"
        >
          Latest tools & technologies to drive innovation in digital solutions
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6 mt-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:bg-[#1A3C3C] hover:text-white transition-all duration-300 border-2 border-[#2E8B8B]"
            >
              <img
                src={tool.icon}
                alt={`${tool.name} icon`}
                className="w-10 h-10 sm:w-12 sm:h-12 mb-2 object-contain"
              />
              <span className="text-xs sm:text-sm font-medium text-center">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolTechnologies;