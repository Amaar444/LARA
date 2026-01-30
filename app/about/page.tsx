"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* ===== HEADER ===== */}
      <header 
        className="shadow-sm"
        style={{ background: "linear-gradient(to right, #ffb864, #ffe9a3)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 py-2.5 pb-3.5 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Image src="/images/about/logo.png" alt="LARA logo" width={50} height={50} />
          </div>

          {/* Center: Search + Nav */}
          <div className="hidden lg:flex flex-1 items-center gap-6 mx-6">
            <div className="flex items-center bg-white rounded-full px-3 py-1.5 border border-gray-200 w-60">
              <input
                type="text"
                placeholder="Search"
                className="border-none outline-none w-full text-sm"
              />
            </div>

            <nav className="flex gap-4 text-sm">
              <Link href="/" className="text-gray-800 hover:text-blue-600">
                Home
              </Link>
              <Link href="/dashboard" className="text-gray-800 hover:text-blue-600">
                Dashboard
              </Link>
              <Link href="/course-player" className="text-gray-800 hover:text-blue-600">
                Course Player
              </Link>
              <Link href="/courses" className="text-gray-800 hover:text-blue-600">
                Recommended Courses
              </Link>
              <Link href="/quiz" className="text-gray-800 hover:text-blue-600">
                Quiz
              </Link>
              <Link href="/about" className="text-blue-600 font-semibold">
                About
              </Link>
            </nav>
          </div>

          {/* Right: Avatar + Menu */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/about/Ellipse 68.png"
              alt="User"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />

            <button
              className="w-7 h-5 border-none bg-transparent flex flex-col justify-between cursor-pointer"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              <span className="block h-0.5 rounded bg-gray-800"></span>
              <span className="block h-0.5 rounded bg-gray-800"></span>
              <span className="block h-0.5 rounded bg-gray-800"></span>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {showMobileNav && (
          <nav 
            className="flex flex-col px-4 py-2 pb-3 gap-1.5 lg:hidden"
            style={{ background: "linear-gradient(to right, #ffb864, #ffe9a3)" }}
          >
            <Link href="/" className="text-gray-800 text-sm">Home</Link>
            <Link href="/dashboard" className="text-gray-800 text-sm">Dashboard</Link>
            <Link href="/course-player" className="text-gray-800 text-sm">Course Player</Link>
            <Link href="/courses" className="text-gray-800 text-sm">Recommended Courses</Link>
            <Link href="/quiz" className="text-gray-800 text-sm">Quiz</Link>
            <Link href="/about" className="text-blue-600 text-sm font-semibold">About</Link>
          </nav>
        )}
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-[1200px] mx-auto my-10 mb-16 px-4">

        {/* Section 1 */}
        <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div>
            <h1 className="text-[32px] font-bold leading-snug mb-4">
              Innovative Education with the Power<br />of Artificial Intelligence
            </h1>
            <p className="text-[15px] text-gray-700">
              At Lara, we leverage artificial intelligence to create personalized and engaging
              learning experiences. Our mission is to empower learners, make education accessible,
              and inspire a love for lifelong learning.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/about/Group 469369.png"
              alt="Student at desk"
              width={400}
              height={400}
              className="w-[90%] max-w-[400px]"
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center mb-16">
          <div className="flex justify-center order-2 lg:order-1">
            <Image
              src="/images/about/unsplash_uJLJ3a-CnxA.png"
              alt="AI learning"
              width={400}
              height={400}
              className="w-[90%] max-w-[400px]"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-[26px] font-bold leading-snug mb-4">
              Personalized Learning Paths
            </h2>
            <p className="text-[15px] text-gray-700">
              Our recommendation engine analyzes each student's learning style, strengths,
              weaknesses, and educational goals to create unique learning paths. This adaptive
              approach ensures that every learner receives the most relevant content and
              resources, enhancing understanding and improving knowledge retention.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div>
            <h2 className="text-[26px] font-bold leading-snug mb-4">
              Instant Help, Always On
            </h2>
            <p className="text-[15px] text-gray-700">
              Meet our AI-powered chatbot: your personal learning assistant available 24/7.
              It provides instant answers to course questions, guides you through challenging
              concepts, and helps with assignments—ensuring every student can learn smoothly
              and never feels stuck.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/about/unsplash_d42U7dK0M9w.png"
              alt="AI assistant robot"
              width={400}
              height={400}
              className="w-[90%] max-w-[400px]"
            />
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer 
        className="text-white py-6 px-0 pb-4"
        style={{ background: "linear-gradient(to right, #ffb864, #ff9c52)" }}
      >
        {/* Top */}
        <div className="max-w-[1200px] mx-auto px-4 pb-3 flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/40 gap-3">
          <div className="flex items-center gap-2">
            <Image src="/images/about/logo.png" alt="LARA logo" width={60} height={60} />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 text-sm font-semibold">
            <div className="flex items-center gap-2 text-black">
              <Image src="/images/about/nm.png" alt="Phone" width={20} height={20} />
              <span>Phone:</span>
              <span className="text-white font-medium ml-1">+123 456 789</span>
            </div>
            <div className="flex items-center gap-2 text-black">
              <Image src="/images/about/Overlay+Border.png" alt="Email" width={20} height={20} />
              <span>Email:</span>
              <span className="text-white font-medium ml-1">info@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="max-w-[1200px] mx-auto mt-3 mb-2.5 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-6 lg:gap-10 text-sm font-bold text-black">
          <div>
            <p className="leading-relaxed">
              An innovative educational platform offering smart courses to enhance your skills.
            </p>
          </div>

          <div>
            <p className="font-bold mb-2">Quick Links</p>
            <Link href="#" className="block text-black no-underline mb-1">• Home</Link>
            <Link href="#" className="block text-black no-underline mb-1">• Courses</Link>
            <Link href="#" className="block text-black no-underline mb-1">• About LARA</Link>
            <Link href="#" className="block text-black no-underline mb-1">• Instructors</Link>
          </div>

          <div>
            <p className="font-bold mb-2">Support</p>
            <Link href="#" className="block text-black no-underline mb-1">• Contact Us</Link>
            <Link href="#" className="block text-black no-underline mb-1">• FAQ</Link>
            <Link href="#" className="block text-black no-underline mb-1">• Privacy</Link>
            <Link href="#" className="block text-black no-underline mb-1">• Terms</Link>
          </div>

          <div>
            <p className="font-bold mb-2">Your Account</p>
            <Link href="#" className="block text-black no-underline mb-1">• Profile</Link>
            <Link href="#" className="block text-black no-underline mb-1">• Settings</Link>
            <Link href="#" className="block text-black no-underline mb-1">• Logout</Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-[13px] mt-2">
          © 2025 LARA — All rights reserved
        </div>
      </footer>
    </div>
  );
}
