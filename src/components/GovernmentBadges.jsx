import React from 'react';
import { ShieldCheck, Landmark } from 'lucide-react';
import logoNaps from '../assets/logo_naps.png';
import logoUdyam from '../assets/logo_udyam.png';
import logoSkill from '../assets/logo_skill.png';

export default function GovernmentBadges() {
  const certifications = [
    {
      title: 'Udyam Aadhar / MSME',
      authority: 'Ministry of MSME, Government of India',
      status: 'Registered Enterprise',
      scheme: 'UDYAM-OR-02-XXXXXXX',
      details: 'Registered under the Micro, Small & Medium Enterprises (MSME) development framework. This validates our operational integrity, enabling participation in government procurements, digital initiatives, and national software tenders.',
      image: logoUdyam
    },
    {
      title: 'NAPS Registered',
      authority: 'National Apprenticeship Promotion Scheme',
      status: 'Active Training Partner',
      scheme: 'MSDE Apprenticeship Program',
      details: 'Active participant in the National Apprenticeship Promotion Scheme under the Ministry of Skill Development and Entrepreneurship. We facilitate skill-building opportunities, connecting engineering candidates to live client systems.',
      image: logoNaps
    },
    {
      title: 'Skill India',
      authority: 'National Skill Development Corporation',
      status: 'Academic-Industry Facilitator',
      scheme: 'Skill Development Initiative',
      details: 'Aligned with the National Skill Development Mission (Skill India). Under industry-academia collaborations, Necteromni designs curriculum training modules that address local employability gaps for IT graduates.',
      image: logoSkill
    }
  ];

  return (
    <section id="certifications" className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-accent">Compliance & Credibility</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            Government Registrations & Affiliations
          </h2>
          <p className="text-slate-400 font-light leading-relaxed">
            Necteromni Technologies is committed to corporate transparency, quality certifications, and participating in national development initiatives.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-2xl border border-white/5 text-left flex flex-col justify-between"
            >
              <div>
                {/* Logo Image and Verification Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-32 h-20 flex items-center justify-center overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono mt-2">{cert.scheme}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-xs font-semibold text-brand-accent mb-4 uppercase tracking-wider">{cert.authority}</p>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {cert.details}
                </p>
              </div>

              <div className="mt-8 border-t border-slate-800/60 pt-4 flex items-center justify-between text-xs">
                <span className="text-slate-500">Classification</span>
                <span className="font-semibold text-slate-300">{cert.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Small trust banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 font-light flex items-center justify-center gap-1">
            <Landmark className="w-4 h-4 text-brand-accent" />
            <span>Fully compliant with corporate laws under the Ministry of Corporate Affairs, Government of India.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
