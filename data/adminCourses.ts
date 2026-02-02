export type CourseStatus = "pending" | "approved" | "rejected";

export interface AdminCourse {
  id: number;
  name: string;
  instructor: string;
  students: number;
  rating: number;
  status: CourseStatus;
}

export const adminCoursesData: AdminCourse[] = [
  { id: 1, name: "web development", instructor: "Osama Mohammed", students: 400, rating: 4.99, status: "pending" },
  { id: 2, name: "sql", instructor: "Mohamed El-Desouki", students: 250, rating: 4.28, status: "pending" },
  { id: 3, name: "ui design", instructor: "Ehap Fayez", students: 150, rating: 4.39, status: "approved" },
  { id: 4, name: "analysis", instructor: "Luke Barousse", students: 200, rating: 4.47, status: "pending" },
  { id: 5, name: "english", instructor: "Ibrahim Adel", students: 300, rating: 4.59, status: "pending" },
  { id: 6, name: "data structures", instructor: "Sajjaad Khader", students: 150, rating: 4.75, status: "approved" },
  { id: 7, name: "illustrator", instructor: "Amr Attallah", students: 240, rating: 4.58, status: "pending" },
  { id: 8, name: "sql", instructor: "Mohamed El-Desouki", students: 250, rating: 4.28, status: "pending" },
  { id: 9, name: "seo", instructor: "Walid Taha", students: 200, rating: 4.78, status: "approved" },
  { id: 10, name: "python", instructor: "Ahmed Hassan", students: 350, rating: 4.85, status: "pending" },
  { id: 11, name: "react", instructor: "Sarah Ahmed", students: 280, rating: 4.62, status: "approved" },
  { id: 12, name: "machine learning", instructor: "Omar Khaled", students: 180, rating: 4.91, status: "pending" },
  { id: 13, name: "figma", instructor: "Nour Hassan", students: 220, rating: 4.55, status: "approved" },
  { id: 14, name: "javascript", instructor: "Ali Mohamed", students: 450, rating: 4.72, status: "pending" },
  { id: 15, name: "node.js", instructor: "Fatma Salem", students: 190, rating: 4.68, status: "approved" },
  { id: 16, name: "typescript", instructor: "Youssef Ali", students: 160, rating: 4.81, status: "pending" },
];
