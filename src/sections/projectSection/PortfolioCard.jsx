import React from "react";
import { Play } from "lucide-react";

const PortfolioCard = ({ item, type, index, onClick }) => {
  const getImageSrc = () => {
    switch (type) {
      case "logo":
        return `/portfolio/logos/${item}`;
      case "post":
        return `/portfolio/posts/${item}`;
      case "video":
        return `/portfolio/videos/${item}`;
      default:
        return "";
    }
  };

  const getTitle = () => {
    switch (type) {
      case "logo":
        return `Logo Design ${index + 1}`;
      case "post":
        return `Social Media Post ${index + 1}`;
      case "video":
        return `Video Portfolio ${index + 1}`;
      default:
        return "";
    }
  };

  const getDescription = () => {
    switch (type) {
      case "logo":
        return "Click to view full size";
      case "post":
        return "Click to view full size";
      case "video":
        return "Click to play video";
      default:
        return "";
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl portfolio-card-hover"
      onClick={() => onClick({ src: getImageSrc(), title: getTitle() }, type === "video" ? "video" : "image")}
    >
      <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
        {type === "video" ? (
          <>
            <video
              src={getImageSrc()}
              className="w-full h-full object-cover opacity-60"
              muted
              preload="metadata"
              onLoadedData={(e) => {
                // Set current time to 1 second to get a better thumbnail
                e.target.currentTime = 1;
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="bg-[#F4A261] bg-opacity-90 rounded-full p-4 backdrop-blur-sm hover:bg-opacity-100 transition-all duration-300 transform hover:scale-110">
                <Play className="w-12 h-12 text-[#1A3C3C]" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-2 right-2 bg-[#F4A261] text-[#1A3C3C] text-xs px-2 py-1 rounded font-medium">
              VIDEO
            </div>
          </>
        ) : (
          <>
            <img
              src={getImageSrc()}
              alt={getTitle()}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              loading="lazy"
            />
            <div className="absolute bottom-2 right-2 bg-[#F4A261] text-[#1A3C3C] text-xs px-2 py-1 rounded font-medium">
              {type === "logo" ? "LOGO" : "POST"}
            </div>
          </>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{getTitle()}</h3>
        <p className="text-gray-600 text-sm">{getDescription()}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
