
import React from 'react';

export const ProjectSummary: React.FC = () => {
  return (
    <div className="bg-slate-800 border-l-4 border-orange-500 p-6 rounded shadow-lg">
      <h2 className="text-2xl font-black mb-4 uppercase italic">A) Project Summary</h2>
      <ul className="space-y-4 text-slate-300">
        <li><strong>Focus:</strong> High-converting lead-gen for Houston roofing.</li>
        <li><strong>Conversion Goal:</strong> Direct phone calls via (713) 643-2155.</li>
        <li><strong>Mobile Strategy:</strong> Sticky footer CTA and large touch-friendly buttons.</li>
        <li><strong>Content Tone:</strong> Industrial, urgent, authoritative, and local.</li>
        <li><strong>Tech:</strong> Static React implementation using Tailwind for performance and local SEO stability.</li>
      </ul>
    </div>
  );
};
