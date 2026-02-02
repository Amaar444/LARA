"use client";

import React, { useState, useMemo } from "react";
import {
  CoursesManagementNavbar,
  AddCourseButton,
  CourseFilters,
  CourseCard,
  CoursesManagementFooter,
} from "@/components/courses-management";
import { coursesData, courseCategories, courseStatuses, Course } from "@/data/coursesManagement";

export default function CoursesManagement() {
  const [courses, setCourses] = useState<Course[]>(coursesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  // Filter courses based on search and filters
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || course.category === selectedCategory;
      const matchesStatus = !selectedStatus || course.status === selectedStatus;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [courses, searchTerm, selectedCategory, selectedStatus]);

  const handleAddCourse = () => {
    // Navigate to course builder or open modal
    window.location.href = "/course-builder";
  };

  const handleEditCourse = (id: number) => {
    console.log("Edit course:", id);
    window.location.href = `/course-builder?edit=${id}`;
  };

  const handleDeleteCourse = (id: number) => {
    if (confirm("Are you sure you want to delete this course?")) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #FFD9B8, #FFE6C5)" }}>
      {/* Navigation Bar */}
      <CoursesManagementNavbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Header with Add Button */}
        <div className="flex justify-end mb-6">
          <AddCourseButton onClick={handleAddCourse} />
        </div>

        {/* Filters */}
        <CourseFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          categories={courseCategories}
          statuses={courseStatuses}
        />

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              imageUrl={course.imageUrl}
              students={course.students}
              lessons={course.lessons}
              status={course.status}
              onEdit={handleEditCourse}
              onDelete={handleDeleteCourse}
              delay={0.1 * index}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16 animate-fadeIn">
            <p className="text-gray-600 text-lg">No courses found matching your criteria.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <CoursesManagementFooter />
    </div>
  );
}
