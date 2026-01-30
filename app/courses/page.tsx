"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CoursesPage() {
  const [interest, setInterest] = useState("");
  const [previousCourses, setPreviousCourses] = useState("");
  const [skills, setSkills] = useState("");

  const handleRecommend = (e: React.FormEvent) => {
    e.preventDefault();
    // يمكن إضافة منطق التوصية هنا
    console.log({ interest, previousCourses, skills });
  };

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full">
        {/* Header Banner */}
        <div 
          className="py-8 px-5 text-center"
          style={{ background: "linear-gradient(90deg, #ffe0bb, #ffb36c)" }}
        >
          <h1 className="text-[32px] font-bold mb-1.5">Discover Your Learning Path</h1>
          <p className="text-[#444] text-[15px]">
            Enter your details and leverage AI to get personalized and effective
            course suggestions.
          </p>
        </div>

        {/* Main Card */}
        <div 
          className="bg-white flex flex-col md:flex-row min-h-[420px] mx-auto rounded-xl overflow-hidden border-4"
          style={{ borderColor: "#ffcc94" }}
        >
          {/* Left Side - Form */}
          <div className="flex-1 px-10 py-10">
            <form onSubmit={handleRecommend} className="flex flex-col gap-3.5">
              <label className="text-sm text-gray-800 font-semibold">Your interest:</label>
              <input
                type="text"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="px-3 py-3 rounded-full border border-gray-300 outline-none bg-[#fafafa] text-sm"
                placeholder="e.g. Programming, Design"
              />

              <label className="text-sm text-gray-800 font-semibold">Previous courses</label>
              <input
                type="text"
                value={previousCourses}
                onChange={(e) => setPreviousCourses(e.target.value)}
                className="px-3 py-3 rounded-full border border-gray-300 outline-none bg-[#fafafa] text-sm"
                placeholder="e.g. Python, HTML, etc."
              />

              <label className="text-sm text-gray-800 font-semibold">What are your skills?</label>
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="px-3 py-3 rounded-full border border-gray-300 outline-none bg-[#fafafa] text-sm"
                placeholder="e.g. Problem solving, drawing"
              />

              <Link
                href="/courses-list"
                className="mt-5 w-2/5 mx-auto py-3.5 px-9 flex justify-center items-center bg-[#e88700] text-white font-semibold text-base rounded-full whitespace-nowrap cursor-pointer no-underline"
                style={{ boxShadow: "0 6px 15px rgba(232, 135, 0, 0.35)" }}
              >
                recommend course
              </Link>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 h-[260px] md:h-auto">
            <Image
              src="/images/discover/Rectangle 4350.png"
              alt="AI Suggestion Image"
              width={600}
              height={500}
              className="w-full h-full object-cover"
              style={{ 
                filter: "brightness(1.15) saturate(0.6)",
                opacity: 0.85 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
