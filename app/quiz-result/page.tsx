"use client";

import Link from "next/link";

export default function QuizResultLowPage() {
  const score = 8;
  const totalQuestions = 20;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-lg w-full text-center">
        <div className="text-6xl mb-6">📚</div>

        <p className="text-xl text-gray-700 mb-4">Your Final Score:</p>
        <p className="text-5xl font-bold text-gray-900 mb-8">
          {score} / {totalQuestions}
        </p>

        <div className="bg-orange-50 rounded-xl p-6 mb-8">
          <p className="text-gray-700 mb-2">Recommended Course:</p>
          <p className="text-2xl font-bold text-orange-600">Repeat Current Course</p>
        </div>

        <Link
          href="/quiz"
          className="block w-full bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] text-gray-800 font-semibold py-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          Take Quiz Again
        </Link>
      </div>
    </div>
  );
}
