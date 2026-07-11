import { motion } from 'framer-motion';
import { FaStar, FaCode, FaGithub, FaFolderOpen, FaProjectDiagram } from 'react-icons/fa';
import { SectionHeader } from '../ui/SectionHeader';

export const Achievements = () => {
  const achievements = [
    { text: "Solved 500+ Coding Problems on LeetCode and GeeksForGeeks.", icon: FaCode },
    { text: "Active Open Source Contributor to Python and Java repositories.", icon: FaGithub },
    { text: "Built 20+ Full Stack and AI/ML Projects showcased on GitHub.", icon: FaProjectDiagram },
    { text: "Consistently maintained high GitHub Contributions streak.", icon: FaFolderOpen },
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader title="Key" highlight="Achievements" />

        <div className="grid gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-5 flex items-center gap-4 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary text-xl" />
                </div>
                <p className="text-white/90 leading-relaxed font-medium">
                  {achievement.text}
                </p>
                <FaStar className="ml-auto text-yellow-500/30 group-hover:text-yellow-500 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
