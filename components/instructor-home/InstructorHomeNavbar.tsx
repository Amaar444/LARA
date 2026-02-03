"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBell } from "react-icons/fa";

const InstructorHomeNavbar: React.FC = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header 
      className="h-[70px] sticky top-0 z-50 flex items-center justify-between px-9 shadow-lg"
      style={{ background: "linear-gradient(to right, #ffb45a, #ffe6a5)" }}
    >
      {/* Left - Logo & Search */}
      <div className="flex items-center gap-4">
        <Link href="/instructor-home" className="logo hover:scale-105 transition-transform">
          <Image 
            src="/images/Home in/Frame 1984077959.png" 
            alt="LARA logo" 
            width={55} 
            height={55}
            className="rounded-lg"
          />
        </Link>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
            className="w-[190px] px-3.5 py-1.5 rounded-3xl border-none outline-none bg-white text-sm focus:ring-2 focus:ring-orange-300"
          />
        </div>
      </div>

      {/* Center - Navigation */}
      <nav className="hidden md:flex gap-5 text-sm">
        <Link href="/instructor-home" className="text-gray-800 font-semibold border-b-2 border-gray-800 pb-0.5">
          Home
        </Link>
        <Link href="/dashboard" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
          Dashboard
        </Link>
        <Link href="/courses-management" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
          Courses Management
        </Link>
        <Link href="/course-builder" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
          Course Builder
        </Link>
        <Link href="/student-tracking" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
          Student Tracking
        </Link>
        <Link href="/final-quiz" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
          Final Quiz
        </Link>
      </nav>

      {/* Right - Profile & Menu */}
      <div className="flex items-center gap-4 relative">
        <button className="relative hover:scale-110 transition-transform">
          <FaBell className="text-xl text-gray-700" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
        </button>
        <div 
          className="cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setShowProfileMenu(!showProfileMenu)}
        >
          <Image
            src="/images/Home in/Frame 1984078083.png"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full object-cover border-2 border-white shadow-md"
          />
        </div>
        <button className="text-xl bg-transparent border-none cursor-pointer hover:scale-110 transition-transform">
          ☰
        </button>

        {/* Profile Menu Dropdown */}
        {showProfileMenu && (
          <div className="absolute top-[54px] right-0 bg-white rounded-lg shadow-lg min-w-[130px] py-2 z-50 animate-fadeIn">
            <Link href="/instructor-profile" className="block px-4 py-2 text-gray-800 text-sm hover:bg-[#ffe6c5]">
              Profile
            </Link>
            <Link href="#" className="block px-4 py-2 text-gray-800 text-sm hover:bg-[#ffe6c5]">
              Settings
            </Link>
            <Link href="/login" className="block px-4 py-2 text-gray-800 text-sm hover:bg-[#ffe6c5]">
              Logout
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default InstructorHomeNavbar;
