"use client";

import React, { useState } from "react";
import {
  CourseBuilderNavbar,
  CourseHeader,
  CourseInfoCard,
  ModuleDropdown,
  LessonCard,
  AddLessonButton,
  CourseBuilderFooter,
} from "@/components/course-builder";
import { courseData } from "@/data/courseBuilder";

export default function CourseBuilder() {
  const [activeTab, setActiveTab] = useState<"content" | "quiz">("content");
  const [selectedModule, setSelectedModule] = useState(courseData.modules[0]);
  const [lessons, setLessons] = useState(courseData.lessons);

  const handleEditLesson = (lessonId: number) => {
    console.log("Edit lesson:", lessonId);
    // TODO: Implement edit functionality
  };

  const handleDeleteLesson = (lessonId: number) => {
    setLessons(lessons.filter((lesson) => lesson.id !== lessonId));
  };

  const handleAddLesson = () => {
    const newLesson = {
      id: lessons.length + 1,
      lessonNumber: lessons.length + 1,
      title: "New Lesson Title",
      module: selectedModule,
      hasVideo: false,
      hasPdf: false,
      hasAssignment: false,
    };
    setLessons([...lessons, newLesson]);
  };

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #FFD9B8, #FFE6C5)" }}>
      {/* Navigation Bar */}
      <CourseBuilderNavbar />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Course Header Tabs */}
        <CourseHeader activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "content" ? (
          <>
            {/* Course Info Card */}
            <CourseInfoCard
              title={courseData.title}
              description={courseData.description}
              imageUrl={courseData.imageUrl}
            />

            {/* Module Dropdown */}
            <ModuleDropdown
              selectedModule={selectedModule}
              modules={courseData.modules}
              onChange={setSelectedModule}
            />

            {/* Modules/Lessons Section */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
                Modules/Lessons
              </h2>

              {/* Lessons List */}
              <div className="space-y-4">
                {lessons
                  .filter((lesson) => lesson.module === selectedModule)
                  .map((lesson, index) => (
                    <LessonCard
                      key={lesson.id}
                      lessonNumber={lesson.lessonNumber}
                      title={lesson.title}
                      hasVideo={lesson.hasVideo}
                      hasPdf={lesson.hasPdf}
                      hasAssignment={lesson.hasAssignment}
                      onEdit={() => handleEditLesson(lesson.id)}
                      onDelete={() => handleDeleteLesson(lesson.id)}
                      delay={0.4 + index * 0.1}
                    />
                  ))}
              </div>

              {/* Add Lesson Button */}
              <div className="mt-6 flex items-start">
                <AddLessonButton onClick={handleAddLesson} />
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center shadow-lg animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Final Quiz</h2>
            <p className="text-gray-600 text-lg">
              Quiz builder coming soon...
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <CourseBuilderFooter />
    </div>
  );
}
