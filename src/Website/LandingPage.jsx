import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-violet-100 selection:text-violet-700 overflow-x-hidden">
      
      {/* --- RESPONSIVE NAVIGATION --- */}
      <nav className="fixed w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20 items-center">
            
            {/* Logo */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-8 h-8 md:w-9 md:h-9 bg-violet-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-violet-200">S</div>
              <span className="text-lg md:text-xl font-bold tracking-tight">SOLO</span>
            </div>
            
            {/* Desktop Links - Hidden on Mobile */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-500">
              <a href="#features" className="hover:text-violet-600 transition">Features</a>
              <a href="#" className="hover:text-violet-600 transition">Pricing</a>
              <a href="#" className="hover:text-violet-600 transition">Company</a>
            </div>

            {/* Desktop Auth - Hidden on Mobile */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/login" className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-violet-600 transition">Log in</Link>
              <Link to="/signup" className="bg-violet-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-violet-700 transition-all active:scale-95">
               SignUp
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-slate-200 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-2 pb-6 space-y-4">
            <a href="#" className="block px-3 py-2 text-base font-semibold text-slate-600 hover:bg-slate-50 rounded-lg">Features</a>
            <a href="#" className="block px-3 py-2 text-base font-semibold text-slate-600 hover:bg-slate-50 rounded-lg">Pricing</a>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Link to="/login" className="w-full py-3 text-center font-bold text-slate-600 border border-slate-200 rounded-xl">Log in</Link>
              <Link to="/signup" className="w-full py-3 text-center font-bold bg-violet-600 text-white rounded-xl">SignUp</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 lg:pt-56">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-xs md:text-sm font-bold mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            New: AI Workflow Engine
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6 md:mb-8">
            Ship faster with <br className="hidden sm:block" />
            <span className="text-violet-600">intelligent</span> code.
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-8 md:mb-12 px-4 leading-relaxed">
            The workspace for elite teams. Consolidate your tools, simplify your process, and focus on building.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link to="/signup" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-base md:text-lg hover:bg-slate-800 transition shadow-xl active:scale-[0.97]">
              Get Started Free
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold text-base md:text-lg hover:bg-slate-50 transition active:scale-[0.97]">
              Watch Demo
            </button>
          </div>

          {/* Device Mockup / Social Proof Placeholder */}
          <div className="mt-16 md:mt-24 px-4">
            <div className="max-w-5xl mx-auto aspect-video bg-white rounded-t-2xl md:rounded-t-3xl border-x border-t border-slate-200 shadow-2xl overflow-hidden p-2 md:p-4">
               <div className="w-full h-full bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-slate-300 italic text-sm">
                 [Interactive Dashboard Preview]
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MOBILE-FRIENDLY FEATURES --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Universal Sync", desc: "Access your workspace from any device, anywhere." },
              { title: "Team Privacy", desc: "Enterprise-grade security for teams of all sizes." },
              { title: "Fast Export", desc: "Take your data with you in any format with one click." }
            ].map((f, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;