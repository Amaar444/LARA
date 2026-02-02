"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";

interface AddCourseButtonProps {
  onClick: () => void;
}

const AddCourseButton: React.FC<AddCourseButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fadeIn"
    >
      <FaPlus className="text-lg" />
      Add New Course
    </button>
  );
};

export default AddCourseButton;
