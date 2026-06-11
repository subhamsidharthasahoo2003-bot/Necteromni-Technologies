import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import LogoMarquee from '../components/LogoMarquee';
import GovernmentBadges from '../components/GovernmentBadges';
import { Cpu, ArrowRight, Laptop, Network, Briefcase } from 'lucide-react';

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Banner */}
      <Hero />

      {/* Auto Scrolling Government Trust Badges */}
      <LogoMarquee />

      {/* Corporate Pillars / Key Strengths */}
      <section className="py-20 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-accent">Our Core Pillars</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
              Driving Digital Growth and Career Excellence
            </h2>
            <p className="text-slate-400 font-light leading-relaxed">
              We operate at the intersection of professional IT development services and industrial career acceleration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {/* Pillar 1 */}
            <div className="glass p-8 rounded-2xl border border-white/5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary mb-6">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Engineering</h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  Building bespoke ERP portals, custom CRM environments, databases, and responsive mobile architectures supporting multi-industry scaling.
                </p>
              </div>
              <Link to="/services" className="mt-8 flex items-center text-xs font-semibold text-brand-primary hover:text-brand-accent transition-colors">
                <span>Browse our stack</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="glass p-8 rounded-2xl border border-white/5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-6">
                  <Network className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Digital Acceleration</h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  From search ranking operations (SEO) to conversion copywriting and high-definition video production, we power online corporate visibility.
                </p>
              </div>
              <Link to="/services" className="mt-8 flex items-center text-xs font-semibold text-brand-accent hover:text-white transition-colors">
                <span>View digital services</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="glass p-8 rounded-2xl border border-white/5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Talent Bridging</h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  Bridging the academia-industry gap via structured recruitment drives, verified apprenticeship schemes, and hands-on client deployments.
                </p>
              </div>
              <Link to="/careers" className="mt-8 flex items-center text-xs font-semibold text-violet-400 hover:text-white transition-colors">
                <span>Explore careers</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brief MD Intro Summary */}
      <section className="py-20 bg-brand-navy border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto text-left">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-accent">Executive Message</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
                Led by Visionary Technology Strategist Er. Mihir Kumar Brahma
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Necteromni Technologies operates under the experienced leadership of Er. Mihir Kumar Brahma, delivering top-tier software programming, digital marketing, corporate training, and structural consulting. We focus on bridging educational foundations with practical corporate roles to support long-term economic growth.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link 
                to="/about"
                className="px-6 py-3 rounded-xl bg-brand-carddark border border-slate-700/60 text-slate-200 hover:text-white hover:border-brand-accent/50 text-sm font-semibold transition-all inline-flex items-center gap-1.5"
              >
                <span>Read Director's Bio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Government Affiliations */}
      <GovernmentBadges />

      {/* Fast CTA */}
      <section className="py-16 bg-slate-900 border-t border-slate-800 text-center relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Ready to Innovate and Scale?</h3>
          <p className="text-sm text-slate-400 font-light max-w-xl mx-auto mb-8">
            Discuss custom CRM environments, web design specifications, branding strategies, or career apprenticeship placements with our team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-medium hover:brightness-110 transition-all text-sm w-full sm:w-auto"
            >
              Contact Office
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-3.5 rounded-xl border border-slate-700 hover:bg-slate-800/40 text-slate-300 hover:text-white transition-all text-sm w-full sm:w-auto"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
