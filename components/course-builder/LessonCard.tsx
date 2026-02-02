"use client";

import React from "react";
import { FaVideo, FaFilePdf, FaClipboardList } from "react-icons/fa";

interface LessonCardProps {
  lessonNumber: number;
  title: string;
  hasVideo: boolean;
  hasPdf: boolean;
  hasAssignment: boolean;
  onEdit: () => void;
  onDelete: () => void;
  delay?: number;
}

const LessonCard: React.FC<LessonCardProps> = ({
  lessonNumber,
  title,
  hasVideo,
  hasPdf,
  hasAssignment,
  onEdit,
  onDelete,
  delay = 0,
}) => {
  return (
    <div 
      className="bg-white rounded-xl border-2 border-gray-300 p-6 mb-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slideUp"
      style={{ animationDelay: `${delay}s` }}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Lesson {lessonNumber}: {title}
      </h3>

      <div className="border-2 border-gray-300 rounded-lg p-8 mb-6 flex items-center justify-center gap-6">
        {hasVideo && (
          <button className="bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <FaVideo className="text-xl" />
            Video
          </button>
        )}
        {hasPdf && (
          <button className="bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <FaFilePdf className="text-xl" />
            pdf
          </button>
        )}
        {hasAssignment && (
          <button className="bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <FaClipboardList className="text-xl" />
            Assignment
          </button>
        )}
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={onEdit}
          className="text-gray-600 border-2 border-gray-300 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-all"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-gradient-to-r from-[#FF4D4D] to-[#FF6B6B] text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default LessonCard;
