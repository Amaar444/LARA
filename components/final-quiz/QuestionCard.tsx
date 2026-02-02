"use client";

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

interface QuestionCardProps {
  id: number;
  question: string;
  options: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  delay?: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  id,
  question,
  options,
  onEdit,
  onDelete,
  delay = 0,
}) => {
  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg mb-4 border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300 animate-slideUp"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Question Header */}
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-lg font-semibold text-gray-900 flex-1">{question}</h4>
        <div className="flex items-center gap-2 ml-4">
          <button
            onClick={() => onEdit(id)}
            className="p-2 rounded-lg border-2 border-gray-300 text-gray-600 hover:border-orange-400 hover:text-orange-500 transition-all hover:scale-110"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => onDelete(id)}
            className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all hover:scale-110"
          >
            <FaTrash />
          </button>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {options.map((option, index) => (
          <div
            key={index}
            className="px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-700 hover:border-orange-300 hover:bg-orange-50 transition-all cursor-pointer"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
