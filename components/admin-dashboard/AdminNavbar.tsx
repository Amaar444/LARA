"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface AdminNavbarProps {
  activeTab: "dashboard" | "user-management" | "course-management";
}

const AdminNavbar: React.FC<AdminNavbarProps> = ({ activeTab }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className="py-4 px-4 md:px-8 flex items-center justify-between animate-slideDown relative">
      {/* Left - Profile Avatar */}
      <div className="relative">
        <div 
          className="cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setShowProfileMenu(!showProfileMenu)}
        >
          <Image
            src="/images/Ellipse%2069.png"
            alt="Admin Profile"
            width={60}
            height={60}
            className="rounded-full object-cover border-3 border-white shadow-lg w-[45px] h-[45px] md:w-[60px] md:h-[60px]"
          />
        </div>

        {/* Profile Menu Dropdown */}
        {showProfileMenu && (
          <div className="absolute top-[60px] md:top-[70px] left-0 bg-white rounded-lg shadow-lg min-w-[150px] py-2 z-50 animate-fadeIn">
            <Link href="/admin-profile" className="block px-4 py-2 text-gray-800 text-sm hover:bg-orange-100">
              Profile
            </Link>
            <Link href="#" className="block px-4 py-2 text-gray-800 text-sm hover:bg-orange-100">
              Settings
            </Link>
            <Link href="/login" className="block px-4 py-2 text-gray-800 text-sm hover:bg-orange-100">
              Logout
            </Link>
          </div>
        )}
      </div>

      {/* Center - Navigation (Desktop) */}
      <nav className="hidden md:flex gap-8 text-base">
        <Link 
          href="/admin-dashboard" 
          className={`transition-all ${activeTab === "dashboard" 
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1" 
            : "text-gray-700 hover:text-blue-600"}`}
        >
          Dashboard
        </Link>
        <Link 
          href="/admin-users" 
          className={`transition-all ${activeTab === "user-management" 
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1" 
            : "text-gray-700 hover:text-blue-600"}`}
        >
          User Management
        </Link>
        <Link 
          href="/admin-courses" 
          className={`transition-all ${activeTab === "course-management" 
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1" 
            : "text-gray-700 hover:text-blue-600"}`}
        >
          Course Management
        </Link>
      </nav>

      {/* Right - Hamburger (mobile) / Empty spacer (desktop) */}
      <div className="w-[45px] md:w-[60px] flex justify-end">
        <button 
          className="md:hidden text-2xl bg-transparent border-none cursor-pointer"
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          {showMobileNav ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {showMobileNav && (
        <nav className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl py-4 px-6 flex flex-col gap-3 z-50 md:hidden animate-fadeIn">
          <Link 
            href="/admin-dashboard" 
            className={`py-2 px-4 rounded-lg transition-all ${activeTab === "dashboard" 
              ? "bg-blue-50 text-blue-600 font-semibold" 
              : "text-gray-700 hover:bg-gray-50"}`}
            onClick={() => setShowMobileNav(false)}
          >
            Dashboard
          </Link>
          <Link 
            href="/admin-users" 
            className={`py-2 px-4 rounded-lg transition-all ${activeTab === "user-management" 
              ? "bg-blue-50 text-blue-600 font-semibold" 
              : "text-gray-700 hover:bg-gray-50"}`}
            onClick={() => setShowMobileNav(false)}
          >
            User Management
          </Link>
          <Link 
            href="/admin-courses" 
            className={`py-2 px-4 rounded-lg transition-all ${activeTab === "course-management" 
              ? "bg-blue-50 text-blue-600 font-semibold" 
              : "text-gray-700 hover:bg-gray-50"}`}
            onClick={() => setShowMobileNav(false)}
          >
            Course Management
          </Link>
        </nav>
      )}
    </header>
  );
};

export default AdminNavbar;
