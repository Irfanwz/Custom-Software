import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { StarterPackage } from './components/StarterPackage';
import { WhyUs } from './components/WhyUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/chatWidget';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main>
        <div id="home">
          <Hero onCtaClick={() => scrollToSection('package')} />
        </div>
        
        <div id="services">
          <Services />
        </div>
        
        <div id="package">
          <StarterPackage onClaimClick={() => scrollToSection('contact')} />
        </div>
        
        <div id="why-us">
          <WhyUs />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer onNavigate={scrollToSection} />
      <ChatWidget />
    </div>
  );
}