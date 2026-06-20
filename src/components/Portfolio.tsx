"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, 
  ExternalLink, 
  Terminal, 
  Cpu,
  Code,
  User
} from "lucide-react";

export default function Portfolio() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const projects = [
    {
      title: "Inventory Oversell Prevention System",
      description: "Production-grade inventory platform preventing stock overselling via atomic SQLite WAL transactions, stock reservation, and concurrent order protection.",
      tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "SQLite"],
      github: "https://github.com/pnoorahammad/DMH-software-devloper-trial-task",
      live: "https://dmh-software-devloper-trial-task.vercel.app/",
      img: "/inventory-thumb.png"
    },
    {
      title: "Full Stack LLM Chat Platform",
      description: "Enterprise-grade AI chat organization platform featuring real-time conversational UI, language models, and robust API integrations.",
      tech: ["React", "Node.js", "Docker", "LLM APIs"],
      github: "https://github.com/pnoorahammad/-Full-Stack-LLM-Chat-Platform",
      live: "https://github.com/pnoorahammad/-Full-Stack-LLM-Chat-Platform", // fallback
      img: "https://picsum.photos/seed/llm/600/400"
    },
    {
      title: "Cloud ASE",
      description: "Advanced Java Full-Stack architecture demonstrating scalable cloud deployment and microservices orchestration.",
      tech: ["Java", "Spring Boot", "React", "AWS"],
      github: "https://github.com/pnoorahammad/cloud-ASE-",
      live: "https://cloud-ase.vercel.app",
      img: "https://picsum.photos/seed/cloud/600/400"
    },
    {
      title: "Tech Stack E-Commerce",
      description: "High-performance React Native and Express backend for a modern, cross-platform e-commerce shopping experience.",
      tech: ["React Native", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/pnoorahammad/Tech-Stack-reactNative-Node-js-express-Mongo-DB",
      live: "https://tech-stack-react-native-node-js-exp.vercel.app",
      img: "https://picsum.photos/seed/ecommerce/600/400"
    },
    {
      title: "MERN Stack Application",
      description: "End-to-end MERN stack solution featuring secure authentication, state management, and real-time database updates.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/pnoorahammad/Mern-Stack-Project",
      live: "https://mern-stack-project-xi-two.vercel.app",
      img: "https://picsum.photos/seed/mern/600/400"
    },
    {
      title: "American Dream Maal",
      description: "Interactive front-end portal deployed on Vercel with complex UI states, modern animations, and responsive design.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/pnoorahammad/american-dream-maal",
      live: "https://american-dream-maal.vercel.app",
      img: "https://picsum.photos/seed/american/600/400"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express.js", "Java", "Spring Boot", "Python", "Django", "Flask"] },
    { category: "Database & Cloud", items: ["MongoDB", "PostgreSQL", "SQLite", "MySQL", "AWS", "Docker", "Vercel"] },
    { category: "Tools & DevOps", items: ["Git", "GitHub Actions", "Linux", "REST APIs", "CI/CD", "Postman"] }
  ];

  return (
    <div className="text-gray-100 font-sans pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter">
          NOOR<span className="text-blue-500">.</span>DEV
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-20 relative overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div className="max-w-4xl z-10" {...fadeInUp}>
          <div className="flex items-center gap-3 text-blue-400 font-mono text-sm mb-6">
            <Terminal size={16} />
            <span>Senior Full Stack Engineer</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Architecting <span className="text-gradient">Scalable Solutions</span> <br className="hidden md:block"/>
            for the Modern Web.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            I am Noor Ahammad, a versatile software engineer specializing in high-performance web applications, cloud infrastructure, and AI integrations. I build products that scale seamlessly.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
              View Work
            </a>
            <a href="https://github.com/pnoorahammad" target="_blank" className="px-6 py-3 glass-panel text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
              <Code size={20} /> GitHub
            </a>
          </div>
        </motion.div>
      </section>

      {/* About & Skills (Bento Box Layout) */}
      <section id="about" className="px-6 md:px-24 py-24 relative">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Main About Card */}
          <div className="glass-panel p-8 rounded-2xl md:col-span-2 border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Cpu className="text-blue-400" /> About Me</h2>
            <p className="text-gray-400 leading-relaxed">
              With a strong foundation in both front-end aesthetics and back-end architecture, I bridge the gap between design and engineering. My passion lies in solving complex technical challenges&mdash;whether it&apos;s optimizing atomic database transactions to prevent overselling or architecting robust REST APIs. I thrive in fast-paced environments and continuously adapt to modern tech stacks.
            </p>
          </div>

          {/* Education Card */}
          <div className="glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><User className="text-purple-400" /> Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-200">Bachelor of Technology</h3>
                <p className="text-sm text-gray-400">Computer Science</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-200">Continuous Learning</h3>
                <p className="text-sm text-gray-400">Cloud Architecture & DevOps</p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 bg-white/5 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:border-white/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 md:px-24 py-24">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-gray-400">A selection of my best deployed engineering work.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-panel rounded-2xl overflow-hidden border border-white/5 flex flex-col group"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    <a href={project.github} target="_blank" className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors">
                      <Code size={18} />
                    </a>
                    <a href={project.live} target="_blank" className="p-2 bg-blue-500/80 backdrop-blur-md rounded-full text-white hover:bg-blue-400 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6 flex-1 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-24 py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none" />
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s build something <span className="text-gradient">extraordinary.</span></h2>
          <p className="text-xl text-gray-400 mb-10">
            I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:pogakunoor5158@gmail.com" className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <Mail size={20} /> Get In Touch
            </a>
            <a href="https://linkedin.com" target="_blank" className="px-8 py-4 glass-panel text-white font-bold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <User size={20} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm border-t border-white/5">
        <p>Designed & Built by Noor Ahammad.</p>
        <p className="mt-1">Powered by Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
