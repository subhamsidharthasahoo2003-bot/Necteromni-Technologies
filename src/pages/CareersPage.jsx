import React, { useState } from 'react';
import Recruitment from '../components/Recruitment';
import { Send, FileText, CheckCircle, GraduationCap, Building2 } from 'lucide-react';

export default function CareersPage() {
  const [candidateState, setCandidateState] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: 'B.E. / B.Tech',
    experience: 'Fresher',
    interest: 'Software Development'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="animate-fade-in pt-20">
      {/* Subpage Header Banner */}
      <div className="relative py-16 bg-gradient-to-b from-brand-navy to-slate-900 border-b border-slate-800 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-accent">Join Our Ecosystem</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-3">
            Careers & Training Placements
          </h1>
          <p className="text-slate-400 font-light text-sm sm:text-base max-w-2xl leading-relaxed">
            We bridge the gap between academic theory and active corporate development projects. Review our recruitment milestones and register your interest.
          </p>
        </div>
      </div>

      {/* 6-step recruitment lifecycle */}
      <Recruitment />

      {/* Educational & Industry Collaborations details */}
      <section className="py-16 bg-brand-navy border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Bridging the Employability Gap</h3>
              <p className="text-slate-300 font-light leading-relaxed">
                Necteromni Technologies is deeply committed to human capital development. Our Managing Director actively coordinates with academic institutes to establish employment generation networks and skill-building programs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">University Collaborations</h4>
                    <p className="text-xs text-slate-400 font-light mt-0.5">Custom placement drives, project semesters, and industry-oriented workshops.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">NAPS Apprenticeship Intake</h4>
                    <p className="text-xs text-slate-400 font-light mt-0.5">Government-supported training courses deployed directly on internal product architectures.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mock Career Application Form */}
            <div className="glass p-6 sm:p-8 rounded-2xl border border-white/5 relative">
              {submitted ? (
                <div className="text-center py-8 flex flex-col items-center justify-center space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Application Received!</h4>
                  <p className="text-xs text-slate-300 font-light max-w-xs leading-relaxed">
                    Thank you for submitting your profile. Our academic partnership team will check your qualification against open apprentice slots and contact you.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-800 text-xs text-slate-300 hover:text-white mt-2 transition-all"
                  >
                    Register another profile
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-left border-b border-slate-800 pb-3">
                    <h4 className="text-base font-bold text-white">Graduate & Apprentice Registration</h4>
                    <p className="text-[11px] text-slate-400">Fill in your qualification profile to request training placement.</p>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Aditi Patel"
                      value={candidateState.name}
                      onChange={(e) => setCandidateState({...candidateState, name: e.target.value})}
                      className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-brand-accent transition-all placeholder-slate-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. aditi@gmail.com"
                        value={candidateState.email}
                        onChange={(e) => setCandidateState({...candidateState, email: e.target.value})}
                        className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-brand-accent transition-all placeholder-slate-600"
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Phone</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g. 9876543210"
                        value={candidateState.phone}
                        onChange={(e) => setCandidateState({...candidateState, phone: e.target.value})}
                        className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-brand-accent transition-all placeholder-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Qualification</label>
                      <select 
                        value={candidateState.qualification}
                        onChange={(e) => setCandidateState({...candidateState, qualification: e.target.value})}
                        className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-brand-accent cursor-pointer"
                      >
                        <option>B.E. / B.Tech</option>
                        <option>M.C.A / M.Sc IT</option>
                        <option>B.Sc Computer Science</option>
                        <option>Diploma in Engineering</option>
                        <option>Other Graduate</option>
                      </select>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Area of Interest</label>
                      <select 
                        value={candidateState.interest}
                        onChange={(e) => setCandidateState({...candidateState, interest: e.target.value})}
                        className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-brand-accent cursor-pointer"
                      >
                        <option>Software Development</option>
                        <option>Website Design & Dev</option>
                        <option>Digital Marketing</option>
                        <option>Human Resources</option>
                        <option>Media Production</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-medium hover:brightness-110 active:scale-98 transition-all flex items-center justify-center space-x-1.5 shadow-md shadow-brand-primary/10 text-xs disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{loading ? 'Submitting Application...' : 'Register Profile'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
