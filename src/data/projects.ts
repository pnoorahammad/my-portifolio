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
  architecture?: string;
  features?: string[];
  challenges?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Chat Platform",
    description: "A comprehensive AI chat platform leveraging large language models for intelligent conversations with customizable agents.",
    tags: ["Python", "React", "LLM", "TailwindCSS"],
    category: ["AI", "LLM", "Full Stack", "React"],
    github: "https://github.com/pnoorahammad/Ai-project-guide",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    architecture: "React frontend communicating via REST APIs to a Python backend handling LLM integration.",
    features: ["Real-time chatting with AI", "Context preservation", "Custom AI agent prompts", "Responsive modern UI"],
    challenges: "Managing state for continuous conversation context and minimizing API latency."
  },
  {
    id: 2,
    title: "Face Recognition System",
    description: "A robust computer vision application for real-time face detection and recognition using Python and DeepFace.",
    tags: ["Python", "OpenCV", "DeepFace", "AI"],
    category: ["AI", "Machine Learning", "Python"],
    github: "https://github.com/pnoorahammad",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    architecture: "Python script processing live video feed using OpenCV, piped into DeepFace models for inference.",
    features: ["Real-time face detection", "High accuracy recognition", "Multiple face tracking in single frame"],
    challenges: "Optimizing frame processing speed to ensure real-time performance without lag."
  },
  {
    id: 3,
    title: "MallSphere AI Sales Deck",
    description: "An AI-driven sales presentation generator using LLMs and RAG to dynamically create personalized sales pitches.",
    tags: ["Python", "LLM", "RAG", "Prompt Engineering"],
    category: ["AI", "LLM", "Python"],
    github: "https://github.com/pnoorahammad",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    architecture: "Retrieval-Augmented Generation pipeline pulling context from a vector DB to inform LLM generation.",
    features: ["Dynamic pitch generation", "Customized for specific clients", "Document ingestion capabilities"],
    challenges: "Fine-tuning prompts to ensure the generated sales deck maintained a professional and persuasive tone."
  },
  {
    id: 4,
    title: "ElectroMart E-Commerce",
    description: "A full-stack e-commerce platform built with Java, Spring Boot, and React, featuring secure authentication and payment integration.",
    tags: ["Java", "Spring Boot", "React", "MySQL"],
    category: ["Java", "Spring Boot", "React", "Full Stack"],
    github: "https://github.com/pnoorahammad/electromart-website",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    architecture: "Spring Boot backend exposing RESTful APIs consumed by a React frontend, with MySQL for relational data.",
    features: ["User Authentication (JWT)", "Product Catalog", "Shopping Cart", "Order Management"],
    challenges: "Implementing a robust cart state management system and ensuring secure transaction flows."
  },
  {
    id: 5,
    title: "ERP Sales Management System",
    description: "A comprehensive Enterprise Resource Planning system focused on sales management and inventory tracking.",
    tags: ["Java", "Spring Boot", "REST API", "SQL"],
    category: ["Java", "Spring Boot", "Backend"],
    github: "https://github.com/pnoorahammad",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    architecture: "Monolithic Spring Boot application using Hibernate ORM for complex data relationships.",
    features: ["Sales tracking", "Inventory management", "Role-based access control", "Reporting dashboard"],
    challenges: "Designing normalized database schemas to handle complex multi-entity relationships."
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A world-class, highly animated personal portfolio website built from scratch using React, Vite, TailwindCSS, and Framer Motion.",
    tags: ["React", "Vite", "TailwindCSS", "Framer Motion"],
    category: ["React", "Frontend"],
    github: "https://github.com/pnoorahammad/my-portifolio",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    architecture: "Single Page Application (SPA) built with Vite, utilizing Framer Motion for scroll animations.",
    features: ["Fully responsive UI", "Advanced micro-animations", "Dynamic data mapping", "Lazy loaded assets"],
    challenges: "Ensuring smooth 60fps animations across all devices while maintaining a high Lighthouse performance score."
  },
  {
    id: 7,
    title: "LLM Chat Project",
    description: "An advanced LLM chat interface capable of handling multiple context streams and plugin integrations.",
    tags: ["Python", "LLMs", "LangChain", "React"],
    category: ["AI", "LLM", "Full Stack"],
    github: "https://github.com/pnoorahammad",
    image: "https://images.unsplash.com/photo-1678286599522-cb52899479e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    architecture: "LangChain orchestration layer in Python wrapped in a FastAPI server.",
    features: ["Memory management", "Streaming responses", "Custom tool invocation"],
    challenges: "Handling streaming token chunks over WebSockets to provide a responsive UI."
  },
  {
    id: 8,
    title: "Playto Payout Engine",
    description: "A highly scalable and secure payout engine built with Java and Spring Boot to handle complex payment processing.",
    tags: ["Java", "Spring Boot", "Payments", "Microservices"],
    category: ["Java", "Spring Boot", "Backend"],
    github: "https://github.com/pnoorahammad",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    architecture: "Microservice architecture utilizing Spring Boot and asynchronous message queues.",
    features: ["Idempotent payment processing", "Ledger reconciliation", "Webhook notifications"],
    challenges: "Ensuring exact-once processing semantics to prevent duplicate payouts."
  },
  {
    id: 9,
    title: "DMH Software Developer Trial Task",
    description: "A specialized software development assignment demonstrating robust system design and clean code practices.",
    tags: ["Java", "Spring Boot", "Clean Code"],
    category: ["Java", "Backend"],
    github: "https://github.com/pnoorahammad",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    architecture: "Standard layered backend architecture (Controller, Service, Repository).",
    features: ["High test coverage", "SOLID principles applied", "Comprehensive documentation"],
    challenges: "Meeting strict performance and structural constraints within a limited timeframe."
  },
  {
    id: 10,
    title: "Linux Monitoring Tool",
    description: "A lightweight system monitoring tool built to track CPU, memory, and disk usage across Linux environments.",
    tags: ["Python", "Linux", "Bash", "System Admin"],
    category: ["Python", "Backend"],
    github: "https://github.com/pnoorahammad",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    architecture: "Python daemon reading from /proc filesystem and exposing metrics.",
    features: ["Real-time resource tracking", "Configurable alert thresholds", "Minimal resource footprint"],
    challenges: "Parsing low-level system files efficiently without causing additional load."
  },
  {
    id: 11,
    title: "Zero-to-AGI Python Project",
    description: "A foundational AI project exploring the path to Artificial General Intelligence through Python implementations.",
    tags: ["Python", "AI", "Machine Learning"],
    category: ["AI", "Python"],
    github: "https://github.com/pnoorahammad/Zero-to-AGI-Python-Project",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    architecture: "Modular Python frameworks experimenting with reinforcement learning algorithms.",
    features: ["Custom environment creation", "Algorithm benchmarking", "Data visualization"],
    challenges: "Translating complex mathematical models into efficient Python code."
  },
  {
    id: 12,
    title: "Python Trading Bot",
    description: "An automated trading bot built with Python, applying machine learning models for financial market predictions.",
    tags: ["Python", "Machine Learning", "Finance"],
    category: ["Python", "Machine Learning"],
    github: "https://github.com/pnoorahammad/python-devloper-trading-bot",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    architecture: "Event-driven architecture subscribing to live market data websockets.",
    features: ["Backtesting engine", "Live paper trading", "ML-based signal generation"],
    challenges: "Managing API rate limits and ensuring low-latency execution."
  }
];
