export interface LearningPathItem {
  id: string;
  name: string;
  iconName: "PenTool" | "Code2" | "Laptop" | "Briefcase" | "Megaphone" | "Camera";
  href?: string;
}

export const learningPathsData: LearningPathItem[] = [
  { id: "design", name: "Design", iconName: "PenTool", href: "/courses?category=design" },
  { id: "development", name: "Development", iconName: "Code2", href: "/courses?category=development" },
  { id: "it-software", name: "IT & Software", iconName: "Laptop", href: "/courses?category=it-software" },
  { id: "business", name: "Business", iconName: "Briefcase", href: "/courses?category=business" },
  { id: "marketing", name: "Marketing", iconName: "Megaphone", href: "/courses?category=marketing" },
  { id: "photography", name: "Photography", iconName: "Camera", href: "/courses?category=photography" },
];

export const categoryRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
  ],
];

export const courseCategories = categoryRows.flat();


export interface CourseItem {
  id: string;
  title: string;
  rating: number;
  instructor: string;
  lessons: string;
  duration: string;
  comments: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: string;
  billingPeriod: string;
  image: string;
  category: string;
  studentAvatars: string[];
  enrolledCount: string;
}

export const defaultStudentAvatars = [
  "/images/students/student1.jpg",
  "/images/students/student2.jpg",
  "/images/students/student3.jpg",
  "/images/students/student4.jpg",
];

export const featuredCoursesData: CourseItem[] = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    rating: 4.5,
    instructor: "purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    billingPeriod: "lifetime",
    image: "/images/courses/course1.png",
    category: "UI/UX Design",
    studentAvatars: defaultStudentAvatars,
    enrolledCount: "26+",
  },
  {
    id: "2",
    title: "Build Digital Asset",
    rating: 4.5,
    instructor: "purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    billingPeriod: "lifetime",
    image: "/images/courses/course2.png",
    category: "Design",
    studentAvatars: defaultStudentAvatars,
    enrolledCount: "26+",
  },
  {
    id: "3",
    title: "the Power of Big Data",
    rating: 4.5,
    instructor: "purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    billingPeriod: "lifetime",
    image: "/images/courses/course3.png",
    category: "Data Science",
    studentAvatars: defaultStudentAvatars,
    enrolledCount: "26+",
  },
  {
    id: "4",
    title: "Balancing Productivity an...",
    rating: 4.5,
    instructor: "purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    billingPeriod: "lifetime",
    image: "/images/courses/course4.png",
    category: "Productivity",
    studentAvatars: defaultStudentAvatars,
    enrolledCount: "26+",
  },
  {
    id: "5",
    title: "Mastering Money Manage...",
    rating: 4.5,
    instructor: "purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    billingPeriod: "lifetime",
    image: "/images/courses/course5.png",
    category: "Business",
    studentAvatars: defaultStudentAvatars,
    enrolledCount: "26+",
  },
  {
    id: "6",
    title: "From Idea to Startup Succ...",
    rating: 4.5,
    instructor: "purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    billingPeriod: "lifetime",
    image: "/images/courses/course6.png",
    category: "Freelance & Entrepreneurship",
    studentAvatars: defaultStudentAvatars,
    enrolledCount: "26+",
  },
];
