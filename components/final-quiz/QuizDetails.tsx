"use client";

import React from "react";
import { FaCalendarAlt, FaChevronDown } from "react-icons/fa";

interface QuizDetailsProps {
  date: string;
  onDateChange: (value: string) => void;
  duration: string;
  onDurationChange: (value: string) => void;
  durations: string[];
}

const QuizDetails: React.FC<QuizDetailsProps> = ({
  date,
  onDateChange,
  duration,
  onDurationChange,
  durations,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 animate-slideDown">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Quiz Details</h3>
      <div className="flex gap-6">
        {/* Date Picker */}
        <div className="relative flex-1">
          <input
            type="date"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-800 focus:border-orange-400 focus:outline-none transition-colors"
            placeholder="dd/mm/yyyy"
          />
          <FaCalendarAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        {/* Duration Dropdown */}
        <div className="relative flex-1">
          <select
            value={duration}
            onChange={(e) => onDurationChange(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-800 focus:border-orange-400 focus:outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="">Duration</option>
            {durations.map((dur) => (
              <option key={dur} value={dur}>{dur}</option>
            ))}
          </select>
          <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
