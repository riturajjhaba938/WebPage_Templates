import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurServices from './components/OurServices';
import CustomContentSection from './components/CustomContentSection';
import TrendingCourses from './components/TrendingCourses';
import TrendingMentors from './components/TrendingMentors';
import Footer from './components/Footer';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showIntro]);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}

      <div
        className={`min-h-screen bg-white flex flex-col font-sans text-gray-900 transition-opacity duration-1000 ${showIntro ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'
          }`}
      >
        <Navbar />

        <main className="flex-grow">
          <Hero />

          {/* Compact Stacking */}
          <div className="flex flex-col relative z-20">
            <TrendingCourses />
            <TrendingMentors />

            <OurServices />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <CustomContentSection />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
