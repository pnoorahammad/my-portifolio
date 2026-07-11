import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id') || '';
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-heading font-bold text-white tracking-wider flex items-center gap-2"
          onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
        >
          <span className="text-primary">&lt;</span>
          Noor
          <span className="text-primary">/&gt;</span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a 
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`text-sm font-medium transition-colors hover:text-primary relative ${
                    activeSection === link.href.substring(1) ? 'text-primary' : 'text-muted'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 border-l border-white/10 pl-6"
          >
            <a href="https://github.com/pnoorahammad" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/noorahammad15" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#0A66C2] transition-colors">
              <FaLinkedin size={20} />
            </a>
          </motion.div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 absolute top-full left-0 w-full overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-6">
              {navLinks.map((link) => (
                <li key={link.name} className="py-3 border-b border-white/5 last:border-0">
                  <a 
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className={`block text-lg ${activeSection === link.href.substring(1) ? 'text-primary font-bold' : 'text-muted'}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="py-4 flex gap-6">
                <a href="https://github.com/pnoorahammad" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/noorahammad15" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#0A66C2]">
                  <FaLinkedin size={24} />
                </a>
                <a href="mailto:pogakunoor5158@gmail.com" className="text-muted hover:text-red-400">
                  <FaEnvelope size={24} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
