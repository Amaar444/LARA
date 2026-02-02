"use client";

import React from "react";

interface AddQuestionButtonProps {
  onClick: () => void;
}

const AddQuestionButton: React.FC<AddQuestionButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fadeIn"
    >
      Add Question
    </button>
  );
};

export default AddQuestionButton;
