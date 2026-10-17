import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Camera, 
  Cpu, 
  CheckCircle, 
  BellRing, 
  History, 
  ArrowDown, 
  ArrowRight,
  ShieldAlert,
  Play,
  Volume2
} from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const workflowSteps = [
    {
      name: 'LOCATE',
      title: '1. Audible Box Locator',
      icon: MapPin,
      badge: 'Hardware Sensor',
      shortDesc: 'Audible signal helps user find medicine box',
      fullDesc: 'When the user prompts via voice, the ESP32 activates an audible buzzer/signal on the medicine box so the user can easily locate its physical position in the room.',
      voiceSample: 'Audible beacon activated on medicine box.',
      tech: 'ESP32 + Buzzer / Audio Transducer'
    },
    {
      name: 'CAPTURE',
      title: '2. Optical Strip Image Capture',
      icon: Camera,
      badge: 'Vision Sensor',
      shortDesc: 'ESP32-CAM captures high-contrast strip image',
      fullDesc: 'The user positions the medicine strip near the ESP32-CAM optical aperture. The module captures a high-resolution snapshot optimized for label text reading.',
      voiceSample: 'Image captured. Processing label text.',
      tech: 'ESP32-CAM (OV2640 Sensor) + LED Illumination'
    },
    {
      name: 'IDENTIFY',
      title: '3. Image Processing & OCR Recognition',
      icon: Cpu,
      badge: 'Computer Vision',
      shortDesc: 'AI and OCR extract medicine name and dosage',
      fullDesc: 'Preprocessing filters out glare from metallic blister foils; OCR and computer vision algorithms extract key tokens like chemical brand, strength, and expiry dates.',
      voiceSample: 'Extracted: Paracetamol 500mg tablets.',
      tech: 'OCR Engine + Lightweight Vision Model'
    },
    {
      name: 'VERIFY',
      title: '4. Prescription & Schedule Cross-Check',
      icon: CheckCircle,
      badge: 'Verification Logic',
      shortDesc: 'Cross-checks extracted data with prescribed regimen',
      fullDesc: 'The identified medicine is checked against the user’s stored schedule profile to verify if this specific drug is due at this time of day and whether safety criteria are met.',
      voiceSample: 'Verified: Matches morning 8:00 AM prescription.',
      tech: 'Medication Rules Engine + Timetable DB'
    },
    {
      name: 'REMIND',
      title: '5. Voice Feedback & Safety Alerts',
      icon: BellRing,
      badge: 'Voice Interface',
      shortDesc: 'Spoken guidance and safety mismatch alerts',
      fullDesc: 'The system gives spoken voice instructions (e.g., "Take one tablet after food") or provides an immediate audible warning if the medicine does not match the scheduled dose.',
      voiceSample: 'Take 1 tablet after food. Do not exceed prescribed dose.',
      tech: 'Text-to-Speech (TTS) + Voice Audio Output'
    },
    {
      name: 'RECORD',
      title: '6. Medication History Logging',
      icon: History,
      badge: 'Audit & Adherence',
      shortDesc: 'Logs event timestamp for user or caregiver review',
      fullDesc: 'Once the interaction is finalized, the confirmation timestamp is saved into the local medication log, helping users and authorized family caregivers track adherence history.',
      voiceSample: 'Dose recorded in medication history for 8:05 AM.',
      tech: 'Secure Local / Cloud Database'
    },
  ];

  const handleSpeakSample = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setIsPlayingAudio(true);
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.95;
    u.onend = () => setIsPlayingAudio(false);
    u.onerror = () => setIsPlayingAudio(false);
    window.speechSynthesis.speak(u);
  };

  return (
    <section id="solution" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/70 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-teal-200">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>The Proposed System</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Introducing MedAssist AI
          </h2>

          {/* Mandatory paragraph */}
          <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            MedAssist AI brings multiple medication-management assistance functions together into one accessible workflow. The proposed system combines voice interaction, medicine image capture, image processing, OCR, AI-based recognition, prescription verification, medication scheduling, alerts, and medication history.
          </p>
        </div>

        {/* Central Workflow Diagram Bar (Horizontal on desktop, vertical on mobile) */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
              Central Integrated Workflow
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeWorkflowIndex === idx;
              return (
                <button
                  key={step.name}
                  onClick={() => setActiveWorkflowIndex(idx)}
                  className={`relative p-4 rounded-2xl text-center transition-all cursor-pointer border flex flex-col items-center justify-center gap-2 group ${
                    isActive
                      ? 'bg-teal-700 text-white border-teal-600 shadow-md shadow-teal-700/20 scale-102 ring-2 ring-teal-500/50'
                      : 'bg-white hover:bg-teal-50/50 text-slate-700 border-slate-200/90 hover:border-teal-200'
                  }`}
                  aria-label={`Select workflow step ${step.name}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-teal-700 group-hover:bg-teal-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-extrabold tracking-wider uppercase ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {step.name}
                  </span>
                  <span className={`text-[10px] line-clamp-1 ${isActive ? 'text-teal-100' : 'text-slate-500'}`}>
                    Step 0{idx + 1}
                  </span>

                  {/* Flow arrow on desktop */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                      <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Step Explorer Card for Evaluators */}
        <div className="mt-8 max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-200">
                  {workflowSteps[activeWorkflowIndex].badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {workflowSteps[activeWorkflowIndex].tech}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                {workflowSteps[activeWorkflowIndex].title}
              </h3>
            </div>

            {/* Play Spoken Voice Prompt Button */}
            <button
              onClick={() => handleSpeakSample(workflowSteps[activeWorkflowIndex].voiceSample)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-teal-50 text-slate-800 hover:text-teal-800 text-xs font-semibold border border-slate-200 transition-colors cursor-pointer shrink-0"
              title="Click to hear simulated voice output"
            >
              <Volume2 className="w-4 h-4 text-teal-600" />
              <span>{isPlayingAudio ? 'Speaking Voice Sample...' : 'Hear Spoken Voice Cue'}</span>
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7">
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
                Operational Overview
              </h4>
              <p className="text-base text-slate-700 leading-relaxed">
                {workflowSteps[activeWorkflowIndex].fullDesc}
              </p>

              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                  Simulated Voice Dialogue
                </div>
                <div className="mt-1 text-sm font-medium text-slate-800 italic">
                  "{workflowSteps[activeWorkflowIndex].voiceSample}"
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-slate-900 rounded-2xl p-5 text-white flex flex-col justify-between min-h-[160px]">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-teal-400">STATE: ACTIVE</span>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded font-mono">
                  STEP {activeWorkflowIndex + 1} / 6
                </span>
              </div>
              <div className="my-2">
                <div className="text-xs text-slate-400">System Intent:</div>
                <div className="text-sm font-semibold text-slate-100 mt-0.5">
                  {workflowSteps[activeWorkflowIndex].shortDesc}
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                <span>Navigate workflow:</span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setActiveWorkflowIndex((prev) => (prev > 0 ? prev - 1 : workflowSteps.length - 1))}
                    className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 cursor-pointer"
                  >
                    Prev
                  </button>
                  <button
                    onClick={() => setActiveWorkflowIndex((prev) => (prev < workflowSteps.length - 1 ? prev + 1 : 0))}
                    className="px-2 py-1 rounded bg-teal-600 hover:bg-teal-500 text-xs text-white font-semibold cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Note Box */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-start gap-3.5 shadow-xs">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
              <strong>Important Safety Note:</strong> The system is intended to assist users and does not replace doctors, pharmacists, or professional medical advice.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
