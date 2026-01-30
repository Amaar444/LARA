"use client";

import Link from "next/link";

export default function QuizResultHighPage() {
  const score = 15;
  const totalQuestions = 20;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-lg w-full text-center">
        {/* Bravo Row */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-6xl">🎉</span>
          <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7]">
            Bravo
          </span>
        </div>

        <p className="text-xl text-gray-700 mb-4">Your Final Score:</p>
        <p className="text-5xl font-bold text-gray-900 mb-8">
          {score} / {totalQuestions}
        </p>

        <div className="bg-green-50 rounded-xl p-6 mb-8">
          <p className="text-gray-700 mb-2">Recommended Course:</p>
          <p className="text-2xl font-bold text-green-600">New Course</p>
        </div>

        <Link
          href="/courses"
          className="block w-full bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] text-gray-800 font-semibold py-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          Go to Course
        </Link>
      </div>
    </div>
  );
}
