"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaShare, FaBookmark, FaCheckCircle, FaPlayCircle, FaLock, FaPaperPlane, FaImage, FaLink, FaThumbsUp } from "react-icons/fa";

// Sessions Data
const sessions = [
  { id: 1, title: "01. Introduction to UI Design", completed: true },
  { id: 2, title: "02. Is UI Design an important field with a future?", completed: true },
  { id: 3, title: "03. What type of device do you need?", completed: true },
  { id: 4, title: "04. Everything you need to know about colors", completed: true },
  { id: 5, title: "05. Exercitation elit incididunt esse", completed: false, active: true },
  { id: 6, title: "06. Everything you need to know about texts", completed: false },
];

// Comments Data
const comments = [
  {
    id: 1,
    author: "Anas",
    time: "12:05 Am",
    avatar: "/images/Ellipse%2069%20(1).png",
    text: "The course is excellent, and the explanation method is very simple and clear. I truly benefited from every lesson. Thank you for the wonderful content!",
    likes: 0,
  },
  {
    id: 2,
    author: "nour",
    time: "3:01 pm",
    avatar: "/images/Ellipse%2069.png",
    text: "The explanation is practical and straightforward, and I loved that the examples are realistic and easy to apply. I recommend this course to anyone starting out.",
    likes: 0,
  },
];

export default function CoursePlayerPage() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [commentText, setCommentText] = useState("");

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
        .animate-fadeInDown { animation: fadeInDown 0.6s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 0.6s ease-out forwards; }
        .animate-fadeInRight { animation: fadeInRight 0.6s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.5s ease-out forwards; }
      `}</style>

      {/* ===== NAVBAR ===== */}
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
          <Link href="/course-player" className="text-gray-800 font-semibold border-b-2 border-gray-800 pb-0.5">
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

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* Course Title & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 animate-fadeInUp">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            UI Design, A User - Centered Approach
          </h1>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-md flex items-center gap-2">
              <FaShare /> Share
            </button>
            <button className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-md flex items-center gap-2">
              <FaBookmark /> Save
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left - Video Player */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video */}
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl animate-fadeInLeft">
              <div className="aspect-video relative">
                <Image
                  src="/images/courses/ui-design-video-thumbnail.jpg"
                  alt="Video"
                  fill
                  className="object-cover opacity-70"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                    <FaPlayCircle className="text-orange-500 text-5xl ml-1" />
                  </button>
                </div>
                {/* Video Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center justify-between text-white text-sm mb-2">
                    <span>6:12 / 21:53</span>
                    <div className="flex items-center gap-3">
                      <button>⚙️</button>
                      <button>🔊</button>
                      <button>⛶</button>
                    </div>
                  </div>
                  <div className="h-1 bg-gray-600 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600 rounded-full" style={{ width: "28%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              {/* Comment Input */}
              <div className="flex items-start gap-3 mb-6 pb-6 border-b border-gray-200">
                <Image
                  src="/images/Ellipse%2068%20(1).png"
                  alt="Your Profile"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Comment"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 rounded-full outline-none focus:ring-2 focus:ring-orange-300 text-sm"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                    <FaImage className="text-gray-600 text-lg" />
                  </button>
                  <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                    <FaLink className="text-gray-600 text-lg" />
                  </button>
                  <button className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors">
                    <FaPaperPlane className="text-white text-lg" />
                  </button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment, index) => (
                  <div key={comment.id} className="animate-scaleIn" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                    <div className="flex items-start gap-3">
                      <Image
                        src={comment.avatar}
                        alt={comment.author}
                        width={45}
                        height={45}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-gray-900">{comment.author}</span>
                          <span className="text-gray-500 text-sm">{comment.time}</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-2">
                          {comment.text}
                        </p>
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-semibold">
                            <FaThumbsUp className="text-lg" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-800 text-sm font-semibold">
                            Replay
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Sessions List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24 animate-fadeInRight">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Sessions</h3>
                <span className="text-sm font-semibold text-gray-600">
                  <span className="text-orange-600">5/21</span> Completed
                </span>
              </div>

              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {sessions.map((session, index) => (
                  <div
                    key={session.id}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md animate-scaleIn ${
                      session.active
                        ? "bg-red-50 border-red-300"
                        : session.completed
                        ? "bg-white border-gray-200 hover:border-orange-300"
                        : "bg-gray-50 border-gray-200"
                    }`}
                    style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        {session.completed ? (
                          <FaCheckCircle className="text-blue-500 text-xl flex-shrink-0" />
                        ) : session.active ? (
                          <FaPlayCircle className="text-red-600 text-xl flex-shrink-0" />
                        ) : (
                          <FaLock className="text-gray-400 text-lg flex-shrink-0" />
                        )}
                        <span
                          className={`text-sm font-medium ${
                            session.active
                              ? "text-red-700 font-semibold"
                              : session.completed
                              ? "text-gray-700"
                              : "text-gray-500"
                          }`}
                        >
                          {session.title}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <footer 
        className="text-black px-10 py-4 mt-10"
        style={{ background: "linear-gradient(to right, #f2b164, #e5914d, #f2b164)" }}
      >
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/50 pb-2.5 mb-4 gap-4">
          <Image src="/images/about/logo.png" alt="LARA logo" width={65} height={65} className="rounded-lg" />

          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold">Phone:</span>
              <span className="text-white">+123 456 789</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
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
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/courses" className="hover:underline">Courses</Link></li>
              <li><Link href="/about" className="hover:underline">About LARA</Link></li>
              <li><Link href="#" className="hover:underline">Instructors</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-1">Support</p>
            <ul className="text-sm space-y-0.5 list-disc ml-4">
              <li><Link href="#" className="hover:underline">Contact Us</Link></li>
              <li><Link href="#" className="hover:underline">FAQ</Link></li>
              <li><Link href="#" className="hover:underline">Privacy</Link></li>
              <li><Link href="#" className="hover:underline">Terms</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-1">Your Account</p>
            <ul className="text-sm space-y-0.5 list-disc ml-4">
              <li><Link href="/profile" className="hover:underline">Profile</Link></li>
              <li><Link href="#" className="hover:underline">Settings</Link></li>
              <li><Link href="/login" className="hover:underline">Logout</Link></li>
            </ul>
          </div>
        </div>

        <p className="text-center text-[13px] text-white">© 2025 LARA — All rights reserved</p>
      </footer>
    </div>
  );
}
