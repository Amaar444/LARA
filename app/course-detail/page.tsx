"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const courseLessons = [
  {
    id: 1,
    number: "01",
    title: "UI Design – Part 1",
    subtitle: "Introduction to the course",
    thumbnail: "/images/courses/thumb1.jpg",
    videoUrl: "/videos/ui-part1.mp4",
  },
  {
    id: 2,
    number: "02",
    title: "UI Design – Part 2",
    subtitle: "Working with frames & layout",
    thumbnail: "/images/courses/thumb2.jpg",
    videoUrl: "/videos/ui-part2.mp4",
  },
  {
    id: 3,
    number: "03",
    title: "UI Design – Part 3",
    subtitle: "Typography & colors",
    thumbnail: "/images/courses/thumb3.jpg",
    videoUrl: "/videos/ui-part3.mp4",
  },
];

export default function CourseDetailPage() {
  const [currentLesson, setCurrentLesson] = useState(courseLessons[0]);
  const [activeTab, setActiveTab] = useState("content");

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* Video Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Video Player */}
          <div className="md:col-span-2">
            <div className="bg-black rounded-xl overflow-hidden aspect-video flex items-center justify-center mb-6">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">▶️</div>
                <p className="text-xl">{currentLesson.title}</p>
                <p className="text-sm text-gray-400 mt-2">{currentLesson.subtitle}</p>
              </div>
            </div>

            {/* Course Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h1 className="text-3xl font-bold mb-4">UI Design</h1>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This course takes you step by step from the basics of interface design
                to building interactive prototypes and complete design systems.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-500">Language:</span>
                  <span className="ml-2 font-semibold">Arabic</span>
                </div>
                <div>
                  <span className="text-gray-500">Instructor:</span>
                  <span className="ml-2 font-semibold">Ehab Fayez</span>
                </div>
                <div>
                  <span className="text-gray-500">Duration:</span>
                  <span className="ml-2 font-semibold">30 hours ⏱</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                <span className="font-semibold">4.8</span>
              </div>
              <button className="w-full bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] text-gray-800 font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity">
                Start the course
              </button>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="border-b border-gray-200 mb-4">
                <nav className="flex gap-6">
                  <button
                    onClick={() => setActiveTab("content")}
                    className={`pb-3 ${
                      activeTab === "content"
                        ? "border-b-2 border-orange-500 font-semibold text-orange-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    About Instructor
                  </button>
                  <button
                    onClick={() => setActiveTab("comments")}
                    className={`pb-3 ${
                      activeTab === "comments"
                        ? "border-b-2 border-orange-500 font-semibold text-orange-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Comments
                  </button>
                </nav>
              </div>

              {activeTab === "content" && (
                <div>
                  <h3 className="font-semibold text-lg mb-3">About the Instructor</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ehab Fayez is a UI Designer and digital creator who provides practical
                    tutorials on user-interface design. He shares tips and real-world
                    examples to help students improve their design and prototyping skills.
                  </p>
                </div>
              )}

              {activeTab === "comments" && (
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                        👤
                      </div>
                      <div>
                        <h4 className="font-semibold">Metwali</h4>
                        <p className="text-sm text-gray-600">UI Designer</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      This is exactly what I was expecting from you.
                      The explanation is very clear and practical.
                      Thank you for the value you provide!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Course Content Sidebar */}
          <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
            <h3 className="font-bold text-xl mb-4">Course Content</h3>
            <div className="space-y-3">
              {courseLessons.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => setCurrentLesson(lesson)}
                  className={`w-full text-left border rounded-lg p-4 transition-all ${
                    currentLesson.id === lesson.id
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 hover:border-orange-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-gray-400">{lesson.number}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{lesson.title}</p>
                      <p className="text-xs text-gray-600">{lesson.subtitle}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Back to Courses */}
        <div className="text-center">
          <Link
            href="/courses"
            className="inline-block bg-white text-gray-800 font-semibold py-3 px-8 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            ← Back to Courses
          </Link>
        </div>
      </main>
    </div>
  );
}
