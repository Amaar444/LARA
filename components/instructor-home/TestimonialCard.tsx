"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialCardProps {
  id: number;
  name: string;
  course: string;
  feedback: string;
  avatarUrl: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  id,
  name,
  course,
  feedback,
  avatarUrl,
  delay = 0,
}) => {
  return (
    <div 
      className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slideUp min-w-[300px] flex-shrink-0"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-14 h-14">
          <Image
            src={avatarUrl}
            alt={name}
            fill
            className="rounded-full object-cover border-2 border-orange-200"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-orange-600">{course}</p>
        </div>
      </div>

      {/* Quote Icon */}
      <FaQuoteLeft className="text-orange-300 text-2xl mb-3" />

      {/* Feedback */}
      <p className="text-gray-600 leading-relaxed">{feedback}</p>
    </div>
  );
};

export default TestimonialCard;
