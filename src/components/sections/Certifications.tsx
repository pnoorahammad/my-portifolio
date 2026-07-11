import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaPython, FaShieldAlt, FaDna, FaDownload } from 'react-icons/fa';
import { SectionHeader } from '../ui/SectionHeader';
import { certifications } from '../../data/certifications';
import { Modal } from '../ui/Modal';

const iconMap: Record<string, any> = {
  'fa-certificate': FaCertificate,
  'fa-python': FaPython,
  'fa-shield-alt': FaShieldAlt,
  'fa-dna': FaDna,
};

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  return (
    <section id="certifications" className="py-20 relative bg-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader title="Licenses &" highlight="Certifications" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = iconMap[cert.icon] || FaCertificate;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 flex flex-col items-center text-center group hover:bg-white/10 transition-colors border border-white/5 hover:border-primary/50 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full group-hover:bg-primary/20 transition-colors"></div>
                
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-3xl text-primary mb-4 group-hover:scale-110 transition-transform relative z-10 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  <IconComponent />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 relative z-10">{cert.title}</h3>
                <p className="text-primary font-medium text-sm mb-1 relative z-10">{cert.issuer}</p>
                <p className="text-muted text-xs mb-6 relative z-10">{cert.date}</p>
                
                {cert.driveId && (
                  <button 
                    onClick={() => setSelectedCert(cert)}
                    className="mt-auto flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary hover:bg-primary hover:text-white rounded-full transition-colors text-sm font-medium relative z-10"
                  >
                    <FaDownload size={12} /> View Certificate
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title || ''}
        previewUrl={selectedCert ? `https://drive.google.com/file/d/${selectedCert.driveId}/preview` : ''}
        downloadUrl={selectedCert ? `https://drive.google.com/uc?export=download&id=${selectedCert.driveId}` : ''}
      />
    </section>
  );
};
