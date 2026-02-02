"use client";

import React from "react";
import Image from "next/image";
import { FaUser, FaBook } from "react-icons/fa";

interface CourseCardProps {
  id: number;
  title: string;
  imageUrl: string;
  students: number;
  lessons: number;
  status: "Active" | "Draft";
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  delay?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  imageUrl,
  students,
  lessons,
  status,
  onEdit,
  onDelete,
  delay = 0,
}) => {
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slideUp group"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Course Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Course Info */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-3 truncate">{title}</h3>
        
        {/* Stats Row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 text-gray-600">
            <FaUser className="text-sm" />
            <span className="text-sm">{students} Student</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaBook className="text-sm" />
            <span className="text-sm">{lessons} lesson</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="mb-4">
          <span 
            className={`px-3 py-1 rounded-lg text-xs font-semibold ${
              status === "Active" 
                ? "bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white" 
                : "bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white"
            }`}
          >
            {status}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onEdit(id)}
            className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-all"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(id)}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-[#FF4D4D] to-[#FF6B6B] text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
