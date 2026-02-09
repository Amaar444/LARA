"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const quizQuestions = [
  {
    id: 1,
    question: "What does UI stand for?",
    options: ["User Internet", "User Interface", "User Interact", "User Interpt"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "What is the primary purpose of UX design?",
    options: [
      "Make websites look beautiful",
      "Improve user experience",
      "Write code",
      "Manage databases",
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "Which tool is commonly used for UI design?",
    options: ["Photoshop", "Figma", "Excel", "PowerPoint"],
    correctAnswer: 1,
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, quizCompleted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleNext = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-lg w-full text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Quiz Completed!</h1>
          <p className="text-2xl text-gray-700 mb-8">
            Your Score: {score} / {quizQuestions.length}
          </p>
          <div className="mb-8">
            <div className="text-6xl mb-4">
              {score === quizQuestions.length ? "🎉" : score >= quizQuestions.length / 2 ? "👍" : "📚"}
            </div>
            <p className="text-lg text-gray-600">
              {score === quizQuestions.length
                ? "Perfect! You aced it!"
                : score >= quizQuestions.length / 2
                ? "Good job! Keep learning!"
                : "Keep practicing!"}
            </p>
          </div>
          <Link
            href="/my-courses"
            className="inline-block bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] text-gray-800 font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
          >
            Go To New Course
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6 text-gray-700 font-medium">
          <span className="text-lg">Time Left: {formatTime(timeLeft)}</span>
          <span className="text-lg">
            Question {currentQuestion + 1} / {quizQuestions.length}
          </span>
        </div>

        {/* Quiz Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {quizQuestions[currentQuestion].question}
          </h2>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
            <div
              className="bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Options */}
          <div className="space-y-4 mb-8">
            {quizQuestions[currentQuestion].options.map((option, index) => (
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

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                currentQuestion === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className={`px-8 py-3 rounded-lg font-semibold transition-opacity ${
                selectedAnswer === null
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] text-gray-800 hover:opacity-90"
              }`}
            >
              {currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
