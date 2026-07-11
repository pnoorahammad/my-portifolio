import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-background pt-20 pb-10 border-t border-white/10 overflow-hidden">
      {/* Decorative gradient element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="text-3xl font-heading font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-primary">&lt;</span>
              Noor
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="text-muted text-sm max-w-xs">
              Computer Science Engineer passionate about building scalable solutions and exploring Artificial Intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-muted">
              <li><a href="#about" className="hover:text-primary transition-colors">About Me</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-6 text-lg">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com/pnoorahammad" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/noorahammad15" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted hover:text-[#0A66C2] hover:bg-white/10 transition-all hover:-translate-y-1">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:pogakunoor5158@gmail.com" className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted hover:text-red-400 hover:bg-white/10 transition-all hover:-translate-y-1">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-muted text-sm mb-4 md:mb-0 text-center md:text-left">
            &copy; {currentYear} Pogaku Noor Ahammad. All Rights Reserved.
          </p>
          <div className="text-muted text-xs text-center md:text-right italic">
            <p>"I hereby declare that the information provided above is true and correct."</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
