import React from 'react';
import { 
  Plus, 
  Equal, 
  Layers, 
  Check, 
  Sparkles, 
  Minimize2, 
  Maximize2,
  Workflow
} from 'lucide-react';

export const DifferentiationSection: React.FC = () => {
  const componentsList = [
    'Medicine Identification',
    'OCR',
    'Voice Assistance',
    'Medicine Box Locator',
    'Prescription Verification',
    'Schedule Verification',
    'Alerts',
    'Medication History'
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-teal-200">
            <Workflow className="w-3.5 h-3.5 text-teal-600" />
            <span>Integrated Value Proposition</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            More Than Medicine Identification
          </h2>

          {/* Mandatory paragraph */}
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Medicine identification and medication reminders already exist as separate technologies. MedAssist AI focuses on bringing several assistance functions into one workflow.
          </p>
        </div>

        {/* Visual Formula / Integration Equation */}
        <div className="mt-12 max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              The Integration Architecture Formula
            </span>
          </div>

          {/* Component Badges Grid with '+' connectors */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {componentsList.map((item, idx) => (
              <React.Fragment key={item}>
                <div className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-teal-50 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200 hover:border-teal-300 transition-colors shadow-2xs flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-teal-600" />
                  <span>{item}</span>
                </div>
                {idx < componentsList.length - 1 && (
                  <span className="text-slate-400 font-bold text-sm px-0.5">
                    +
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Equal Sign & Result Box */}
          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-lg mb-4">
              =
            </div>

            <div className="w-full max-w-2xl bg-gradient-to-r from-teal-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 text-center shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles className="w-24 h-24 text-teal-300" />
              </div>
              
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400 block mb-1">
                Core Engineering Contribution
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                "One integrated medication-management workflow"
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                Rather than forcing a visually impaired or elderly individual to coordinate multiple disjointed apps and devices, MedAssist AI proposes unifying physical localization, optical capture, schedule verification, and voice assistance into an accessible, single-session pipeline.
              </p>
            </div>
          </div>

          {/* Modesty / Novelty Disclaimer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500 max-w-xl mx-auto italic">
              *The underlying technologies (OCR, microcontrollers, TTS) exist independently in the public domain. MedAssist AI focuses on their synthesized integration to address specific user experience challenges in assisted care.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
