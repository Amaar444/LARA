"use client";

import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Design System",
    duration: "2 hours",
    rating: 4.27,
    price: "$19.99",
  },
  {
    id: 2,
    title: "Figma",
    duration: "39 hours",
    rating: 4.63,
    price: "free",
  },
  {
    id: 3,
    title: "Figma",
    duration: "16.1 hours",
    rating: 4.52,
    price: "free",
  },
  {
    id: 4,
    title: "UX Design",
    duration: "1.7 hours",
    rating: 4.24,
    price: "$24.99",
  },
  {
    id: 5,
    title: "UI Design",
    duration: "32 hours",
    rating: 4.52,
    price: "free",
  },
  {
    id: 6,
    title: "UI Design",
    duration: "30 hours",
    rating: 5,
    price: "free",
  },
];

export default function CoursesListPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="w-full m-0 py-10 px-5 pb-16 bg-white">
        {/* Title Bar */}
        <h2 
          className="text-center text-[32px] font-bold mb-10 py-4 rounded-[40px]"
          style={{ background: "linear-gradient(to right, #f9c26c, #f6f3b0)" }}
        >
          Recommended Courses for You
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {courses.map((course) => (
            <article
              key={course.id}
              className="bg-[#f8e495] rounded-[26px] p-5 pb-5 text-center shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2.5 text-center">{course.title}</h3>
              <p className="text-sm my-1 text-center">Duration: {course.duration} ⏱</p>
              <p className="text-sm my-1 text-center">Rating: {course.rating} ⭐</p>
              <p className="text-sm my-1 text-center">
                Price:{" "}
                <span className="font-semibold text-[#1d9b40]">
                  {course.price}
                </span>
              </p>

              <Link
                href="/payment"
                className="no-underline w-full max-w-[300px] block mx-auto mt-4 py-2 px-5 rounded-xl border-none bg-[#f29633] text-white text-sm font-semibold cursor-pointer hover:bg-[#e08528] transition-colors"
              >
                View Details
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
