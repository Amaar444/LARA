"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const courseLessons = [
  {
    id: 1,
    title: "Design System – part1",
    subtitle: "Foundations",
    videoUrl: "/videos/part1.mp4",
    thumbnail: "/images/courses/part1-thumb.jpg",
  },
  {
    id: 2,
    title: "Design System – part2",
    subtitle: "Text Field",
    videoUrl: "/videos/part2.mp4",
    thumbnail: "/images/courses/part2-thumb.jpg",
  },
  {
    id: 3,
    title: "Design System – part3",
    subtitle: "Button",
    videoUrl: "/videos/part3.mp4",
    thumbnail: "/images/courses/part3-thumb.jpg",
  },
  {
    id: 4,
    title: "Design System – part4",
    subtitle: "Dropdown",
    videoUrl: "/videos/part4.mp4",
    thumbnail: "/images/courses/part4-thumb.jpg",
  },
  {
    id: 5,
    title: "Design System – part5",
    subtitle: "Checkboxes & Radio Button",
    videoUrl: "/videos/part5.mp4",
    thumbnail: "/images/courses/part5-thumb.jpg",
  },
  {
    id: 6,
    title: "Design System – part6",
    subtitle: "Pattern Library",
    videoUrl: "/videos/part6.mp4",
    thumbnail: "/images/courses/part6-thumb.jpg",
  },
];

export default function CourseDetailPaidPage() {
  const [currentLesson, setCurrentLesson] = useState(courseLessons[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Top Section - Video + Info */}
        <section className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left: Main Video */}
          <div>
            <div className="bg-black rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">▶️</div>
                <p className="text-xl">{currentLesson.title}</p>
                <p className="text-sm text-gray-400 mt-2">{currentLesson.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Right: Course Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Design System</h1>
            <p className="text-gray-700 mb-6 leading-relaxed">
              This course takes you step by step from the basics of interface
              design to building interactive prototypes and complete design systems.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-gray-600 font-medium">Language:</span>
                <span className="text-gray-900 font-semibold">Arabic</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 font-medium">Instructors:</span>
                <span className="text-gray-900 font-semibold">Islam Hefne</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 font-medium">Course duration:</span>
                <span className="text-gray-900 font-semibold">2 hours ⏱</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⭐⭐⭐⭐☆</span>
              <span className="font-semibold text-xl">4.27</span>
            </div>
          </div>
        </section>

        {/* Bottom Section - About + Content + Comment + Price */}
        <section className="grid md:grid-cols-3 gap-8 p-8 bg-gray-50">
          {/* Left Column - 2/3 */}
          <div className="md:col-span-2 space-y-8">
            {/* About Instructor */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">About the Instructor</h2>
              <p className="text-gray-700 leading-relaxed">
                Islam Hefney is a skilled instructor specializing in UI/UX design.
                He shares practical tips and tutorials to help students improve
                their design and prototyping skills.
              </p>
            </div>

            {/* Course Content */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Course Content</h2>
              <div className="grid grid-cols-2 gap-4">
                {courseLessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => setCurrentLesson(lesson)}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                      currentLesson.id === lesson.id
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg flex items-center justify-center text-2xl">
                      📹
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-sm text-gray-900">{lesson.title}</p>
                      <p className="text-xs text-gray-600">{lesson.subtitle}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - 1/3 */}
          <div className="space-y-6">
            {/* Comment Box */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Comment</h2>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center text-xl">
                  👤
                </div>
                <span className="font-semibold text-gray-900">Metwali</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Thank you, engineer, for the high quality of the explanation and filming.
              </p>
            </div>

            {/* Price Block */}
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 font-medium mb-2">Price:</p>
              <p className="text-4xl font-bold text-gray-900 mb-6">
                19.99 <span className="text-2xl">$</span>
              </p>
              <Link
                href="/payment"
                className="block w-full bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] text-gray-800 font-semibold py-4 rounded-lg text-center hover:opacity-90 transition-opacity"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="p-8 text-center">
          <Link
            href="/courses"
            className="inline-block bg-white text-gray-800 font-semibold py-3 px-8 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            ← Back to Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
