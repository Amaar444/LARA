"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRocket, FaBrain, FaUsers, FaGraduationCap, FaChartLine, FaLightbulb } from "react-icons/fa";

export default function AboutPage() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <style jsx global>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fadeInDown { animation: fadeInDown 0.6s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 0.6s ease-out forwards; }
        .animate-fadeInRight { animation: fadeInRight 0.6s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.5s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>

      {/* ===== HEADER ===== */}
      <header 
        className="h-[70px] sticky top-0 z-50 flex items-center justify-between px-9 shadow-lg"
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
          <Link href="/dashboard" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
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
          <Link href="/about" className="text-gray-800 font-semibold border-b-2 border-gray-800 pb-0.5">
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
              src="/images/about/Ellipse 68.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full object-cover border-2 border-white shadow-md"
            />
          </div>
          <button 
            className="text-xl bg-transparent border-none cursor-pointer hover:scale-110 transition-transform"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            ☰
          </button>

          {/* Profile Menu Dropdown */}
          {showProfileMenu && (
            <div className="absolute top-[54px] right-0 bg-white rounded-lg shadow-lg min-w-[130px] py-2 z-50 animate-fadeIn">
              <Link href="/profile" className="block px-4 py-2 text-gray-800 text-sm hover:bg-[#ffe6c5]">
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

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-[1200px] mx-auto my-12 mb-20 px-4 relative z-10">

        {/* Section 1 */}
        <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center mb-20">
          <div className="animate-fadeInLeft">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center animate-float shadow-lg">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <h1 className="text-[36px] font-bold leading-snug bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Innovative Education
              </h1>
            </div>
            <h2 className="text-[32px] font-bold leading-snug mb-6">
              with the Power of Artificial Intelligence
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed">
              At Lara, we leverage artificial intelligence to create personalized and engaging
              learning experiences. Our mission is to empower learners, make education accessible,
              and inspire a love for lifelong learning.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <FaBrain className="text-orange-500" />
                <span className="text-sm font-semibold">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <FaLightbulb className="text-amber-500" />
                <span className="text-sm font-semibold">Personalized</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center animate-fadeInRight" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-amber-300 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <Image
                src="/images/about/Group 469369.png"
                alt="Student at desk"
                width={400}
                height={400}
                className="w-[90%] max-w-[400px] relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center mb-20">
          <div className="flex justify-center order-2 lg:order-1 animate-fadeInLeft" style={{ animationDelay: "0.1s" }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-purple-300 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <Image
                src="/images/about/unsplash_uJLJ3a-CnxA.png"
                alt="AI learning"
                width={400}
                height={400}
                className="w-[90%] max-w-[400px] relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fadeInRight">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: "0.5s" }}>
                <FaChartLine className="text-xl text-white" />
              </div>
              <h2 className="text-[28px] font-bold leading-snug">
                Personalized Learning Paths
              </h2>
            </div>
            <p className="text-[16px] text-gray-700 leading-relaxed">
              Our recommendation engine analyzes each student's learning style, strengths,
              weaknesses, and educational goals to create unique learning paths. This adaptive
              approach ensures that every learner receives the most relevant content and
              resources, enhancing understanding and improving knowledge retention.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center mb-16">
          <div className="animate-fadeInLeft" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: "1s" }}>
                <FaBrain className="text-xl text-white" />
              </div>
              <h2 className="text-[28px] font-bold leading-snug">
                Instant Help, Always On
              </h2>
            </div>
            <p className="text-[16px] text-gray-700 leading-relaxed">
              Meet our AI-powered chatbot: your personal learning assistant available 24/7.
              It provides instant answers to course questions, guides you through challenging
              concepts, and helps with assignments—ensuring every student can learn smoothly
              and never feels stuck.
            </p>
          </div>

          <div className="flex justify-center animate-fadeInRight" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-teal-300 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <Image
                src="/images/about/unsplash_d42U7dK0M9w.png"
                alt="AI assistant robot"
                width={400}
                height={400}
                className="w-[90%] max-w-[400px] relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
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
              <li className="footer-link"><Link href="#">Contact Us</Link></li>
              <li className="footer-link"><Link href="#">Privacy Policy</Link></li>
              <li className="footer-link"><Link href="#">Terms of Use</Link></li>
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
              <li className="footer-link"><Link href="/login">Sign Out</Link></li>
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

        {/* Bottom */}
        <div className="border-t border-white/30 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 fade-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
          <p className="text-sm text-[#5D4E37] font-medium">© 2025 LARA Platform - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
