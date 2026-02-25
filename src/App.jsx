import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurServices from './components/OurServices';
import CustomContentSection from './components/CustomContentSection';
import TrendingCourses from './components/TrendingCourses';
import TrendingMentors from './components/TrendingMentors';
import Footer from './components/Footer';
import ScrollMascot from './components/ScrollMascot';
import CourseComparison from './components/CourseComparison';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [compareIds, setCompareIds] = useState([]); // Store selected course IDs
  const [theme, setTheme] = useState(() => {
    // Check local storage or system preference on initial load
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('color-theme');
      if (typeof storedPrefs === 'string') {
        return storedPrefs;
      }
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return 'dark';
      }
    }
    return 'light'; // default theme
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('color-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navigateTo = (page, ids = []) => {
    setCurrentPage(page);
    if (page === 'comparison' && ids.length > 0) {
      setCompareIds(ids);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col font-sans text-gray-900 dark:text-gray-100">
      <Navbar theme={theme} toggleTheme={toggleTheme} onHomeClick={() => navigateTo('home')} />

      {currentPage === 'home' && <ScrollMascot />}

      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />

            {/* Compact Stacking */}
            <div className="flex flex-col relative z-20">
              <TrendingCourses onCompare={(ids) => navigateTo('comparison', ids)} />
              <TrendingMentors />

              <OurServices />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <CustomContentSection />
              </div>
            </div>
          </>
        ) : (
          <CourseComparison courseIds={compareIds} onBack={() => navigateTo('home')} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
