export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
  tags: string[];
}

export const experience: Experience[] = [
  {
    id: 1,
    role: "Python Developer Intern",
    company: "Certify Technology",
    duration: "Aug 2025 – Sep 2025",
    description: [
      "Conducted sentiment analysis on product reviews to analyze customer feedback.",
      "Applied NLP techniques to extract insights for product improvement."
    ],
    tags: ["Python", "NLP", "Machine Learning"]
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "AICTE",
    duration: "Sep 2023 – Oct 2023",
    description: [
      "Developed responsive web pages using HTML, CSS, and JavaScript.",
      "Gained hands-on experience in frontend development and web design principles."
    ],
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 3,
    role: "Full Stack Java Developer Intern",
    company: "Skybrisk",
    duration: "Sep 2020 – Dec 2020",
    description: [
      "Developed full-stack applications using Java, JDBC, and SQL.",
      "Worked on backend logic, database connectivity, and basic frontend integration."
    ],
    tags: ["Java", "JDBC", "SQL"]
  }
];
