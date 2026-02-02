"use client";

import React from "react";
import { FaCheckCircle, FaBook, FaClipboardCheck, FaGraduationCap } from "react-icons/fa";

interface ActivityItemProps {
  id: number;
  text: string;
  type: "completed" | "submitted" | "finished";
  delay?: number;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ id, text, type, delay = 0 }) => {
  const getIcon = () => {
    switch (type) {
      case "completed":
        return <FaGraduationCap className="text-orange-500 text-xl" />;
      case "submitted":
        return <FaClipboardCheck className="text-orange-500 text-xl" />;
      case "finished":
        return <FaBook className="text-orange-500 text-xl" />;
      default:
        return <FaBook className="text-orange-500 text-xl" />;
    }
  };

  return (
    <div 
      className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01] animate-slideUp"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
        {getIcon()}
      </div>
      <p className="flex-1 text-gray-700">{text}</p>
      <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
    </div>
  );
};

export default ActivityItem;
