"use client";

import React from "react";

interface StudentCardProps {
  id: number;
  name: string;
  course: string;
  progress: number;
  lastActivity: string;
  delay?: number;
}

const StudentCard: React.FC<StudentCardProps> = ({
  id,
  name,
  course,
  progress,
  lastActivity,
  delay = 0,
}) => {
  // Determine progress bar color based on percentage
  const getProgressColor = () => {
    if (progress >= 80) return "from-[#FF8A00] to-[#FFB84D]";
    if (progress >= 50) return "from-[#FFB84D] to-[#FFD199]";
    return "from-[#FFD199] to-[#FFE6C5]";
  };

  return (
    <div 
      className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slideUp border-l-4 border-orange-500"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Header - Name & Course */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
          {course}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${getProgressColor()} rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Progress Percentage */}
      <p className="text-gray-800 font-semibold mb-2">
        Progress: <span className="text-orange-600">{progress}%</span>
      </p>

      {/* Last Activity */}
      <p className="text-gray-600 text-sm">
        Last Activity: <span className="font-medium">{lastActivity}</span>
      </p>
    </div>
  );
};

export default StudentCard;
