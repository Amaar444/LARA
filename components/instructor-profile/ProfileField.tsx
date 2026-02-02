"use client";

import React from "react";

interface ProfileFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  delay?: number;
}

const ProfileField: React.FC<ProfileFieldProps> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  delay = 0,
}) => {
  return (
    <div 
      className="animate-slideUp"
      style={{ animationDelay: `${delay}s` }}
    >
      <label className="block text-gray-600 text-sm mb-2 font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-800 focus:border-orange-400 focus:outline-none transition-all hover:border-gray-400"
      />
    </div>
  );
};

export default ProfileField;
