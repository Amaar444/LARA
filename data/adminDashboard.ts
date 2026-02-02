export const adminStats = {
  totalStudents: 3419,
  totalInstructors: 520,
  totalCourses: 726,
  revenue: 1100,
};

export const distributionData = [
  { domain: 1, students: 6 },
  { domain: 2, students: 29 },
  { domain: 3, students: 30 },
  { domain: 4, students: 53 },
  { domain: 5, students: 52 },
  { domain: 6, students: 63 },
  { domain: 7, students: 51 },
  { domain: 8, students: 43 },
  { domain: 9, students: 26 },
  { domain: 10, students: 16 },
];

export const distributionAverage = 5.7;

export const pendingApprovals = [
  { id: 1, text: "Instructor: Ahmed Salem – Verification Needed", type: "instructor" as const },
  { id: 2, text: "Course: Figma Update – Pending Approval", type: "course" as const },
  { id: 3, text: "Course: UI/UX Basics – Awaiting Review", type: "course" as const },
];

export const dropoutRateData = [
  { level: "Advanced", rate: 12.3 },
  { level: "Beginner", rate: 8.9 },
  { level: "Intermediate", rate: 9.8 },
];

export const dropoutComparisonData = [
  { category: "All Students", rate: 0.097 },
  { category: "3+ Domains", rate: 0.096 },
];

export const repeatedCoursesData = [
  { name: "Repeated 1+ Courses", value: 55.8, color: "#FFA500" },
  { name: "No Repeats", value: 44.2, color: "#D4A574" },
];

export const latestActivityData = [
  { id: 1, name: "Ammar", activity: "Course enrolled", date: "3 months", time: "1:58" },
  { id: 2, name: "Elsayed Ebrehim", activity: "Course enrolled", date: "4 months", time: "8:08" },
  { id: 3, name: "Ehab fayez", activity: "New Couses added", date: "4 months", time: "1:58" },
  { id: 4, name: "Noura Mohammed", activity: "Course enrolled", date: "6 months", time: "5:07" },
];
