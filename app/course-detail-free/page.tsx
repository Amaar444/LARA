"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaStar, FaClock, FaGlobe, FaUser, FaPlay, FaChevronUp, FaChevronDown, FaArrowLeft } from "react-icons/fa";

const courseContent = [
  {
    id: 1,
    title: "UI Design Course - Episode 7",
    subtitle: "From Zero to Professional",
    thumbnail: "/images/m/image 9.png",
  },
  {
    id: 2,
    title: "UI Design Course - Episode 8",
    subtitle: "From Zero to Professional",
    thumbnail: "/images/m/image 10.png",
  },
  {
    id: 3,
    title: "UI Design Course - Episode 9",
    subtitle: "From Zero to Professional",
    thumbnail: "/images/m/image 11.png",
  },
  {
    id: 4,
    title: "UI Design Course - Episode 10",
    subtitle: "From Zero to Professional",
    thumbnail: "/images/m/image 12.png",
  },
  {
    id: 5,
    title: "UI Design Course - Colors",
    subtitle: "From Zero to Professional",
    thumbnail: "/images/m/image 16.png",
  },
  {
    id: 6,
    title: "UI Design Course - Typography",
    subtitle: "From Zero to Professional",
    thumbnail: "/images/m/image 17.png",
  },
  {
    id: 7,
    title: "UI Design Course - Spacing",
    subtitle: "From Zero to Professional",
    thumbnail: "/images/m/image 9.png",
  },
  {
    id: 8,
    title: "UI Design Course - Episode 3",
    subtitle: "From Zero to Professional",
    thumbnail: "/images/m/image 10.png",
  },
  {
    id: 9,
    title: "UI Design Course - Episode 4",
    subtitle: "From Zero to Professional",
    thumbnail: "/images/m/image 11.png",
  },
];

export default function CourseDetailFreePage() {
  const [showAllContent, setShowAllContent] = useState(false);
  const displayedContent = showAllContent ? courseContent : courseContent.slice(0, 5);

  return (
    <div 
      className="min-h-screen"
      style={{ background: "linear-gradient(to bottom, #FFE5B4, #FFF8E7, #FFFDF5)" }}
    >
      {/* Custom Animations */}
      <style jsx global>{`
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
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
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
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
        .stagger-5 { animation-delay: 0.5s; opacity: 0; }
        .stagger-6 { animation-delay: 0.6s; opacity: 0; }
        .stagger-7 { animation-delay: 0.7s; opacity: 0; }
        .stagger-8 { animation-delay: 0.8s; opacity: 0; }
        .stagger-9 { animation-delay: 0.9s; opacity: 0; }
      `}</style>

      {/* Back Button */}
      <div className="px-8 py-6 animate-slideDown">
        <Link 
          href="/courses-list"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Courses</span>
        </Link>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-16">
        {/* Course Header Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Video Preview */}
          <div className="animate-fadeInLeft stagger-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <Image
                src="/images/Frame%201984078275.png"
                alt="Course Preview"
                width={600}
                height={340}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl animate-pulse-slow">
                  <FaPlay className="text-orange-500 text-2xl ml-1" />
                </div>
              </div>
              {/* Figma Badge */}
              <div className="absolute top-4 left-4 bg-white/90 rounded-lg p-2 shadow-md">
                <span className="text-purple-600 font-bold text-sm">🎨 Figma</span>
              </div>
            </div>
          </div>

          {/* Course Info */}
          <div className="animate-fadeInRight stagger-2">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">UI Design</h1>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <FaGlobe className="text-orange-500 text-lg" />
                <span className="text-gray-600">Language:</span>
                <span className="font-semibold text-gray-800">Arabic</span>
              </div>
              
              <div className="flex items-center gap-3">
                <FaUser className="text-orange-500 text-lg" />
                <span className="text-gray-600">Instructors:</span>
                <span className="font-semibold text-gray-800">Ehab Fayez</span>
              </div>
              
              <div className="flex items-center gap-3">
                <FaClock className="text-orange-500 text-lg" />
                <span className="text-gray-600">Course duration:</span>
                <span className="font-semibold text-gray-800">30 hours</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <span className="font-bold text-gray-800 ml-2">5</span>
              </div>
            </div>

            {/* Free Badge */}
            <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse-slow">
              🎉 FREE COURSE
            </div>
          </div>
        </section>

        {/* About Instructor */}
        <section className="mb-12 animate-fadeInUp stagger-3">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100">
            <h2 className="text-xl font-bold text-gray-800 mb-3">About the Instructor</h2>
            <p className="text-gray-600 italic leading-relaxed">
              Ehab Fayez is a UI Designer and digital creator who provides practical tutorials on 
              user interface design using Figma
            </p>
          </div>
        </section>

        {/* Course Content & Comment Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Content */}
          <div className="lg:col-span-2 animate-fadeInLeft stagger-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Course Content</h2>
                <span className="text-sm text-gray-500">{courseContent.length} lessons</span>
              </div>

              {/* Scroll Indicator Up */}
              <div className="flex justify-center mb-4">
                <button 
                  className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors"
                  onClick={() => setShowAllContent(false)}
                >
                  <FaChevronUp className="text-orange-600" />
                </button>
              </div>

              {/* Lessons List */}
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {displayedContent.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className={`flex gap-4 p-3 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 transition-all duration-300 cursor-pointer group animate-fadeInUp stagger-${Math.min(index + 1, 9)}`}
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    {/* Lesson Thumbnail */}
                    <div className="relative w-28 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                      <Image
                        src={lesson.thumbnail}
                        alt={lesson.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <FaPlay className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>

                    {/* Lesson Info */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-orange-600 transition-colors">
                        {lesson.title}
                      </h3>
                      <p className="text-xs text-gray-500">{lesson.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Indicator Down */}
              <div className="flex justify-center mt-4">
                <button 
                  className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors"
                  onClick={() => setShowAllContent(true)}
                >
                  <FaChevronDown className="text-orange-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Comment & Start Course */}
          <div className="animate-fadeInRight stagger-5">
            {/* Comment Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Comment</h2>
              
              <div className="flex items-start gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-orange-200 shadow-md">
                  <Image
                    src="/images/m/amm.jpeg"
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This is exactly what I was expecting from you, Mr. Zero. I hope you will offer a Django course. 
                    With sincere thanks and prayers for the benefit you provide us.
                  </p>
                </div>
              </div>
            </div>

            {/* Start Course Button */}
            <Link
              href="/course-player"
              className="shimmer-btn block w-full py-4 px-8 rounded-xl text-white text-lg font-bold text-center shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start the course
            </Link>
          </div>
        </section>
      </main>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #fef3c7;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f59e0b;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d97706;
        }
      `}</style>
    </div>
  );
}
