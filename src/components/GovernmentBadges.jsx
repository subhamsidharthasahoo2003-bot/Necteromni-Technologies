import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ShieldCheck, Landmark, Eye, X, ZoomIn } from 'lucide-react';
import logoNaps from '../assets/logo_naps.png';
import logoUdyam from '../assets/logo_udyam.png';
import logoSkill from '../assets/logo_skill.png';
import udyamCertificate from '../assets/udyam_certificate.jpg';

export default function GovernmentBadges() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Certifications Stack (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-2xl border border-white/5 text-left flex flex-col sm:flex-row gap-6 items-start hover:border-brand-accent/30 transition-all duration-300"
              >
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 w-28 h-20 flex items-center justify-center shrink-0 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                    <h3 className="text-lg font-bold text-white leading-tight">{cert.title}</h3>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                  <p className="text-[10px] font-semibold text-brand-accent mb-2 uppercase tracking-wider">{cert.authority}</p>
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-3">
                    {cert.details}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-800/60 pt-2">
                    <span>Reg No: <span className="font-mono text-slate-400">{cert.scheme}</span></span>
                    <span>Status: <span className="font-semibold text-slate-300">{cert.status}</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Certificate Preview (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between glass-card p-6 rounded-2xl border border-white/5 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-primary/10 blur-2xl pointer-events-none"></div>
            
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white mb-1">Registration Certificate</h3>
              <p className="text-xs text-slate-400 font-light">Ministry of MSME, Govt of India</p>
            </div>
            
            {/* Thumbnail Box */}
            <div 
              onClick={() => setIsModalOpen(true)}
              className="relative rounded-xl overflow-hidden cursor-zoom-in border border-slate-800 bg-slate-950/40 group/thumb flex items-center justify-center aspect-[3/4] h-72 mx-auto transition-transform duration-300"
            >
              <img 
                src={udyamCertificate} 
                alt="Udyam Registration Certificate" 
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-[1.03] group-hover/thumb:brightness-90"
              />
              {/* Zoom Overlay on Hover */}
              <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-2">
                <div className="p-3 bg-brand-primary/80 backdrop-blur-sm rounded-full text-white shadow-lg shadow-brand-primary/20 scale-90 group-hover/thumb:scale-100 transition-all duration-300">
                  <ZoomIn className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold tracking-wider">Click to Preview</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/60">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-primary/10 hover:bg-brand-primary/20 border border-brand-primary/20 text-brand-accent hover:text-white font-medium text-xs transition-all duration-200"
              >
                <Eye className="w-4 h-4" />
                <span>View Full Certificate</span>
              </button>
            </div>
          </div>

        </div>

        {/* Small trust banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 font-light flex items-center justify-center gap-1">
            <Landmark className="w-4 h-4 text-brand-accent" />
            <span>Fully compliant with corporate laws under the Ministry of Corporate Affairs, Government of India.</span>
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {isModalOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 transition-all">
          {/* Close trigger background */}
          <div className="absolute inset-0 cursor-default" onClick={() => setIsModalOpen(false)}></div>
          
          <div className="relative bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl z-10">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800">
              <div className="text-left">
                <h3 className="text-base sm:text-lg font-bold text-white">Udyam Registration Certificate</h3>
                <p className="text-xs text-slate-500 font-mono">UDYAM-OD-11-0015252</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-slate-500 text-slate-400 hover:text-white transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Modal Image container */}
            <div className="flex-grow p-4 sm:p-6 overflow-y-auto bg-slate-950/50 flex items-center justify-center min-h-0">
              <img 
                src={udyamCertificate} 
                alt="Udyam Registration Certificate Full View" 
                className="max-h-[60vh] sm:max-h-[65vh] w-auto object-contain rounded-lg border border-slate-800 shadow-xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
              <span className="text-center sm:text-left">M/S Necteromni Technologies Private Limited</span>
              <a 
                href={udyamCertificate} 
                download="Necteromni_Udyam_Certificate.jpg"
                className="px-4 py-2 rounded-lg bg-brand-primary hover:bg-brand-secondary text-white font-semibold transition-all w-full sm:w-auto text-center"
              >
                Download File
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
