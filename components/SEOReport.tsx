
import React from 'react';

export const SEOReport: React.FC = () => {
  return (
    <div className="bg-slate-800 border-l-4 border-blue-500 p-6 rounded shadow-lg">
      <h2 className="text-2xl font-black mb-4 uppercase italic">C) SEO Pack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div>
          <p className="font-bold text-blue-400 uppercase tracking-widest mb-1">SEO Title</p>
          <p className="text-white mb-4">Industrial Specialties Co-Tx | Best Roofing Company in Houston, TX</p>
          
          <p className="font-bold text-blue-400 uppercase tracking-widest mb-1">Meta Description</p>
          <p className="text-white mb-4">Professional roofing services in Houston. Expert repair, replacement, and storm damage help. Licensed & Insured. Call (713) 643-2155 for a free inspection.</p>
        </div>
        <div>
          <p className="font-bold text-blue-400 uppercase tracking-widest mb-1">Primary Keywords</p>
          <p className="text-white mb-4">Houston Roofer, Roof Repair Houston, Local Roofing Company, Houston Storm Damage Roof.</p>
          
          <p className="font-bold text-blue-400 uppercase tracking-widest mb-1">Local Schema Recs</p>
          <ul className="list-disc pl-5 text-white">
            <li>Type: LocalBusiness / Roofer</li>
            <li>NAP: Consistent with GBP (Brookhill Dr)</li>
            <li>Geocoordinates: Houston 77087</li>
            <li>OpeningHours: 08:00-18:00</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
