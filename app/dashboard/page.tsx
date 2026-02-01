"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Mock Data
const courses = [
  {
    id: 1,
    title: "UI Design",
    image: "/images/Home in/image 4.png",
    level: "Advanced",
    levelColor: "bg-orange-500"
  },
  {
    id: 2,
    title: "Adobe XD",
    image: "/images/Home in/Frame 1984078273.png",
    level: "Beginner",
    levelColor: "bg-yellow-400"
  },
  {
    id: 3,
    title: "UX Trends",
    image: "/images/Home in/Rectangle 4397.png",
    level: "Advanced",
    levelColor: "bg-orange-500"
  }
];

const recentActivities = [
  {
    id: 1,
    icon: "✅",
    text: "Nourhan hessein finished the Adobe XD test",
    time: "2 hours ago"
  },
  {
    id: 2,
    icon: "📝",
    text: "Youssef submitted the Login Screen assignment in the UI.",
    time: "4 hours ago"
  },
  {
    id: 3,
    icon: "🎓",
    text: "Nour completed lesson 3 of the UI/UX Design course",
    time: "5 hours ago"
  },
  {
    id: 4,
    icon: "⭐",
    text: "Sara rated your Python course 5 stars",
    time: "1 day ago"
  }
];

const studentFeedback = [
  {
    id: 1,
    name: "Sarah Ahmed",
    avatar: "/images/Home in/Ellipse 70.png",
    course: "UX Design",
    feedback: "This course has completely transformed my design approach! The instructor explains complex concepts in a very simple way."
  },
  {
    id: 2,
    name: "Mohamed Ali",
    avatar: "/images/Home in/Ellipse 70 (1).png",
    course: "Python Programming",
    feedback: "Excellent content and very practical examples. I've already started applying what I learned in my projects."
  },
  {
    id: 3,
    name: "Layla Hassan",
    avatar: "/images/Home in/Ellipse 70.png",
    course: "UI Design",
    feedback: "The best UI design course I've ever taken. The projects are challenging and the feedback is invaluable."
  }
];

export default function InstructorHome() {
  const [activityFilter, setActivityFilter] = useState("Today");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Logo & Search */}
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2">
                <Image 
                  src="/images/Home in/Frame 1984077959.png" 
                  alt="LARA Logo" 
                  width={50} 
                  height={50}
                  className="rounded-lg"
                />
              </Link>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses, students..."
                  className="border border-gray-300 rounded-full px-5 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white/90"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              </div>
            </div>

            {/* Center: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <Link href="/" className="text-gray-900 font-bold border-b-2 border-gray-900 pb-1">
                Home
              </Link>
              <Link href="/dashboard" className="text-gray-800 hover:text-gray-900 transition-colors">
                Dashboard
              </Link>
              <Link href="/courses" className="text-gray-800 hover:text-gray-900 transition-colors">
                Courses Management
              </Link>
              <Link href="/course-builder" className="text-gray-800 hover:text-gray-900 transition-colors">
                Course Builder
              </Link>
              <Link href="/students" className="text-gray-800 hover:text-gray-900 transition-colors">
                Student Tracking
              </Link>
            </nav>

            {/* Right: User Actions */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-white/50 rounded-full transition-colors">
                <span className="text-2xl">🔔</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <Image
                src="/images/Home in/Frame 1984078083.png"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full border-2 border-white shadow-md"
              />
              <button className="flex flex-col gap-1 p-2 hover:bg-white/50 rounded transition-colors">
                <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
                <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
                <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero / Welcome Section */}
        <section className="bg-gradient-to-r from-[#FFAE74] via-[#FFD4A3] to-[#FFF4B7] rounded-3xl p-12 mb-12 overflow-hidden relative shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            {/* Left Side: Text & CTA */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                  Welcome Ehab Fayez!
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We're glad you're here! Explore your current courses and manage content to help your students excel.
                </p>
              </div>
              <button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Create a new course
              </button>
            </div>

            {/* Right Side: Hero Image with Floating Icons */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-80 h-80">
                {/* Main Circle Image */}
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-orange-200 to-yellow-100">
                  <Image
                    src="/images/Home in/Frame 1984077640.png"
                    alt="Student"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
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

          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
        </section>

        {/* My Courses Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">My Courses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Course Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-orange-200 to-yellow-100 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className={`absolute top-4 right-4 ${course.levelColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {course.level}
                  </span>
                </div>

                {/* Course Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{course.title}</h3>
                  <button className="w-full bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] hover:from-orange-500 hover:to-orange-400 text-gray-800 hover:text-white font-semibold py-3 rounded-full transition-all">
                    Course presentation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity Section - Full Width */}
        <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
              <select
                value={activityFilter}
                onChange={(e) => setActivityFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">{activity.text}</p>
                    <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                  </div>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                    ✓
                  </div>
                </div>
              ))}
            </div>
          </section>

        {/* Student Feedback Section - Full Width Horizontal */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Feedback</h2>
          
          <div className="flex gap-6 overflow-x-auto pb-4" style={{ scrollbarWidth: "thin" }}>
            {studentFeedback.map((feedback) => (
              <div
                key={feedback.id}
                className="min-w-[320px] max-w-[320px] bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={feedback.avatar}
                    alt={feedback.name}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-orange-200"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{feedback.name}</h4>
                    <p className="text-sm text-gray-600">{feedback.course}</p>
                  </div>
                  <span className="ml-auto text-3xl text-orange-400">"</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm italic">
                  {feedback.feedback}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* Footer */}
        <footer className="bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] rounded-3xl p-12 mt-16 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/Home in/Frame 1984077959.png"
                  alt="LARA Logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                An innovative educational platform offering smart courses to enhance your skills
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors">Home</Link></li>
                <li><Link href="/courses" className="text-gray-600 hover:text-orange-500 transition-colors">Courses</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-orange-500 transition-colors">About LARA</Link></li>
                <li><Link href="/instructors" className="text-gray-600 hover:text-orange-500 transition-colors">Instructors</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="text-gray-600 hover:text-orange-500 transition-colors">Contact Us</Link></li>
                <li><Link href="/faq" className="text-gray-600 hover:text-orange-500 transition-colors">FAQ</Link></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-orange-500 transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-orange-500 transition-colors">Terms</Link></li>
              </ul>
            </div>

            {/* Your Account */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Your Account</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/profile" className="text-gray-600 hover:text-orange-500 transition-colors">Profile</Link></li>
                <li><Link href="/settings" className="text-gray-600 hover:text-orange-500 transition-colors">Settings</Link></li>
                <li><Link href="/logout" className="text-gray-600 hover:text-orange-500 transition-colors">Logout</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-6 text-center">
            <p className="text-sm text-gray-600">© 2025 LARA — All rights reserved</p>
          </div>
        </footer>
      </main>

      {/* Floating ChatBot Button */}
      <Link href="/chatbot" className="fixed right-10 bottom-10 z-30 group">
        <Image
          src="/images/my-courses/unsplash_d42U7dK0M9w.png"
          alt="ChatBot"
          width={70}
          height={70}
          className="cursor-pointer hover:scale-110 transition-transform hover:shadow-2xl rounded-full shadow-lg animate-bounce"
        />
      </Link>
    </div>
  );
}
