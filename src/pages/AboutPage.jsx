import React from 'react';
import About from '../components/About';
import { Landmark, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="animate-fade-in pt-20">
      {/* Subpage Header Banner */}
      <div className="relative py-16 bg-gradient-to-b from-brand-navy to-slate-900 border-b border-slate-800 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-brand-primary/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-accent">Who We Are</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-3">
            Company & Leadership
          </h1>
          <p className="text-slate-400 font-light text-sm sm:text-base max-w-2xl leading-relaxed">
            Discover our history since incorporation in 2017, our core values, and the vision of our Founder and Managing Director, Er. Mihir Kumar Brahma.
          </p>
        </div>
      </div>

      {/* Main Profile & Highlight Panels */}
      <About />
    </div>
  );
}
