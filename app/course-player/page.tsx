"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const courseSections = [
  {
    id: 1,
    title: "Introduction to UI Design",
    lessons: [
      { id: 1, title: "What is UI Design?", duration: "10:30", completed: true },
      { id: 2, title: "Design Principles", duration: "15:45", completed: true },
      { id: 3, title: "Color Theory", duration: "12:20", completed: false },
    ],
  },
  {
    id: 2,
    title: "Advanced Techniques",
    lessons: [
      { id: 4, title: "Typography", duration: "18:00", completed: false },
      { id: 5, title: "Layout Design", duration: "20:15", completed: false },
      { id: 6, title: "Responsive Design", duration: "22:30", completed: false },
    ],
  },
];

export default function CoursePlayerPage() {
  const [currentLesson, setCurrentLesson] = useState(courseSections[0].lessons[0]);
  const [expandedSection, setExpandedSection] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-gray-50">
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

          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
            <Link href="/course-player" className="text-gray-900 font-semibold border-b-2 border-gray-900">Course Player</Link>
            <Link href="/courses" className="text-gray-700 hover:text-gray-900">Recommended Courses</Link>
            <Link href="/quiz" className="text-gray-700 hover:text-gray-900">Quiz</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Image src="/images/dashboard/Ellipse 68.png" alt="Profile" width={40} height={40} className="rounded-full" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* Course Title */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            UI Design: A User-Centered Approach
          </h1>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <span>📤</span> Share
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <span>💾</span> Save
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-6">
          {/* Video Player - Left 2/3 */}
          <div className="col-span-2 space-y-6">
            {/* Video */}
            <div className="bg-black rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">▶️</div>
                <p className="text-xl">{currentLesson.title}</p>
                <p className="text-sm text-gray-400 mt-2">{currentLesson.duration}</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="border-b border-gray-200 mb-4">
                <nav className="flex gap-6">
                  <button className="pb-3 border-b-2 border-orange-500 font-semibold text-orange-600">
                    Overview
                  </button>
                  <button className="pb-3 text-gray-600 hover:text-gray-900">
                    Resources
                  </button>
                  <button className="pb-3 text-gray-600 hover:text-gray-900">
                    Q&A
                  </button>
                  <button className="pb-3 text-gray-600 hover:text-gray-900">
                    Reviews
                  </button>
                </nav>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">About this lesson</h3>
                <p className="text-gray-700 leading-relaxed">
                  In this lesson, you'll learn the fundamental principles of UI design and how to create
                  user-centered interfaces that are both beautiful and functional. We'll cover color theory,
                  typography, layout principles, and responsive design techniques.
                </p>
              </div>
            </div>

            {/* Instructor Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4">
              <Image
                src="/images/dashboard/Ellipse 68.png"
                alt="Instructor"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-lg">Ehab Fayez</h4>
                <p className="text-sm text-gray-600">UI/UX Designer & Instructor</p>
                <p className="text-xs text-gray-500 mt-1">15+ years experience • 50,000+ students</p>
              </div>
            </div>
          </div>

          {/* Course Curriculum - Right 1/3 */}
          <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
            <h3 className="font-bold text-xl mb-4">Course Content</h3>

            <div className="space-y-3">
              {courseSections.map((section) => (
                <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() =>
                      setExpandedSection(expandedSection === section.id ? null : section.id)
                    }
                    className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex justify-between items-center font-semibold text-sm"
                  >
                    <span>{section.title}</span>
                    <span>{expandedSection === section.id ? "▼" : "▶"}</span>
                  </button>

                  {expandedSection === section.id && (
                    <div className="divide-y divide-gray-200">
                      {section.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          onClick={() => setCurrentLesson(lesson)}
                          className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                            currentLesson.id === lesson.id ? "bg-orange-50 border-l-4 border-orange-500" : ""
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                                lesson.completed ? "bg-green-500 text-white" : "bg-gray-300"
                              }`}
                            >
                              {lesson.completed ? "✓" : ""}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">{lesson.title}</p>
                              <p className="text-xs text-gray-500">{lesson.duration}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button className="w-full mt-6 bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] text-gray-800 font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity">
              Mark as Complete
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
