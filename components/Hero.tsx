
import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-900 py-16 md:py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern roofing in Houston" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full mb-6">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">
              <i className="fa-solid fa-bolt mr-2"></i>
              24/7 Emergency Repairs
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Houston's Trusted <span className="text-orange-500">Roofing Experts</span> Since 19XX
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            Industrial Specialties Co-Tx provides rapid, reliable, and professional roofing services across Houston. From minor leaks to full replacements, we protect your property with industrial-grade quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-orange-500 text-white text-center px-8 py-4 rounded-lg font-black text-xl hover:bg-orange-600 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center"
            >
              <i className="fa-solid fa-phone-volume mr-3"></i>
              CALL (713) 643-2155
            </a>
            <div className="flex items-center text-white/80 text-sm italic py-2">
              <i className="fa-solid fa-circle-check text-green-400 mr-2"></i>
              Free On-Site Inspection Today
            </div>
          </div>

          <div className="mt-12 flex items-center space-x-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">5.0</span>
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star text-sm"></i>)}
              </div>
              <span className="text-xs text-slate-400 uppercase font-bold mt-1 tracking-tighter">Google Rating</span>
            </div>
            <div className="h-10 w-px bg-slate-700"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">100%</span>
              <span className="text-xs text-slate-400 uppercase font-bold mt-1 tracking-tighter">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
