import React from 'react';
import logoMsme from '../assets/logo_msme.png';
import logoNaps from '../assets/logo_naps.png';
import logoUdyam from '../assets/logo_udyam.png';
import logoSkill from '../assets/logo_skill.png';

export default function LogoMarquee() {
  const logos = [
    { image: logoMsme, alt: 'MSME - Ministry of Micro, Small & Medium Enterprises' },
    { image: logoNaps, alt: 'NAPS - National Apprenticeship Promotion Scheme' },
    { image: logoUdyam, alt: 'UDYAM MSME Registration' },
    { image: logoSkill, alt: 'Skill India - Development Mission' },
    { image: logoMsme, alt: 'MSME - Ministry of Micro, Small & Medium Enterprises' },
    { image: logoNaps, alt: 'NAPS - National Apprenticeship Promotion Scheme' },
    { image: logoUdyam, alt: 'UDYAM MSME Registration' },
    { image: logoSkill, alt: 'Skill India - Development Mission' }
  ];

  return (
    <div className="relative w-full bg-slate-950/90 border-y border-slate-900 py-8 overflow-hidden select-none">
      {/* Edge fading shadows for premium presentation */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max items-center">
        {/* First marquee list */}
        <div className="flex items-center space-x-12 px-6 animate-marquee whitespace-nowrap">
          {logos.map((logo, idx) => (
            <div 
              key={`marquee-1-${idx}`} 
              className="flex items-center justify-center px-6 py-4 rounded-2xl border border-white/5 bg-slate-900/30 backdrop-blur-md h-24 w-60 shadow-lg"
            >
              <img 
                src={logo.image} 
                alt={logo.alt} 
                className="h-16 w-full object-contain filter contrast-[1.05] brightness-95 hover:brightness-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Second identical marquee list to ensure a seamless loop */}
        <div className="flex items-center space-x-12 px-6 animate-marquee whitespace-nowrap" aria-hidden="true">
          {logos.map((logo, idx) => (
            <div 
              key={`marquee-2-${idx}`} 
              className="flex items-center justify-center px-6 py-4 rounded-2xl border border-white/5 bg-slate-900/30 backdrop-blur-md h-24 w-60 shadow-lg"
            >
              <img 
                src={logo.image} 
                alt={logo.alt} 
                className="h-16 w-full object-contain filter contrast-[1.05] brightness-95 hover:brightness-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
