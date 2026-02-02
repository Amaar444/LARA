"use client";

import React, { useState } from "react";
import {
  InstructorHomeNavbar,
  HeroSection,
  InstructorCourseCard,
  RecentActivity,
  StudentFeedback,
  InstructorHomeFooter,
} from "@/components/instructor-home";
import {
  instructorCoursesData,
  recentActivitiesData,
  testimonialData,
  instructorData,
} from "@/data/instructorHome";

export default function InstructorHome() {
  const [activityFilter, setActivityFilter] = useState("today");

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #FFD9B8, #FFF7E6)" }}>
      {/* Navigation Bar */}
      <InstructorHomeNavbar />

      {/* Hero Section */}
      <HeroSection userName={instructorData.name} />

      {/* My Courses Section */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8 animate-fadeIn">
            My Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructorCoursesData.map((course, index) => (
              <InstructorCourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                imageUrl={course.imageUrl}
                level={course.level}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity Section */}
      <RecentActivity
        activities={recentActivitiesData}
        filter={activityFilter}
        onFilterChange={setActivityFilter}
      />

      {/* Student Feedback Section */}
      <StudentFeedback testimonials={testimonialData} />

      {/* Footer */}
      <InstructorHomeFooter />
    </div>
  );
}
