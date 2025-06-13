"use client"
import { useState, useEffect } from "react"

const ServiceSection = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        @keyframes move-right {
          0%, 100% {
            transform: translateX(-20px);
          }
          50% {
            transform: translateX(20px);
          }
        }

        @keyframes move-left {
          0%, 100% {
            transform: translateX(20px);
          }
          50% {
            transform: translateX(-20px);
          }
        }

        .animate-move-right {
          animation: move-right 3s ease-in-out infinite;
        }

        .animate-move-left {
          animation: move-left 3s ease-in-out infinite;
        }
      `}</style>

      <section className="relative text-gray-900 py-16 px-6 md:px-12 md:h-screen overflow-hidden bg-gray-50">
        {/* Cursor Glow Effect */}
        <div
          className="pointer-events-none absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#2E8B8B] to-[#1A3C3C] opacity-25 blur-[120px]"
          style={{
            top: position.y - 40,
            left: position.x - 40,
            transform: "translate(-50%, -50%)",
          }}
        ></div>

        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1A3C3C]">
            Our Services <span className="text-[#F4A261]">& Skills</span>
          </h2>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Web Design & Development Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/2 text-gray-700 hover:shadow-xl transition">
            <h3 className="flex items-center text-xl font-semibold text-[#1A3C3C]">
              ⚡ Web Design & Development
              <span className="ml-auto text-sm text-gray-500">• UI/UX</span>
            </h3>

            <div className="mt-4 space-y-4">
              <div className="flex justify-between bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
                <span>✅ Website Development</span>
                <span className="text-[#2E8B8B]">✔ Approved</span>
              </div>
              <div className="flex justify-between bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
                <span>✅ App Development</span>
                <span className="text-[#F4A261]">🔥 Expert Level</span>
              </div>
              <div className="flex justify-between bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
                <span>✅ Logo Designing</span>
                <span className="text-[#2E8B8B]">👍 Recommend</span>
              </div>              <div className="flex justify-between bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
                <span>✅ Company Profile Design</span>
                <span className="text-[#F4A261]">4.9 / 5.0</span>
              </div>              <div className="mt-4 text-center">
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-[#2E8B8B] to-[#1A3C3C] text-white py-2 px-6 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                >
                  📁 View Portfolio Samples
                </button>
              </div>
              <div className="flex justify-between bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
                <span>✅ Flyer & Billboard Design</span>
                <span className="text-[#2E8B8B]">✔ Available</span>
              </div>
            </div>
          </div>

          {/* Middle Circle Element */}
          <div className="relative h-[20rem] w-full md:w-1/2 flex justify-center items-center">
            <div className="md:py-[2px] px-[2px] md:bg-gradient-to-r from-[#2E8B8B] to-[#1A3C3C] bg-gradient-to-b from-[#2E8B8B] to-[#1A3C3C] md:w-full h-full md:h-0 z-10"></div>
            <div className="w-20 h-20 py-0 bg-gray-50 border border-[#2E8B8B] rounded-full z-20 absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1661923465953-937e49c9e624?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Service icon"
                className="w-[100%] h-[100%] rounded-full bg-transparent"
              />
            </div>
            <div className="w-full h-10 absolute flex justify-center items-center z-0">
              <div className="w-10 h-10 bg-gradient-to-b from-[#2E8B8B] to-[#1A3C3C] rounded-md blur-md animate-move-right absolute"></div>
              <div className="w-10 h-10 bg-gradient-to-b from-[#2E8B8B] to-[#1A3C3C] rounded-md blur-md animate-move-left absolute"></div>
            </div>
          </div>

          {/* Digital Marketing & Social Media Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/2 relative text-gray-700 hover:shadow-xl transition">
            <h3 className="flex items-center text-xl font-semibold text-[#2E8B8B]">
              🚀 Digital Marketing & Social Media
            </h3>

            <div className="mt-4 space-y-3">
              <div className="bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
                <span className="text-sm">✅ Social Media Pages Creation & Optimization</span>
              </div>
              <div className="bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
                <span className="text-sm">✅ Social Media Post Designing</span>
              </div>
              <div className="bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
                <span className="text-sm">✅ Facebook & Instagram Ads</span>
              </div>
              <div className="bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
                <span className="text-sm">✅ Social Media Management</span>
              </div>
              <div className="bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
                <span className="text-sm">✅ Video Editing & Google Ads</span>
              </div>
              <div className="bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
                <span className="text-sm">✅ Product Stickers Design</span>
              </div>
            </div>

            <span className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-[#2E8B8B] to-[#1A3C3C] text-white font-semibold text-sm rounded-lg">
              Live
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceSection
