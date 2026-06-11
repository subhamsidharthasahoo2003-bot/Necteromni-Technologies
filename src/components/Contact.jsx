import React, { useState } from 'react';
import { MapPin, Phone, Mail, FileCheck, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'IT Solutions',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const servicesList = [
    'IT Solutions (Custom Software/ERP/CRM)',
    'Web & Digital (Design/E-Commerce/Portal)',
    'Digital Marketing (SEO/SMM/Ads)',
    'HR & Business Consulting (Recruitment/Training)',
    'Media & Communication (Branding/Video/PR)'
  ];

  return (
    <section id="contact" className="relative py-20 bg-brand-navy overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-accent/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-accent">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            Connect With Our Experts
          </h2>
          <p className="text-slate-400 font-light leading-relaxed">
            Have a project in mind, or want to discuss skill development and HR consultancy? Reach out today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Corporate Details & Location Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Contact cards */}
            <div className="glass p-6 sm:p-8 rounded-2xl border border-white/5 text-left space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Business Office</h4>
                  <p className="text-sm text-slate-300 font-light leading-relaxed mt-1">
                    Shop No.1, Seven Hills Complex,<br />
                    Krishna Talkies Road, Beside Axis Bank, Risali,<br />
                    Bhilai, Chhattisgarh – 490006
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Phone Lines</h4>
                  <div className="mt-1 space-y-1">
                    <a href="tel:+917898811806" className="block text-sm text-slate-300 hover:text-brand-accent transition-colors font-light">
                      +91 7898811806 (Office)
                    </a>
                    <a href="tel:+918984014001" className="block text-sm text-slate-300 hover:text-brand-accent transition-colors font-light">
                      +91 8984014001 (Inquiries)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Email Correspondence</h4>
                  <a href="mailto:info@necteromni.com" className="block text-sm text-slate-300 hover:text-brand-primary transition-colors font-light mt-1">
                    info@necteromni.com
                  </a>
                </div>
              </div>

              {/* CIN details */}
              <div className="pt-6 border-t border-slate-800 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 mt-1">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Corporate Information</h4>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    Necteromni Technologies Pvt. Ltd.<br />
                    CIN: U72900OR2017PTC026956
                  </p>
                </div>
              </div>

            </div>

            {/* Embedded map placeholder */}
            <div className="glass rounded-2xl border border-white/5 overflow-hidden h-64 shadow-lg relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2828753229645!2d81.33230627598687!3d21.141138883907725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293ecde0ee8c49%3A0xe54fb0ebccffb711!2sKrishna%20Talkies%20Rd%2C%20Risali%2C%20Bhilai%2C%20Chhattisgarh%20490006!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.6) invert(0.9) contrast(1.1)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Necteromni Office Map Location"
                className="group-hover:scale-101 transition-transform duration-300"
              ></iframe>
            </div>

          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7 flex">
            <div className="glass p-6 sm:p-10 rounded-3xl border border-white/5 text-left w-full relative flex flex-col justify-center min-h-[500px]">
              
              {submitted ? (
                <div className="text-center py-10 flex flex-col items-center justify-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Sent Successfully!</h3>
                  <p className="text-sm text-slate-300 font-light max-w-sm leading-relaxed">
                    Thank you for reaching out to Necteromni Technologies. Our consultation team will review your requirements and follow up within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-xl border border-slate-700 bg-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-500 mt-4 transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-white">Consultation Request</h3>
                    <p className="text-xs text-slate-400 font-light mt-1">Specify your requirements, and we will contact you directly.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Name</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        placeholder="e.g. Rahul Sharma"
                        className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-brand-accent text-sm text-white focus:outline-none transition-all placeholder-slate-600"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        placeholder="e.g. rahul@company.com"
                        className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-brand-accent text-sm text-white focus:outline-none transition-all placeholder-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        placeholder="e.g. +91 9876543210"
                        className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-brand-accent text-sm text-white focus:outline-none transition-all placeholder-slate-600"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="service" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Interested Service</label>
                      <select 
                        id="service"
                        value={formState.service}
                        onChange={(e) => setFormState({...formState, service: e.target.value})}
                        className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-brand-accent text-sm text-white focus:outline-none transition-all cursor-pointer"
                      >
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc} className="bg-slate-950">{svc}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Project / Inquiry details</label>
                    <textarea 
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      placeholder="Briefly describe what you are looking to build or consulting requirements..."
                      className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-brand-accent text-sm text-white focus:outline-none transition-all placeholder-slate-600 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-medium hover:brightness-110 active:scale-98 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-brand-primary/15 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'Sending Request...' : 'Send Consultation Request'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
