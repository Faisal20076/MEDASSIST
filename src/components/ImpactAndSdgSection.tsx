import React from 'react';
import { 
  Heart, 
  Accessibility, 
  ShieldCheck, 
  Globe, 
  Award,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const ImpactAndSdgSection: React.FC = () => {
  const impacts = [
    {
      title: 'ACCESSIBILITY',
      description: 'Make medicine-related information easier to access.',
      icon: Accessibility,
      nuance: 'Aims to support inclusive multi-sensory access (voice, audio tones, high-contrast imagery) removing reliance on small printed text.'
    },
    {
      title: 'INDEPENDENCE',
      description: 'Reduce unnecessary dependence on others for routine medication-management tasks.',
      icon: Heart,
      nuance: 'Aims to support individual dignity and autonomy for senior citizens and visually impaired persons inside their homes.'
    },
    {
      title: 'SAFETY AWARENESS',
      description: 'Provide reminders and verification-oriented alerts to support safer medication routines.',
      icon: ShieldCheck,
      nuance: 'Aims to support user attentiveness by alerting them to schedule mismatches and logging completed intake events.'
    },
  ];

  const sdgs = [
    {
      number: 3,
      title: 'GOOD HEALTH AND WELL-BEING',
      statement: 'Supports safer and more accessible medication management.',
      accentColor: 'from-emerald-600 to-green-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-300',
      textColor: 'text-emerald-900',
      badgeColor: 'bg-emerald-600',
      prominent: true,
      unGoal: 'Target 3.8: Access to safe, effective, and affordable essential medicines.'
    },
    {
      number: 10,
      title: 'REDUCED INEQUALITIES',
      statement: 'Supports accessibility for people with visual impairment and limited literacy.',
      accentColor: 'from-rose-600 to-pink-700',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-300',
      textColor: 'text-rose-900',
      badgeColor: 'bg-rose-600',
      prominent: true,
      unGoal: 'Target 10.2: Empower and promote the social and economic inclusion of all irrespective of disability or age.'
    },
    {
      number: 9,
      title: 'INDUSTRY, INNOVATION AND INFRASTRUCTURE',
      statement: 'Combines AI, embedded systems, computer vision, and assistive technology.',
      accentColor: 'from-amber-600 to-orange-700',
      bgColor: 'bg-amber-50/70',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-900',
      badgeColor: 'bg-amber-600',
      prominent: false,
      unGoal: 'Foster innovation through accessible embedded technology.'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================================================= */}
        {/* PART 1: PROJECT IMPACT */}
        {/* ================================================= */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-teal-200">
            <Heart className="w-3.5 h-3.5 text-teal-600" />
            <span>Social Intent & Mission</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Intended Impact
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            MedAssist AI is designed to address daily human friction points in medication routines, focusing on tangible quality-of-life benefits.
          </p>
        </div>

        {/* 3 Major Impact Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {impacts.map((impact) => {
            const Icon = impact.icon;
            return (
              <div 
                key={impact.title}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {impact.title}
                  </h3>

                  <p className="mt-2 text-base font-semibold text-teal-800 leading-snug">
                    "{impact.description}"
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {impact.nuance}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                  <span>Aims to support user autonomy</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice regarding claims */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto italic">
            *Intended goals represent the student project’s design aspiration and do not constitute clinical or epidemiological outcome claims.
          </p>
        </div>

        {/* ================================================= */}
        {/* PART 2: SUSTAINABLE DEVELOPMENT GOALS (SDGs) */}
        {/* ================================================= */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
              <Globe className="w-3.5 h-3.5 text-teal-600" />
              <span>United Nations Alignment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Supporting Sustainable Development Goals
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Aligning assistive embedded AI engineering with global sustainability benchmarks, with primary emphasis on Health (SDG 3) and Reduced Inequalities (SDG 10).
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {sdgs.map((sdg) => (
              <div 
                key={sdg.number}
                className={`rounded-3xl p-7 border transition-all flex flex-col justify-between ${sdg.bgColor} ${sdg.borderColor} ${
                  sdg.prominent ? 'shadow-md md:-translate-y-1' : 'shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl ${sdg.badgeColor} text-white flex items-center justify-center font-extrabold text-2xl shadow-sm`}>
                      {sdg.number}
                    </div>
                    {sdg.prominent && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 text-slate-800 border border-slate-200/60 shadow-2xs">
                        Primary Focus Goal
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    SDG {sdg.number}
                  </span>

                  <h3 className={`text-lg font-extrabold tracking-tight ${sdg.textColor}`}>
                    {sdg.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold text-slate-800 leading-relaxed">
                    "{sdg.statement}"
                  </p>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {sdg.unGoal}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Aligned Engineering Design</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
