
import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-blue-900 font-black text-xl md:text-2xl tracking-tighter uppercase italic">
              Industrial<span className="text-orange-500">Specialties</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex flex-col items-end">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Expert Houston Roofers</span>
              <a 
                href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                className="text-xl font-black text-blue-900 hover:text-orange-600 transition-colors"
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>
            <a 
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-orange-500 text-white px-6 py-2.5 rounded-md font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200"
            >
              CALL NOW
            </a>
          </div>
          <div className="md:hidden">
            <a 
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-blue-900 font-bold flex items-center"
            >
              <i className="fa-solid fa-phone mr-2"></i>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
