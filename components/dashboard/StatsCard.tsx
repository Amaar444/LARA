import React from "react";
import { FaGraduationCap, FaPlay, FaFileAlt } from "react-icons/fa";

interface StatsCardProps {
  title: string;
  value: string;
  icon: string;
  bgColor: string;
  textColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  bgColor,
  textColor,
}) => {
  const getIcon = () => {
    switch (icon) {
      case "graduation-cap":
        return <FaGraduationCap className="text-4xl" />;
      case "play":
        return <FaPlay className="text-4xl" />;
      case "file-text":
        return <FaFileAlt className="text-4xl" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`rounded-3xl p-6 flex items-center gap-6 shadow-lg ${textColor} transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex-shrink-0">{getIcon()}</div>
      <div>
        <p className={`text-sm font-medium opacity-90 ${textColor}`}>{title}</p>
        <p className={`text-4xl font-bold mt-1 ${textColor}`}>{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
