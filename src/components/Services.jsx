import React, { useState } from 'react';
import { Code, Globe, Megaphone, Users, Tv, CheckSquare, Layers, Settings, ShieldAlert, Cpu } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      id: 'it-solutions',
      title: 'IT Solutions',
      icon: Code,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
      borderColor: 'border-sky-500/30',
      description: 'Cutting-edge software applications, cloud systems, and advisory services tailored for enterprise automation.',
      items: [
        { name: 'Custom Software Development', desc: 'Customized applications built to align with specific business operations and goals.' },
        { name: 'ERP & CRM Solutions', desc: 'Integrated software ecosystems (like SAP, Odoo, Salesforce) to streamline resources and customers.' },
        { name: 'Mobile Application Development', desc: 'High-performance native and cross-platform mobile apps for iOS and Android.' },
        { name: 'Cloud Solutions', desc: 'Secure cloud hosting, migration, API management, and serverless architectures.' },
        { name: 'IT Consulting', desc: 'Strategic technology advisory to align your infrastructure with future business scaling.' }
      ]
    },
    {
      id: 'web-digital',
      title: 'Web & Digital',
      icon: Globe,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      description: 'Bespoke web portals, e-commerce storefronts, and outstanding user interfaces built with modern web stacks.',
      items: [
        { name: 'Website Design & Development', desc: 'Stunning corporate websites built with speed, security, and responsive layouts.' },
        { name: 'E-Commerce Development', desc: 'Feature-rich digital shops with secure payment processors, inventory managers, and logistics.' },
        { name: 'Web Portal Development', desc: 'Interactive portals for students, employees, partners, and vendors.' },
        { name: 'UI/UX Design', desc: 'User journeys, wireframes, and prototypes engineered to maximize conversion rates.' },
        { name: 'Website Maintenance', desc: 'Continuous updates, backups, security audits, and content updates to keep portals live.' }
      ]
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: Megaphone,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      description: 'Result-oriented online campaigns, content distribution, and SEO processes that drive customer conversions.',
      items: [
        { name: 'Search Engine Optimization (SEO)', desc: 'Organic page ranking optimization to position your business at the top of search listings.' },
        { name: 'Social Media Marketing', desc: 'Creative management and advertising across Facebook, LinkedIn, Instagram, and X.' },
        { name: 'Google Ads Management', desc: 'Highly optimized PPC campaigns driving instant, targeted traffic and lead generation.' },
        { name: 'Content Marketing', desc: 'Writing copy, articles, newsletters, and visual content that engage and convert leads.' },
        { name: 'Brand Promotion', desc: 'Strategic online campaigns targeting brand awareness and market authority building.' }
      ]
    },
    {
      id: 'hr-consulting',
      title: 'HR & Business',
      icon: Users,
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/30',
      description: 'Comprehensive human resources solutions, training initiatives, and corporate optimization strategies.',
      items: [
        { name: 'Recruitment Services', desc: 'Talent search and selection for technical, administrative, and leadership roles.' },
        { name: 'HR Outsourcing', desc: 'Handling onboarding, payroll management, compliance, and employee support systems.' },
        { name: 'Corporate Training', desc: 'Custom workforce training covering soft skills, project management, and emerging technologies.' },
        { name: 'Skill Development Programs', desc: 'Specialized courses and vocational workshops bridging academia and industry needs.' },
        { name: 'Business Process Consulting', desc: 'Structural optimization audits to improve efficiency, productivity, and reduce overhead costs.' }
      ]
    },
    {
      id: 'media-comm',
      title: 'Media & Comm',
      icon: Tv,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      description: 'Comprehensive public relations, digital media operations, and premium video production solutions.',
      items: [
        { name: 'Digital Media Management', desc: 'Strategy, distribution, and curation for public-facing digital channels.' },
        { name: 'Corporate Branding', desc: 'Designing brand books, logo sets, business stationery, and product packaging profiles.' },
        { name: 'Online News & Media Platforms', desc: 'Setting up and scaling online digital news portals and publication platforms.' },
        { name: 'Video Production', desc: 'High-definition corporate explainers, commercials, and digital documentary films.' },
        { name: 'Public Relations Support', desc: 'Press releases, press interactions, and brand reputation management.' }
      ]
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-brand-navy overflow-hidden">
      {/* Background glowing rings */}
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-brand-secondary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-accent">Our Core Services</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            Custom Solutions for Every Business Need
          </h2>
          <p className="text-slate-400 font-light leading-relaxed">
            From technical engineering and web setups to human resources and media creation, we supply comprehensive modern solutions to power corporate scaling.
          </p>
        </div>

        {/* Tab Buttons (Grid / Horizontal Scroll for Mobile) */}
        <div className="flex justify-start lg:justify-center items-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-thin scrollbar-thumb-slate-800">
          <div className="flex space-x-2 bg-slate-900/60 p-2 rounded-2xl border border-white/5 whitespace-nowrap">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-2 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg shadow-brand-primary/10' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : category.color}`} />
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Description Card */}
        <div className="glass p-6 rounded-2xl border border-white/5 text-left mb-8 max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-fade-in">
          <div className="flex-1">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${categories[activeTab].bgColor} ${categories[activeTab].color} border ${categories[activeTab].borderColor} mb-3`}>
              {React.createElement(categories[activeTab].icon, { className: "w-3.5 h-3.5" })}
              {categories[activeTab].title}
            </span>
            <p className="text-lg font-semibold text-white mb-1">
              Category Overview
            </p>
            <p className="text-sm text-slate-300 font-light leading-relaxed max-w-3xl">
              {categories[activeTab].description}
            </p>
          </div>
        </div>

        {/* Active Tab Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories[activeTab].items.map((item, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-2xl border border-white/5 text-left flex flex-col justify-between group transition-all duration-300"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800/60 flex items-center justify-center text-slate-400 group-hover:text-brand-accent group-hover:border-brand-accent/50 transition-colors">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Subservice {index + 1}</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
              
              <div className="mt-6 border-t border-slate-800/60 pt-4 flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-semibold">Ready for deployment</span>
                <span className="text-xs text-brand-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex items-center gap-1">
                  Learn more &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
