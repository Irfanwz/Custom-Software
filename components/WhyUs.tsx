import React from 'react';
import { X, Check } from 'lucide-react';

export const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">EVOLUTION IS <span className="text-red-500">MANDATORY</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          
          {/* Old Way */}
          <div className="p-8 md:p-12 rounded-3xl bg-slate-900/30 border border-white/5 grayscale opacity-70 hover:opacity-100 transition-opacity">
            <h3 className="text-xl font-bold text-slate-500 mb-8 uppercase tracking-widest flex items-center gap-3">
              <X className="w-6 h-6" /> Traditional Agency
            </h3>
            <ul className="space-y-6">
              {['Retainer fees ($2,500/mo)', 'Slow Delivery (6-12 Weeks)', 'Manual Human Processes', 'Zero AI Integration'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-500 font-medium line-through decoration-slate-600">
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* New Way */}
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-black border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px]"></div>
            
            <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-widest flex items-center gap-3 relative z-10">
              <Check className="w-6 h-6 text-red-500" /> Custom Software USA
            </h3>
            <ul className="space-y-6 relative z-10">
              {['One-Time Flat Fee ($999)', 'Rapid Sprint (7-14 Days)', 'AI-First Automation', 'Future-Proof Stack'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-bold text-lg">
                  <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};