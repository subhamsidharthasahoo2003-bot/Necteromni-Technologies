import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { User, Target, Compass, Award, CheckCircle2, ChevronRight, Briefcase, Camera, X } from 'lucide-react';
import mdPortrait from '../assets/Mihir-Kumar.jpeg';
import drive1 from '../assets/drive_1.jpg';
import drive2 from '../assets/drive_2.jpg';
import drive3 from '../assets/drive_3.jpg';
import drive4 from '../assets/drive_4.jpg';
import drive5 from '../assets/drive_5.jpg';
import drive6 from '../assets/drive_6.jpg';
import drive7 from '../assets/drive_7.jpg';
import drive8 from '../assets/drive_8.jpg';
import drive9 from '../assets/drive_9.jpg';
import drive10 from '../assets/drive_10.jpg';
import teamAshwath from '../assets/ashwath-singh.avif';
import teamRishi from '../assets/rishi-gurbaxani.avif';
import teamRasmita from '../assets/rasmita-tripathy.avif';

export default function About() {
  const [activeImage, setActiveImage] = useState(null);

  const highlights = [
    'Incorporated in 2017 as a Private Limited Company.',
    'Active technology and business solutions organization.',
    'Serving clients across multiple sectors (Education, Healthcare, Retail, Government).',
    'Focused on digital transformation and innovation.',
    'Committed to quality, transparency, and customer success.'
  ];

  const mdExpertise = [
    'Information Technology Services',
    'Software Development & Web Design',
    'Digital Marketing & Content Strategy',
    'Human Resource Management',
    'Corporate Training & Skill Development',
    'Startup & Business Process Consulting',
    'Digital Media Management'
  ];

  const galleryItems = [
    {
      image: drive2,
      title: "Corporate Competency Briefing",
      location: "Placement Odisha Skill Academy",
      description: "Er. Mihir Kumar Brahma outlining Necteromni's technology alignment, training initiatives, and employment pipelines."
    },
    {
      image: drive1,
      title: "Pre-Placement Talk (2026 Intake)",
      location: "Technical Classroom Session",
      description: "Interacting directly with engineering graduates to review project expectations and bridge academic-industrial gaps."
    },
    {
      image: drive9,
      title: "Pre-Placement Panel Discussion",
      location: "Arka Academy of Management Studies",
      description: "Seminar panel coordinate introducing training modules and internship platforms for student recruitment."
    },
    {
      image: drive6,
      title: "Piaggio Auto Ltd Campus Drive",
      location: "Technical Recruitment Drive",
      description: "Necteromni coordinators and college representatives hosting the official campus selection drive for Piaggio Auto."
    },
    {
      image: drive4,
      title: "Workforce Readiness Workshop",
      location: "Academic Skill Seminar",
      description: "Briefing student candidates on business processes, professional etiquettes, and modern coding standard frameworks."
    },
    {
      image: drive3,
      title: "Aumsai Campus Drive",
      location: "Aumsai Institute of Technical Education",
      description: "Joint recruitment drives and board panels welcoming corporate delegates to review and select candidates."
    },
    {
      image: drive8,
      title: "Indmould Composites Selection Board",
      location: "Ganesh Institute of Technology",
      description: "Reviewing candidate panels for recruitment drives partner in Chennai-based Indmould Composites Technology."
    },
    {
      image: drive5,
      title: "Texmo Industries Placement Panel",
      location: "ASITE, Berhampur",
      description: "Placement coordination committee welcoming industrial recruiters to identify talent for national roles."
    },
    {
      image: drive7,
      title: "Academic-Industry Alliance Briefing",
      location: "Academic Seminar Panel",
      description: "Coordinating with placement officers and educational directors to restructure syllabus parameters."
    },
    {
      image: drive10,
      title: "Technical Aptitude Classroom Session",
      location: "Student Orientation Class",
      description: "Graduates preparing for corporate aptitude screenings, learning system architectures and business logic."
    }
  ];

  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden" id="about-md">
      {/* Background visual accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-primary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section 1: Managing Director Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative group max-w-sm w-full">
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-accent to-brand-primary rounded-2xl opacity-40 blur-sm group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border border-brand-accent/25 rounded-2xl z-20 pointer-events-none"></div>
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-brand-carddark shadow-2xl z-10">
                <img 
                  src={mdPortrait} 
                  alt="Er. Mihir Kumar Brahma - Managing Director" 
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-slate-950/20 to-transparent opacity-80"></div>
                
                <div className="absolute bottom-5 left-5 right-5 text-left z-20">
                  <p className="text-xl font-bold text-white tracking-wide">Er. Mihir Kumar Brahma</p>
                  <p className="text-xs text-brand-accent uppercase tracking-wider font-semibold">Founder & Managing Director</p>
                </div>
              </div>
            </div>
          </div>

          {/* Biography Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="text-left">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-accent">Leadership Spotlight</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
                About the Managing Director
              </h2>
              <div className="w-12 h-1 bg-brand-primary rounded-full mb-6"></div>
              
              <p className="text-slate-300 font-light leading-relaxed mb-5">
                <strong className="text-white font-semibold">Er. Mihir Kumar Brahma</strong> is a visionary entrepreneur, technology strategist, and business leader with extensive experience in Information Technology, Digital Transformation, Human Resource Consulting, Skill Development, Media, and Business Process Solutions.
              </p>
              
              <p className="text-slate-300 font-light leading-relaxed mb-6">
                As the Founder and Managing Director of Necteromni Technologies Private Limited, he has been instrumental in delivering innovative technology solutions, digital services, and business consulting services to clients across India. Under his leadership, the organization has continuously expanded its service portfolio while maintaining a strong commitment to quality, customer satisfaction, and technological excellence.
              </p>

              {/* MD Expertise Badges */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center">
                  <Briefcase className="w-4 h-4 text-brand-accent mr-2" />
                  Areas of Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {mdExpertise.map((exp, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full text-xs font-medium bg-brand-carddark border border-slate-700/60 text-slate-300 hover:border-brand-accent/50 hover:text-white transition-all cursor-default"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-slate-400 font-light italic border-l-2 border-brand-accent/40 pl-4 py-1 leading-relaxed">
                Er. Brahma is also actively involved in educational initiatives, employment generation programs, and industry-academia collaborations that help bridge the gap between education and employability.
              </p>
            </div>
          </div>

        </div>

        {/* Section 2: Company Profile, Vision, Mission */}
        <div className="pt-12 border-t border-slate-800" id="about-company">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-accent">Corporate Identity</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
              Necteromni Technologies
            </h2>
            <p className="text-slate-400 font-light leading-relaxed">
              Empowering Businesses Through Technology & Innovation. A leading Information Technology and Business Solutions company incorporated in 2017.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Vision Card */}
            <div className="glass-card p-8 rounded-2xl text-left flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-slate-300 font-light leading-relaxed">
                  To become a globally recognized technology company that empowers businesses through innovation, digital transformation, and sustainable growth.
                </p>
              </div>
              <div className="mt-8 flex items-center text-sm text-brand-primary font-medium">
                <span>Driving global excellence</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Mission Card */}
            <div className="glass-card p-8 rounded-2xl text-left flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                <ul className="space-y-3">
                  {[
                    'Deliver world-class technology solutions.',
                    'Create value-driven digital experiences.',
                    'Support business growth through innovation.',
                    'Foster skill development and employment opportunities.',
                    'Build long-term relationships with clients and partners.'
                  ].map((mission, index) => (
                    <li key={index} className="flex items-start text-sm text-slate-300 font-light">
                      <CheckCircle2 className="w-4.5 h-4.5 text-brand-accent mr-2 shrink-0 mt-0.5" />
                      <span>{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex items-center text-sm text-brand-accent font-medium">
                <span>Empowering communities</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

          {/* Company Highlights Grid */}
          <div className="glass p-8 rounded-2xl border border-white/5 mb-16">
            <h3 className="text-lg font-bold text-white mb-6 text-left flex items-center">
              <Award className="w-5 h-5 text-brand-accent mr-2" />
              Company Key Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-xl hover:bg-slate-800/40 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Our Core Team */}
          <div className="pt-16 pb-6 border-t border-slate-800" id="about-team">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-accent">Executive Council</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
                Our Core Team
              </h2>
              <div className="w-12 h-1 bg-brand-primary mx-auto rounded-full"></div>
            </div>

            <div className="space-y-20 max-w-5xl mx-auto">
              
              {/* Member 1: Ashwath Singh */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Portrait */}
                <div className="lg:col-span-4 flex justify-center order-1 lg:order-1">
                  <div className="relative group w-64 h-64 sm:w-72 sm:h-72">
                    <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-accent to-brand-primary rounded-full opacity-40 blur-sm group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 border-2 border-brand-accent/20 rounded-full z-20"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-brand-carddark shadow-2xl z-10">
                      <img 
                        src={teamAshwath} 
                        alt="Ashwath Singh - Director & Principal Consultant" 
                        className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
                {/* Details */}
                <div className="lg:col-span-8 text-left order-2 lg:order-2 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Ashwath Singh</h3>
                    <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mt-1">Director & Principal Consultant</p>
                  </div>
                  <div className="text-slate-300 font-light text-sm leading-relaxed space-y-3">
                    <p>
                      Ashwath Singh is a seasoned leadership professional with nearly 22 years of experience across Human Resources, Training, Placement, government liaisoning, and project facilitation. An alumnus of IIM Ahmedabad (2004 batch), he brings a rare blend of strategic insight, policy understanding, and execution excellence.
                    </p>
                    <p>
                      He has held several high-impact roles, including Ex-National Head at NSDC, where he coordinated skill development initiatives across all Indian states. His advisory and consulting engagements include NSDC, MSME, and HR Advisor roles with state governments such as Chhattisgarh, Maharashtra, Jharkhand, and Madhya Pradesh.
                    </p>
                    <p>
                      Mr. Singh has also served as Innovation Advisor to the Hon'ble Minister of Road Transport & Highways and as Ex-General Secretary, Anti-Corruption Bureau India, under the leadership of Hon'ble Mr. M. S. Bitta.
                    </p>
                    <p>
                      With strong working relationships across IAS officers, central and state ministries, and regulatory bodies PAN India, he has successfully facilitated greenfield projects, industry setups, and large-scale infrastructure initiatives. His expertise plays a critical role in ensuring seamless approvals, strategic stakeholder coordination, and timely execution for complex projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Member 2: Rishi Gurbaxani */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Portrait */}
                <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
                  <div className="relative group w-64 h-64 sm:w-72 sm:h-72">
                    <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-accent to-brand-primary rounded-full opacity-40 blur-sm group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 border-2 border-brand-accent/20 rounded-full z-20"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-brand-carddark shadow-2xl z-10">
                      <img 
                        src={teamRishi} 
                        alt="Rishi Gurbaxani - Operations Head" 
                        className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
                {/* Details */}
                <div className="lg:col-span-8 text-left order-2 lg:order-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Rishi Gurbaxani</h3>
                    <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mt-1">Operations Head</p>
                  </div>
                  <div className="text-slate-300 font-light text-sm leading-relaxed space-y-3">
                    <p>
                      Rishi Gurbaxani is an accomplished operations and administration leader with nearly 22 years of experience managing large-scale organizational processes and teams. He has worked with renowned organizations such as Aditya Birla Group and Maruti Suzuki India, gaining deep exposure to operational excellence, compliance, and process optimization.
                    </p>
                    <p>
                      Known for his hands-on leadership style and execution focus, he drives efficiency, cost optimization, and operational stability across the organization. His expertise ensures smooth day-to-day operations while supporting scalable growth and performance excellence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Member 3: Er. Rasmita Tripathy */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Portrait */}
                <div className="lg:col-span-4 flex justify-center order-1 lg:order-1">
                  <div className="relative group w-64 h-64 sm:w-72 sm:h-72">
                    <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-accent to-brand-primary rounded-full opacity-40 blur-sm group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 border-2 border-brand-accent/20 rounded-full z-20"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-brand-carddark shadow-2xl z-10">
                      <img 
                        src={teamRasmita} 
                        alt="Er. Rasmita Tripathy - Technical & Academic Advisor" 
                        className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
                {/* Details */}
                <div className="lg:col-span-8 text-left order-2 lg:order-2 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Er. Rasmita Tripathy</h3>
                    <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mt-1">Technical & Academic Advisor</p>
                  </div>
                  <div className="text-slate-300 font-light text-sm leading-relaxed space-y-3">
                    <p>
                      Er. Rasmita Tripathy is a distinguished academic and technical professional with 12 years of teaching experience in Civil and Structural Engineering. She completed her M.Tech from NIT Rourkela (2012) and is currently pursuing her Ph.D. at KIIT University.
                    </p>
                    <p>
                      As an Advisor to PlacementOdisha Skill Academy, she brings strong research-driven insights, curriculum design expertise, and academic leadership. Her contributions significantly enhance training quality, curriculum relevance, and industry alignment, ensuring that learners receive modern, technically strong, and industry-ready education.
                    </p>
                    <p>
                      Her guidance reinforces the academy's commitment to quality technical education, practical exposure, and skill development for aspiring engineers across Odisha.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Section 4: Campus Drives & Academic Engagement Gallery */}
          <div className="pt-12 border-t border-slate-800 text-left">
            <div className="max-w-3xl mb-10">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-accent">Outreach & Impact</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4 flex items-center">
                <Camera className="w-6 h-6 text-brand-accent mr-2 shrink-0" />
                Campus Placements & Academic Galleries
              </h3>
              <p className="text-slate-400 font-light leading-relaxed text-sm">
                Visual highlights of pre-placement seminars, technical sessions, and university recruitments facilitated by Er. Mihir Kumar Brahma and the team to support student placements. Over the past 13 years, our partner academies have successfully coordinated the recruitment of 2,000+ professionals.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {galleryItems.map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveImage(item)}
                  className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 border border-white/5 cursor-pointer shadow-lg hover:border-brand-accent/40 transition-all duration-300"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
                  
                  {/* Text Details */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="text-[10px] text-brand-accent uppercase font-bold tracking-wider">{item.location}</p>
                    <p className="text-xs font-bold text-white leading-snug line-clamp-2 mt-0.5">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Lightbox Modal rendered via React Portal in document.body to avoid parent transform/fixed position bugs */}
            {activeImage && createPortal(
              <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="relative max-w-4xl w-full flex flex-col items-center">
                  <button 
                    onClick={() => setActiveImage(null)}
                    className="absolute -top-12 right-0 text-slate-400 hover:text-white flex items-center space-x-1 p-2 focus:outline-none transition-colors"
                  >
                    <span className="text-sm font-semibold">Close</span>
                    <X className="w-5 h-5" />
                  </button>
                  <div className="w-full max-h-[70vh] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 flex items-center justify-center shadow-2xl">
                    <img 
                      src={activeImage.image} 
                      alt={activeImage.title} 
                      className="max-w-full max-h-[70vh] object-contain"
                    />
                  </div>
                  <div className="text-center mt-6 text-white max-w-2xl px-4">
                    <span className="text-[10px] text-brand-accent font-bold uppercase tracking-widest">{activeImage.location}</span>
                    <h4 className="text-lg sm:text-xl font-bold mt-1">{activeImage.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 font-light mt-2 leading-relaxed">{activeImage.description}</p>
                  </div>
                </div>
              </div>,
              document.body
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
