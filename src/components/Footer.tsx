import React from 'react';
import { ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Brand & Tagline */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500 text-slate-950 font-black flex items-center justify-center text-sm">
                M+
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                MedAssist AI – Smart Medicine Companion
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Student Engineering Project | Prototype in Development
            </p>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex items-center gap-4 flex-wrap">
            <a href="#problem" className="text-xs text-slate-300 hover:text-teal-400 transition-colors">
              Problem
            </a>
            <span className="text-slate-700">•</span>
            <a href="#solution" className="text-xs text-slate-300 hover:text-teal-400 transition-colors">
              Solution
            </a>
            <span className="text-slate-700">•</span>
            <a href="#features" className="text-xs text-slate-300 hover:text-teal-400 transition-colors">
              Features
            </a>
            <span className="text-slate-700">•</span>
            <a href="#technology" className="text-xs text-slate-300 hover:text-teal-400 transition-colors">
              Technology
            </a>
            <span className="text-slate-700">•</span>
            <a href="#contact" className="text-xs text-slate-300 hover:text-teal-400 transition-colors">
              Contact
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer ml-2"
              title="Back to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Legal, Academic Notice, and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 MedAssist AI. All rights reserved. Developed as an academic prototype for college engineering evaluation and Wadhwani Foundation validation.
          </p>

          <p className="text-[11px] text-slate-600 max-w-md text-center md:text-right">
            Not a certified medical device. The proposed concept does not provide diagnosis or replace licensed medical practitioners.
          </p>
        </div>

      </div>
    </footer>
  );
};
