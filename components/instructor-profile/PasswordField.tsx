"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface PasswordFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  delay?: number;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  value,
  onChange,
  placeholder = "*****",
  delay = 0,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div 
      className="animate-slideUp"
      style={{ animationDelay: `${delay}s` }}
    >
      <label className="block text-gray-600 text-sm mb-2 font-medium">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-800 focus:border-orange-400 focus:outline-none transition-all hover:border-gray-400 pr-12"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
