import React from 'react';
import { Check, ShieldCheck, Zap, Phone, Globe, Share2, Sparkles, AlertOctagon, Plus } from 'lucide-react';

interface StarterPackageProps {
  onClaimClick: () => void;
}

export const StarterPackage: React.FC<StarterPackageProps> = ({ onClaimClick }) => {
  const features = [
    "Custom React Architecture", "AI Neural Sales Bot", "3x Automation Workflows", 
    "Voice Agent Setup", "Social Content Pack", "6-Month Priority Support"
  ];

  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-black opacity-80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Left: Pitch */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter leading-none">
              ONE PRICE.<br/>
              <span className="text-slate-600">FULL SCALE.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
              We bundled $6,000+ worth of engineering and AI integration into a single "Business-in-a-Box" deployment. 
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Ironclad Guarantee</h4>
                  <p className="text-slate-500 text-sm">If we don't deploy in 14 days, you get a full refund and keep the assets.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Full Ownership</h4>
                  <p className="text-slate-500 text-sm">No monthly retainer fees. You own the code, the domain, and the AI.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Monolith Card */}
          <div className="lg:w-1/2 w-full">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-amber-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative bg-slate-950 rounded-[2rem] border border-slate-800 p-8 md:p-12 overflow-hidden">
                {/* Decorative circuit lines */}
                <div className="absolute top-0 right-0 p-8 opacity-20">
                   <AlertOctagon className="w-24 h-24 text-white" />
                </div>

                <div className="relative z-10">
                  <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest mb-6">
                    January Intake: 8 Spots Left
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-2">Starter Protocol</h3>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-6xl font-black text-white tracking-tighter">$999</span>
                    <span className="text-slate-500 font-medium">/ one-time</span>
                  </div>

                  <div className="space-y-4 mb-10">
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 py-2 border-b border-slate-900">
                        <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={onClaimClick}
                    className="w-full bg-white hover:bg-slate-200 text-black text-lg font-black py-5 rounded-xl transition-all transform hover:-translate-y-1 shadow-2xl"
                  >
                    SECURE DEPLOYMENT
                  </button>
                  <p className="text-center text-xs text-slate-600 mt-4">
                    Price increases to $1,499 on Feb 1st, 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};