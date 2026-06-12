import React from 'react';
import { ShieldCheck, Landmark } from 'lucide-react';
import logoNaps from '../assets/logo_naps.png';
import logoUdyam from '../assets/logo_udyam.png';
import logoSkill from '../assets/logo_skill.png';
import logoMsme from '../assets/logo_msme.png';

export default function GovernmentBadges() {
  const certifications = [
    {
      title: 'Udyam Aadhar / MSME',
      authority: 'Ministry of MSME, Government of India',
      status: 'Registered Enterprise',
      scheme: 'UDYAM-OD-11-0015252',
      details: 'Registered under the Micro, Small & Medium Enterprises (MSME) development framework. This validates our operational integrity, enabling participation in government procurements, digital initiatives, and national software tenders.',
      image: logoUdyam
    },
    {
      title: 'MSME Registration',
      authority: 'Ministry of Micro, Small & Medium Enterprises',
      status: 'Certificate Holder',
      scheme: 'MSME-OD-11-0015253',
      details: 'Officially recognized as a Micro, Small & Medium Enterprise by the Government of India. This registration provides access to various government schemes, subsidies, and priority sector lending benefits.',
      image: logoMsme
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
    <section id="certifications" className="relative py-12 sm:py-16 md:py-20 bg-slate-900 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-10 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 rounded-full bg-brand-primary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-brand-accent">Compliance & Credibility</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 mb-3 sm:mb-4">
            Government Registrations & Affiliations
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed px-2 sm:px-0">
            Necteromni Technologies is committed to corporate transparency, quality certifications, and participating in national development initiatives.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="glass-card p-4 sm:p-5 md:p-6 rounded-2xl border border-white/5 text-left hover:border-brand-accent/30 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Logo and Verified Badge */}
              <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 w-16 sm:w-20 h-12 sm:h-16 flex items-center justify-center shrink-0 overflow-hidden group-hover:border-brand-accent/20 transition-all">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  Verified
                </span>
              </div>
              
              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight mb-1">
                {cert.title}
              </h3>
              
              {/* Authority */}
              <p className="text-[9px] sm:text-[10px] font-semibold text-brand-accent mb-2 sm:mb-3 uppercase tracking-wider line-clamp-2">
                {cert.authority}
              </p>
              
              {/* Details */}
              <p className="text-xs text-slate-300 font-light leading-relaxed mb-3 sm:mb-4 flex-grow line-clamp-3 sm:line-clamp-none">
                {cert.details}
              </p>
              
              {/* Footer with Registration and Status */}
              <div className="flex flex-col gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] text-slate-500 border-t border-slate-800/60 pt-2.5 sm:pt-3 mt-auto">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <span className="shrink-0">Reg No:</span>
                  <span className="font-mono text-slate-400 text-right break-words max-w-[65%] sm:max-w-[70%]">
                    {cert.scheme}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Status:</span>
                  <span className="font-semibold text-slate-300 text-right">
                    {cert.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small trust banner */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <p className="text-[10px] sm:text-xs text-slate-500 font-light flex items-center justify-center gap-1.5 flex-wrap px-2">
            <Landmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-accent shrink-0" />
            <span>Fully compliant with corporate laws under the Ministry of Corporate Affairs, Government of India.</span>
          </p>
        </div>

      </div>
    </section>
  );
}