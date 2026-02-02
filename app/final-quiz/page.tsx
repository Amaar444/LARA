"use client";

import React, { useState } from "react";
import {
  FinalQuizNavbar,
  QuizDetails,
  QuestionCard,
  AddQuestionButton,
  QuizActions,
} from "@/components/final-quiz";
import { initialQuestions, durationOptions, Question } from "@/data/finalQuiz";

export default function FinalQuiz() {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  const handleEditQuestion = (id: number) => {
    console.log("Edit question:", id);
    // TODO: Implement edit modal
  };

  const handleDeleteQuestion = (id: number) => {
    if (confirm("Are you sure you want to delete this question?")) {
      setQuestions(questions.filter((q) => q.id !== id));
    }
  };

  const handleAddQuestion = () => {
    const newQuestion: Question = {
      id: questions.length + 1,
      question: "New Question?",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 0,
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleCancel = () => {
    if (confirm("Are you sure you want to cancel? All changes will be lost.")) {
      window.location.href = "/course-builder";
    }
  };

  const handleSave = () => {
    if (!date || !duration) {
      alert("Please fill in quiz details (date and duration)");
      return;
    }
    if (questions.length === 0) {
      alert("Please add at least one question");
      return;
    }
    console.log("Saving quiz:", { date, duration, questions });
    alert("Quiz saved successfully!");
    window.location.href = "/course-builder";
  };

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #FFD9B8, #FFE6C5)" }}>
      {/* Navigation Bar */}
      <FinalQuizNavbar />

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8 animate-fadeIn">
          Add Quiz
        </h1>

        {/* Quiz Details */}
        <QuizDetails
          date={date}
          onDateChange={setDate}
          duration={duration}
          onDurationChange={setDuration}
          durations={durationOptions}
        />

        {/* Questions List */}
        <div className="space-y-4">
          {questions.map((q, index) => (
            <QuestionCard
              key={q.id}
              id={q.id}
              question={q.question}
              options={q.options}
              onEdit={handleEditQuestion}
              onDelete={handleDeleteQuestion}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>

        {/* Add Question Button */}
        <div className="flex justify-end mt-6">
          <AddQuestionButton onClick={handleAddQuestion} />
        </div>

        {/* Action Buttons */}
        <QuizActions onCancel={handleCancel} onSave={handleSave} />
      </main>
    </div>
  );
}
