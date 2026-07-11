import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { SectionHeader } from '../ui/SectionHeader';
import { experience } from '../../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative bg-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader title="My" highlight="Internships" />

        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 hover:-translate-y-1 transition-all hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] group relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 text-white/5 text-9xl group-hover:text-primary/5 transition-colors transform group-hover:scale-110 duration-500">
                <FaBriefcase />
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{job.role}</h3>
                    <p className="text-primary text-lg font-medium">{job.company}</p>
                  </div>
                  <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-muted text-sm shrink-0 whitespace-nowrap">
                    <FaCalendarAlt className="text-accent" /> {job.duration}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {job.description.map((desc, i) => (
                    <li key={i} className="flex gap-3 text-muted items-start">
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 text-muted text-xs rounded-md border border-white/10 hover:border-primary/50 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
