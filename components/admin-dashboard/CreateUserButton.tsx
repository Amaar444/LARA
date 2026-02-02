"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";

interface CreateUserButtonProps {
  onClick: () => void;
}

const CreateUserButton: React.FC<CreateUserButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slideDown"
    >
      <FaPlus className="text-xs" />
      Create User
    </button>
  );
};

export default CreateUserButton;
