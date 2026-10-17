import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  CircleDot, 
  AlertCircle, 
  Calendar,
  Layers
} from 'lucide-react';

export const ProjectStatusSection: React.FC = () => {
  const milestones = [
    {
      id: 'idea',
      title: 'IDEA',
      status: 'completed',
      label: 'COMPLETED',
      date: 'Phase 1',
      description: 'Concept conceptualization and initial project scoping.'
    },
    {
      id: 'problem',
      title: 'PROBLEM IDENTIFICATION',
      status: 'completed',
      label: 'COMPLETED',
      date: 'Phase 2',
      description: 'User interviews with seniors and visually impaired stakeholders.'
    },
    {
      id: 'validation',
      title: 'CUSTOMER VALIDATION',
      status: 'completed',
      label: 'COMPLETED',
      date: 'Phase 3',
      description: 'Wadhwani entrepreneurship framework validation & need verification.'
    },
    {
      id: 'design',
      title: 'SYSTEM DESIGN',
      status: 'completed',
      label: 'COMPLETED',
      date: 'Phase 4',
      description: 'Embedded hardware pipeline and mobile AI integration architecture.'
    },
    {
      id: 'dev',
      title: 'PROTOTYPE DEVELOPMENT',
      status: 'in-progress',
      label: 'IN PROGRESS',
      date: 'Current Stage',
      description: 'ESP32-CAM breadboard firmware, camera snapshot routines, and OCR script development.'
    },
    {
      id: 'testing',
      title: 'TESTING',
      status: 'upcoming',
      label: 'UPCOMING',
      date: 'Next Milestone',
      description: 'Controlled assistive usability trials and recognition accuracy benchmark testing.'
    },
  ];

  return (
    <section id="status" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-teal-200">
            <Layers className="w-3.5 h-3.5 text-teal-600" />
            <span>Development Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Project Status
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Transparent progress timeline outlining our transition from engineering ideation to active prototype assembly.
          </p>
        </div>

        {/* Timeline Visual Display */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((item, idx) => {
              const isCompleted = item.status === 'completed';
              const isInProgress = item.status === 'in-progress';
              const isUpcoming = item.status === 'upcoming';

              return (
                <div
                  key={item.id}
                  className={`relative rounded-3xl p-6 border transition-all flex flex-col justify-between ${
                    isInProgress
                      ? 'bg-teal-50/70 border-teal-400 shadow-lg ring-2 ring-teal-500/30'
                      : isCompleted
                      ? 'bg-slate-50/80 border-slate-200/90'
                      : 'bg-white border-dashed border-slate-300 opacity-80'
                  }`}
                >
                  {/* Top Status Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-slate-400">
                        STAGE 0{idx + 1}
                      </span>

                      {isCompleted && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>✓ {item.label}</span>
                        </span>
                      )}

                      {isInProgress && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-800 bg-teal-200/70 px-2.5 py-0.5 rounded-full border border-teal-400 animate-pulse">
                          <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                          <span>{item.label}</span>
                        </span>
                      )}

                      {isUpcoming && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{item.label}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer status timeline note */}
                  <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>{item.date}</span>
                    {isInProgress && (
                      <span className="text-teal-700 font-bold uppercase tracking-wider">
                        Active Stage
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Academic Transparency Note */}
          <div className="mt-8 p-4 rounded-2xl bg-slate-100/70 border border-slate-200 text-center">
            <p className="text-xs text-slate-600">
              <strong>Progress Transparency:</strong> Hardware assembly and algorithm development are currently active in the college laboratory. Formal clinical and blind user validation trials are scheduled for upcoming testing stages.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
