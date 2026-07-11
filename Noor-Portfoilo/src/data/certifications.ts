export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  driveId?: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Java Full Stack Development",
    issuer: "Achievers IT, Bangalore",
    date: "6 Months Program",
    icon: "fa-certificate",
    driveId: "1Crqhj5t7oepmQ3QEgnGvyh0MU7W_FvpP"
  },
  {
    id: 2,
    title: "Python Workshop",
    issuer: "AI FOR TECHIES",
    date: "3 Hours Program",
    icon: "fa-python",
  },
  {
    id: 3,
    title: "Saviynt Identity Security for the AI Age",
    issuer: "Saviynt Certified Program / Naukri",
    date: "2025",
    icon: "fa-shield-alt",
  },
  {
    id: 4,
    title: "Next-Generation Sequencing (NGS)",
    issuer: "Udemy",
    date: "November 2025",
    icon: "fa-dna",
  }
];
