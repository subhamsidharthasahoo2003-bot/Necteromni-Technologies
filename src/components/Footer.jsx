import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Phone, MapPin, Landmark } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand & CIN */}
          <div className="lg:col-span-5 text-left space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center h-12 overflow-hidden">
                <img 
                  src={logoImg} 
                  alt="NECTEROMNI" 
                  className="h-22 w-auto object-contain max-w-none" 
                  style={{ filter: 'url(#remove-white)' }}
                />
              </div>
              
            </div>
            
            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              Empowering Businesses Through Technology & Innovation. Leading web developers, software engineers, and consulting partners since 2017.
            </p>

            <div className="space-y-1 pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Registrations</span>
              <span className="text-xs font-mono text-slate-500 block">CIN: U72900OR2017PTC026956</span>
              <span className="text-xs font-mono text-slate-500 block">Udyam: UDYAM-OD-11-0015252</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Corporate Directory</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services & Tech', href: '/services' },
                { name: 'Careers', href: '/careers' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-slate-400 hover:text-brand-accent transition-colors font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Summary */}
          <div className="lg:col-span-4 text-left space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Office Hours & Contact</h4>
            <div className="space-y-3 text-sm text-slate-400 font-light">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4.5 h-4.5 text-brand-accent shrink-0 mt-0.5" />
                <span>Shop 1, Seven Hills Complex, Risali, Bhilai – 490006</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4.5 h-4.5 text-brand-primary shrink-0" />
                <span>+91 7898811806, +91 8984014001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Landmark className="w-4.5 h-4.5 text-brand-accent shrink-0" />
                <span>Incorporation Year: 2017</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="text-center sm:text-left">
            <p>&copy; {currentYear} Necteromni Technologies Private Limited. All Rights Reserved.</p>
            <p className="mt-1 text-slate-600">CIN: U72900OR2017PTC026956</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleScrollTop}
              className="p-2.5 rounded-xl border border-slate-900 bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white transition-all flex items-center gap-1 group"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
      <svg width="0" height="0" style={{ position: 'absolute', zIndex: -1 }}>
        <defs>
          <filter id="remove-white">
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1 -1 -1 3 0" />
          </filter>
        </defs>
      </svg>
    </footer>
  );
}
