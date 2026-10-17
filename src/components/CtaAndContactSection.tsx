import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  School, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

interface CtaAndContactProps {
  onOpenDemoModal: () => void;
}

export const CtaAndContactSection: React.FC<CtaAndContactProps> = ({ onOpenDemoModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Evaluator / Professor',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <>
      {/* ================================================= */}
      {/* CALL TO ACTION SECTION */}
      {/* ================================================= */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-700/60 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-teal-600/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Collaboration & Evaluation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto">
            Interested in MedAssist AI?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            We are developing MedAssist AI as a student engineering project to explore accessible and technology-assisted medication management.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-base shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              Contact Us
            </a>

            <button
              onClick={onOpenDemoModal}
              className="px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-base border border-teal-400/40 shadow-sm transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Request a Demo
            </button>
          </div>

          <p className="mt-6 text-xs text-teal-200/70">
            Student engineering prototype • Open for academic feedback, faculty review, and customer validation interviews
          </p>
        </div>
      </section>

      {/* ================================================= */}
      {/* CONTACT SECTION */}
      {/* ================================================= */}
      <section id="contact" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Mail className="w-3.5 h-3.5 text-teal-600" />
              <span>Feedback & Inquiries</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Get in Touch
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Share your insights, advice, or validation feedback to help guide our engineering prototype.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            
            {/* Left Column: Project Placeholders Details */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider text-xs text-teal-700">
                  Project Information
                </h3>
                <div className="mt-2 text-xl font-extrabold text-slate-900">
                  MedAssist AI
                </div>
                <div className="text-xs text-slate-500">
                  Smart Medicine Companion
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100 text-sm">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Institution:
                  </span>
                  <div className="mt-1 font-semibold text-slate-800 flex items-center gap-2">
                    <School className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>[College Name]</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Team:
                  </span>
                  <div className="mt-1 font-semibold text-slate-800 flex items-center gap-2">
                    <Users className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>[Team Members]</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Project Email:
                  </span>
                  <div className="mt-1 font-semibold text-slate-800 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-teal-600 shrink-0" />
                    <span className="font-mono text-xs">[Project Email]</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 text-xs text-teal-900 space-y-1">
                <span className="font-bold block">Wadhwani Foundation & College Evaluation</span>
                <p className="text-slate-600">
                  Prepared for academic milestone grading and entrepreneurship customer problem-solution fit verification.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Thank You for Your Feedback!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your message has been captured for our student engineering team review. We appreciate your valuable input for our customer validation study!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', role: 'Evaluator / Professor', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm text-slate-900 placeholder-slate-400 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@institution.edu or work email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm text-slate-900 placeholder-slate-400 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Perspective / Role
                    </label>
                    <select
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm text-slate-900 bg-slate-50/50"
                    >
                      <option value="Evaluator / Professor">College Evaluator / Faculty Member</option>
                      <option value="Wadhwani Mentor">Wadhwani Entrepreneurship Mentor</option>
                      <option value="Healthcare Professional">Healthcare Professional / Pharmacist</option>
                      <option value="Caregiver or Senior">Caregiver or Senior Citizen</option>
                      <option value="Fellow Student">Fellow Engineering Student</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Message / Feedback
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Share your thoughts on the proposed concept, usability recommendations, or feature suggestions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm text-slate-900 placeholder-slate-400 bg-slate-50/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>
    </>
  );
};
