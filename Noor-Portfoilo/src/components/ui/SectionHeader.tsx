import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  highlight?: string;
}

export const SectionHeader = ({ title, highlight }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-16 relative">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-heading font-bold mb-4"
      >
        {title} <span className="text-primary">{highlight}</span>
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
      />
    </div>
  );
};
