import React from 'react';
import { ShieldAlert, AlertTriangle, Stethoscope, CheckCircle } from 'lucide-react';

export const SafetySection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Visually Distinct Information Box */}
        <div className="relative rounded-3xl bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-amber-50/80 border-2 border-amber-300/80 p-6 sm:p-10 shadow-md overflow-hidden">
          
          {/* Subtle watermark shield in background */}
          <ShieldAlert className="absolute -right-8 -bottom-8 w-48 h-48 text-amber-200/30 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
            
            {/* Prominent Safety Badge Icon */}
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
              <ShieldAlert className="w-8 h-8" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-200/80 text-amber-900 border border-amber-300">
                  Responsible Assistive Technology Notice
                </span>
                <span className="text-xs font-medium text-amber-800">
                  Engineering Safety Guideline
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Designed as an Assistive System
              </h2>

              {/* Exact required text */}
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                MedAssist AI is designed as an assistive medication-management concept. It does not diagnose medical conditions, prescribe medicines, change prescriptions, or replace doctors, pharmacists, or caregivers. If medicine identification is uncertain, the user should verify the medicine with a qualified healthcare professional or caregiver.
              </p>

              {/* Explicit Boundary Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 px-3 py-2 rounded-xl border border-amber-200">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>Non-Diagnostic Concept</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 px-3 py-2 rounded-xl border border-amber-200">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>No Prescription Alteration</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 px-3 py-2 rounded-xl border border-amber-200">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  <span>Human Verification First</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
