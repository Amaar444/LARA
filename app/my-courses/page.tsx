"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MyCoursesPage() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* ====== HEADER ====== */}
      <header 
        className="h-[70px] sticky top-0 z-20 flex items-center justify-between px-9"
        style={{ background: "linear-gradient(to right, #ffb45a, #ffe6a5)" }}
      >
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="logo">
            <Image src="/images/my-courses/logo.png" alt="LARA logo" width={55} height={55} />
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search"
              className="w-[190px] px-3.5 py-1.5 rounded-3xl border-none outline-none bg-white text-sm"
            />
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex gap-5 text-sm">
          <Link href="/my-courses" className="text-gray-800 font-semibold border-b-2 border-gray-800 pb-0.5">
            Home
          </Link>
          <Link href="/student-dashboard" className="text-gray-800 hover:font-semibold">
            Dashboard
          </Link>
          <Link href="/course-player" className="text-gray-800 hover:font-semibold">
            Course Player
          </Link>
          <Link href="/courses" className="text-gray-800 hover:font-semibold">
            Recommended Courses
          </Link>
          <Link href="/quiz" className="text-gray-800 hover:font-semibold">
            Quiz
          </Link>
          <Link href="/about" className="text-gray-800 hover:font-semibold">
            About
          </Link>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3 relative">
          <div 
            className="cursor-pointer"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <Image
              src="/images/my-courses/Ellipse 68 (1).png"
              alt="Profile"
              width={34}
              height={34}
              className="rounded-full object-cover"
            />
          </div>
          <button className="text-xl bg-transparent border-none cursor-pointer">☰</button>

          {/* Profile Menu */}
          {showProfileMenu && (
            <div className="absolute top-[54px] right-0 bg-white rounded-lg shadow-lg min-w-[130px] py-2">
              <Link href="/profile" className="block px-4 py-2 text-gray-800 text-sm hover:bg-[#ffe6c5]">
                Profile
              </Link>
              <Link href="#" className="block px-4 py-2 text-gray-800 text-sm hover:bg-[#ffe6c5]">
                Setting
              </Link>
              <Link href="/login" className="block px-4 py-2 text-gray-800 text-sm hover:bg-[#ffe6c5]">
                Logout
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* ====== HERO ====== */}
      <section className="bg-[#ffe9b9]">
        <div className="max-w-[1150px] mx-auto flex flex-col md:flex-row justify-between items-center px-3 py-8 md:py-10">
          <div className="max-w-[470px] text-center md:text-left mb-6 md:mb-0">
            <p className="text-xl text-[#ff8b2b] mb-1">Welcome ,</p>
            <h1 className="text-[38px] leading-tight font-bold mb-3.5">
              Learn Smart, Grow<br />Fast
            </h1>
            <p className="text-sm text-gray-700 mb-6 max-w-[360px] mx-auto md:mx-0">
              Access courses tailored for your career and personal growth.
            </p>
            <Link
              href="/course-player"
              className="inline-block px-7 py-3 rounded-3xl bg-[#ff7b2e] text-white font-semibold hover:bg-[#e66b1e] transition-colors"
            >
              Go to My Courses
            </Link>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-80 h-80">
              <div 
                className="w-full h-full rounded-full bg-white flex justify-center items-center border-8 border-white shadow-2xl"
                style={{ boxShadow: "0 0 0 16px #ffd39b" }}
              >
                <Image
                  src="/images/my-courses/Frame 1984077640.png"
                  alt="Student"
                  width={310}
                  height={300}
                  className="rounded-full object-cover"
                />
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl animate-bounce" style={{ animationDelay: "0s" }}>
                ❤️
              </div>
              <div className="absolute top-1/4 -left-6 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-xl" style={{ animation: "pulse 2s infinite" }}>
                ▶️
              </div>
              <div className="absolute bottom-8 -right-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-lg animate-bounce" style={{ animationDelay: "0.5s" }}>
                ⭐
              </div>
              <div className="absolute bottom-1/4 -left-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-base" style={{ animation: "pulse 2s infinite", animationDelay: "0.5s" }}>
                👍
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== MAIN WRAPPER ====== */}
      <main className="max-w-[1150px] mx-auto px-3 pt-8 pb-16">

        {/* ====== MOST POPULAR CATEGORIES ====== */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-[#0b9152]">Most Popular</span> Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "unsplash_lUSFeh77gcs.png", title: "Machine Learning", desc: "120 Courses, 40,000 Learner" },
              { img: ",;.png", title: "Artificial Intelligence", desc: "150 Courses, 50,000 Learner" },
              { img: "bhj.png", title: "Cloud Computing", desc: "80 Courses, 25,000 Learner" },
              { img: "io.png", title: "Web Development", desc: "200 Courses, 70,000 Learner" },
              { img: "lk.png", title: "Data Science", desc: "100 Courses, 35,000 Learner" },
              { img: "tg.png", title: "Mobile App Development", desc: "90 Courses, 30,000 Learner" },
            ].map((cat, idx) => (
              <article key={idx} className="bg-gradient-to-br from-[#fff6cf] to-[#ffe9b9] rounded-2xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-orange-100">
                <div className="overflow-hidden rounded-xl mb-3">
                  <Image
                    src={`/images/my-courses/${cat.img}`}
                    alt={cat.title}
                    width={400}
                    height={200}
                    className="w-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-base font-semibold mb-1">{cat.title}</h3>
                <p className="text-[13px] text-gray-600">{cat.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ====== OUR BEST INSTRUCTOR ====== */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#0b9152]">Our Best Instructors</h2>

          <div className="flex items-center gap-2.5">
            <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-lg border-none cursor-pointer hover:shadow-lg">
              ‹
            </button>

            <div className="flex overflow-x-auto gap-3.5 scroll-smooth p-1" style={{ scrollbarWidth: "thin" }}>
              {[
                { img: "image 13.png", name: "Ibrahim Adel", role: "English" },
                { img: "88.png", name: "Paul Bullem", role: "Registered Nutritionist" },
                { img: "'p;.png", name: "Osama Mohammed", role: "Software engineer" },
                { img: ",m.png", name: "Ehab Fayez", role: "UI/UX Designer" },
              ].map((inst, idx) => (
                <article key={idx} className="min-w-[170px] max-w-[170px] bg-white rounded-2xl p-3 text-center shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100">
                  <div className="overflow-hidden rounded-xl mb-2.5">
                    <Image
                      src={`/images/my-courses/${inst.img}`}
                      alt={inst.name}
                      width={170}
                      height={170}
                      className="w-full transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h3 className="text-sm font-semibold mb-0.5">{inst.name}</h3>
                  <p className="text-xs text-gray-600">{inst.role}</p>
                </article>
              ))}
            </div>

            <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-lg border-none cursor-pointer hover:shadow-lg">
              ›
            </button>
          </div>
        </section>

        {/* ====== STUDENT FEEDBACK ====== */}
        <section className="bg-gradient-to-br from-[#fff7d9] to-[#ffe9b9] rounded-2xl px-4 py-8 relative mb-12 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#0b9152]">Student Feedback</h2>

          <div className="flex items-center gap-2.5">
            <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-lg border-none cursor-pointer hover:shadow-lg">
              ‹
            </button>

            <div className="flex overflow-x-auto gap-3.5 scroll-smooth p-2" style={{ scrollbarWidth: "thin" }}>
              {[
                {
                  img: "/images/Ellipse%2069%20(1).png",
                  name: "Fady Aziz",
                  role: "UI/UX Designer",
                  text: "Your teaching method and the program you're using to record this course are much, much better than the previous one...",
                  useFullPath: true,
                },
                {
                  img: "Rectangle 25.png",
                  name: "Jenny Wilson",
                  role: "UI/UX Designer",
                  text: "To be honest, I've watched a large number of videos that explain things, and I haven't found anything as clear as this.",
                },
                {
                  img: "Ellipse 70.png",
                  name: "Fatima",
                  role: "Python Developer",
                  text: "This is exactly what I was looking for, very practical and easy to follow. Thanks for the great effort!",
                },
              ].map((feedback, idx) => (
                <article key={idx} className="min-w-[280px] max-w-[280px] bg-white rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={feedback.useFullPath ? feedback.img : `/images/my-courses/${feedback.img}`}
                      alt={feedback.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover border-3 border-orange-300 shadow-md"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold">{feedback.name}</h3>
                      <p className="text-[11px] text-gray-600">{feedback.role}</p>
                    </div>
                    <span className="text-4xl text-orange-400 font-serif">"</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed italic">{feedback.text}</p>
                </article>
              ))}
            </div>

            <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-lg border-none cursor-pointer hover:shadow-lg">
              ›
            </button>
          </div>
        </section>

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

      </main>

      {/* ====== FOOTER ====== */}
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
