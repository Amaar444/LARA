"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaHeart, FaStar } from "react-icons/fa";

interface HeroSectionProps {
  userName: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ userName }) => {
  return (
    <section className="relative py-12 px-8 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-20 w-40 h-40 bg-yellow-200/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 animate-slideRight">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Welcome <span className="text-orange-600">{userName}!</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-lg leading-relaxed">
            We&apos;re glad you&apos;re here! Explore your current courses and manage content to help your students excel.
          </p>
          <Link
            href="/course-builder"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Create a new course
          </Link>
        </div>

        {/* Right - Hero Image */}
        <div className="flex-1 flex justify-center items-center relative animate-slideLeft">
          {/* Floating icons */}
          <div className="absolute top-4 left-10 bg-white p-3 rounded-full shadow-lg animate-float z-10">
            <FaHeart className="text-red-500 text-xl" />
          </div>
          <div className="absolute top-20 right-4 bg-white p-3 rounded-full shadow-lg animate-float z-10" style={{ animationDelay: "0.5s" }}>
            <FaPlay className="text-orange-500 text-xl" />
          </div>
          <div className="absolute bottom-20 left-4 bg-white p-3 rounded-full shadow-lg animate-float z-10" style={{ animationDelay: "1s" }}>
            <FaStar className="text-yellow-500 text-xl" />
          </div>
          <div className="absolute bottom-10 right-10 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg animate-float z-10" style={{ animationDelay: "1.5s" }}>
            <span className="font-semibold">+250 Students</span>
          </div>

          {/* Main circular image */}
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-yellow-200 rounded-full" />
            <div className="absolute inset-2 bg-gradient-to-br from-orange-200 to-yellow-100 rounded-full overflow-hidden">
              <Image
                src="/images/Home in/Frame 1984077640"
                alt="Instructor"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
