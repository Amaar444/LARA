"use client";

import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm px-8 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Image
              src="/images/dashboard/logo.png"
              alt="LARA Logo"
              width={50}
              height={50}
            />
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/dashboard" className="text-gray-900 font-semibold border-b-2 border-gray-900">
              Dashboard
            </Link>
            <Link href="/course-player" className="text-gray-700 hover:text-gray-900">
              Course Player
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-gray-900">
              Recommended Courses
            </Link>
            <Link href="/quiz" className="text-gray-700 hover:text-gray-900">
              Quiz
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Image
              src="/images/dashboard/Ellipse 68.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <button className="text-xl">☰</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* Welcome Banner */}
        <section className="bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] rounded-2xl p-8 mb-8 flex justify-between items-center">
          <div>
            <p className="text-lg text-gray-700">Welcome,</p>
            <p className="text-3xl font-bold text-gray-900">Nourhan!</p>
          </div>
          <Image
            src="/images/dashboard/People working together in coworking space.png"
            alt="Illustration"
            width={300}
            height={200}
          />
        </section>

        {/* Current Progress */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Your Current Progress</h2>

          {/* Course 1 */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6 flex justify-between items-center">
            <div className="flex gap-6 items-center flex-1">
              <Image
                src="/images/dashboard/ui design.png"
                alt="UI Design"
                width={120}
                height={80}
                className="rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">UI Design</h3>
                <p className="text-sm text-gray-600 mb-3">Ehab fayez</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-orange-500 h-2 rounded-full w-1/4"></div>
                </div>
                <span className="text-sm font-medium text-gray-700">25%</span>
                <br />
                <button className="mt-3 bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] text-gray-800 font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
                  Continue Learning
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/images/dashboard/Frame 1984078414.png"
                alt="Progress Chart"
                width={150}
                height={150}
              />
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span>Completed</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                  <span>Locked</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span>Ongoing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Course 2 */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6 flex justify-between items-center">
            <div className="flex gap-6 items-center flex-1">
              <Image
                src="/images/dashboard/image 5.png"
                alt="Design System"
                width={120}
                height={80}
                className="rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">Design System</h3>
                <p className="text-sm text-gray-600 mb-3">Islam Hefne</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                </div>
                <span className="text-sm font-medium text-gray-700">80%</span>
                <br />
                <button className="mt-3 bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] text-gray-800 font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
                  Continue Learning
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/images/dashboard/Frame 1984078414.png"
                alt="Progress Chart"
                width={150}
                height={150}
              />
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span>Completed</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                  <span>Locked</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span>Ongoing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Row */}
        <section className="grid grid-cols-2 gap-6">
          {/* Daily Hours */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Daily learning hours</h3>
            <div className="flex items-end gap-2 h-40">
              <div className="bg-orange-400 w-12 h-16 rounded"></div>
              <div className="bg-orange-500 w-12 h-24 rounded"></div>
              <div className="bg-orange-600 w-12 h-32 rounded"></div>
              <div className="bg-orange-500 w-12 h-20 rounded"></div>
              <div className="bg-orange-400 w-12 h-12 rounded"></div>
              <div className="bg-orange-300 w-12 h-8 rounded"></div>
            </div>
          </div>

          {/* Explore More */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl shadow-sm p-6 flex flex-col items-center justify-center">
            <Image
              src="/images/dashboard/n,.png"
              alt="Explore"
              width={150}
              height={150}
              className="mb-4"
            />
            <button
              onClick={() => (window.location.href = "/courses")}
              className="bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] text-gray-800 font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
            >
              Explore More Courses
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
