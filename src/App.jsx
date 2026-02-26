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
    // Check initial URL hash first
    const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
    if (hash && ['home', 'courses', 'comparison', 'support', 'mentorProfile'].includes(hash)) {
      return hash;
    }
    // Check local session storage for the saved page, default to 'home'
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const savedPage = window.sessionStorage.getItem('currentPage');
      return savedPage ? savedPage : 'home';
    }
    return 'home';
  });

  const [compareIds, setCompareIds] = useState(() => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const saved = window.sessionStorage.getItem('compareIds');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [selectedMentorId, setSelectedMentorId] = useState(() => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const saved = window.sessionStorage.getItem('selectedMentorId');
      return saved ? saved : null;
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
    if (typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.setItem('currentPage', currentPage);
    }
  }, [currentPage]);

  // Persist compareIds
  useEffect(() => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.setItem('compareIds', JSON.stringify(compareIds));
    }
  }, [compareIds]);

  // Persist selectedMentorId
  useEffect(() => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      if (selectedMentorId) {
        window.sessionStorage.setItem('selectedMentorId', selectedMentorId);
      } else {
        window.sessionStorage.removeItem('selectedMentorId');
      }
    }
  }, [selectedMentorId]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
        if (event.state.page === 'comparison' && event.state.data) setCompareIds(event.state.data);
        if (event.state.page === 'mentorProfile' && event.state.data) setSelectedMentorId(event.state.data);
      } else {
        const hash = window.location.hash.replace('#', '') || 'home';
        setCurrentPage(hash);
      }
    };

    // Set initial state for the first history entry
    if (typeof window !== 'undefined' && !window.history.state) {
      window.history.replaceState({ page: currentPage, data: currentPage === 'comparison' ? compareIds : (currentPage === 'mentorProfile' ? selectedMentorId : null) }, '', `#${currentPage}`);
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentPage, compareIds, selectedMentorId]);

  const navigateTo = (page, data = null, replace = false) => {
    setCurrentPage(page);
    if (page === 'comparison' && data) {
      setCompareIds(data);
    }
    if (page === 'mentorProfile' && data) {
      setSelectedMentorId(data);
    }
    window.scrollTo(0, 0);

    const state = { page, data };
    const url = `#${page}`;
    if (replace) {
      window.history.replaceState(state, '', url);
    } else {
      window.history.pushState(state, '', url);
    }
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
          <CourseComparison courseIds={compareIds} onBack={() => navigateTo('home')} onNavigate={navigateTo} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />

      {/* Global Interactive Chat Widget */}
      <ChatbotWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

export default App;
