export const topCoursesData = [
  { course: "Web Development", rate: 92 },
  { course: "Data Science", rate: 88 },
  { course: "UI/UX Design", rate: 85 },
  { course: "Mobile Development", rate: 82 },
  { course: "Digital Marketing", rate: 78 },
];

export const bottomCoursesData = [
  { course: "Advanced Math", rate: 45 },
  { course: "Physics 101", rate: 48 },
  { course: "Chemistry Lab", rate: 52 },
  { course: "Statistics", rate: 55 },
  { course: "Calculus II", rate: 58 },
];

export const dropoutRateData = [
  { duration: "Short", rate: 15 },
  { duration: "Medium", rate: 28 },
  { duration: "Long", rate: 42 },
];

export const repeatCoursesData = [
  { name: "Repeated", value: 35, color: "#FF8A00" },
  { name: "No Repeats", value: 65, color: "#FFD199" },
];

export const correlationData = Array.from({ length: 120 }, () => ({
  preCourse: Math.floor(Math.random() * 100),
  finalExam: Math.floor(Math.random() * 100),
}));

// Legacy exports for compatibility
export const topCoursesBySuccess = topCoursesData;
export const bottomCoursesBySuccess = bottomCoursesData;
export const dropoutByDuration = dropoutRateData;
export const repeatCourseData = repeatCoursesData;
export const correlationCoefficient = 0.02;
