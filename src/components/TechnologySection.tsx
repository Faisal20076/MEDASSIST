import React from 'react';
import { 
  Cpu, 
  Camera, 
  Mic, 
  Volume2, 
  BrainCircuit, 
  ScanLine, 
  Smartphone, 
  Database, 
  AudioWaveform,
  Info,
  Server
} from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const techCards = [
    {
      title: 'ESP32',
      category: 'Embedded Microcontroller',
      role: 'System coordination, audio buzzer control, and wireless peripheral communication.',
      icon: Cpu,
      status: 'Target Embedded Platform'
    },
    {
      title: 'ESP32-CAM',
      category: 'Embedded Vision Module',
      role: 'Integrated camera board with flash LED for close-up medicine package snapshot acquisition.',
      icon: Camera,
      status: 'Initial Prototype Hardware'
    },
    {
      title: 'Camera',
      category: 'Optical Sensor',
      role: 'High-contrast optical sensor (e.g. OV2640) configured for macro label text capture.',
      icon: Camera,
      status: 'Hardware Sensor'
    },
    {
      title: 'Microphone',
      category: 'Audio Input',
      role: 'Captures spoken queries and hands-free voice commands from users.',
      icon: Mic,
      status: 'Input Interface'
    },
    {
      title: 'Speaker/Buzzer',
      category: 'Acoustic Output',
      role: 'Emits audible direction-finding beacon tones and plays spoken voice feedback.',
      icon: Volume2,
      status: 'Audible Transducer'
    },
    {
      title: 'AI / Computer Vision',
      category: 'Intelligent Processing',
      role: 'Analyzes visual packaging features, strip shapes, and helps segment text regions.',
      icon: BrainCircuit,
      status: 'Proposed Model Pipeline'
    },
    {
      title: 'OCR',
      category: 'Optical Character Recognition',
      role: 'Extracts alphanumeric characters (drug name, strength, batch, and expiry details) from labels.',
      icon: ScanLine,
      status: 'Text Extraction Engine'
    },
    {
      title: 'Mobile/External Computing',
      category: 'Computation Offload',
      role: 'Handles computationally intensive neural network inference and OCR algorithms beyond microcontroller memory.',
      icon: Smartphone,
      status: 'Hybrid Edge / Mobile Layer'
    },
    {
      title: 'Database',
      category: 'Data Storage',
      role: 'Stores prescription timetables, dosing regimens, verified drug parameters, and historical logs.',
      icon: Database,
      status: 'Structured Schema'
    },
    {
      title: 'Voice/Text-to-Speech',
      category: 'Assistive Speech Output',
      role: 'Converts verification outputs into clear, spoken audio sentences tailored for accessibility.',
      icon: AudioWaveform,
      status: 'TTS Synthesis Engine'
    },
  ];

  return (
    <section id="technology" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
            <Cpu className="w-3.5 h-3.5 text-teal-600" />
            <span>Hardware & Software Stack</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technology Behind the Prototype
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A cohesive engineering architecture combining embedded low-power hardware with intelligent mobile and cloud computing.
          </p>
        </div>

        {/* Critical System Architecture Explanation Box */}
        <div className="mt-10 max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-teal-50/60 border border-teal-200 text-slate-800 shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-teal-900 uppercase tracking-wide">
                Distributed Computing Architecture
              </h4>
              <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">
                The initial prototype can use <strong>ESP32 / ESP32-CAM</strong> for embedded functions (image capture, audible buzzer beacon, and tactile input) while a <strong>smartphone or external computing platform</strong> can handle computationally intensive AI/OCR processing, schedule reconciliation, and speech synthesis.
              </p>
              <p className="mt-2 text-xs text-slate-500 italic">
                *Note: This architecture represents the prototype engineering design. Not every individual component has been physically assembled into a final commercial form factor yet.
              </p>
            </div>
          </div>
        </div>

        {/* 10 Technology Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {techCards.map((tech) => {
            const Icon = tech.icon;
            return (
              <div 
                key={tech.title}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-teal-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white text-teal-700 border border-slate-200/80 flex items-center justify-center mb-3 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                    {tech.title}
                  </h3>

                  <span className="text-[10px] font-semibold text-teal-700 block mt-0.5 mb-2 uppercase tracking-wide">
                    {tech.category}
                  </span>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tech.role}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/50">
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-100/80 px-2 py-0.5 rounded block text-center truncate">
                    {tech.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
