
import React from 'react';

const areas = [
  "Downtown Houston", "The Heights", "Pasadena", "Pearland", "Sugar Land", 
  "The Woodlands", "Memorial", "Katy", "Humble", "Spring", "Baytown", "League City"
];

export const ServiceAreas: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-8">Serving All of Greater Houston</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          From our base at Brookhill Dr, we dispatch crews across the entire metro area to ensure you get fast service when you need it most.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area, idx) => (
            <span 
              key={idx} 
              className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 font-bold text-sm shadow-sm hover:border-orange-500 transition-colors cursor-default"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
