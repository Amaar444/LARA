import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Design System",
    duration: "2 hours",
    rating: 4.27,
    price: "$19.99",
    isPaid: true,
  },
  {
    id: 2,
    title: "Figma",
    duration: "39 hours",
    rating: 4.63,
    price: "free",
    isPaid: false,
  },
  {
    id: 3,
    title: "Figma",
    duration: "16.1 hours",
    rating: 4.52,
    price: "free",
    isPaid: false,
  },
  {
    id: 4,
    title: "UX Design",
    duration: "1.7 hours",
    rating: 4.24,
    price: "$24.99",
    isPaid: true,
  },
  {
    id: 5,
    title: "UI Design",
    duration: "32 hours",
    rating: 4.52,
    price: "free",
    isPaid: false,
  },
  {
    id: 6,
    title: "UI Design",
    duration: "30 hours",
    rating: 5,
    price: "free",
    isPaid: false,
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-8">
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Recommended Courses for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                Duration: {course.duration} ⏱
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Rating: {course.rating} ⭐
              </p>
              <p className="text-sm text-gray-800 mb-4">
                Price:{" "}
                <span
                  className={
                    course.isPaid ? "text-orange-600 font-semibold" : "text-green-600 font-semibold"
                  }
                >
                  {course.price}
                </span>
              </p>
              <Link
                href={`/payment?course=${course.id}`}
                className="inline-block w-full text-center bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] text-gray-800 font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
