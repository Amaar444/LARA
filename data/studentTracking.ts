export interface Student {
  id: number;
  name: string;
  course: string;
  progress: number;
  lastActivity: string;
}

export const studentsData: Student[] = [
  {
    id: 1,
    name: "Nourhan",
    course: "UI Design",
    progress: 80,
    lastActivity: "2025-10-25",
  },
  {
    id: 2,
    name: "Mai",
    course: "UI Design",
    progress: 50,
    lastActivity: "2025-10-15",
  },
  {
    id: 3,
    name: "Ahmed",
    course: "Adobe XD",
    progress: 90,
    lastActivity: "2025-10-25",
  },
  {
    id: 4,
    name: "ELSayed",
    course: "UX Trends",
    progress: 30,
    lastActivity: "2025-9-25",
  },
  {
    id: 5,
    name: "Ammar",
    course: "Adobe XD",
    progress: 70,
    lastActivity: "2025-10-25",
  },
  {
    id: 6,
    name: "Mariam",
    course: "UX Trends",
    progress: 80,
    lastActivity: "2025-10-25",
  },
];

export const coursesList = [
  "UI Design",
  "Adobe XD",
  "UX Trends",
  "Figma",
  "Web Development",
];
