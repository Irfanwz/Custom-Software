import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, AlertTriangle, Package, Sparkles, Cpu, Globe, Zap } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 3); 
    deadline.setHours(23, 59, 59);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = deadline.getTime() - now.getTime();
      if (difference <= 0) clearInterval(interval);
      else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-xs font-mono text-red-500 bg-red-950/30 border border-red-900/50 px-3 py-1.5 rounded-full">
      <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"/>
      <span>OFFER ENDS IN: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-black selection:bg-red-500/30">
      
      {/* Cinematic Lighting Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-slate-900/50 rounded-[100%] blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Typography & Hook */}
        <div className="lg:col-span-7 space-y-10 text-center lg:text-left">
          
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row items-center gap-4 justify-center lg:justify-start">
               <CountdownTimer />
               <div className="flex items-center gap-1 text-xs font-bold text-slate-500 uppercase tracking-widest">
                 <Sparkles className="w-3 h-3 text-amber-500" />
                 <span>2026 Edition</span>
               </div>
            </div>
            
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              BUILD. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600">AUTOMATE.</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600">DOMINATE.</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
            The manual era is dead. We engineer your entire <span className="text-white font-medium">Digital & AI Infrastructure</span> in 14 days. One fee. No retainers. Pure performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <button 
              onClick={onCtaClick}
              className="group relative h-14 px-8 rounded-full bg-white text-black font-bold text-sm tracking-widest uppercase overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Deploy System <ArrowRight className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-amber-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
            <span className="text-slate-600 text-xs font-mono hidden sm:block">
              // LIMITED CAPACITY <br /> 8 SPOTS REMAINING
            </span>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-white/5 flex flex-wrap gap-8 justify-center lg:justify-start opacity-70">
             {['React 19', 'Gemini 2.5', 'Automations', 'Vercel Edge'].map((tech, i) => (
               <span key={i} className="text-xs font-mono text-slate-500 flex items-center gap-2">
                 <div className="w-1 h-1 bg-red-500 rounded-full"></div> {tech}
               </span>
             ))}
          </div>
        </div>

        {/* The Artifact (Card) */}
        <div className="lg:col-span-5 relative perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-amber-500/20 rounded-3xl blur-2xl transform rotate-3 scale-105"></div>
          
          <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 overflow-hidden shadow-2xl">
            {/* Gloss Reflection */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            
            {/* Header */}
            <div className="flex justify-between items-start mb-8 border-b border-white/5 pb-6">
              <div>
                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Total System Deployment</h3>
                <div className="text-5xl font-black text-white tracking-tight">$999</div>
              </div>
              <div className="bg-red-500/10 p-3 rounded-2xl border border-red-500/20">
                <Package className="w-6 h-6 text-red-500" />
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Globe, label: "High-Perf Website", sub: "Next.js / React" },
                { icon: Cpu, label: "AI Sales Agent", sub: "Trained on your data" },
                { icon: Zap, label: "3x Automations", sub: "CRM & Email Flows" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-red-500/30 group-hover:bg-red-500/10 transition-all">
                    <item.icon className="w-4 h-4 text-slate-300 group-hover:text-red-400" />
                  </div>
                  <div>
                    <div className="text-slate-200 font-bold text-sm">{item.label}</div>
                    <div className="text-slate-500 text-xs">{item.sub}</div>
                  </div>
                  <div className="ml-auto">
                    <CheckCircle className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Alert */}
            <div className="bg-amber-950/20 border border-amber-900/30 p-4 rounded-xl flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-200/80 leading-relaxed">
                <span className="font-bold text-amber-400">Price Adjustment Incoming:</span> Fees increase to $1,499 on Feb 1st due to server demand.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};