"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";

interface CourseFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusFilterChange: (value: string) => void;
}

const CourseFilters: React.FC<CourseFiltersProps> = ({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-8 animate-slideUp" style={{ animationDelay: "0.1s" }}>
      {/* Search Input */}
      <div className="relative flex-1 min-w-[300px] max-w-[500px]">
        <input
          type="text"
          placeholder="Search by Course or instructor"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
        />
        <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      {/* Status Filter */}
      <select
        value={statusFilter}
        onChange={(e) => onStatusFilterChange(e.target.value)}
        className="px-6 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 min-w-[120px] cursor-pointer transition-all hover:border-gray-400"
      >
        <option value="all">All</option>
        <option value="approved">Approved</option>
        <option value="pending">Pending</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
};

export default CourseFilters;
