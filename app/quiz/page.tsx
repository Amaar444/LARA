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
  {
    id: 4,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Coded Style Syntax",
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "Which of the following is a JavaScript framework?",
    options: ["Python", "React", "HTML", "CSS"],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: "What is the purpose of wireframing?",
    options: [
      "To add colors to design",
      "To create visual structure",
      "To write code",
      "To test performance",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "Which color model is used for web design?",
    options: ["CMYK", "RGB", "Pantone", "HSL only"],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: "What is responsive design?",
    options: [
      "Design that responds to user clicks",
      "Design that adapts to different screen sizes",
      "Design that loads quickly",
      "Design with animations",
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: "Which is NOT a design principle?",
    options: [
      "Contrast",
      "Alignment",
      "Proximity",
      "Programming",
    ],
    correctAnswer: 3,
  },
  {
    id: 10,
    question: "What is a prototype used for?",
    options: [
      "Final production",
      "Testing and validation",
      "Writing documentation",
      "Database design",
    ],
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
  const passPercentage = 60;
  const requiredScore = Math.ceil((passPercentage / 100) * quizQuestions.length);
  const passed = score >= requiredScore;

  if (quizCompleted) {
    if (passed) {
      // Passed Quiz - Show success message
      return (
        <div 
          className="min-h-screen flex items-center justify-center p-8"
          style={{ background: "linear-gradient(135deg, #FFB88C 0%, #FFA066 50%, #FF9A56 100%)" }}
        >
          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            @keyframes slideDown {
              from {
                opacity: 0;
                transform: translateY(-30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes scaleIn {
              from {
                opacity: 0;
                transform: scale(0.5);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              25% { transform: translateX(-5px); }
              75% { transform: translateX(5px); }
            }
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            @keyframes pulse {
              0%, 100% {
                opacity: 1;
              }
              50% {
                opacity: 0.7;
              }
            }
            .animate-fadeIn {
              animation: fadeIn 0.8s ease-out forwards;
            }
            .animate-slideDown {
              animation: slideDown 0.6s ease-out forwards;
            }
            .animate-scaleIn {
              animation: scaleIn 0.5s ease-out forwards;
            }
            .animate-bounce-custom {
              animation: bounce 1s ease-in-out 3;
            }
            .animate-pulse-custom {
              animation: pulse 2s ease-in-out infinite;
            }
            .stagger-delay-1 { animation-delay: 0.1s; opacity: 0; }
            .stagger-delay-2 { animation-delay: 0.2s; opacity: 0; }
            .stagger-delay-3 { animation-delay: 0.3s; opacity: 0; }
            .stagger-delay-4 { animation-delay: 0.4s; opacity: 0; }
          `}</style>

          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-custom" />
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse-custom" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse-custom" style={{ animationDelay: '0.5s' }} />
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-xl w-full text-center relative animate-scaleIn">
            {/* Decorative Corner */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-green-400 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-green-400 rounded-br-3xl" />
            
            {/* Score Icon */}
            <div className="mb-6 animate-bounce-custom">
              <div className="text-7xl">
                {score === quizQuestions.length ? "🎉" : "👍"}
              </div>
            </div>

            {/* Final Score */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-slideDown stagger-delay-1">
              Your Final Score: <span className="text-green-600">{score}/ {quizQuestions.length}</span>
            </h1>

            {/* Recommended Course */}
            <div className="mb-8 animate-slideDown stagger-delay-2">
              <p className="text-xl text-gray-700 mb-2">
                Recommended Course:
              </p>
              <p className="text-2xl font-bold text-green-600">
                Go To New Courses
              </p>
            </div>

            {/* Motivational Message */}
            <p className="text-gray-600 mb-8 animate-fadeIn stagger-delay-3">
              {score === quizQuestions.length 
                ? "Perfect! You aced it! Keep up the excellent work! 🌟" 
                : "Great job! You passed the quiz. Ready for the next challenge! 📚"}
            </p>

            {/* Action Button */}
            <Link
              href="/my-courses"
              className="inline-block bg-gradient-to-r from-green-500 to-green-400 text-white font-bold text-xl py-4 px-12 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 animate-slideDown stagger-delay-4 relative overflow-hidden group"
            >
              <span className="relative z-10">Go To New Courses</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

            {/* Progress Indicator */}
            <div className="mt-8 animate-fadeIn stagger-delay-4">
              <p className="text-sm text-gray-500 mb-2">You passed with {passPercentage}% or more!</p>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${(score / quizQuestions.length) * 100}%` }}
                />
              </div>
              <p className="text-xs text-green-600 mt-1 font-semibold">
                {Math.round((score / quizQuestions.length) * 100)}% achieved ✓
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      // Failed Quiz - Show retry message
      return (
        <div 
          className="min-h-screen flex items-center justify-center p-8"
          style={{ background: "linear-gradient(135deg, #FFB88C 0%, #FFA066 50%, #FF9A56 100%)" }}
        >
          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            @keyframes slideDown {
              from {
                opacity: 0;
                transform: translateY(-30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes scaleIn {
              from {
                opacity: 0;
                transform: scale(0.5);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              25% { transform: translateX(-5px); }
              75% { transform: translateX(5px); }
            }
            @keyframes pulse {
              0%, 100% {
                opacity: 1;
              }
              50% {
                opacity: 0.7;
              }
            }
            .animate-fadeIn {
              animation: fadeIn 0.8s ease-out forwards;
            }
            .animate-slideDown {
              animation: slideDown 0.6s ease-out forwards;
            }
            .animate-scaleIn {
              animation: scaleIn 0.5s ease-out forwards;
            }
            .animate-shake {
              animation: shake 0.5s ease-in-out;
            }
            .animate-pulse-custom {
              animation: pulse 2s ease-in-out infinite;
            }
            .stagger-delay-1 { animation-delay: 0.1s; opacity: 0; }
            .stagger-delay-2 { animation-delay: 0.2s; opacity: 0; }
            .stagger-delay-3 { animation-delay: 0.3s; opacity: 0; }
            .stagger-delay-4 { animation-delay: 0.4s; opacity: 0; }
          `}</style>

          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-custom" />
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse-custom" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse-custom" style={{ animationDelay: '0.5s' }} />
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-xl w-full text-center relative animate-scaleIn">
            {/* Decorative Corner */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-orange-400 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-orange-400 rounded-br-3xl" />
            
            {/* Score Icon */}
            <div className="mb-6 animate-shake">
              <div className="text-7xl">📚</div>
            </div>

            {/* Final Score */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-slideDown stagger-delay-1">
              Your Final Score: <span className="text-orange-600">{score}/ {quizQuestions.length}</span>
            </h1>

            {/* Recommended Course */}
            <div className="mb-8 animate-slideDown stagger-delay-2">
              <p className="text-xl text-gray-700 mb-2">
                Recommended Course:
              </p>
              <p className="text-2xl font-bold text-orange-500">
                Repeat Current Course
              </p>
            </div>

            {/* Motivational Message */}
            <p className="text-gray-600 mb-8 animate-fadeIn stagger-delay-3">
              Don&apos;t worry! Practice makes perfect. Review the material and try again.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-4">
              <button
                onClick={() => window.location.reload()}
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold text-xl py-4 px-12 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 animate-slideDown stagger-delay-4 relative overflow-hidden group"
              >
                <span className="relative z-10">Take Quiz Again</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <Link
                href="/course-player"
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold text-xl py-4 px-12 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 animate-slideDown stagger-delay-4 relative overflow-hidden group"
              >
                <span className="relative z-10">Go To Again Course</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>

            {/* Progress Indicator */}
            <div className="mt-8 animate-fadeIn stagger-delay-4">
              <p className="text-sm text-gray-500 mb-2">You need {passPercentage}% to pass</p>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-orange-400 to-orange-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${(score / quizQuestions.length) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {Math.round((score / quizQuestions.length) * 100)}% achieved
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-8"
      style={{ background: "linear-gradient(135deg, #FFB88C 0%, #FFA066 50%, #FF9A56 100%)" }}
    >
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }
      `}</style>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-custom" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse-custom" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse-custom" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse-custom" style={{ animationDelay: '0.7s' }} />
      </div>

      <div className="w-full max-w-3xl relative z-10">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6 text-white font-semibold drop-shadow-lg animate-slideDown">
          <span className="text-lg bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full">⏱️ Time Left: {formatTime(timeLeft)}</span>
          <span className="text-lg bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full">
            Question {currentQuestion + 1} / {quizQuestions.length}
          </span>
        </div>

        {/* Quiz Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 relative animate-scaleIn">
          {/* Decorative Corner */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-orange-400 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-orange-400 rounded-br-3xl" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {quizQuestions[currentQuestion].question}
          </h2>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-8 overflow-hidden">
            <div
              className="bg-gradient-to-r from-orange-400 to-orange-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Options */}
          <div className="space-y-4 mb-8">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(index)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                  selectedAnswer === index
                    ? "border-orange-500 bg-orange-50 font-semibold shadow-md scale-[1.02]"
                    : "border-gray-300 hover:border-orange-300 hover:bg-gray-50 hover:shadow-sm"
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
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                currentQuestion === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow-md"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                selectedAnswer === null
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:shadow-xl hover:scale-105"
              }`}
            >
              <span className="relative z-10">
                {currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next"}
              </span>
              {selectedAnswer !== null && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
