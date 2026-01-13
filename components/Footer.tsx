import React from 'react';
import { Terminal } from 'lucide-react';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 p-2 rounded-lg">
                <Terminal className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white uppercase">CS<span className="text-red-500">USA</span></span>
            </div>
            <p className="text-slate-500 max-w-sm text-lg leading-relaxed">
              Architecting the automated future for American business. <br />
              EST. 2024. San Francisco, CA.
            </p>
          </div>

          <div className="flex gap-8 md:gap-16">
            <div className="flex flex-col gap-4">
              <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-white font-bold text-left">Home</button>
              <button onClick={() => onNavigate('services')} className="text-slate-400 hover:text-white font-bold text-left">Services</button>
            </div>
            <div className="flex flex-col gap-4">
               <button onClick={() => onNavigate('package')} className="text-slate-400 hover:text-white font-bold text-left">The Offer</button>
               <button onClick={() => onNavigate('contact')} className="text-slate-400 hover:text-white font-bold text-left">Contact</button>
            </div>
          </div>

        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-slate-600">
          <p>&copy; {new Date().getFullYear()} VELOX AI SYSTEMS. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-slate-400 cursor-pointer">PRIVACY PROTOCOL</span>
            <span className="hover:text-slate-400 cursor-pointer">TERMS OF ENGAGEMENT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};