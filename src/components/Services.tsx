import React from 'react';
import { Globe, MessageSquare, Scale, Mic, Workflow, Server, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services = [
  {
    id: 'web',
    title: 'Sales Engine Web',
    description: 'We don\'t build brochures. We build assets. SEO-optimized, React-based architectures designed to capture and convert.',
    icon: <Globe className="w-6 h-6" />,
    colSpan: "lg:col-span-2",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 'chatbot',
    title: 'AI Neural Agents',
    description: '24/7 lead qualification. It sleeps when you do (never).',
    icon: <MessageSquare className="w-6 h-6" />,
    colSpan: "lg:col-span-1",
    gradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: 'automation',
    title: 'Workflow Autopilot',
    description: 'Connecting your CRM, Slack, and Email. If you do it twice, we automate it.',
    icon: <Workflow className="w-6 h-6" />,
    colSpan: "lg:col-span-1",
    gradient: "from-emerald-500/20 to-green-500/20"
  },
  {
    id: 'voice',
    title: 'Voice Synthetics',
    description: 'AI receptionists that sound human, book meetings, and handle support.',
    icon: <Mic className="w-6 h-6" />,
    colSpan: "lg:col-span-2",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: 'deployment',
    title: 'Cloud Infrastructure',
    description: 'Scalable serverless deployment on Vercel or AWS.',
    icon: <Server className="w-6 h-6" />,
    colSpan: "lg:col-span-1",
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    id: 'law',
    title: 'Vertical SaaS',
    description: 'Specialized CMS for Legal and Medical Agencies.',
    icon: <Scale className="w-6 h-6" />,
    colSpan: "lg:col-span-2",
    gradient: "from-slate-500/20 to-gray-500/20"
  },
];

export const Services: React.FC = () => {
  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">ARMORY</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-lg border-l-2 border-red-500 pl-6">
            We don't just "make websites". We deploy a complete digital ecosystem designed for the 2026 automated economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`
                ${service.colSpan} 
                group relative overflow-hidden rounded-3xl bg-slate-900/40 border border-white/5 p-8
                hover:border-white/20 transition-all duration-500 hover:bg-slate-900/60
              `}
            >
              {/* Hover Gradient Blob */}
              <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${service.gradient} blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-white transition-colors">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};