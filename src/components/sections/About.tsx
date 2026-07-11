import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaBrain } from 'react-icons/fa';
import { SectionHeader } from '../ui/SectionHeader';

export const About = () => {
  const highlights = [
    {
      icon: <FaCode size={24} className="text-primary" />,
      title: "Full Stack Development",
      description: "Building robust, scalable web applications with Java, Spring Boot, and React."
    },
    {
      icon: <FaBrain size={24} className="text-secondary" />,
      title: "AI & Machine Learning",
      description: "Passionate about LLMs, NLP, and implementing AI to solve real-world problems."
    },
    {
      icon: <FaGraduationCap size={24} className="text-accent" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and pushing the boundaries of what's possible."
    }
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
            <p>
              I am a dedicated <strong className="text-white">Computer Science Engineer</strong> with a strong foundation in <strong className="text-primary">Java Full Stack Development</strong> and a deep passion for <strong className="text-secondary">Artificial Intelligence</strong> and <strong className="text-secondary">Machine Learning</strong>.
            </p>
            <p>
              My journey in tech is driven by curiosity and a desire to build solutions that matter. Whether it's architecting a scalable backend with Spring Boot, creating an intuitive UI with React, or integrating advanced LLMs into an application, I love bringing ideas to life through code.
            </p>
            <p>
              I thrive in environments that challenge me to learn and adapt quickly. Currently, I'm focusing on expanding my expertise in cloud technologies and advanced AI models.
            </p>
          </motion.div>

          {/* Right Column: Highlights */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 flex gap-6 items-start group hover:bg-white/10 transition-colors"
              >
                <div className="p-4 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-muted">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
