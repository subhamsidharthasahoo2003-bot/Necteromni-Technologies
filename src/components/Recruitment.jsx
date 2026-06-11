import React, { useState } from 'react';
import { GraduationCap, Award, UserCheck, FileText, BookOpen, Rocket, Check, ArrowRight } from 'lucide-react';

export default function Recruitment() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Campus Recruitment Drive',
      badge: 'Step 1',
      icon: GraduationCap,
      color: 'from-blue-500 to-sky-400',
      shadowColor: 'rgba(59, 130, 246, 0.4)',
      details: 'We partner with leading universities and technical institutions across the region to host campus placement events. Under this drive, we connect directly with emerging talent, hosting pre-placement talks and written screening tests to evaluate core aptitude.'
    },
    {
      title: 'Interview Process',
      badge: 'Step 2',
      icon: Award,
      color: 'from-sky-500 to-cyan-400',
      shadowColor: 'rgba(6, 182, 212, 0.4)',
      details: 'Selected candidates from the screening phase undergo technical and panel interviews. We evaluate programming proficiency, logical reasoning, problem-solving, communication skills, and architectural knowledge depending on the target role.'
    },
    {
      title: 'Selection of Right Candidates',
      badge: 'Step 3',
      icon: UserCheck,
      color: 'from-cyan-500 to-teal-400',
      shadowColor: 'rgba(20, 184, 166, 0.4)',
      details: 'Based on cumulative performance in the interview rounds, our recruitment board identifies top-performing candidates. We align talent profiles with project demands and client expectations to ensure a perfect technical and cultural fit.'
    },
    {
      title: 'On-Spot Offer Letter',
      badge: 'Step 4',
      icon: FileText,
      color: 'from-teal-500 to-emerald-400',
      shadowColor: 'rgba(16, 185, 129, 0.4)',
      details: 'To expedite hiring and prevent talent dilution, we issue on-spot official offer letters to successful candidates. This document outlines terms of engagement, role details, compensation packages, and training schedules.'
    },
    {
      title: 'Industry Aptitude Training',
      badge: 'Step 5',
      icon: BookOpen,
      color: 'from-emerald-500 to-indigo-400',
      shadowColor: 'rgba(79, 70, 229, 0.4)',
      details: 'Candidates undergo structured, intensive training to align their skills with practical industry standards. This program covers corporate work cultures, version control, agile development, testing methodologies, and client-handling procedures.'
    },
    {
      title: 'Starting Working',
      badge: 'Step 6',
      icon: Rocket,
      color: 'from-indigo-500 to-brand-primary',
      shadowColor: 'rgba(2, 132, 199, 0.4)',
      details: 'Trained candidates are officially onboarded onto client projects and active internal development tracks. Armed with technical capabilities and corporate training, they begin delivering value, receiving continuous mentorship from team leads.'
    }
  ];

  return (
    <section id="recruitment" className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-brand-primary/5 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-accent">Hiring Lifecycle</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            Our Recruitment Process
          </h2>
          <p className="text-slate-400 font-light leading-relaxed">
            Bridging the gap between educational foundations and active business employability. We source, select, train, and deploy high-performing professionals.
          </p>
        </div>

        {/* Stepper Node Grid - Desktop horizontal flow */}
        <div className="hidden lg:block relative max-w-5xl mx-auto mb-16">
          {/* Horizontal progress bar */}
          <div className="absolute top-12 left-12 right-12 h-1 bg-slate-800 z-0">
            <div 
              className="h-full bg-gradient-to-r from-brand-accent to-brand-primary transition-all duration-500 ease-out"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isCompleted = idx < activeStep;
              const isActive = idx === activeStep;
              
              return (
                <div key={idx} className="flex flex-col items-center">
                  {/* Circle Node button */}
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`w-24 h-24 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isActive 
                        ? `border-brand-accent bg-brand-carddark text-brand-accent scale-110 shadow-lg` 
                        : isCompleted
                          ? 'border-brand-primary bg-brand-navy text-brand-primary'
                          : 'border-slate-800 bg-brand-navy text-slate-500 hover:border-slate-700 hover:text-slate-300'
                    }`}
                    style={{
                      boxShadow: isActive ? `0 0 20px ${step.shadowColor}` : 'none'
                    }}
                  >
                    {isCompleted ? (
                      <Check className="w-10 h-10 stroke-[2.5]" />
                    ) : (
                      <StepIcon className="w-9 h-9 stroke-[1.5]" />
                    )}
                  </button>

                  <span className={`text-[10px] uppercase tracking-wider font-bold mt-4 px-2 py-0.5 rounded ${isActive ? 'bg-brand-accent/10 text-brand-accent' : 'text-slate-500'}`}>
                    {step.badge}
                  </span>
                  
                  <span className={`text-xs font-semibold text-center mt-2 max-w-[130px] line-clamp-2 transition-colors ${isActive ? 'text-white' : 'text-slate-400'}`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical flow */}
        <div className="lg:hidden max-w-md mx-auto mb-12 space-y-4">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            const isActive = idx === activeStep;
            
            return (
              <div 
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`glass p-4 rounded-xl border flex items-center space-x-4 cursor-pointer transition-all duration-300 ${
                  isActive ? 'border-brand-accent/50 bg-brand-carddark/60' : 'border-white/5 bg-slate-900/40'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-gradient-to-tr ${step.color} text-white shadow-md`}>
                  <StepIcon className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-slate-500">{step.badge}</span>
                  <h4 className="text-sm font-bold text-white leading-tight">{step.title}</h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Detail Panel */}
        <div className="glass max-w-3xl mx-auto rounded-3xl border border-white/5 overflow-hidden shadow-2xl relative">
          <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${steps[activeStep].color}`}></div>
          <div className="p-8 sm:p-10 text-left flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-brand-accent border border-slate-800 shrink-0">
              {React.createElement(steps[activeStep].icon, { className: "w-8 h-8 stroke-[1.5]" })}
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-brand-accent">
                Hiring Phase &bull; {steps[activeStep].badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-3">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {steps[activeStep].details}
              </p>
            </div>
          </div>
        </div>

        {/* Next CTA Indicator */}
        <div className="mt-8 flex items-center justify-center text-xs text-slate-500 gap-1.5 cursor-pointer hover:text-slate-300 transition-colors"
          onClick={() => setActiveStep((activeStep + 1) % steps.length)}
        >
          <span>See next phase</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>

      </div>
    </section>
  );
}
