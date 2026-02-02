export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const initialQuestions: Question[] = [
  {
    id: 1,
    question: "What does UI stand for?",
    options: ["User Internet", "User Interface", "User Interact", "User Interpt"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Primary color in UI?",
    options: ["Red", "Blue", "Yellow", "Green"],
    correctAnswer: 1,
  },
];

export const durationOptions = [
  "15 minutes",
  "30 minutes",
  "45 minutes",
  "1 hour",
  "1.5 hours",
  "2 hours",
];
