
import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const StickyMobileCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex gap-3">
        <a 
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 bg-orange-500 text-white font-black py-4 rounded-xl flex items-center justify-center text-lg active:scale-95 transition-transform"
        >
          <i className="fa-solid fa-phone-volume mr-3"></i>
          CALL (713) 643-2155
        </a>
      </div>
    </div>
  );
};
