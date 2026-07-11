import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  previewUrl: string;
  downloadUrl: string;
}

export const Modal = ({ isOpen, onClose, title, previewUrl, downloadUrl }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-[#111827] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold font-heading">{title}</h3>
              <button 
                onClick={onClose}
                className="text-muted hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <div className="p-4 sm:p-6 flex-grow overflow-hidden bg-black/20 rounded-xl m-2">
              <iframe 
                src={previewUrl} 
                className="w-full h-[50vh] sm:h-[60vh] rounded-xl bg-white"
                title={title}
              />
            </div>
            <div className="p-5 sm:p-6 border-t border-white/10 flex justify-end">
              <a 
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1"
              >
                Download
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
