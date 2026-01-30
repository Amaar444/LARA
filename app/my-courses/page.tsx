"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Machine Learning",
    courses: 120,
    learners: 40000,
    image: "/images/courses/ml.png",
  },
  {
    id: 2,
    name: "Artificial Intelligence",
    courses: 150,
    learners: 50000,
    image: "/images/courses/ai.png",
  },
  {
    id: 3,
    name: "Cloud Computing",
    courses: 80,
    learners: 25000,
    image: "/images/courses/cloud.png",
  },
  {
    id: 4,
    name: "Web Development",
    courses: 200,
    learners: 70000,
    image: "/images/courses/web.png",
  },
  {
    id: 5,
    name: "Data Science",
    courses: 100,
    learners: 35000,
    image: "/images/courses/data.png",
  },
  {
    id: 6,
    name: "Mobile App Development",
    courses: 90,
    learners: 30000,
    image: "/images/courses/mobile.png",
  },
];

const instructors = [
  { id: 1, name: "Ibrahim Adel", specialty: "English", image: "/images/instructors/1.png" },
  { id: 2, name: "Paul Bullem", specialty: "Registered Nutritionist", image: "/images/instructors/2.png" },
  { id: 3, name: "Osama Mohammed", specialty: "Software Engineer", image: "/images/instructors/3.png" },
  { id: 4, name: "Ehab Fayez", specialty: "UI/UX Designer", image: "/images/instructors/4.png" },
];

const testimonials = [
  {
    id: 1,
    name: "Fady Aziz",
    role: "UI/UX Designer",
    image: "/images/students/1.png",
    text: "Your teaching method and the program you're using to record this course are much, much better than the previous one...",
  },
  {
    id: 2,
    name: "Jenny Wilson",
    role: "UI/UX Designer",
    image: "/images/students/2.png",
    text: "To be honest, I've watched a large number of videos that explain things, and I haven't found anything as clear as this.",
  },
  {
    id: 3,
    name: "Fatima",
    role: "Python Developer",
    image: "/images/students/3.png",
    text: "This is exactly what I was looking for, very practical and easy to follow. Thanks for the great effort!",
  },
];

export default function MyCoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm px-8 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Image src="/images/logo.jpg" alt="LARA Logo" width={50} height={50} className="rounded-full" />
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-lg px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/" className="text-gray-900 font-bold border-b-2 border-gray-900">Home</Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
            <Link href="/course-player" className="text-gray-700 hover:text-gray-900">Course Player</Link>
            <Link href="/courses" className="text-gray-700 hover:text-gray-900">Recommended Courses</Link>
            <Link href="/quiz" className="text-gray-700 hover:text-gray-900">Quiz</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Image src="/images/dashboard/Ellipse 68.png" alt="Profile" width={40} height={40} className="rounded-full" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] py-20 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="max-w-xl">
            <p className="text-sm text-gray-700 mb-2">Welcome,</p>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Learn Smart, Grow<br />Fast
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Access courses tailored for your career and personal growth.
            </p>
            <Link
              href="/course-player"
              className="inline-block bg-white text-gray-800 font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              Go to My Courses
            </Link>
          </div>
          <div className="relative">
            <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <Image
                src="/images/hero-students.jpg.png"
                alt="Student"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-8 py-16">
        {/* Categories */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">
            <span className="text-green-600">Most Popular</span> Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg mb-4 flex items-center justify-center text-3xl">
                  📚
                </div>
                <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
                <p className="text-gray-600 text-sm">
                  {cat.courses} Courses, {cat.learners.toLocaleString()} Learners
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Instructors */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-green-600 mb-10">Our Best Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  👨‍🏫
                </div>
                <h3 className="font-semibold text-lg mb-1">{instructor.name}</h3>
                <p className="text-gray-600 text-sm">{instructor.specialty}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Student Feedback */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Student Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center text-xl">
                    👤
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ChatBot Link */}
        <div className="fixed bottom-8 right-8">
          <Link
            href="/chatbot"
            className="w-16 h-16 bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] rounded-full flex items-center justify-center text-3xl shadow-xl hover:shadow-2xl transition-shadow"
            title="Chat with LARA"
          >
            🤖
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-start mb-8">
            <Image src="/images/logo.jpg" alt="LARA Logo" width={60} height={60} className="rounded-full" />
            <div className="flex gap-8 text-sm">
              <div><span className="font-semibold">Phone:</span> +123 456 789</div>
              <div><span className="font-semibold">Email:</span> info@lara.com</div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div><p className="text-gray-400">An innovative educational platform offering smart courses to enhance your skills.</p></div>
            <div>
              <h4 className="font-bold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/">• Home</Link></li>
                <li><Link href="/courses">• Courses</Link></li>
                <li><Link href="/about">• About LARA</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Contact Us</li>
                <li>• FAQ</li>
                <li>• Privacy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Your Account</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/profile">• Profile</Link></li>
                <li>• Settings</li>
                <li><Link href="/login">• Logout</Link></li>
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
