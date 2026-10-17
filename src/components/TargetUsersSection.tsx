import React from 'react';
import { 
  EyeOff, 
  HeartHandshake, 
  BookOpenText, 
  Users, 
  Target
} from 'lucide-react';

export const TargetUsersSection: React.FC = () => {
  const users = [
    {
      title: 'VISUALLY IMPAIRED USERS',
      description: 'Accessible voice-based interaction and medicine-management assistance.',
      icon: EyeOff,
      highlight: 'Voice & Acoustic Cues',
      accent: 'border-teal-500/30'
    },
    {
      title: 'ELDERLY USERS',
      description: 'Support for remembering medication routines and identifying medicines.',
      icon: HeartHandshake,
      highlight: 'Routine & Identification Aid',
      accent: 'border-cyan-500/30'
    },
    {
      title: 'LOW-LITERACY USERS',
      description: 'Voice-based access to information that may otherwise depend on printed text.',
      icon: BookOpenText,
      highlight: 'Text-Free Comprehension',
      accent: 'border-emerald-500/30'
    },
    {
      title: 'CAREGIVERS',
      description: 'Potential support through medication history and accessible medication information.',
      icon: Users,
      highlight: 'Care Coordination & Logs',
      accent: 'border-indigo-500/30'
    },
  ];

  return (
    <section id="target-users" className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-teal-200">
            <Target className="w-3.5 h-3.5 text-teal-600" />
            <span>Inclusive Design Focus</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed For
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Addressing accessibility barriers faced by individuals who encounter friction when managing printed labels, medicine containers, and complex daily regimens.
          </p>
        </div>

        {/* 4 Target Users Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {users.map((user) => {
            const Icon = user.icon;
            return (
              <div 
                key={user.title}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                    {user.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                    "{user.description}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Assistance Goal</span>
                  <span className="font-semibold text-teal-700">{user.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
