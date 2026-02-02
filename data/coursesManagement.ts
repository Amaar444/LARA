export interface Course {
  id: number;
  title: string;
  imageUrl: string;
  students: number;
  lessons: number;
  status: "Active" | "Draft";
  category: string;
}

export const coursesData: Course[] = [
  {
    id: 1,
    title: "UI Design",
    imageUrl: "/images/courses/ui-design.jpg",
    students: 281,
    lessons: 22,
    status: "Active",
    category: "Design",
  },
  {
    id: 2,
    title: "Adobe XD",
    imageUrl: "/images/courses/adobe-xd.jpg",
    students: 65,
    lessons: 22,
    status: "Active",
    category: "Design",
  },
  {
    id: 3,
    title: "UX Trends",
    imageUrl: "/images/courses/ux-trends.jpg",
    students: 43,
    lessons: 2,
    status: "Active",
    category: "Design",
  },
  {
    id: 4,
    title: "How to develop your skills in UI/UX",
    imageUrl: "/images/courses/ui-ux-skills.jpg",
    students: 150,
    lessons: 18,
    status: "Draft",
    category: "Design",
  },
  {
    id: 5,
    title: "Figma Update",
    imageUrl: "/images/courses/figma-update.jpg",
    students: 89,
    lessons: 12,
    status: "Draft",
    category: "Design",
  },
  {
    id: 6,
    title: "Adobe XD Update",
    imageUrl: "/images/courses/adobe-xd-update.jpg",
    students: 45,
    lessons: 7,
    status: "Draft",
    category: "Design",
  },
];

export const courseCategories = [
  "Design",
  "Development",
  "Marketing",
  "Business",
  "Photography",
  "Music",
];

export const courseStatuses = ["Active", "Draft"];
