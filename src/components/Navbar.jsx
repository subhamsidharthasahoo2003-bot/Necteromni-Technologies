import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services & Tech', href: '/services' },
    { name: 'Careers & Recruitment', href: '/careers' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 bg-gradient-to-tr from-brand-primary to-brand-accent rounded-xl flex items-center justify-center shadow-md shadow-brand-primary/20 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v-8l8 8v-8" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8l8 8v-8" stroke="url(#gradient-accent)" />
                <defs>
                  <linearGradient id="gradient-accent" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-white group-hover:text-brand-accent transition-colors">NECTEROMNI</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-medium">Technologies</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active 
                      ? 'text-brand-accent bg-brand-accent/5 font-semibold' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:+917898811806"
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg border border-slate-700 hover:border-slate-500 bg-brand-carddark/50 text-slate-300 hover:text-white transition-all text-sm"
            >
              <Phone className="w-4 h-4 text-brand-accent" />
              <span>Call Us</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-medium hover:brightness-110 active:scale-95 transition-all shadow-md shadow-brand-primary/20 text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden bg-brand-navy/95 border-b border-slate-800`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  active 
                    ? 'text-brand-accent bg-brand-accent/5 font-semibold' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 pb-2 border-t border-slate-800 flex flex-col space-y-3 px-3">
            <a
              href="tel:+917898811806"
              className="flex items-center justify-center space-x-2 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:text-white"
            >
              <Phone className="w-4 h-4 text-brand-accent" />
              <span>Call +91 7898811806</span>
            </a>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-medium"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
