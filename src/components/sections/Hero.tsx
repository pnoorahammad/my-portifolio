import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaChevronDown } from 'react-icons/fa';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { useState } from 'react';
import { Modal } from '../ui/Modal';

export const Hero = () => {
  const typedText = useTypingEffect([
    "Software Engineer",
    "Java Full Stack Developer",
    "AI Enthusiast",
    "Python Developer"
  ]);

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary font-medium tracking-wide mb-4 flex items-center justify-center lg:justify-start gap-2">
                <span className="w-8 h-[1px] bg-primary"></span>
                HELLO, WORLD
              </h2>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading mb-6"
            >
              I'm <span className="text-gradient">Noor Ahammad</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl text-muted font-medium mb-8 h-10"
            >
              And I'm a <span className="text-white">{typedText}</span><span className="animate-pulse">|</span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted text-lg max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              A passionate developer exploring Artificial Intelligence and building scalable, robust backend systems. Let's create something extraordinary together.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <button 
                onClick={() => setIsResumeOpen(true)}
                className="px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-2 transform hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                <FaDownload /> View Resume
              </button>
              <a 
                href="#contact"
                className="px-8 py-3.5 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Let's Talk
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              <a href="https://github.com/pnoorahammad" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors hover:-translate-y-1 transform">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/noorahammad15" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#0A66C2] transition-colors hover:-translate-y-1 transform">
                <FaLinkedin size={28} />
              </a>
              <a href="mailto:pogakunoor5158@gmail.com" className="text-muted hover:text-red-400 transition-colors hover:-translate-y-1 transform">
                <FaEnvelope size={28} />
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-40 animate-pulse-slow"></div>
              <div className="absolute inset-2 bg-background rounded-full"></div>
              <img 
                src="./noorpic1.jpg" 
                alt="P. Noor Ahammad" 
                loading="lazy"
                decoding="async"
                className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] object-cover rounded-full border-4 border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.3)] relative z-10 p-2 bg-background"
              />
              {/* Decorative elements */}
              <div className="absolute top-10 right-0 glass w-16 h-16 rounded-2xl animate-float flex items-center justify-center z-20 shadow-lg border border-white/10">
                <FaGithub size={30} className="text-white/80" />
              </div>
              <div className="absolute bottom-10 left-0 glass w-16 h-16 rounded-2xl animate-float flex items-center justify-center z-20 shadow-lg border border-white/10" style={{ animationDelay: '1s' }}>
                <span className="text-2xl font-bold text-primary text-white/80">AI</span>
              </div>
            </motion.div>
          </div>
          
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex"
        >
          <span className="text-xs text-muted tracking-widest uppercase font-medium">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-primary"
          >
            <FaChevronDown />
          </motion.div>
        </motion.div>
      </div>

      <Modal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        title="My Resume"
        previewUrl="https://drive.google.com/file/d/1WdLxqiZ37D93UiivfrRiN1RmYqvA9j88/preview"
        downloadUrl="https://drive.google.com/uc?export=download&id=1WdLxqiZ37D93UiivfrRiN1RmYqvA9j88"
      />
    </section>
  );
};
