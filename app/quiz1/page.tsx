"use client";

import Link from "next/link";
import { useState } from "react";

export default function Quiz1Page() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft] = useState(0);

  const question = {
    text: "Primary color in UI?",
    options: ["Red", "Blue", "Yellow", "Green"],
    questionNumber: 20,
    totalQuestions: 20,
  };

  const progress = (question.questionNumber / question.totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6 text-gray-700 font-medium">
          <span className="text-lg">Time Left: 00:00</span>
          <span className="text-lg">
            Question {question.questionNumber} / {question.totalQuestions}
          </span>
        </div>

        {/* Quiz Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{question.text}</h2>

          {/* Progress Bar - Full */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
            <div
              className="bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Options */}
          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  selectedAnswer === index
                    ? "border-orange-500 bg-orange-50 font-semibold"
                    : "border-gray-300 hover:border-orange-300 hover:bg-gray-50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Finish Button */}
          <div className="flex justify-center">
            <Link
              href="/quiz-result"
              className="px-12 py-4 rounded-lg font-semibold text-lg bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] text-gray-800 hover:opacity-90 transition-opacity"
            >
              Finish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
