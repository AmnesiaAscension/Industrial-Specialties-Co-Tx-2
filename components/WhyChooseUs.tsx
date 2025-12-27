
import React from 'react';

const reasons = [
  {
    title: "Local Knowledge",
    desc: "We understand Houston's unique climate and building codes."
  },
  {
    title: "Transparent Pricing",
    desc: "Up-front quotes with no surprise fees or hidden costs."
  },
  {
    title: "Superior Materials",
    desc: "We only use industrial-grade materials built to last."
  },
  {
    title: "Client-First Approach",
    desc: "Your satisfaction is our primary metric for success."
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8">Why Houston Homeowners Choose Us</h2>
            <div className="space-y-8">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                    <p className="text-blue-100/80 leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" 
              alt="Roofing construction" 
              className="rounded-2xl shadow-2xl border-4 border-white/10 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 p-8 rounded-xl shadow-xl">
              <span className="block text-4xl font-black text-white italic tracking-tighter leading-none">5.0</span>
              <span className="block text-white font-bold uppercase text-xs tracking-widest mt-1">Google Rating</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 -skew-x-12 transform translate-x-20"></div>
    </section>
  );
};
