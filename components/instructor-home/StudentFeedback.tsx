"use client";

import React from "react";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  id: number;
  name: string;
  course: string;
  feedback: string;
  avatarUrl: string;
}

interface StudentFeedbackProps {
  testimonials: Testimonial[];
}

const StudentFeedback: React.FC<StudentFeedbackProps> = ({ testimonials }) => {
  return (
    <section className="py-12 px-8 bg-gradient-to-b from-transparent to-orange-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8 animate-fadeIn">
          Student Feedback
        </h2>

        {/* Testimonials Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="snap-start">
              <TestimonialCard
                id={testimonial.id}
                name={testimonial.name}
                course={testimonial.course}
                feedback={testimonial.feedback}
                avatarUrl={testimonial.avatarUrl}
                delay={0.1 * index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentFeedback;
