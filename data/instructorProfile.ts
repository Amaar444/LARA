export interface InstructorProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  imageUrl: string;
}

export const defaultInstructorProfile: InstructorProfile = {
  firstName: "Ehab",
  lastName: "fayez",
  email: "ehabfayez250@gmail.com",
  phone: "+452 652 586",
  bio: "UI Designer who creates clean, simple, and user-friendly interfaces. Focused on clarity, consistency, and turning ideas into smooth visual experiences.",
  imageUrl: "/images/Home in/Frame 1984078083.png",
};
