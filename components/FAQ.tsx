
import React, { useState } from 'react';

const faqs = [
  {
    q: "Do you offer free roof inspections?",
    a: "Yes. We provide comprehensive, no-obligation roof inspections for Houston homeowners. We assess structural integrity, material wear, and storm damage."
  },
  {
    q: "How long does a typical roof replacement take?",
    a: "Most residential roof replacements in Houston take between 1 to 3 days, depending on the size of the home and the complexity of the roof design."
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. Industrial Specialties Co-Tx is fully licensed and carries comprehensive insurance to protect both our workers and your property."
  },
  {
    q: "Can you help with insurance claims for storm damage?",
    a: "While we are not adjusters, we provide detailed documentation, photos, and professional estimates that you can use to streamline your insurance claim process."
  },
  {
    q: "What is your primary service area?",
    a: "We are based in Houston (77087) and serve the entire Greater Houston metro area, including Pasadena, Pearland, and surrounding suburbs."
  }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-blue-900 text-center mb-12 uppercase tracking-tight">Common Roofing Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                <i className={`fa-solid fa-chevron-down text-orange-500 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`}></i>
              </button>
              {openIdx === idx && (
                <div className="p-5 bg-slate-50 border-t border-slate-200 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
