"use client";

import React from "react";

interface CourseHeaderProps {
  activeTab: "content" | "quiz";
  onTabChange: (tab: "content" | "quiz") => void;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex gap-4 mb-6 animate-slideDown">
      <button
        onClick={() => onTabChange("content")}
        className={`px-8 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 ${
          activeTab === "content"
            ? "bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white shadow-lg scale-105"
            : "bg-white text-gray-700 hover:shadow-md hover:scale-102"
        }`}
      >
        Course content
      </button>
      <button
        onClick={() => onTabChange("quiz")}
        className={`px-8 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 ${
          activeTab === "quiz"
            ? "bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white shadow-lg scale-105"
            : "bg-white text-gray-700 hover:shadow-md hover:scale-102"
        }`}
      >
        Final Quiz
      </button>
    </div>
  );
};

export default CourseHeader;
