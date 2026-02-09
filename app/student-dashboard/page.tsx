"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGraduationCap, FaPlay, FaLock, FaCheckCircle, FaChartBar, FaRocket, FaBook } from "react-icons/fa";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Course Progress Data
const coursesProgress = [
  {
    id: 1,
    title: "UI Design",
    instructor: "Ehab Fayez",
    progress: 25,
    image: "/images/Frame%201984078275.png",
    pieData: [
      { name: "Completed", value: 25, color: "#FFE0B2" },
      { name: "Locked", value: 50, color: "#FF9800" },
      { name: "Ongoing", value: 25, color: "#FFCCBC" },
    ],
  },
  {
    id: 2,
    title: "Design System",
    instructor: "Islam Hefne",
    progress: 80,
    image: "/images/image%204.png",
    pieData: [
      { name: "Completed", value: 80, color: "#FF9800" },
      { name: "Locked", value: 10, color: "#FFE0B2" },
      { name: "Ongoing", value: 10, color: "#FFCCBC" },
    ],
  },
];

// Match Rate Data
const matchRateData = [
  { name: "Match", rate: 1.0, label: "100.0%" },
  { name: "Mismatch", rate: 0, label: "0.0%" },
];

export default function StudentDashboard() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-white">
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to { width: var(--progress); }
        }
        .animate-fadeInDown { animation: fadeInDown 0.6s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 0.6s ease-out forwards; }
        .animate-fadeInRight { animation: fadeInRight 0.6s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.5s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-custom { animation: pulse 2s ease-in-out infinite; }
        .progress-bar { animation: progressFill 1.5s ease-out forwards; }
      `}</style>

      {/* ===== NAVBAR ===== */}
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
              className="w-[190px] px-3.5 py-1.5 rounded-3xl border border-gray-200 outline-none bg-white text-sm focus:ring-2 focus:ring-orange-300"
            />
          </div>
        </div>

        {/* Center - Navigation */}
        <nav className="hidden md:flex gap-5 text-sm">
          <Link href="/" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
            Home
          </Link>
          <Link href="/student-dashboard" className="text-gray-800 font-semibold border-b-2 border-orange-500 pb-0.5">
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

      {/* ===== HERO SECTION ===== */}
      <section 
        className="py-8 px-8"
        style={{ background: "linear-gradient(to right, #ffb45a, #87CEEB)" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="animate-fadeInLeft">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
              Welcome,
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
              Nourhan!
            </h2>
          </div>
          <div className="animate-fadeInRight hidden md:block">
            <Image
              src="/images/dashboard/People%20working%20together%20in%20coworking%20space.png"
              alt="Student at desk"
              width={350}
              height={280}
              className="animate-float"
            />
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Your Current Progress */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 animate-fadeInUp">
          Your Current Progress
        </h2>

        {/* Course Progress Cards */}
        <div className="space-y-6 mb-10">
          {coursesProgress.map((course, index) => (
            <div 
              key={course.id}
              className="bg-white rounded-2xl border-2 border-gray-200 p-6 flex flex-col lg:flex-row items-center gap-8 hover:shadow-xl transition-shadow duration-300 animate-fadeInUp"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Left - Course Card */}
              <div className="flex-shrink-0 w-full lg:w-auto">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full lg:w-64">
                  <div className="relative h-40">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                    <p className="text-gray-500 text-sm mb-3">{course.instructor}</p>
                    
                    {/* Progress Bar */}
                    <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
                      <div 
                        className="absolute top-0 left-0 h-full rounded-full progress-bar"
                        style={{ 
                          background: "linear-gradient(to right, #FF6B00, #FFB347)",
                          "--progress": `${course.progress}%`,
                          width: `${course.progress}%`
                        } as React.CSSProperties}
                      />
                    </div>
                    <p className="text-right text-sm text-gray-600 mb-3">{course.progress}%</p>
                    
                    <Link 
                      href="/course-player"
                      className="block w-full py-2.5 bg-orange-500 text-white text-center font-semibold rounded-full hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-md"
                    >
                      Continue Learning
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right - Pie Chart */}
              <div className="flex-1 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Your Progress in {course.title}
                </h3>
                <div className="flex justify-center">
                  <ResponsiveContainer width={250} height={200}>
                    <PieChart>
                      <Pie
                        data={course.pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {course.pieData.map((entry, i) => (
                          <Cell key={`cell-${i}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Legend */}
                <div className="flex justify-center gap-6 mt-2">
                  {course.pieData.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-gray-600">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Chart & Explore */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Course-Interest Match Rate */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 animate-fadeInLeft" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
              Course-Interest Match Rate
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={matchRateData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 1.2]} tickFormatter={(value) => value.toFixed(1)} />
                <Tooltip formatter={(value) => `${(Number(value) * 100).toFixed(1)}%`} />
                <Bar dataKey="rate" fill="#FFB347" radius={[4, 4, 0, 0]}>
                  {matchRateData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? "#FFB347" : "#E0E0E0"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-8 mt-2">
              <span className="text-sm font-semibold text-gray-700">100.0%</span>
              <span className="text-sm font-semibold text-gray-700">0.0%</span>
            </div>
          </div>

          {/* Explore More Courses */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 flex flex-col items-center justify-center animate-fadeInRight" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-48 h-48 mb-4">
              <Image
                src="/images/Online%20education.png"
                alt="Explore Courses"
                fill
                className="object-contain animate-float"
              />
            </div>
            <Link
              href="/courses"
              className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <FaRocket />
              Explore More Courses
            </Link>
          </div>
        </div>
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

      {/* ChatBot Link - Fixed Position */}
      <Link href="/chatbot" className="fixed right-10 bottom-10 z-30 group">
        <Image
          src="/images/my-courses/unsplash_d42U7dK0M9w.png"
          alt="Go to ChatBot"
          width={70}
          height={70}
          className="cursor-pointer hover:scale-110 transition-transform hover:shadow-2xl rounded-full shadow-lg animate-bounce"
        />
      </Link>
    </div>
  );
}
