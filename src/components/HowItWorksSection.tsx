import React from 'react';
import { 
  User, 
  Mic, 
  Cpu, 
  Radio, 
  Camera, 
  Sliders, 
  ScanSearch, 
  FileSpreadsheet, 
  ShieldCheck, 
  Volume2, 
  Database,
  ArrowRight,
  ArrowDown,
  Workflow
} from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: 'USER INTERACTION',
      description: 'User interacts with the system through voice.',
      icon: Mic,
      entity: 'Voice Input',
      subtext: 'Initiated via hands-free speech prompt'
    },
    {
      step: 2,
      title: 'LOCATE MEDICINE BOX',
      description: 'An audible signal can help the user locate the medicine box.',
      icon: Radio,
      entity: 'Buzzer Beacon',
      subtext: 'Audible acoustic guidance activated'
    },
    {
      step: 3,
      title: 'CAPTURE MEDICINE',
      description: 'ESP32-CAM captures an image of the selected medicine strip.',
      icon: Camera,
      entity: 'ESP32-CAM',
      subtext: 'High-contrast snapshot with targeted lighting'
    },
    {
      step: 4,
      title: 'IMAGE PROCESSING',
      description: 'The captured image is processed to improve and extract useful information.',
      icon: Sliders,
      entity: 'Preprocessing',
      subtext: 'De-glare, contrast enhancement & binarization'
    },
    {
      step: 5,
      title: 'AI + OCR',
      description: 'AI-based recognition and OCR can assist in identifying the medicine and reading visible text.',
      icon: ScanSearch,
      entity: 'OCR + AI Model',
      subtext: 'Text extraction of brand, dose & dates'
    },
    {
      step: 6,
      title: 'VERIFY',
      description: 'Medicine information is compared with stored prescription and schedule information.',
      icon: ShieldCheck,
      entity: 'Schedule Logic',
      subtext: 'Matched against daily prescribed timetable'
    },
    {
      step: 7,
      title: 'VOICE FEEDBACK',
      description: 'The system communicates the result through voice.',
      icon: Volume2,
      entity: 'Spoken Output',
      subtext: 'Clear natural voice confirmation & alerts'
    },
    {
      step: 8,
      title: 'RECORD',
      description: 'Medication activity can be stored in medication history.',
      icon: Database,
      entity: 'Medication Log',
      subtext: 'Timestamped event stored for review'
    },
  ];

  const pipelineNodes = [
    'USER',
    'VOICE INPUT',
    'ESP32 CONTROLLER',
    'MEDICINE BOX LOCATOR',
    'ESP32-CAM',
    'IMAGE PROCESSING',
    'AI + OCR',
    'PRESCRIPTION + SCHEDULE',
    'VERIFICATION',
    'VOICE OUTPUT',
    'MEDICATION HISTORY'
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-slate-50/80 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/70 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-teal-200">
            <Workflow className="w-3.5 h-3.5 text-teal-600" />
            <span>Process & System Pipeline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How MedAssist AI Works
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A step-by-step walkthrough detailing how user intent flows from voice trigger to embedded image acquisition, computational verification, and accessible voice response.
          </p>
        </div>

        {/* Visual Workflow Pipeline Banner */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                End-to-End System Pipeline Dataflow
              </span>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              Proposed Embedded-to-Mobile Architecture
            </span>
          </div>

          {/* Interactive Responsive Flow Map */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2">
            {pipelineNodes.map((node, index) => (
              <React.Fragment key={node}>
                <div className="px-3.5 py-2 rounded-xl bg-slate-900 text-white font-mono text-xs font-semibold shadow-xs flex items-center gap-1.5 border border-slate-800">
                  <span className="text-[10px] text-teal-400 font-bold">0{index + 1}</span>
                  <span className="tracking-tight">{node}</span>
                </div>
                {index < pipelineNodes.length - 1 && (
                  <div className="text-teal-600 font-bold flex items-center">
                    <ArrowRight className="w-4 h-4 hidden md:block" />
                    <ArrowDown className="w-4 h-4 md:hidden" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 8 Detailed Step Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-slate-100 text-slate-700">
                      Step {item.step}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 tracking-tight uppercase">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-700 leading-relaxed font-normal">
                    "{item.description}"
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex flex-col gap-1 text-[11px]">
                  <span className="text-slate-400 font-mono">Component: {item.entity}</span>
                  <span className="text-teal-700 font-medium">{item.subtext}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
