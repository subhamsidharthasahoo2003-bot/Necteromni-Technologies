import React, { useState } from 'react';
import { Layers, Database, Code2, Terminal, ShieldAlert } from 'lucide-react';

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Languages & Frameworks', 'Databases', 'Tools & IDEs', 'Platforms & Systems'];

  const techs = [
    // Languages & Frameworks
    { name: '.NET Core & Framework', category: 'Languages & Frameworks', type: 'Framework', color: 'from-purple-500 to-indigo-500' },
    { name: 'Java 8 / SE', category: 'Languages & Frameworks', type: 'Language', color: 'from-orange-500 to-red-500' },
    { name: 'ASP.NET MVC', category: 'Languages & Frameworks', type: 'Framework', color: 'from-blue-600 to-indigo-600' },
    { name: 'Mono Project', category: 'Languages & Frameworks', type: 'Framework', color: 'from-yellow-500 to-amber-500' },
    { name: 'Angular / AngularJS', category: 'Languages & Frameworks', type: 'Framework', color: 'from-red-600 to-rose-600' },
    { name: 'React.js & Tailwind CSS', category: 'Languages & Frameworks', type: 'Library', color: 'from-cyan-400 to-blue-500' },
    { name: 'jQuery', category: 'Languages & Frameworks', type: 'Library', color: 'from-blue-400 to-sky-500' },
    { name: 'HTML5 & CSS3', category: 'Languages & Frameworks', type: 'Core Web', color: 'from-orange-400 to-blue-400' },
    { name: 'JavaScript (ES6+)', category: 'Languages & Frameworks', type: 'Language', color: 'from-yellow-400 to-amber-400' },
    { name: 'Qt Framework', category: 'Languages & Frameworks', type: 'Framework', color: 'from-emerald-400 to-green-500' },
    
    // Databases
    { name: 'Microsoft SQL Server', category: 'Databases', type: 'Relational', color: 'from-red-500 to-rose-600' },
    { name: 'PostgreSQL', category: 'Databases', type: 'Relational', color: 'from-blue-500 to-indigo-600' },
    { name: 'Oracle Database', category: 'Databases', type: 'Relational', color: 'from-red-600 to-orange-600' },
    { name: 'MySQL', category: 'Databases', type: 'Relational', color: 'from-amber-600 to-orange-500' },
    { name: 'SQLite', category: 'Databases', type: 'Lightweight', color: 'from-sky-400 to-blue-500' },
    { name: 'NHibernate & Hibernate', category: 'Databases', type: 'ORM', color: 'from-amber-700 to-yellow-600' },
    
    // Tools & IDEs
    { name: 'Visual Studio & VS Code', category: 'Tools & IDEs', type: 'IDE', color: 'from-purple-600 to-indigo-600' },
    { name: 'Eclipse IDE', category: 'Tools & IDEs', type: 'IDE', color: 'from-indigo-400 to-purple-500' },
    { name: 'NetBeans', category: 'Tools & IDEs', type: 'IDE', color: 'from-sky-500 to-emerald-500' },
    { name: 'Git & GitHub', category: 'Tools & IDEs', type: 'VCS', color: 'from-orange-600 to-red-500' },
    { name: 'Redmine', category: 'Tools & IDEs', type: 'PM Tool', color: 'from-rose-500 to-red-600' },
    { name: 'MS Expression Blend', category: 'Tools & IDEs', type: 'Design', color: 'from-purple-500 to-pink-500' },

    // Platforms & Systems
    { name: 'Android OS', category: 'Platforms & Systems', type: 'Mobile', color: 'from-green-400 to-emerald-500' },
    { name: 'iOS App Ecosystem', category: 'Platforms & Systems', type: 'Mobile', color: 'from-slate-400 to-slate-200' },
    { name: 'Ubuntu Linux', category: 'Platforms & Systems', type: 'OS', color: 'from-orange-600 to-amber-600' },
    { name: 'Debian GNU/Linux', category: 'Platforms & Systems', type: 'OS', color: 'from-rose-600 to-indigo-800' },
    { name: 'SELinux', category: 'Platforms & Systems', type: 'Security', color: 'from-slate-700 to-slate-500' },
    { name: 'OPC Foundation', category: 'Platforms & Systems', type: 'Industrial', color: 'from-blue-600 to-sky-400' },

    // Testing (Categorized under Tools/Systems but shown specifically)
    { name: 'Selenium WebDriver', category: 'Tools & IDEs', type: 'QA Automation', color: 'from-green-600 to-teal-500' },
    { name: 'TestComplete', category: 'Tools & IDEs', type: 'QA Automation', color: 'from-purple-500 to-indigo-500' }
  ];

  const filteredTechs = activeFilter === 'All' 
    ? techs 
    : techs.filter(tech => tech.category === activeFilter);

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'Languages & Frameworks': return <Code2 className="w-5 h-5" />;
      case 'Databases': return <Database className="w-5 h-5" />;
      case 'Tools & IDEs': return <Layers className="w-5 h-5" />;
      case 'Platforms & Systems': return <Terminal className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="tech-stack" className="relative py-20 bg-brand-navy overflow-hidden">
      {/* Glow spots */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-accent">Engineering Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            Our Technology Stack
          </h2>
          <p className="text-slate-400 font-light leading-relaxed">
            Our teams operate across standard programming structures, databases, operating environments, and QA pipelines to compile reliable applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-300 ${
                activeFilter === cat 
                  ? 'bg-brand-primary border-brand-primary text-white shadow-lg shadow-brand-primary/10' 
                  : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {filteredTechs.map((tech, idx) => (
            <div 
              key={idx}
              className="glass-card p-4 rounded-xl border border-white/5 flex flex-col items-start justify-between text-left group cursor-default"
            >
              <div className="flex items-center justify-between w-full mb-3">
                <div className="text-slate-500 group-hover:text-brand-accent transition-colors">
                  {getCategoryIcon(tech.category)}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50">
                  {tech.type}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-brand-accent transition-colors leading-tight mb-2">
                  {tech.name}
                </h4>
                <div className={`w-6 h-0.5 rounded-full bg-gradient-to-r ${tech.color} group-hover:w-full transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-xl border border-yellow-500/10 bg-yellow-500/5 flex items-center space-x-3 text-left">
          <ShieldAlert className="w-5 h-5 text-yellow-500 shrink-0" />
          <p className="text-xs text-yellow-500/80 font-light leading-relaxed">
            Necteromni maintains compatibility across both legacy systems (.NET Framework, AngularJS, SQL Server 2012+) and modern reactive cloud applications (React.js, Node.js, serverless REST APIs) to serve diversified corporate client architectures.
          </p>
        </div>

      </div>
    </section>
  );
}
