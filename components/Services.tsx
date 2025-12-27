
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const services = [
  {
    title: "Roof Replacement",
    description: "Complete tear-offs and high-quality new installations using premium materials engineered for Texas heat.",
    icon: "fa-house-chimney-window"
  },
  {
    title: "Leak Repair",
    description: "Stop water damage in its tracks. We find the source and provide permanent fixes for all leak types.",
    icon: "fa-droplet-slash"
  },
  {
    title: "Storm Damage",
    description: "Fast response for wind and hail damage. We help you secure your home quickly after Houston storms.",
    icon: "fa-cloud-bolt"
  },
  {
    title: "Commercial Roofing",
    description: "Specialized systems for flat roofs, industrial complexes, and commercial properties in the Houston area.",
    icon: "fa-building"
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4">Quality Roofing Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg italic">
            Serving 6205 Brookhill Dr and the surrounding Houston neighborhoods with integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <i className={`fa-solid ${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
              <a 
                href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                className="text-orange-500 font-bold flex items-center hover:translate-x-1 transition-transform"
              >
                Call for Quote <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
