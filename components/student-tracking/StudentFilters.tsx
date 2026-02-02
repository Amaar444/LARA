"use client";

import React from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";

interface StudentFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCourse: string;
  onCourseChange: (value: string) => void;
  courses: string[];
}

const StudentFilters: React.FC<StudentFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedCourse,
  onCourseChange,
  courses,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center animate-slideDown">
      {/* Search By Student Name */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search By Student Name"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full md:w-72 px-5 py-3 rounded-full border-2 border-gray-300 bg-white text-gray-800 focus:border-orange-400 focus:outline-none transition-colors"
        />
      </div>

      {/* Filter By Course */}
      <div className="relative">
        <select
          value={selectedCourse}
          onChange={(e) => onCourseChange(e.target.value)}
          className="w-full md:w-72 px-5 py-3 rounded-full border-2 border-gray-300 bg-white text-gray-800 focus:border-orange-400 focus:outline-none transition-colors appearance-none cursor-pointer"
        >
          <option value="">Filter By Course</option>
          {courses.map((course) => (
            <option key={course} value={course}>{course}</option>
          ))}
        </select>
        <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
};

export default StudentFilters;
