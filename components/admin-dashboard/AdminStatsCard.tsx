"use client";

import React from "react";
import { FaUsers, FaChalkboardTeacher, FaBook, FaDollarSign } from "react-icons/fa";

interface AdminStatsCardProps {
  type: "students" | "instructors" | "courses" | "revenue";
  value: number | string;
  delay?: number;
}

const AdminStatsCard: React.FC<AdminStatsCardProps> = ({ type, value, delay = 0 }) => {
  const getCardConfig = () => {
    switch (type) {
      case "students":
        return {
          label: "Total Students",
          icon: <FaUsers className="text-2xl" />,
          bgColor: "bg-gradient-to-r from-green-400 to-green-500",
          textColor: "text-white",
        };
      case "instructors":
        return {
          label: "Total Instructor",
          icon: <FaChalkboardTeacher className="text-2xl" />,
          bgColor: "bg-gradient-to-r from-orange-300 to-orange-400",
          textColor: "text-gray-800",
        };
      case "courses":
        return {
          label: "Total Courses",
          icon: <FaBook className="text-2xl" />,
          bgColor: "bg-gradient-to-r from-cyan-400 to-cyan-500",
          textColor: "text-white",
        };
      case "revenue":
        return {
          label: "Revenue",
          icon: <FaDollarSign className="text-2xl" />,
          bgColor: "bg-gradient-to-r from-red-400 to-red-500",
          textColor: "text-white",
        };
      default:
        return {
          label: "",
          icon: null,
          bgColor: "bg-gray-200",
          textColor: "text-gray-800",
        };
    }
  };

  const config = getCardConfig();

  return (
    <div 
      className={`${config.bgColor} ${config.textColor} rounded-full px-6 py-3 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slideUp`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="bg-white/20 p-2 rounded-full">
        {config.icon}
      </div>
      <div>
        <p className="text-xs font-medium opacity-90">{config.label}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default AdminStatsCard;
