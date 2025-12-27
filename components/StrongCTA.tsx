
import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const StrongCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-orange-500 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase italic">
          Ready to Secure Your Home?
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-bold opacity-90">
          Don't wait for a small leak to become a big problem. Get a professional inspection today.
        </p>
        <div className="flex flex-col items-center">
          <a 
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="bg-blue-900 text-white text-2xl md:text-4xl px-10 py-6 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center"
          >
            <i className="fa-solid fa-phone-volume mr-4 animate-pulse"></i>
            {BUSINESS_INFO.phone}
          </a>
          <span className="mt-6 text-sm uppercase tracking-[0.2em] font-black italic">Speak with a Houston Specialist Now</span>
        </div>
      </div>
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};
