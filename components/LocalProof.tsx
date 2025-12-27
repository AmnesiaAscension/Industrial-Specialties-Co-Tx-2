
import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const LocalProof: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-black text-blue-900 mb-6">Real Houston Reviews</h2>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="flex text-orange-400 mb-4">
                {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed">
                "Top notch service and quality from Industrial Specialties. They handled our emergency roof repair quickly and professionally. Highly recommend for anyone in Houston."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center font-bold text-blue-900">
                  H
                </div>
                <div>
                  <p className="font-bold text-slate-900">Local Customer</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Verified Review</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-blue-900 mb-6">Our Location</h2>
            <div className="relative w-full h-[300px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
              {/* Note: This is a placeholder for an actual Google Map embed */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <i className="fa-solid fa-location-dot text-4xl text-orange-500 mb-4"></i>
                <p className="text-xl font-bold text-blue-900 mb-2">{BUSINESS_INFO.address}</p>
                <p className="text-slate-600 mb-6">{BUSINESS_INFO.city}, {BUSINESS_INFO.state} 77087</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-6 py-2 rounded font-bold hover:bg-slate-800 transition-colors"
                >
                  Get Directions
                </a>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80&w=1200" 
                alt="Map Background" 
                className="w-full h-full object-cover opacity-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
