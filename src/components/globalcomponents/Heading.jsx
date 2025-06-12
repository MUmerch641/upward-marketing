import React from "react";

const Heading = ({ text }) => {
  return (
    <div>
      <h2 className="text-[#2E8B8B] text-sm font-bold uppercase mb-2  ">
        {text}
      </h2>
    </div>
  );
};

export default Heading;
