import { ArrowRight } from "lucide-react";
import React from "react";

export default function Button({ text }) {
  return (
    <div className="inline-block rounded-lg bg-gradient-to-r from-[#35a1a1] to-[#1A3C3C] p-[3px] cursor-pointer text-white">
      <button className="px-6 py-3 rounded-lg hover:bg-white transition-all duration-500 group hover:text-[#1A3C3C] cursor-pointer">
        <span className="flex items-center gap-2 group-hover:text-[#1A3C3C]">
          {text}
          <ArrowRight className="w-4 h-4" />
        </span>
      </button>
    </div>
  );
}