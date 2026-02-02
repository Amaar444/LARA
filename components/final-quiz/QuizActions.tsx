"use client";

import React from "react";

interface QuizActionsProps {
  onCancel: () => void;
  onSave: () => void;
}

const QuizActions: React.FC<QuizActionsProps> = ({ onCancel, onSave }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-8 animate-fadeIn" style={{ animationDelay: "0.5s" }}>
      <button
        onClick={onCancel}
        className="px-8 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all hover:scale-105"
      >
        Cancel
      </button>
      <button
        onClick={onSave}
        className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        Save
      </button>
    </div>
  );
};

export default QuizActions;
