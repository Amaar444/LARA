"use client";

import React, { useState, useMemo } from "react";
import {
  StudentTrackingNavbar,
  StudentFilters,
  StudentCard,
  StudentTrackingFooter,
} from "@/components/student-tracking";
import { studentsData, coursesList, Student } from "@/data/studentTracking";

export default function StudentTracking() {
  const [students] = useState<Student[]>(studentsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  // Filter students based on search and course filter
  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCourse = !selectedCourse || student.course === selectedCourse;
      return matchesSearch && matchesCourse;
    });
  }, [students, searchTerm, selectedCourse]);

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #FFD9B8, #FFE6C5)" }}>
      {/* Navigation Bar */}
      <StudentTrackingNavbar />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8 animate-fadeIn">
          Student Tracking
        </h1>

        {/* Filters */}
        <StudentFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCourse={selectedCourse}
          onCourseChange={setSelectedCourse}
          courses={coursesList}
        />

        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student, index) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              course={student.course}
              progress={student.progress}
              lastActivity={student.lastActivity}
              delay={0.1 * index}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredStudents.length === 0 && (
          <div className="text-center py-16 animate-fadeIn">
            <p className="text-gray-600 text-lg">No students found matching your criteria.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <StudentTrackingFooter />
    </div>
  );
}
