import React from 'react';
import { 
  Search, 
  MapPin, 
  FileText, 
  HelpCircle, 
  CalendarClock, 
  Copy, 
  ClipboardCheck, 
  ClockAlert,
  AlertCircle
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      id: 1,
      number: '01',
      title: 'Identifying medicines',
      description: 'Pills and blister strips often look similar in shape, color, and size, creating significant ambiguity for individuals with impaired vision or declining eyesight.',
      icon: Search,
      impact: 'Visual ambiguity'
    },
    {
      id: 2,
      number: '02',
      title: 'Locating medicine boxes',
      description: 'Misplacing medication containers or daily pill organizers inside the home can cause frustration, delays, and anxiety during scheduled dosing times.',
      icon: MapPin,
      impact: 'Physical accessibility'
    },
    {
      id: 3,
      number: '03',
      title: 'Reading medicine labels',
      description: 'Critical instructions, chemical compositions, and dosages are frequently printed in tiny, low-contrast fonts over metallic reflective foil that is hard to decipher.',
      icon: FileText,
      impact: 'Low readability'
    },
    {
      id: 4,
      number: '04',
      title: 'Understanding prescriptions',
      description: 'Medical jargon, clinical dosage abbreviations, and complex intake instructions can be overwhelming, particularly for low-literacy individuals or elderly patients.',
      icon: HelpCircle,
      impact: 'Comprehension barrier'
    },
    {
      id: 5,
      number: '05',
      title: 'Remembering medication schedules',
      description: 'Managing complex regimens requiring multiple pills at differing times of day (morning, afternoon, before meals, bedtime) leads to accidental omissions.',
      icon: CalendarClock,
      impact: 'Schedule adherence'
    },
    {
      id: 6,
      number: '06',
      title: 'Distinguishing between medicines',
      description: 'Different medications from different manufacturers frequently share similar packaging foil or blister foil styles, increasing the hazard of confusing one drug with another.',
      icon: Copy,
      impact: 'Cross-confusion'
    },
    {
      id: 7,
      number: '07',
      title: 'Knowing whether a scheduled dose has already been recorded',
      description: 'Memory lapses or lack of a clear real-time logging mechanism leave users uncertain whether they have already taken their scheduled dose, risking missed or duplicate intake.',
      icon: ClipboardCheck,
      impact: 'Logging uncertainty'
    },
    {
      id: 8,
      number: '08',
      title: 'Checking expiry information',
      description: 'Expiration dates and batch stamps are often lightly embossed or faded on the crimped edges of strips, making verification virtually impossible without clear magnification.',
      icon: ClockAlert,
      impact: 'Safety validation'
    },
  ];

  return (
    <section id="problem" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
            <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
            <span>Problem Statement & Need Analysis</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Managing Medicines Can Be Difficult
          </h2>

          {/* Mandatory paragraph */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Medication management can become challenging when users have difficulty reading labels, locating medicines, understanding prescriptions, or remembering medication schedules. These challenges can make independent medication management harder.
          </p>
        </div>

        {/* 8 Problem Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div 
                key={problem.id}
                className="group relative bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-teal-50 text-slate-600 group-hover:text-teal-700 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-slate-400">
                      {problem.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-teal-800 transition-colors">
                    {problem.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>Challenge area</span>
                  <span className="font-semibold text-slate-600">{problem.impact}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom context notice (Without mentioning solution) */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto italic">
            Observed challenges documented through primary interviews and accessibility studies among elderly individuals and users with restricted vision.
          </p>
        </div>

      </div>
    </section>
  );
};
