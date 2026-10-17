import React from 'react';
import { 
  Mic, 
  MapPin, 
  Camera, 
  Cpu, 
  ScanText, 
  FileCheck2, 
  BellRing, 
  History,
  Layers
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'VOICE ASSISTANCE',
      description: 'Provides voice-based interaction and accessible feedback for users who may have difficulty reading text.',
      icon: Mic,
      tag: 'Accessibility'
    },
    {
      title: 'MEDICINE BOX LOCATOR',
      description: 'An audible locator can help users find the medicine box when it is difficult to locate.',
      icon: MapPin,
      tag: 'Assistance'
    },
    {
      title: 'MEDICINE IMAGE CAPTURE',
      description: 'An ESP32-CAM-based prototype can capture images of medicine strips or labels.',
      icon: Camera,
      tag: 'Hardware Sensing'
    },
    {
      title: 'AI + IMAGE PROCESSING',
      description: 'Image-processing and AI techniques can assist in extracting and identifying available medicine information.',
      icon: Cpu,
      tag: 'Vision Processing'
    },
    {
      title: 'OCR',
      description: 'OCR can extract readable text such as medicine names and available label information.',
      icon: ScanText,
      tag: 'Text Recognition'
    },
    {
      title: 'PRESCRIPTION & SCHEDULE VERIFICATION',
      description: 'Identified medicine information can be compared with stored prescription and medication-schedule data.',
      icon: FileCheck2,
      tag: 'Safety Verification'
    },
    {
      title: 'REMINDERS & SAFETY ALERTS',
      description: 'Voice reminders and proposed alerts can help users stay aware of scheduled medicines and possible mismatches.',
      icon: BellRing,
      tag: 'Alerts & Cues'
    },
    {
      title: 'MEDICATION HISTORY',
      description: 'Medication events can be recorded to help users or caregivers review medication-management activity.',
      icon: History,
      tag: 'Tracking & Care'
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-teal-200">
            <Layers className="w-3.5 h-3.5 text-teal-600" />
            <span>Modular Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Key Features
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Eight interconnected functional components engineered to provide intuitive, multi-modal medication assistance for diverse user capabilities.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="group relative bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-slate-200/70 text-slate-700">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-teal-800 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    "{feature.description}"
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Feature 0{idx + 1}</span>
                  <span className="text-teal-600 font-medium">Proposed Capability</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
