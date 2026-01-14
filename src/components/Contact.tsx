import React, { useState } from 'react';
import { Send, Terminal } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    interest: 'package',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || 'Failed to send. Please try again.');
      }

      setSubmitted(true);
      setFormState({ name: '', email: '', interest: 'package', message: '' });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-32 bg-[#000000] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl mb-6">
            <Terminal className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">INITIALIZE SEQUENCE</h2>
          <p className="text-slate-500">Secure your spot in the queue. Our engineers reply within 2 hours.</p>
        </div>

        <div className="bg-slate-900/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <h3 className="text-3xl font-bold text-white mb-4">Transmission Received.</h3>
              <p className="text-slate-400 mb-8">Stand by for contact. We just sent your request to the team inbox.</p>
              <button onClick={() => setSubmitted(false)} className="text-red-500 underline">Reset Terminal</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-red-500 transition-colors">Identification</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-slate-800 py-3 text-white text-xl font-medium focus:outline-none focus:border-red-500 transition-colors placeholder-slate-800"
                    placeholder="John Doe"
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-red-500 transition-colors">Comms Channel</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-slate-800 py-3 text-white text-xl font-medium focus:outline-none focus:border-red-500 transition-colors placeholder-slate-800"
                    placeholder="john@corp.com"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-red-500 transition-colors">Target Directive</label>
                <select
                  name="interest"
                  value={formState.interest}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-slate-800 py-3 text-white text-xl font-medium focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="package" className="bg-slate-900">Starter Pack ($999)</option>
                  <option value="custom" className="bg-slate-900">Custom Enterprise</option>
                  <option value="ai" className="bg-slate-900">AI Automation</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-red-500 transition-colors">Mission Brief</label>
                <textarea
                  name="message"
                  required
                  rows={2}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-slate-800 py-3 text-white text-xl font-medium focus:outline-none focus:border-red-500 transition-colors placeholder-slate-800 resize-none"
                  placeholder="Tell us what you need built..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-black text-lg py-5 rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-3"
              >
                {isSubmitting ? 'TRANSMITTING...' : 'INITIATE CONTACT'}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>
              {error && (
                <p className="text-red-400 text-center text-sm" role="alert">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
