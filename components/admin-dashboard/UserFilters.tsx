"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";

interface UserFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusFilterChange: (value: string) => void;
  onReset: () => void;
}

const UserFilters: React.FC<UserFiltersProps> = ({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  onReset,
}) => {
  return (
    <div className="bg-orange-100/50 rounded-2xl p-4 mb-6 animate-slideUp" style={{ animationDelay: "0.1s" }}>
      <div className="flex flex-wrap items-center gap-4">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[250px]">
          <input
            type="text"
            placeholder="Search by Name or Email"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
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
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="suspended">Suspended</option>
        </select>

        {/* Reset Button */}
        <button
          onClick={onReset}
          className="px-8 py-3 rounded-xl border border-gray-300 bg-white text-gray-600 text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UserFilters;
