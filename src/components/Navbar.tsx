import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Eye, 
  AArrowUp, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

interface NavbarProps {
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  fontSize,
  setFontSize,
  highContrast,
  setHighContrast,
  onOpenDemoModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Technology', href: '#technology' },
    { label: 'Future Scope', href: '#future-scope' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleSpeakOverview = () => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const text = 'MedAssist AI: Smart Medicine Companion. An AI-powered assistive medication management prototype in development for visually impaired, elderly, and low-literacy users. Helping people manage medicines with greater accessibility, awareness, and independence.';
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const cycleFontSize = () => {
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('xlarge');
    else setFontSize('normal');
  };

  return (
    <>
      {/* Top Banner: Academic Prototype Notice */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
              Student Engineering Project
            </span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-slate-300 text-[11px]">
              Prototype in Development for College Evaluation & Wadhwani Portal
            </span>
          </div>

          {/* Quick Accessibility Controls */}
          <div className="flex items-center gap-3 text-slate-400 text-[11px]">
            <button
              onClick={cycleFontSize}
              title="Toggle Font Size for Accessibility"
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700"
              aria-label="Toggle Font Size"
            >
              <AArrowUp className="w-3.5 h-3.5 text-teal-400" />
              <span className="font-mono text-[10px] uppercase">{fontSize}</span>
            </button>

            <button
              onClick={() => setHighContrast(!highContrast)}
              title="Toggle High Contrast Mode"
              className={`flex items-center gap-1 hover:text-white transition-colors cursor-pointer px-1.5 py-0.5 rounded ${
                highContrast ? 'bg-teal-700 text-white font-medium' : 'bg-slate-800 hover:bg-slate-700'
              }`}
              aria-label="Toggle High Contrast"
            >
              <Eye className="w-3.5 h-3.5 text-teal-400" />
              <span>{highContrast ? 'High Contrast ON' : 'Contrast'}</span>
            </button>

            <button
              onClick={handleSpeakOverview}
              title="Listen to Audio Description (Voice Accessibility)"
              className={`flex items-center gap-1 hover:text-white transition-colors cursor-pointer px-1.5 py-0.5 rounded ${
                isSpeaking ? 'bg-amber-600 text-white' : 'bg-slate-800 hover:bg-slate-700'
              }`}
              aria-label="Listen to Audio Description"
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-amber-200 animate-pulse" />
                  <span>Stop Voice</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>Audio Narration</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-1">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
                <span className="text-xl font-black tracking-tighter">M+</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
                    MedAssist AI
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200">
                    Prototype
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-medium tracking-normal -mt-0.5">
                  Smart Medicine Companion
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50/60 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#solution"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold shadow-sm hover:shadow-md hover:shadow-teal-600/20 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                <span>Explore MedAssist</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {isOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-3 duration-200 shadow-xl">
            <div className="space-y-1">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#solution"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-sm"
              >
                Explore MedAssist
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full text-center px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50"
              >
                Request a Demo
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
