
import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <span className="text-white font-black text-2xl tracking-tighter uppercase italic block">
              Industrial<span className="text-orange-500">Specialties</span>
            </span>
            <p className="text-slate-400 leading-relaxed">
              Industrial-grade roofing solutions for Houston property owners. Professional service, quality materials, and rapid local response.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-800 pb-2">Our Services</h4>
            <ul className="space-y-3 text-slate-400">
              {BUSINESS_INFO.services.map((s, i) => <li key={i} className="hover:text-orange-400 cursor-default transition-colors">{s}</li>)}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-800 pb-2">Contact Details</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot mt-1 mr-3 text-orange-500"></i>
                <span>{BUSINESS_INFO.address}<br/>{BUSINESS_INFO.city}, {BUSINESS_INFO.state} 77087</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone mr-3 text-orange-500"></i>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors">{BUSINESS_INFO.phone}</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-800 pb-2">Business Hours</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between font-bold text-orange-400"><span>Emergency:</span> <span>24/7 Response</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {currentYear} {BUSINESS_INFO.name}. All Rights Reserved. Houston, TX.</p>
        </div>
      </div>
    </footer>
  );
};
