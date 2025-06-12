import React from "react";
import Heading from "../../components/globalcomponents/Heading";

const WhyCureLogics = () => {
  return (
    <section className="bg-gray-50 py-16 w-full text-sm flex items-start">
      <div className="container px-6 md:w-[80%] mx-auto">
        <Heading text={"Why Upward"} style={{ color: "#F4A261" }} />
        <h3 className="text-2xl font-extrabold text-[#1A3C3C] leading-snug mb-10">
          Why Upward Stands Out as Your <br />
          Premier Digital Partner?
        </h3>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Section: Text */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0"
                alt="Expert Team Icon - Collaborative Office Meeting"
                className="w-12 h-12 object-contain"
              />
              <div className="ml-4 md:flex justify-center items-center gap-2">
                <p className="font-bold text-[#2E8B8B]">Expert Team</p>
                <p className="text-gray-600">
                  Our diverse team delivers custom solutions.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0"
                alt="Industry Leading Icon - Office Leadership Presentation"
                className="w-12 h-12 object-contain"
              />
              <div className="ml-4 md:flex justify-center items-center gap-2">
                <p className="font-bold text-[#2E8B8B]">Industry Leading</p>
                <p className="text-gray-600">
                  Achieve industry success with our proven solutions.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0"
                alt="Global Reach Icon - Office with Global Map"
                className="w-12 h-12 object-contain"
              />
              <div className="ml-4 md:flex justify-center items-center gap-2">
                <p className="font-bold text-[#2E8B8B]">Global Reach</p>
                <p className="text-gray-600">
                  Seamless collaboration, anywhere, anytime.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0"
                alt="24/7 Support Icon - Office Support Desk"
                className="w-12 h-12 object-contain"
              />
              <div className="ml-4 md:flex justify-center items-center gap-2">
                <p className="font-bold text-[#2E8B8B]">24/7 Customer Support</p>
                <p className="text-gray-600">
                  Your satisfaction is our priority.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0"
                alt="Client-Centric Icon - Office Client Meeting"
                className="w-12 h-12 object-contain"
              />
              <div className="ml-4 md:flex justify-center items-center gap-2">
                <p className="font-bold text-[#2E8B8B]">Client-Centric Approach</p>
                <p className="text-gray-600">
                  Personalized support, exceeding expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="relative w-full flex items-center justify-center h-full">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0"
              alt="Modern Office Illustration - Team Collaboration"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
           
          </div>
        </div>
      </div>
    </section>
  );
};

// Add CSS animation for rotating-div
const styles = `
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default WhyCureLogics;