import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'package', label: 'The Offer' },
    { id: 'why-us', label: 'Comparison' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 w-[95%] md:w-auto ${
          isScrolled ? 'top-4' : 'top-6'
        }`}
      >
        <div className={`
          flex items-center justify-between md:justify-center gap-8 
          px-6 py-3 rounded-full 
          bg-slate-950/40 backdrop-blur-xl border border-white/5 shadow-2xl shadow-black/50
          transition-all duration-300
        `}>
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => handleNavClick('home')}
          >
            <div className="bg-red-600/10 border border-red-500/20 p-1.5 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <Terminal className="text-red-500 group-hover:text-white w-4 h-4" />
            </div>
            <span className="text-sm font-black tracking-widest uppercase text-slate-200">
              CS<span className="text-red-600">USA</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-1 py-1 border border-white/5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300
                  ${activeSection === item.id 
                    ? 'bg-slate-800 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-slate-100 hover:bg-white text-black px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all transform hover:scale-105 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
            >
              Claim Spot
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden flex items-center justify-center">
           <div className="flex flex-col items-center gap-8">
             {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-2xl font-bold text-slate-300 hover:text-red-500"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="mt-4 bg-red-600 text-white px-8 py-3 rounded-full font-bold text-xl"
              >
                Claim Spot
              </button>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-8 right-8 text-slate-500"
              >
                <X className="w-8 h-8" />
              </button>
           </div>
        </div>
      )}
    </>
  );
};