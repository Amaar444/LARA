"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] px-8 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.jpg" alt="LARA Logo" width={50} height={50} className="rounded-full" />
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-lg px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
              <Link href="/course-player" className="text-gray-700 hover:text-gray-900">Course Player</Link>
              <Link href="/courses" className="text-gray-700 hover:text-gray-900">Recommended Courses</Link>
              <Link href="/quiz" className="text-gray-700 hover:text-gray-900">Quiz</Link>
              <Link href="/about" className="text-gray-900 font-bold border-b-2 border-gray-900">About</Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Image src="/images/dashboard/Ellipse 68.png" alt="Profile" width={40} height={40} className="rounded-full" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        {/* Section 1 */}
        <section className="flex items-center gap-12 mb-20">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Innovative Education with the Power<br />of Artificial Intelligence
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Lara, we leverage artificial intelligence to create personalized and engaging
              learning experiences. Our mission is to empower learners, make education accessible,
              and inspire a love for lifelong learning.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/courses/placeholder.jpg"
              alt="Student at desk"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/hero-students.jpg.png";
              }}
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex items-center gap-12 mb-20 flex-row-reverse">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Personalized Learning Paths
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our recommendation engine analyzes each student's learning style, strengths,
              weaknesses, and educational goals to create unique learning paths. This adaptive
              approach ensures that every learner receives the most relevant content and
              resources, enhancing understanding and improving knowledge retention.
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-12 shadow-lg">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-800">AI-Powered Recommendations</h3>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex items-center gap-12 mb-20">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Instant Help, Always On
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Meet our AI-powered chatbot: your personal learning assistant available 24/7.
              It provides instant answers to course questions, guides you through challenging
              concepts, and helps with assignments—ensuring every student can learn smoothly
              and never feels stuck.
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-12 shadow-lg">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-800">24/7 AI Assistant</h3>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/images/logo.jpg" alt="LARA Logo" width={60} height={60} className="rounded-full" />
            </div>

            <div className="flex gap-8 text-sm">
              <div>
                <span className="font-semibold">Phone:</span> +123 456 789
              </div>
              <div>
                <span className="font-semibold">Email:</span> info@lara.com
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-gray-400">
                An innovative educational platform offering smart courses to enhance your skills.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white">• Home</Link></li>
                <li><Link href="/courses" className="hover:text-white">• Courses</Link></li>
                <li><Link href="/about" className="hover:text-white">• About LARA</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">• Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white">• FAQ</Link></li>
                <li><Link href="#" className="hover:text-white">• Privacy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3">Your Account</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/dashboard" className="hover:text-white">• Profile</Link></li>
                <li><Link href="#" className="hover:text-white">• Settings</Link></li>
                <li><Link href="/login" className="hover:text-white">• Logout</Link></li>
              </ul>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
            © 2026 LARA – All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
