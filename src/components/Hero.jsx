import React from 'react';
import { ArrowRight, Cpu, Globe, Award, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-brand-navy">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full glow-spot-1 pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full glow-spot-2 pointer-events-none z-0"></div>
      
      {/* Cyber Grid Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-xs font-semibold tracking-wide self-center lg:self-start mb-6 animate-pulse-slow">
              <Cpu className="w-4.5 h-4.5" />
              <span>Digital Transformation Partner Since 2017</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Empowering Businesses <br className="hidden sm:inline" />
              Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-primary to-brand-secondary glow-text">Technology & Innovation</span>
            </h1>
            
            <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 font-light leading-relaxed">
              Necteromni Technologies Private Limited is a leading Information Technology and Business Solutions company. We build innovative software, robust web applications, data-driven marketing strategies, and human resource solutions that drive business scaling.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <a
                href="#services"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-medium hover:brightness-110 active:scale-98 transition-all shadow-lg shadow-brand-primary/20"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-xl border border-slate-700 bg-brand-carddark/40 hover:bg-brand-carddark/80 text-slate-200 hover:text-white hover:border-slate-500 active:scale-98 transition-all"
              >
                <span>Free Consultation</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-8 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-extrabold text-white">2017</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Incorporated</p>
              </div>
              <div className="text-center lg:text-left border-x border-slate-800 px-4">
                <p className="text-3xl font-extrabold text-brand-accent">8+</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Sectors Served</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-extrabold text-white">100%</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Client Success</p>
              </div>
            </div>
          </div>

          {/* Hero Visuals */}
          <div className="lg:col-span-5 relative flex items-center justify-center z-10">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden glass p-8 flex items-center justify-center shadow-2xl border border-white/10 group">
              {/* Dynamic Rotating Glow background in card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-brand-accent/10 group-hover:scale-105 transition-transform duration-500 ease-out z-0"></div>
              
              {/* Premium Vector SVG Technology Nodes Illustration */}
              <svg className="w-full h-full relative z-10 text-brand-accent/20" viewBox="0 0 200 200" fill="none">
                {/* Orbiting rings */}
                <circle cx="100" cy="100" r="80" stroke="rgba(6, 182, 212, 0.1)" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" />
                <circle cx="100" cy="100" r="55" stroke="rgba(2, 132, 199, 0.15)" strokeWidth="1.5" />
                <circle cx="100" cy="100" r="30" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                
                {/* Connecting lines */}
                <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <line x1="43" y1="43" x2="157" y2="157" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <line x1="43" y1="157" x2="157" y2="43" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                {/* Nodes - center logo node */}
                <g className="animate-pulse-slow">
                  <circle cx="100" cy="100" r="18" fill="url(#hero-center-gradient)" className="shadow-lg" />
                  {/* Small inner N symbol */}
                  <path d="M94 105 v-10 l12 10 v-10" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* Surrounding Nodes */}
                {/* Node 1: Web Development */}
                <g className="cursor-pointer group/node" transform="translate(100, 20)">
                  <circle r="8" fill="#06b6d4" className="animate-ping opacity-30" />
                  <circle r="6" fill="#06b6d4" />
                  <circle r="12" fill="transparent" stroke="#06b6d4" strokeWidth="1" className="opacity-0 group-hover/node:opacity-100 transition-opacity" />
                </g>
                <text x="100" y="5" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">WEB & MOBILE</text>

                {/* Node 2: Cloud */}
                <g className="cursor-pointer group/node" transform="translate(180, 100)">
                  <circle r="8" fill="#3b82f6" className="animate-ping opacity-30" />
                  <circle r="6" fill="#3b82f6" />
                </g>
                <text x="180" y="88" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">CLOUD SOLUTIONS</text>

                {/* Node 3: HR consulting */}
                <g className="cursor-pointer group/node" transform="translate(100, 180)">
                  <circle r="8" fill="#0284c7" className="animate-ping opacity-30" />
                  <circle r="6" fill="#0284c7" />
                </g>
                <text x="100" y="195" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">HR CONSULTING</text>

                {/* Node 4: ERP & CRM */}
                <g className="cursor-pointer group/node" transform="translate(20, 100)">
                  <circle r="8" fill="#aa3bff" className="animate-ping opacity-30" />
                  <circle r="6" fill="#aa3bff" />
                </g>
                <text x="20" y="88" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">ERP & CRM</text>

                {/* Inner Orbit Nodes */}
                <circle cx="61" cy="61" r="5" fill="#f59e0b" />
                <circle cx="139" cy="61" r="5" fill="#10b981" />
                <circle cx="61" cy="139" r="5" fill="#ec4899" />
                <circle cx="139" cy="139" r="5" fill="#6366f1" />

                {/* Gradients */}
                <defs>
                  <linearGradient id="hero-center-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Overlay Glassmorphic Dashboard Details */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl border border-white/5 bg-slate-900/60 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">System Status</span>
                    <span className="text-xs font-semibold text-emerald-400">All Operations Online</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Active Services</span>
                  <span className="text-xs font-bold text-white">IT, Media, HR, Marketing</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
