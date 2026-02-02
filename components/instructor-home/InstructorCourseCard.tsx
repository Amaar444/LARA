"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface InstructorCourseCardProps {
  id: number;
  title: string;
  imageUrl: string;
  level: "Advanced" | "Beginner" | "Intermediate";
  delay?: number;
}

const InstructorCourseCard: React.FC<InstructorCourseCardProps> = ({
  id,
  title,
  imageUrl,
  level,
  delay = 0,
}) => {
  const getLevelStyles = () => {
    switch (level) {
      case "Advanced":
        return "bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white";
      case "Beginner":
        return "bg-gradient-to-r from-[#FFD199] to-[#FFE6C5] text-orange-800";
      case "Intermediate":
        return "bg-gradient-to-r from-[#FFA500] to-[#FFB84D] text-white";
      default:
        return "bg-orange-100 text-orange-800";
    }
  };

  return (
    <div 
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-slideUp group"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Course Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        
        {/* Level Badge */}
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${getLevelStyles()}`}>
          {level}
        </span>

        {/* Action Button */}
        <Link
          href={`/course-builder?id=${id}`}
          className="block w-full text-center py-3 bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
        >
          Course presentation
        </Link>
      </div>
    </div>
  );
};

export default InstructorCourseCard;
