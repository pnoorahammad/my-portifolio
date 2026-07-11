import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import { SectionHeader } from '../ui/SectionHeader';

export const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) - Computer Science and Engineering",
      institution: "Kalasalingam Academy of Research and Education",
      duration: "2021 – 2025",
      gpa: "CGPA: 7.06 / 10",
      status: "Pursuing"
    },
    {
      degree: "Intermediate (12th)",
      institution: "Viswam Junior College",
      duration: "2019 – 2021",
      gpa: "Percentage: 69.4%",
      status: "Completed"
    },
    {
      degree: "SSC (10th)",
      institution: "Jeevan Jyothi English Medium High School",
      duration: "Completed: 2019",
      gpa: "CGPA: 9.8 / 10",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 relative bg-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader title="My" highlight="Education" />

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-6 space-y-12 pb-8">
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[11px] md:-left-[11px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-primary shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              
              <div className="glass-card p-6 md:p-8 hover:-translate-y-1 transition-transform relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{item.degree}</h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-muted mb-4 font-medium">
                  <span className="flex items-center gap-2">
                    <FaGraduationCap className="text-primary" /> {item.institution}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm">
                    <FaCalendarAlt className="text-accent" /> {item.duration}
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/20 rounded-full text-sm font-semibold">
                    {item.gpa}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.status === 'Pursuing' ? 'bg-secondary/20 text-secondary border border-secondary/20' : 'bg-green-500/20 text-green-400 border border-green-500/20'}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
