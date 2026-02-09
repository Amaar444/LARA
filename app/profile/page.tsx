"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaVenusMars, FaEdit, FaSave } from "react-icons/fa";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Nourhan Hessen",
    email: "nourhanhessen142@gmail.com",
    gender: "Female",
    phone: "01535451875",
  });

  const handleEdit = (field: string) => {
    setIsEditing(field);
  };

  const handleSave = () => {
    setIsEditing(null);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <style jsx global>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 174, 116, 0.3); }
          50% { box-shadow: 0 0 30px rgba(255, 174, 116, 0.6); }
        }
        .animate-fadeInDown { animation: fadeInDown 0.6s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.5s ease-out forwards; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
      `}</style>
      {/* Header */}
      <header 
        className="h-[70px] sticky top-0 z-50 flex items-center justify-between px-9 shadow-lg animate-fadeInDown"
        style={{ background: "linear-gradient(to right, #ffb45a, #ffe6a5)" }}
      >
        {/* Left - Logo & Search */}
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:scale-105 transition-transform">
            <Image src="/images/about/logo.png" alt="LARA logo" width={55} height={55} className="rounded-lg" />
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
          <Link href="/" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
            Home
          </Link>
          <Link href="/student-dashboard" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
            Dashboard
          </Link>
          <Link href="/course-player" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
            Course Player
          </Link>
          <Link href="/courses" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
            Recommended Courses
          </Link>
          <Link href="/quiz" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
            Quiz
          </Link>
          <Link href="/about" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
            About
          </Link>
        </nav>

        {/* Right - Profile & Menu */}
        <div className="flex items-center gap-4 relative">
          <div 
            className="cursor-pointer hover:scale-110 transition-transform"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <Image
              src="/images/dashboard/Ellipse%2068.png"
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
            <div className="absolute top-[54px] right-0 bg-white rounded-lg shadow-lg min-w-[130px] py-2 z-50 animate-fadeInDown">
              <Link href="/profile" className="block px-4 py-2 text-gray-800 text-sm hover:bg-[#ffe6c5] font-semibold">
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

      <main className="max-w-5xl mx-auto px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/student-dashboard" 
          className="inline-flex items-center gap-2 text-gray-700 hover:text-orange-600 mb-8 font-semibold transition-all hover:gap-3 animate-fadeInUp"
        >
          <span className="text-2xl">←</span> Back
        </Link>

        {/* Profile Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 animate-scaleIn border-2 border-orange-100">
          {/* Avatar */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative animate-pulse-glow">
              <Image
                src="/images/dashboard/Ellipse%2068.png"
                alt="Profile Photo"
                width={140}
                height={140}
                className="rounded-full border-4 border-orange-300"
              />
              <button className="absolute bottom-2 right-2 w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-300 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <FaEdit className="text-white text-lg" />
              </button>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">{profileData.name}</h2>
            <p className="text-gray-500">{profileData.email}</p>
          </div>

          {/* Profile Fields */}
          <div className="space-y-6 max-w-2xl mx-auto">
            {/* Full Name */}
            <div className="flex items-center justify-between border-2 border-orange-100 rounded-xl p-5 hover:shadow-lg transition-shadow bg-gradient-to-r from-orange-50 to-white">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-300 rounded-full flex items-center justify-center">
                  <FaUser className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1 font-semibold">Full Name</div>
                  {isEditing === "name" ? (
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      className="text-lg font-semibold border-2 border-orange-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  ) : (
                    <div className="text-lg font-semibold text-gray-800">{profileData.name}</div>
                  )}
                </div>
              </div>
              <button
                onClick={() => (isEditing === "name" ? handleSave() : handleEdit("name"))}
                className="px-5 py-2 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-md flex items-center gap-2"
              >
                {isEditing === "name" ? <><FaSave /> Save</> : <><FaEdit /> Edit</>}
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between border-2 border-orange-100 rounded-xl p-5 hover:shadow-lg transition-shadow bg-gradient-to-r from-orange-50 to-white">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-300 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1 font-semibold">Email</div>
                  {isEditing === "email" ? (
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className="text-lg font-semibold border-2 border-orange-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  ) : (
                    <div className="text-lg font-semibold text-gray-800">{profileData.email}</div>
                  )}
                </div>
              </div>
              <button
                onClick={() => (isEditing === "email" ? handleSave() : handleEdit("email"))}
                className="px-5 py-2 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-md flex items-center gap-2"
              >
                {isEditing === "email" ? <><FaSave /> Save</> : <><FaEdit /> Edit</>}
              </button>
            </div>

            {/* Gender */}
            <div className="flex items-center justify-between border-2 border-orange-100 rounded-xl p-5 hover:shadow-lg transition-shadow bg-gradient-to-r from-orange-50 to-white">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-300 rounded-full flex items-center justify-center">
                  <FaVenusMars className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1 font-semibold">Gender</div>
                  {isEditing === "gender" ? (
                    <select
                      value={profileData.gender}
                      onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })}
                      className="text-lg font-semibold border-2 border-orange-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  ) : (
                    <div className="text-lg font-semibold text-gray-800">{profileData.gender}</div>
                  )}
                </div>
              </div>
              <button
                onClick={() => (isEditing === "gender" ? handleSave() : handleEdit("gender"))}
                className="px-5 py-2 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-md flex items-center gap-2"
              >
                {isEditing === "gender" ? <><FaSave /> Save</> : <><FaEdit /> Edit</>}
              </button>
            </div>

            {/* Phone Number */}
            <div className="flex items-center justify-between border-2 border-orange-100 rounded-xl p-5 hover:shadow-lg transition-shadow bg-gradient-to-r from-orange-50 to-white">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-300 rounded-full flex items-center justify-center">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1 font-semibold">Phone Number</div>
                  {isEditing === "phone" ? (
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      className="text-lg font-semibold border-2 border-orange-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  ) : (
                    <div className="text-lg font-semibold text-gray-800">{profileData.phone}</div>
                  )}
                </div>
              </div>
              <button
                onClick={() => (isEditing === "phone" ? handleSave() : handleEdit("phone"))}
                className="px-5 py-2 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-md flex items-center gap-2"
              >
                {isEditing === "phone" ? <><FaSave /> Save</> : <><FaEdit /> Edit</>}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-10 py-8 mt-5 relative overflow-hidden" style={{ background: "linear-gradient(to right, #ffb45a, #ffe6a5)" }}>
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <Image src="/images/my-courses/logo.png" alt="LARA" width={70} height={70} className="hover:scale-105 transition-transform duration-300 rounded-lg" />
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-3">
            <div className="social-btn w-11 h-11 bg-[#d98a47] rounded-full flex items-center justify-center">
              <span className="text-white font-bold">f</span>
            </div>
            <div className="social-btn w-11 h-11 bg-[#d98a47] rounded-full flex items-center justify-center">
              <span className="text-white font-bold">𝕏</span>
            </div>
            <div className="social-btn w-11 h-11 bg-[#d98a47] rounded-full flex items-center justify-center">
              <span className="text-white font-bold">in</span>
            </div>
            <div className="social-btn w-11 h-11 bg-[#d98a47] rounded-full flex items-center justify-center">
              <span className="text-white">📷</span>
            </div>
            <div className="social-btn w-11 h-11 bg-[#d98a47] rounded-full flex items-center justify-center">
              <span className="text-white">▶️</span>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
          {/* Quick Links */}
          <div className="footer-card rounded-2xl p-5 slide-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <h4 className="text-[#8B4513] font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-xl">🚀</span> Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#5D4E37]">
              <li className="footer-link"><Link href="/">Home</Link></li>
              <li className="footer-link"><Link href="/courses">All Courses</Link></li>
              <li className="footer-link"><Link href="#">Instructors</Link></li>
              <li className="footer-link"><Link href="/about">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-card rounded-2xl p-5 slide-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <h4 className="text-[#8B4513] font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-xl">💬</span> Support
            </h4>
            <ul className="space-y-2 text-sm text-[#5D4E37]">
              <li className="footer-link"><Link href="#">Help Center</Link></li>
              <li className="footer-link"><Link href="#">FAQs</Link></li>
              <li className="footer-link"><Link href="#">Contact Us</Link></li>
              <li className="footer-link"><Link href="#">Community</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div className="footer-card rounded-2xl p-5 slide-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <h4 className="text-[#8B4513] font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-xl">👤</span> Account
            </h4>
            <ul className="space-y-2 text-sm text-[#5D4E37]">
              <li className="footer-link"><Link href="/profile">My Profile</Link></li>
              <li className="footer-link"><Link href="/my-courses">My Courses</Link></li>
              <li className="footer-link"><Link href="#">Settings</Link></li>
              <li className="footer-link"><Link href="#">Sign Out</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-card rounded-2xl p-5 slide-in" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <h4 className="text-[#8B4513] font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-xl">📞</span> Contact
            </h4>
            <div className="space-y-3 text-sm text-[#5D4E37]">
              <div className="flex items-center gap-2">
                <span className="text-lg">📱</span>
                <span>+123 456 789</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">✉️</span>
                <span>info@lara.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center pt-4 border-t border-[#d98a47]/30 fade-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
          <p className="text-xs text-[#8B4513]">
            © 2025 LARA Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
