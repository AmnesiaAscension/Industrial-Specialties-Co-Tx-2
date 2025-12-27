
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LocalProof } from './components/LocalProof';
import { ServiceAreas } from './components/ServiceAreas';
import { FAQ } from './components/FAQ';
import { StrongCTA } from './components/StrongCTA';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { Header } from './components/Header';
import { ProjectSummary } from './components/ProjectSummary';
import { SEOReport } from './components/SEOReport';

const App: React.FC = () => {
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  // Toggle for viewing internal "WaaS" reports if needed (hidden by default)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setShowAdminPanel(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      {showAdminPanel && (
        <div className="bg-slate-900 text-white p-8 space-y-8 z-[100]">
          <ProjectSummary />
          <SEOReport />
          <div className="bg-blue-900/30 p-4 rounded border border-blue-400">
            <h3 className="text-xl font-bold mb-2">Launch Checklist</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Demo readiness: Complete</li>
              <li>Mobile QA: Verified responsive breakpoints</li>
              <li>Click-to-call testing: (713) 643-2155 links active</li>
              <li>Local SEO consistency: Houston, TX NAP alignment</li>
              <li>Production launch: Static build ready</li>
            </ul>
          </div>
          <button 
            onClick={() => setShowAdminPanel(false)}
            className="mt-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          >
            Close Admin View
          </button>
        </div>
      )}

      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <LocalProof />
        <ServiceAreas />
        <FAQ />
        <StrongCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default App;
