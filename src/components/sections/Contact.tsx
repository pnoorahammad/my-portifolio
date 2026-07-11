import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
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
              <p className="text-muted text-lg">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat.
              </p>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6 flex items-center gap-6 group hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  <FaPhone size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted mb-1 uppercase tracking-wider">Phone</p>
                  <a href="tel:+918501062085" className="text-lg font-medium text-white hover:text-primary transition-colors">+91 8501062085</a>
                </div>
              </div>

              <div className="glass-card p-6 flex items-center gap-6 group hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted mb-1 uppercase tracking-wider">Email</p>
                  <a href="mailto:pogakunoor5158@gmail.com" className="text-lg font-medium text-white hover:text-secondary transition-colors">pogakunoor5158@gmail.com</a>
                </div>
              </div>

              <div className="glass-card p-6 flex items-center gap-6 group hover:border-accent/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted mb-1 uppercase tracking-wider">Location</p>
                  <p className="text-lg font-medium text-white">Hyderabad, Telangana, India</p>
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
