import React from 'react';
import { 
  Compass, 
  PenTool, 
  QrCode, 
  Database, 
  Box, 
  Users2, 
  Languages, 
  ArrowUpRight
} from 'lucide-react';

export const FutureScopeSection: React.FC = () => {
  const roadmapItems = [
    {
      id: 1,
      title: 'Handwritten Prescription Recognition',
      description: 'Explore handwriting-recognition techniques for difficult-to-read prescriptions.',
      icon: PenTool,
      field: 'Computer Vision & NLP'
    },
    {
      id: 2,
      title: 'QR-Based Prescription Integration',
      description: 'Potential integration with structured digital prescription information.',
      icon: QrCode,
      field: 'Digital Health Records'
    },
    {
      id: 3,
      title: 'Improved Medicine Recognition',
      description: 'Expand datasets and improve recognition reliability across different packaging conditions.',
      icon: Database,
      field: 'Data Diversity & Generalization'
    },
    {
      id: 4,
      title: 'Dedicated Hardware Prototype',
      description: 'Develop a more integrated standalone assistive device.',
      icon: Box,
      field: 'Industrial & Embedded Design'
    },
    {
      id: 5,
      title: 'Caregiver Support',
      description: 'Potential caregiver monitoring and notification features.',
      icon: Users2,
      field: 'Tele-Care & Notification'
    },
    {
      id: 6,
      title: 'Multilingual Voice Assistance',
      description: 'Support multiple Indian languages for broader accessibility.',
      icon: Languages,
      field: 'Linguistic Localization'
    },
  ];

  return (
    <section id="future-scope" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
            <Compass className="w-3.5 h-3.5 text-teal-600" />
            <span>Future Scope & Research Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Future Scope
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Planned engineering exploration avenues and technical enhancements as the prototype evolves through subsequent development phases.
          </p>
        </div>

        {/* 6 Future Scope Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapItems.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title}
                className="group relative bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-teal-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60">
                      Future Scope
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-teal-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    "{item.description}"
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px]">{item.field}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
