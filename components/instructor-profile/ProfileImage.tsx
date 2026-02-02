"use client";

import React from "react";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";

interface ProfileImageProps {
  imageUrl: string;
  onImageChange?: () => void;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ imageUrl, onImageChange }) => {
  return (
    <div className="relative w-20 h-20 mb-6 animate-fadeIn group">
      <Image
        src={imageUrl}
        alt="Profile"
        fill
        className="rounded-full object-cover border-4 border-orange-300 shadow-lg group-hover:border-orange-500 transition-all"
      />
      <button
        onClick={onImageChange}
        className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 rounded-full shadow-md hover:bg-orange-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
      >
        <FaCamera className="text-xs" />
      </button>
    </div>
  );
};

export default ProfileImage;
