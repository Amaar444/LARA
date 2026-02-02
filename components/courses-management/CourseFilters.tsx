"use client";

import React from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";

interface CourseFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  selectedStatus: string;
  onStatusChange: (value: string) => void;
  categories: string[];
  statuses: string[];
}

const CourseFilters: React.FC<CourseFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedStatus,
  onStatusChange,
  categories,
  statuses,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 animate-slideDown">
      {/* Search Courses */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search Courses"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-800 focus:border-orange-400 focus:outline-none transition-colors pr-10"
        />
        <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      {/* Category Dropdown */}
      <div className="relative">
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-800 focus:border-orange-400 focus:outline-none transition-colors appearance-none cursor-pointer"
        >
          <option value="">Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>

      {/* Status Dropdown */}
      <div className="relative">
        <select
          value={selectedStatus}
          onChange={(e) => onStatusChange(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-800 focus:border-orange-400 focus:outline-none transition-colors appearance-none cursor-pointer"
        >
          <option value="">Status</option>
          {statuses.map((status) => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
        <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
};

export default CourseFilters;
