"use client";

import React from "react";

interface AddLessonButtonProps {
  onClick: () => void;
}

const AddLessonButton: React.FC<AddLessonButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-16 h-16 bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white rounded-full text-4xl flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-slow"
      style={{ animation: "pulse 2s infinite" }}
    >
      +
    </button>
  );
};

export default AddLessonButton;
