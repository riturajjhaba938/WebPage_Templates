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
import CoursesPage from './components/CoursesPage';
import MentorProfile from './components/MentorProfile';
import SupportHub from './components/SupportHub';
import ChatbotWidget from './components/ChatbotWidget';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState(() => {
    // Check local storage for the saved page, default to 'home'
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedPage = window.localStorage.getItem('vedifai-current-page');
      return savedPage || 'home';
    }
    return 'home';
  });
  const [compareIds, setCompareIds] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedIds = window.localStorage.getItem('vedifai-compare-ids');
      return savedIds ? JSON.parse(savedIds) : [];
    }
    return [];
  }); // Store selected course IDs
  const [selectedMentorId, setSelectedMentorId] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem('vedifai-mentor-id') || null;
    }
    return null;
  });

  const [isChatOpen, setIsChatOpen] = useState(false);

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

  // Persist routing state on change
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('vedifai-current-page', currentPage);
      window.localStorage.setItem('vedifai-compare-ids', JSON.stringify(compareIds));
      if (selectedMentorId) {
        window.localStorage.setItem('vedifai-mentor-id', selectedMentorId);
      } else {
        window.localStorage.removeItem('vedifai-mentor-id');
      }
    }
  }, [currentPage, compareIds, selectedMentorId]);

  const navigateTo = (page, data = null) => {
    setCurrentPage(page);
    if (page === 'comparison' && data) {
      setCompareIds(data);
    }
    if (page === 'mentorProfile' && data) {
      setSelectedMentorId(data);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col font-sans text-gray-900 dark:text-gray-100">

      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onHomeClick={() => navigateTo('home')}
        onCoursesClick={() => navigateTo('courses')}
        onSupportClick={() => navigateTo('support')}
      />

      {currentPage === 'home' && <ScrollMascot />}

      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={navigateTo} />

            {/* Compact Stacking */}
            <div className="flex flex-col relative z-20">
              <TrendingCourses onCompare={(ids) => navigateTo('comparison', ids)} />
              <TrendingMentors onNavigate={navigateTo} />

              <OurServices onNavigate={navigateTo} />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <CustomContentSection />
              </div>
            </div>
          </>
        ) : currentPage === 'courses' ? (
          <CoursesPage onBack={() => navigateTo('home')} onCompareNow={(ids) => navigateTo('comparison', ids)} />
        ) : currentPage === 'mentorProfile' ? (
          <MentorProfile mentorId={selectedMentorId} onBack={() => navigateTo('home')} onCourseClick={() => navigateTo('courses')} />
        ) : currentPage === 'support' ? (
          <SupportHub onOpenChat={() => setIsChatOpen(true)} />
        ) : (
          <CourseComparison courseIds={compareIds} onBack={() => navigateTo('home')} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />

      {/* Global Interactive Chat Widget */}
      <ChatbotWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

export default App;
