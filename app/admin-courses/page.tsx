"use client";

import React, { useState, useMemo } from "react";
import {
  AdminNavbar,
  AdminCourseFilters,
  AdminCourseCard,
  Pagination,
} from "@/components/admin-dashboard";
import { adminCoursesData, AdminCourse } from "@/data/adminCourses";

const COURSES_PER_PAGE = 9;

export default function AdminCoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [courses, setCourses] = useState<AdminCourse[]>(adminCoursesData);

  // Filter courses
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || course.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [courses, searchTerm, statusFilter]);

  // Paginate courses
  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  const paginatedCourses = useMemo(() => {
    const start = (currentPage - 1) * COURSES_PER_PAGE;
    return filteredCourses.slice(start, start + COURSES_PER_PAGE);
  }, [filteredCourses, currentPage]);

  // Handlers
  const handleApprove = (id: number) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === id ? { ...course, status: "approved" as const } : course
      )
    );
  };

  const handleReject = (id: number) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === id ? { ...course, status: "rejected" as const } : course
      )
    );
  };

  const handleEdit = (id: number) => {
    console.log("Edit course:", id);
    // Add edit logic
  };

  const handleDelete = (id: number) => {
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  return (
    <div 
      className="min-h-screen"
      style={{ background: "linear-gradient(to bottom, #FFD4A8, #FFECD9)" }}
    >
      {/* Navigation */}
      <AdminNavbar activeTab="course-management" />

      {/* Main Content */}
      <main className="px-8 py-6 max-w-7xl mx-auto">
        {/* Filters */}
        <AdminCourseFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCourses.map((course, index) => (
            <AdminCourseCard
              key={course.id}
              course={course}
              onApprove={handleApprove}
              onReject={handleReject}
              onEdit={handleEdit}
              onDelete={handleDelete}
              delay={0.05 * index}
            />
          ))}
        </div>

        {/* Empty State */}
        {paginatedCourses.length === 0 && (
          <div className="text-center py-12 animate-fadeIn">
            <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </main>
    </div>
  );
}
