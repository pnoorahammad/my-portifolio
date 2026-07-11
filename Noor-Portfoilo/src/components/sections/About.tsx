import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';

export const About = () => {
  const highlights = [
    "Problem Solving", "Java", "Python", "Spring Boot", 
    "React", "REST APIs", "SQL", "AI", 
    "Machine Learning", "LLM Applications", "Fast Learner", "Team Player"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader title="About" highlight="Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted leading-relaxed text-lg"
          >
            <p className="text-2xl font-semibold text-white mb-4">
              Hi, I'm <span className="text-primary">P. Noor Ahammad</span>
            </p>
            <p>
              I am a <strong className="text-white">2025 Computer Science Engineering graduate</strong> passionate about <strong className="text-primary">Full Stack Development</strong>, <strong className="text-primary">Backend Development</strong>, <strong className="text-secondary">AI</strong>, <strong className="text-secondary">LLMs</strong> and <strong className="text-white">Software Engineering</strong>.
            </p>
            <p>
              My journey in tech is driven by curiosity and a desire to build robust solutions that matter. Whether it's architecting a scalable backend, creating an intuitive UI, or integrating advanced AI models, I love bringing ideas to life through code.
            </p>
          </motion.div>

          {/* Right Column: Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-t-4 border-t-secondary"
          >
            <h3 className="text-xl font-semibold text-white mb-6 font-heading">Core Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/90 hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all cursor-default shadow-sm"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
