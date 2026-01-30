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
          <Link href="/" className="text-gray-800 font-semibold border-b-2 border-gray-800 pb-0.5">
            Home
          </Link>
          <Link href="/dashboard" className="text-gray-800 hover:font-semibold">
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
            <div 
              className="w-[260px] h-[260px] rounded-full bg-white flex justify-center items-center"
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
          </div>
        </div>
      </section>

      {/* ====== MAIN WRAPPER ====== */}
      <main className="max-w-[1150px] mx-auto px-3 pt-8 pb-16">

        {/* ====== MOST POPULAR CATEGORIES ====== */}
        <section className="mb-10">
          <h2 className="text-2xl text-center mb-6">
            <span className="text-[#0b9152]">Most Popular</span> Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { img: "unsplash_lUSFeh77gcs.png", title: "Machine Learning", desc: "120 Courses, 40,000 Learner" },
              { img: ",;.png", title: "Artificial Intelligence", desc: "150 Courses, 50,000 Learner" },
              { img: "bhj.png", title: "Cloud Computing", desc: "80 Courses, 25,000 Learner" },
              { img: "io.png", title: "Web Development", desc: "200 Courses, 70,000 Learner" },
              { img: "lk.png", title: "Data Science", desc: "100 Courses, 35,000 Learner" },
              { img: "tg.png", title: "Mobile App Development", desc: "90 Courses, 30,000 Learner" },
            ].map((cat, idx) => (
              <article key={idx} className="bg-[#fff6cf] rounded-2xl p-3.5 shadow-sm">
                <Image
                  src={`/images/my-courses/${cat.img}`}
                  alt={cat.title}
                  width={400}
                  height={200}
                  className="w-full rounded-xl mb-2.5"
                />
                <h3 className="text-base font-semibold mb-1">{cat.title}</h3>
                <p className="text-[13px] text-gray-600">{cat.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ====== OUR BEST INSTRUCTOR ====== */}
        <section className="mb-10">
          <h2 className="text-2xl text-center mb-6 text-[#0b9152]">Our Best Instructor</h2>

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
                <article key={idx} className="min-w-[170px] max-w-[170px] bg-white rounded-2xl p-2.5 text-center shadow-sm">
                  <Image
                    src={`/images/my-courses/${inst.img}`}
                    alt={inst.name}
                    width={170}
                    height={170}
                    className="w-full rounded-xl mb-2"
                  />
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
        <section className="bg-[#fff7d9] rounded-2xl px-4 py-6 relative mb-10">
          <h2 className="text-2xl text-center mb-6">Student Feedback</h2>

          <div className="flex items-center gap-2.5">
            <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-lg border-none cursor-pointer hover:shadow-lg">
              ‹
            </button>

            <div className="flex overflow-x-auto gap-3.5 scroll-smooth p-2" style={{ scrollbarWidth: "thin" }}>
              {[
                {
                  img: "Ellipse 70.png",
                  name: "Fady Aziz",
                  role: "UI/UX Designer",
                  text: "Your teaching method and the program you're using to record this course are much, much better than the previous one...",
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
                <article key={idx} className="min-w-[260px] max-w-[260px] bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Image
                      src={`/images/my-courses/${feedback.img}`}
                      alt={feedback.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-sm font-semibold">{feedback.name}</h3>
                      <p className="text-[11px] text-gray-600">{feedback.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">{feedback.text}</p>
                </article>
              ))}
            </div>

            <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-lg border-none cursor-pointer hover:shadow-lg">
              ›
            </button>
          </div>
        </section>

        {/* ChatBot Link - Fixed Position */}
        <Link href="/chatbot" className="fixed right-10 bottom-10 z-30">
          <Image
            src="/images/my-courses/unsplash_d42U7dK0M9w.png"
            alt="Go to ChatBot"
            width={70}
            height={70}
            className="cursor-pointer hover:scale-110 transition-transform hover:shadow-xl rounded-full"
          />
        </Link>

      </main>

      {/* ====== FOOTER ====== */}
      <footer 
        className="text-black px-10 py-4 mt-5"
        style={{ background: "linear-gradient(to right, #f2b164, #e5914d, #f2b164)" }}
      >
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/50 pb-2.5 mb-4 gap-4">
          <Image src="/images/my-courses/logo.png" alt="LARA logo" width={60} height={60} />

          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <div className="flex items-center gap-2 text-sm">
              <Image src="/images/my-courses/nm.png" alt="Phone" width={20} height={20} />
              <span className="font-semibold">Phone:</span>
              <span className="text-white">+123 456 789</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Image src="/images/my-courses/Overlay+Border.png" alt="Email" width={20} height={20} />
              <span className="font-semibold">Email:</span>
              <span className="text-white">info@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-2.5">
          <div className="max-w-[260px]">
            <p className="text-sm">An innovative educational platform offering smart courses to enhance your skills.</p>
          </div>

          <div>
            <p className="font-bold mb-1">Quick Links</p>
            <ul className="text-sm space-y-0.5 list-disc ml-4">
              <li>Home</li>
              <li>Courses</li>
              <li>About LARA</li>
              <li>Instructors</li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-1">Support</p>
            <ul className="text-sm space-y-0.5 list-disc ml-4">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-1">Your Account</p>
            <ul className="text-sm space-y-0.5 list-disc ml-4">
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-[13px] text-white">© 2025 LARA — All rights reserved</p>
      </footer>
    </div>
  );
}
