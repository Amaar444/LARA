"use client";

import React from "react";

interface ProfileBioProps {
  value: string;
  onChange: (value: string) => void;
  delay?: number;
}

const ProfileBio: React.FC<ProfileBioProps> = ({ value, onChange, delay = 0 }) => {
  return (
    <div 
      className="animate-slideUp"
      style={{ animationDelay: `${delay}s` }}
    >
      <label className="block text-gray-600 text-sm mb-2 font-medium">Bio</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-white text-gray-800 focus:border-orange-400 focus:outline-none transition-all hover:border-gray-400 resize-none"
        placeholder="Tell us about yourself..."
      />
    </div>
  );
};

export default ProfileBio;
