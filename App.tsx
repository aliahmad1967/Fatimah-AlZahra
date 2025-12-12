import React from 'react';
import { Hero } from './components/Hero';
import { TreeVisualization } from './components/TreeVisualization';
import { FatimiyyaBanner } from './components/FatimiyyaBanner';
import { Footer } from './components/Footer';
import { APP_DATA } from './constants';
import { SectionType } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-fatima-cream font-kufi selection:bg-fatima-gold selection:text-fatima-dark">
      <Hero />
      
      <main className="relative">
        {/* Render Sections */}
        {APP_DATA.map((section, index) => {
            // Inject the Fatimiyya Banner before the Martyrdom section
            if (section.id === SectionType.MARTYRDOM) {
                return (
                    <React.Fragment key="banner-wrapper">
                        <FatimiyyaBanner />
                        <TreeVisualization key={section.id} data={section} index={index} />
                    </React.Fragment>
                );
            }
            return (
                <TreeVisualization key={section.id} data={section} index={index} />
            );
        })}
      </main>

      <Footer />
    </div>
  );
};

export default App;