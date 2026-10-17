import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Camera, 
  Mic, 
  Radio, 
  Volume2, 
  CheckCircle2, 
  Scan, 
  Smartphone, 
  Cpu, 
  Eye, 
  Layers,
  Play,
  RotateCcw,
  ShieldAlert
} from 'lucide-react';

interface HeroProps {
  onOpenDemoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  const [activeDemoTab, setActiveDemoTab] = useState<'scan' | 'locator' | 'voice'>('scan');
  const [isSimulatingVoice, setIsSimulatingVoice] = useState(false);

  const simulateSpeech = (phrase: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setIsSimulatingVoice(true);
    const u = new SpeechSynthesisUtterance(phrase);
    u.rate = 0.95;
    u.onend = () => setIsSimulatingVoice(false);
    u.onerror = () => setIsSimulatingVoice(false);
    window.speechSynthesis.speak(u);
  };

  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background radial gradient subtle lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-teal-100/50 via-cyan-50/20 to-transparent -z-10 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Student Project Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span>Student Engineering Project • Prototype in Development</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              MedAssist AI
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-semibold text-teal-700 mt-2 mb-4">
              Smart Medicine Companion
            </p>

            {/* Main Statement */}
            <p className="text-xl sm:text-2xl font-medium text-slate-800 leading-snug max-w-2xl">
              Helping people manage medicines with greater accessibility, awareness, and independence.
            </p>

            {/* Supporting Text */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              An AI-powered assistive medication-management concept designed for visually impaired, elderly, and low-literacy users.
            </p>

            {/* Call to action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#solution"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base shadow-md shadow-teal-600/20 hover:shadow-lg hover:shadow-teal-600/30 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                <span>Explore the Solution</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-semibold text-base border border-slate-200 shadow-xs hover:border-slate-300 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <span>View How It Works</span>
              </a>
            </div>

            {/* Quick Key Pillars */}
            <div className="mt-10 pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 w-full">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Target Users</span>
                <span className="text-sm font-semibold text-slate-800 mt-0.5">Visually Impaired & Seniors</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Core I/O</span>
                <span className="text-sm font-semibold text-slate-800 mt-0.5">Voice Guidance & Audio</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Hardware Unit</span>
                <span className="text-sm font-semibold text-slate-800 mt-0.5">ESP32-CAM Prototype</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Assistive System Illustration / Interactive Concept Preview */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame with soft glassmorphism */}
              <div className="relative rounded-3xl bg-white/90 backdrop-blur-md p-5 sm:p-6 shadow-xl border border-slate-200/90 overflow-hidden">
                
                {/* Header of Concept Mockup */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-teal-500"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Assistive System Concept Mockup
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                    ESP32-CAM + AI Model
                  </span>
                </div>

                {/* Sub-tabs for Evaluator to explore */}
                <div className="flex items-center gap-1.5 p-1 mt-4 bg-slate-100/80 rounded-xl text-xs font-medium">
                  <button
                    onClick={() => setActiveDemoTab('scan')}
                    className={`flex-1 py-1.5 px-2 rounded-lg transition-all ${
                      activeDemoTab === 'scan' ? 'bg-white text-teal-700 font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Image & OCR
                  </button>
                  <button
                    onClick={() => setActiveDemoTab('locator')}
                    className={`flex-1 py-1.5 px-2 rounded-lg transition-all ${
                      activeDemoTab === 'locator' ? 'bg-white text-teal-700 font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Box Locator
                  </button>
                  <button
                    onClick={() => setActiveDemoTab('voice')}
                    className={`flex-1 py-1.5 px-2 rounded-lg transition-all ${
                      activeDemoTab === 'voice' ? 'bg-white text-teal-700 font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Voice Feedback
                  </button>
                </div>

                {/* Screen / Conceptual Visual Display */}
                <div className="mt-4 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-4 text-white relative min-h-[280px] flex flex-col justify-between overflow-hidden border border-slate-800">
                  
                  {activeDemoTab === 'scan' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1.5 text-teal-400 font-mono text-[11px]">
                          <Camera className="w-3.5 h-3.5" /> ESP32-CAM Viewfinder
                        </span>
                        <span className="bg-teal-500/20 text-teal-300 text-[10px] px-2 py-0.5 rounded font-mono">
                          OCR Pipeline
                        </span>
                      </div>

                      {/* Mockup Medicine Blister Strip with Targeting Reticle */}
                      <div className="relative h-36 bg-slate-800/80 rounded-xl border border-dashed border-teal-500/50 p-3 flex flex-col justify-center items-center overflow-hidden group">
                        
                        {/* Target Reticle Overlay */}
                        <div className="absolute inset-2 border border-teal-400/40 rounded-lg pointer-events-none flex flex-col justify-between p-1.5">
                          <div className="flex justify-between">
                            <span className="w-2.5 h-2.5 border-t-2 border-l-2 border-teal-400"></span>
                            <span className="w-2.5 h-2.5 border-t-2 border-r-2 border-teal-400"></span>
                          </div>
                          <div className="flex justify-between">
                            <span className="w-2.5 h-2.5 border-b-2 border-l-2 border-teal-400"></span>
                            <span className="w-2.5 h-2.5 border-b-2 border-r-2 border-teal-400"></span>
                          </div>
                        </div>

                        {/* Blister pack representation */}
                        <div className="w-48 bg-slate-200 text-slate-900 rounded-lg p-2.5 shadow-md transform rotate-[-2deg]">
                          <div className="flex justify-between items-center text-[10px] font-bold border-b border-slate-300 pb-1">
                            <span className="text-teal-800">PARACETAMOL 500mg</span>
                            <span className="text-slate-400 font-mono">IP</span>
                          </div>
                          <div className="grid grid-cols-4 gap-1.5 my-1.5">
                            {[1, 2, 3, 4].map((i) => (
                              <div key={i} className="h-4 rounded-full bg-slate-300/80 border border-slate-400/50 flex items-center justify-center">
                                <div className="w-2 h-1.5 bg-white rounded-full opacity-60"></div>
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                            <span>Exp: 11/2027</span>
                            <span>Batch: PC882</span>
                          </div>
                        </div>

                        {/* OCR Bounding Box Indicator */}
                        <div className="absolute bottom-2 left-3 right-3 bg-teal-950/80 backdrop-blur-sm px-2 py-1 rounded text-[11px] text-teal-300 border border-teal-500/40 flex items-center justify-between">
                          <span>OCR Detected: "PARACETAMOL 500mg"</span>
                          <span className="text-[10px] text-teal-400 font-mono">Match: 98%</span>
                        </div>
                      </div>

                      {/* Extracted Status */}
                      <div className="bg-slate-800/60 rounded-xl p-2.5 text-xs flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span className="text-slate-200">Prescription Schedule: Morning 8:00 AM</span>
                        </div>
                        <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                          Matched
                        </span>
                      </div>
                    </div>
                  )}

                  {activeDemoTab === 'locator' && (
                    <div className="space-y-4 py-2">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1.5 text-teal-400 font-mono text-[11px]">
                          <Radio className="w-3.5 h-3.5" /> Audible Locator Beacon
                        </span>
                        <span className="bg-amber-500/20 text-amber-300 text-[10px] px-2 py-0.5 rounded font-mono">
                          Buzzer Trigger
                        </span>
                      </div>

                      <div className="flex flex-col items-center justify-center py-4">
                        <div className="relative flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-teal-500/20 animate-ping absolute"></div>
                          <div className="w-16 h-16 rounded-full bg-teal-500/30 animate-pulse absolute"></div>
                          <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-slate-950 shadow-lg shadow-teal-500/50">
                            <Volume2 className="w-6 h-6 animate-bounce" />
                          </div>
                        </div>
                        <p className="mt-4 text-xs font-semibold text-teal-300 text-center">
                          Audible signal emitted from Medicine Box
                        </p>
                        <p className="text-[11px] text-slate-400 text-center max-w-xs mt-1">
                          Assists visually impaired and elderly users in locating their medicine box without sight.
                        </p>
                      </div>

                      <div className="bg-slate-800/60 rounded-xl p-2 text-[11px] text-slate-300 text-center font-mono">
                        Hardware: ESP32 + Piezo Buzzer / Speaker Module
                      </div>
                    </div>
                  )}

                  {activeDemoTab === 'voice' && (
                    <div className="space-y-3 py-1">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1.5 text-teal-400 font-mono text-[11px]">
                          <Mic className="w-3.5 h-3.5" /> Voice Interaction Engine
                        </span>
                        <span className="bg-cyan-500/20 text-cyan-300 text-[10px] px-2 py-0.5 rounded font-mono">
                          Speech & TTS
                        </span>
                      </div>

                      {/* Dialogue Bubble */}
                      <div className="space-y-2">
                        <div className="bg-slate-800/90 rounded-xl p-2.5 text-xs text-slate-300 border-l-2 border-cyan-400">
                          <span className="text-[10px] uppercase font-bold text-cyan-400 block mb-0.5">User Prompt (Voice):</span>
                          "MedAssist, is this my morning fever tablet?"
                        </div>
                        <div className="bg-teal-950/70 rounded-xl p-2.5 text-xs text-teal-200 border-l-2 border-teal-400">
                          <span className="text-[10px] uppercase font-bold text-teal-300 block mb-0.5">MedAssist Audio Output:</span>
                          "Identified Paracetamol 500 milligram. It matches your 8 AM prescription. Take 1 tablet after food."
                        </div>
                      </div>

                      {/* Audio waveform illustration & Play Button */}
                      <div className="pt-2 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[40, 70, 30, 85, 50, 95, 60, 40, 75, 50].map((h, idx) => (
                            <span
                              key={idx}
                              style={{ height: `${h * 0.22}px` }}
                              className={`w-1 rounded-full bg-teal-400 ${isSimulatingVoice ? 'animate-pulse' : 'opacity-60'}`}
                            ></span>
                          ))}
                        </div>
                        <button
                          onClick={() => simulateSpeech('Identified Paracetamol 500 milligram. It matches your 8 AM prescription.')}
                          className="px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>{isSimulatingVoice ? 'Playing...' : 'Test Voice Cue'}</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Footnote on mockup */}
                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-teal-400" /> Embedded Prototype Architecture
                    </span>
                    <span className="text-slate-400">Assistive Concept Only</span>
                  </div>

                </div>

                {/* Bottom Disclaimer on Mockup */}
                <div className="mt-4 p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2 text-[11px] text-slate-600">
                  <ShieldAlert className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Academic Research Disclaimer:</strong> Proposed prototype in development. Does not diagnose diseases or replace medical professionals.
                  </span>
                </div>

              </div>

              {/* Decorative subtle float badge */}
              <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-5 -left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-200/80">
                <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                  <Eye className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900">Accessibility-First</div>
                  <div className="text-[11px] text-slate-500">Audio, Voice & High Contrast</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
