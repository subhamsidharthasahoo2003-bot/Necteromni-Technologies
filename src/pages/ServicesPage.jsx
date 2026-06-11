import React from 'react';
import Services from '../components/Services';
import TechStack from '../components/TechStack';

export default function ServicesPage() {
  return (
    <div className="animate-fade-in pt-20">
      {/* Subpage Header Banner */}
      <div className="relative py-16 bg-gradient-to-b from-brand-navy to-slate-900 border-b border-slate-800 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-brand-accent/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-accent">Our Capabilities</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-3">
            Services & Technology Stack
          </h1>
          <p className="text-slate-400 font-light text-sm sm:text-base max-w-2xl leading-relaxed">
            Explore our 25 core subservices spanning Custom Software, E-Commerce, Digital Marketing, HR Consulting, and Digital Media.
          </p>
        </div>
      </div>

      {/* Services Tabs Explorer */}
      <Services />

      {/* Technology Badge Grid */}
      <TechStack />
    </div>
  );
}
