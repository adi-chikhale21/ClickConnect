import { Link } from 'react-router-dom';
import { MousePointer2, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/ClickConnectofficial.jpg" alt="Click Connect Logo" className="w-12 h-12 object-contain rounded-full" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none tracking-wide text-white">
                  CLICK CONNECT
                </span>
                <span className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mt-1">
                  Digital Marketing
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              We elevate brands through data-driven digital marketing, expert design, and cutting-edge technology.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/clickconnectofficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-purple hover:bg-brand-purple/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61582174752121" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:bg-brand-blue/10 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Services', 'Case Studies', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-brand-blue transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Services</h4>
            <ul className="flex flex-col gap-3">
              {['SEO Optimization', 'Social Media Management', 'PPC Campaigns', 'Content Marketing', 'Web Development'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-gray-400 hover:text-brand-purple transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0" />
                <span>Ghansoli, Mumbai, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-brand-purple shrink-0" />
                <span>+91 9359700334</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-brand-blue shrink-0" />
                <span>clickconnect25@outlook.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Click Connect Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
