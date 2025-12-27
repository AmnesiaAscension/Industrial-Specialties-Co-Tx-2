
import React from 'react';

const trustSignals = [
  { icon: "fa-shield-halved", text: "Licensed & Insured" },
  { icon: "fa-clock", text: "Fast Local Response" },
  { icon: "fa-hammer", text: "Expert Installation" },
  { icon: "fa-handshake", text: "No Hidden Costs" }
];

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-white border-b py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {trustSignals.map((signal, idx) => (
            <div key={idx} className="flex items-center space-x-3 text-slate-700 whitespace-nowrap">
              <i className={`fa-solid ${signal.icon} text-blue-900 text-xl`}></i>
              <span className="font-bold text-sm uppercase tracking-wide">{signal.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
