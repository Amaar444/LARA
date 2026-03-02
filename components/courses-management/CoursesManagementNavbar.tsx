"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CoursesManagementNavbar: React.FC = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <header 
        className="h-[60px] md:h-[70px] sticky top-0 z-50 flex items-center justify-between px-4 md:px-9 shadow-lg"
        style={{ background: "linear-gradient(to right, #ffb45a, #ffe6a5)" }}
      >
        {/* Left - Logo & Search */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link href="/dashboard" className="logo hover:scale-105 transition-transform">
            <Image 
              src="/images/Home in/Frame 1984077959.png" 
              alt="LARA logo" 
              width={45} 
              height={45}
              className="rounded-lg md:w-[55px] md:h-[55px]"
            />
          </Link>
          <div className="search-box hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="w-[140px] md:w-[190px] px-3.5 py-1.5 rounded-3xl border-none outline-none bg-white text-sm focus:ring-2 focus:ring-orange-300"
            />
          </div>
        </div>

        {/* Center - Navigation (Desktop) */}
        <nav className="hidden lg:flex gap-5 text-sm">
          <Link href="/instructor-home" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
            Home
          </Link>
          <Link href="/dashboard" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
            Dashboard
          </Link>
          <Link href="/courses-management" className="text-gray-800 font-semibold border-b-2 border-gray-800 pb-0.5">
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

        {/* Right - Profile & Mobile Toggle */}
        <div className="flex items-center gap-3 relative">
          <div 
            className="cursor-pointer hover:scale-110 transition-transform"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <Image
              src="/images/Home in/Frame 1984078083.png"
              alt="Profile"
              width={36}
              height={36}
              className="rounded-full object-cover border-2 border-white shadow-md md:w-[40px] md:h-[40px]"
            />
          </div>
          <button 
            className="text-xl bg-transparent border-none cursor-pointer hover:scale-110 transition-transform lg:hidden"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            {showMobileNav ? "✕" : "☰"}
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

      {/* Mobile Navigation Dropdown */}
      {showMobileNav && (
        <div className="lg:hidden sticky top-[60px] md:top-[70px] z-40 flex flex-col gap-2 px-4 py-3 shadow-md text-sm" style={{ background: "linear-gradient(to right, #ffb45a, #ffe6a5)" }}>
          <Link href="/instructor-home" className="text-gray-800 hover:text-orange-600 py-1">Home</Link>
          <Link href="/dashboard" className="text-gray-800 hover:text-orange-600 py-1">Dashboard</Link>
          <Link href="/courses-management" className="text-gray-800 font-semibold py-1">Courses Management</Link>
          <Link href="/course-builder" className="text-gray-800 hover:text-orange-600 py-1">Course Builder</Link>
          <Link href="/student-tracking" className="text-gray-800 hover:text-orange-600 py-1">Student Tracking</Link>
          <Link href="/final-quiz" className="text-gray-800 hover:text-orange-600 py-1">Final Quiz</Link>
        </div>
      )}
    </>
  );
};

export default CoursesManagementNavbar;
