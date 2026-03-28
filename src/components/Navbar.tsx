import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MousePointer2 } from 'lucide-react';
import { Button } from './Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-brand-dark/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-blue blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
            <img src="/ClickConnectofficial.jpg" alt="Click Connect Logo" className="w-12 h-12 object-contain rounded-full relative z-10" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl leading-none tracking-wide text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-purple transition-all duration-300">
              CLICK CONNECT
            </span>
            <span className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mt-1">
              Digital Marketing
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`relative text-sm font-medium transition-colors group py-2 ${
                location.pathname === link.path ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-purple transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
          <Link to="/consultation" className="relative group ml-2">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <Button size="sm" className="relative">Free Consultation</Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative text-white p-2 z-50 group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          {isMobileMenuOpen ? <X className="relative z-10" /> : <Menu className="relative z-10" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-lg font-medium py-3 border-b border-white/5 transition-colors ${
                  location.pathname === link.path ? 'text-brand-blue' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/consultation" className="mt-6 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full blur opacity-40 transition duration-500"></div>
              <Button className="w-full relative">Free Consultation</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
