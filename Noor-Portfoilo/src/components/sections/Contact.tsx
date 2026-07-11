import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { SectionHeader } from '../ui/SectionHeader';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative bg-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader title="Get In" highlight="Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold font-heading text-white mb-4">Let's talk about your next project!</h3>
              <p className="text-muted text-lg mb-6">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat.
              </p>
              
              <a 
                href="https://drive.google.com/uc?export=download&id=1WdLxqiZ37D93UiivfrRiN1RmYqvA9j88" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/50 rounded-full transition-all text-sm font-medium shadow-[0_0_15px_rgba(37,99,235,0.2)]"
              >
                <FaDownload /> Download Resume
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 flex items-center gap-4 group hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted mb-1 uppercase tracking-wider">Phone</p>
                  <a href="tel:+918501062085" className="text-sm font-medium text-white hover:text-primary transition-colors">+91 8501062085</a>
                </div>
              </div>

              <div className="glass-card p-5 flex items-center gap-4 group hover:border-secondary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted mb-1 uppercase tracking-wider">Email</p>
                  <a href="mailto:pogakunoor5158@gmail.com" className="text-sm font-medium text-white hover:text-secondary transition-colors">pogakunoor5158@gmail.com</a>
                </div>
              </div>

              <div className="glass-card p-5 flex items-center gap-4 group hover:border-[#0077b5]/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition-all">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted mb-1 uppercase tracking-wider">LinkedIn</p>
                  <a href="https://linkedin.com/in/pnoorahammad" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-[#0077b5] transition-colors">Connect</a>
                </div>
              </div>

              <div className="glass-card p-5 flex items-center gap-4 group hover:border-white/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                  <FaGithub size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted mb-1 uppercase tracking-wider">GitHub</p>
                  <a href="https://github.com/pnoorahammad" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">Follow</a>
                </div>
              </div>

              <div className="glass-card p-5 flex items-center gap-4 group hover:border-yellow-500/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition-all">
                  <SiLeetcode size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted mb-1 uppercase tracking-wider">LeetCode</p>
                  <a href="https://leetcode.com/u/NoorAhammad/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-yellow-500 transition-colors">View Profile</a>
                </div>
              </div>

              <div className="glass-card p-5 flex items-center gap-4 group hover:border-[#5B4638]/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#5B4638]/10 flex items-center justify-center text-[#5B4638] group-hover:bg-[#5B4638] group-hover:text-white transition-all">
                  <SiCodechef size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted mb-1 uppercase tracking-wider">CodeChef</p>
                  <a href="https://www.codechef.com/users/kl_9921004570" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-[#8b6b55] transition-colors">View Profile</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 lg:p-10 border-t-4 border-t-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">Your Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
