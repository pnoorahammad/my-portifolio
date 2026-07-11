export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string[];
  github?: string;
  demo?: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Chat Platform",
    description: "A comprehensive AI chat platform leveraging large language models for intelligent conversations.",
    tags: ["LLM", "Python", "React", "TailwindCSS"],
    category: ["AI", "LLM", "Full Stack", "Python", "React"],
    github: "https://github.com/pnoorahammad/Ai-project-guide",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "AI-First CRM HCP Module",
    description: "An AI-powered CRM module designed specifically for Healthcare Professionals (HCPs) using Retrieval-Augmented Generation (RAG).",
    tags: ["Python", "LLM", "RAG", "CRM"],
    category: ["AI", "LLM", "Python", "Backend"],
    github: "https://github.com/pnoorahammad/-AI-First-CRM-HCP-Module",
    demo: "https://ai-first-crm-hcp-module-eta.vercel.app",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "ElectroMart E-Commerce",
    description: "A full-stack e-commerce platform built with Java, Spring Boot, and React, featuring secure authentication and payment integration.",
    tags: ["Java", "Spring Boot", "React", "MySQL"],
    category: ["Java", "Spring Boot", "React", "Full Stack"],
    github: "https://github.com/pnoorahammad/electromart-website",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 4,
    title: "Python Trading Bot",
    description: "An automated trading bot built with Python, applying machine learning models for financial market predictions.",
    tags: ["Python", "Machine Learning", "Finance"],
    category: ["Python", "Machine Learning", "Backend"],
    github: "https://github.com/pnoorahammad/python-devloper-trading-bot",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 5,
    title: "Zero-to-AGI Python Project",
    description: "A foundational AI project exploring the path to Artificial General Intelligence through Python implementations.",
    tags: ["Python", "AI", "AGI"],
    category: ["AI", "Python"],
    github: "https://github.com/pnoorahammad/Zero-to-AGI-Python-Project",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "Full Stack Fast API Template",
    description: "A robust template for kickstarting full-stack applications using FastAPI and React with TypeScript.",
    tags: ["TypeScript", "FastAPI", "React", "Python"],
    category: ["Full Stack", "Python", "React", "Backend"],
    github: "https://github.com/pnoorahammad/Full-Stack--fast--API-Template",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 7,
    title: "Face Recognition System",
    description: "A robust computer vision application for real-time face detection and recognition using Python and DeepFace.",
    tags: ["Python", "Computer Vision", "DeepFace"],
    category: ["AI", "Machine Learning", "Python"],
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 8,
    title: "MallSphere AI Sales Deck",
    description: "An AI-driven sales presentation generator using LLMs and RAG to dynamically create personalized sales pitches.",
    tags: ["AI", "LLM", "RAG", "Python"],
    category: ["AI", "LLM", "Python"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 9,
    title: "ERP Sales Management System",
    description: "A comprehensive Enterprise Resource Planning system focused on sales management, built with Java and Spring Boot.",
    tags: ["Java", "Spring Boot", "REST API", "SQL"],
    category: ["Java", "Spring Boot", "Backend"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 10,
    title: "Portfolio Website",
    description: "A world-class, highly animated personal portfolio website built from scratch using React, Vite, TailwindCSS, and Framer Motion.",
    tags: ["React", "Vite", "TailwindCSS", "Framer Motion"],
    category: ["React", "Frontend", "Full Stack"],
    github: "https://github.com/pnoorahammad/my-portifolio",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 11,
    title: "Playto Payout Engine",
    description: "A highly scalable and secure payout engine built with Java and Spring Boot to handle complex payment processing.",
    tags: ["Java", "Spring Boot", "Payments", "Microservices"],
    category: ["Java", "Spring Boot", "Backend"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 12,
    title: "Mobile App Developer",
    description: "A comprehensive mobile application project built with JavaScript and React Native for cross-platform compatibility.",
    tags: ["JavaScript", "React Native", "Mobile"],
    category: ["Frontend", "React"],
    github: "https://github.com/pnoorahammad/Mobile-App-devloper",
    demo: "https://mobile-app-devloper.vercel.app",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  }
];
