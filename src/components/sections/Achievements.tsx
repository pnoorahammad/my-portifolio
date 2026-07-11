import { motion } from 'framer-motion';
import { FaTrophy, FaStar } from 'react-icons/fa';
import { SectionHeader } from '../ui/SectionHeader';

export const Achievements = () => {
  const achievements = [
    "Successfully delivered an AI-driven HCP Module saving 40% of manual data entry time.",
    "Led a team of 4 to develop a full-stack e-commerce platform.",
    "Consistently maintained a high CGPA throughout engineering.",
    "Active contributor to open-source Python repositories."
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader title="Key" highlight="Achievements" />

        <div className="grid gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-5 flex items-center gap-4 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <FaTrophy className="text-primary text-xl" />
              </div>
              <p className="text-white/90 leading-relaxed font-medium">
                {achievement}
              </p>
              <FaStar className="ml-auto text-yellow-500/30 group-hover:text-yellow-500 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
