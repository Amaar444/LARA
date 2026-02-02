"use client";

import Link from "next/link";
import { useState } from "react";
import { FaClock, FaStar, FaTag, FaRocket, FaCheckCircle, FaGraduationCap, FaPalette, FaFigma, FaPencilRuler } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "Design System",
    duration: "2 hours",
    rating: 4.27,
    price: "$19.99",
    icon: FaPalette,
    color: "#ff6b6b",
    students: "2.3k",
    level: "Beginner"
  },
  {
    id: 2,
    title: "Figma",
    duration: "39 hours",
    rating: 4.63,
    price: "free",
    icon: FaFigma,
    color: "#a855f7",
    students: "15k",
    level: "All Levels"
  },
  {
    id: 3,
    title: "Figma",
    duration: "16.1 hours",
    rating: 4.52,
    price: "free",
    icon: FaFigma,
    color: "#3b82f6",
    students: "8.7k",
    level: "Intermediate"
  },
  {
    id: 4,
    title: "UX Design",
    duration: "1.7 hours",
    rating: 4.24,
    price: "$24.99",
    icon: FaPencilRuler,
    color: "#10b981",
    students: "5.2k",
    level: "Beginner"
  },
  {
    id: 5,
    title: "UI Design",
    duration: "32 hours",
    rating: 4.52,
    price: "free",
    icon: FaPalette,
    color: "#f59e0b",
    students: "12k",
    level: "Advanced"
  },
  {
    id: 6,
    title: "UI Design",
    duration: "30 hours",
    rating: 5,
    price: "free",
    icon: FaPalette,
    color: "#ec4899",
    students: "18k",
    level: "All Levels"
  },
];

export default function CoursesListPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Floating decorations */}
        <div className="absolute top-32 right-20 text-5xl text-orange-300/20 animate-bounce" style={{ animationDuration: "3s" }}>
          <FaGraduationCap />
        </div>
        <div className="absolute bottom-40 left-20 text-4xl text-amber-400/20 animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}>
          <FaRocket />
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes cardGlow {
          0%, 100% { box-shadow: 0 10px 40px rgba(242, 150, 51, 0.2); }
          50% { box-shadow: 0 15px 50px rgba(242, 150, 51, 0.35); }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .shimmer-btn {
          background: linear-gradient(90deg, #f29633 0%, #ffb347 50%, #f29633 100%);
          background-size: 200% 100%;
        }
        .shimmer-btn:hover {
          animation: shimmer 1.5s infinite;
        }
        .card-hover:hover {
          animation: cardGlow 2s ease-in-out infinite;
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
      `}</style>

      <section className="w-full m-0 py-12 px-5 pb-20 relative z-10">
        {/* Title Bar */}
        <div className="max-w-6xl mx-auto mb-12">
          <div 
            className="text-center py-6 px-8 rounded-2xl shadow-xl animate-fadeInDown"
            style={{ background: "linear-gradient(135deg, #f9c26c 0%, #ffdb80 50%, #f6f3b0 100%)" }}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-white/40 flex items-center justify-center animate-float">
                <FaRocket className="text-2xl text-orange-600" />
              </div>
              <h2 className="text-[32px] font-bold text-gray-800">
                Recommended Courses for You
              </h2>
            </div>
            <p className="text-gray-700 text-sm animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              AI-powered recommendations based on your interests and skills ✨
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex justify-center gap-6 mt-6 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-md">
              <FaCheckCircle className="text-green-500" />
              <span className="text-sm font-semibold text-gray-700">6 Courses Found</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-md">
              <FaStar className="text-yellow-500" />
              <span className="text-sm font-semibold text-gray-700">Top Rated</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-md">
              <FaTag className="text-orange-500" />
              <span className="text-sm font-semibold text-gray-700">4 Free Courses</span>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <article
                key={course.id}
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-gradient-to-br from-[#fef3c7] to-[#fde68a] rounded-3xl p-6 text-center shadow-lg card-hover cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fadeInUp stagger-${index + 1} relative overflow-hidden group`}
              >
                {/* Decorative Background Circle */}
                <div 
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 transition-all duration-500 group-hover:scale-150"
                  style={{ backgroundColor: course.color }}
                />

                {/* Icon Badge */}
                <div 
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 ${hoveredCard === course.id ? 'scale-110 rotate-6' : ''}`}
                  style={{ backgroundColor: course.color }}
                >
                  <IconComponent className="text-2xl text-white" />
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-800">{course.title}</h3>

                {/* Level Badge */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-white/60 text-gray-700">
                  {course.level}
                </span>

                {/* Course Info */}
                <div className="space-y-2 mb-4">
                  <p className="flex items-center justify-center gap-2 text-sm text-gray-700">
                    <FaClock className="text-orange-500" />
                    <span>Duration: <strong>{course.duration}</strong></span>
                  </p>
                  <p className="flex items-center justify-center gap-2 text-sm text-gray-700">
                    <FaStar className="text-yellow-500" />
                    <span>Rating: <strong>{course.rating}</strong></span>
                    <span className="text-gray-400">({course.students} students)</span>
                  </p>
                  <p className="flex items-center justify-center gap-2 text-sm text-gray-700">
                    <FaTag className="text-green-500" />
                    <span>Price: </span>
                    <span className={`font-bold text-base ${course.price === "free" ? "text-green-600" : "text-orange-600"}`}>
                      {course.price === "free" ? "FREE 🎉" : course.price}
                    </span>
                  </p>
                </div>

                {/* View Details Button */}
                <Link
                  href="/course-detail"
                  className={`shimmer-btn no-underline w-full block py-3 px-6 rounded-xl text-white text-sm font-bold transform transition-all duration-300 shadow-lg ${hoveredCard === course.id ? 'shadow-xl scale-105' : ''}`}
                  style={{ 
                    boxShadow: hoveredCard === course.id 
                      ? "0 10px 25px rgba(242, 150, 51, 0.5)" 
                      : "0 5px 15px rgba(242, 150, 51, 0.3)"
                  }}
                >
                  View Details →
                </Link>

                {/* Free Badge */}
                {course.price === "free" && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
                    FREE
                  </div>
                )}

                {/* Rating Stars Visual */}
                <div className="absolute top-4 right-4 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`text-xs ${i < Math.floor(course.rating) ? 'text-yellow-500' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-6xl mx-auto mt-12 text-center animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Can&apos;t find what you&apos;re looking for?</h3>
            <p className="text-gray-600 mb-4">Explore our full catalog with over 500+ courses</p>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <FaGraduationCap />
              Browse All Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
