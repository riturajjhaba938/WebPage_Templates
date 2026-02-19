import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomContentSection from './components/CustomContentSection';
import TrendingCourses from './components/TrendingCourses';
import TrendingMentors from './components/TrendingMentors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        {/* Compact Stacking */}
        <div className="flex flex-col gap-2 relative z-20 -mt-4">
          <TrendingCourses />
          <TrendingMentors />

          {/* Originally requested placeholder */}
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="bg-[#bef264] rounded-[2rem] p-8 md:p-12 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-6">Our Services</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-24 bg-[#d9f99d] rounded-xl border border-[#a3e635] flex items-end justify-center pb-2">
                    <span className="bg-white px-2 py-0.5 rounded-full text-[10px] font-bold border border-gray-200">know more</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mb-12">
              <button className="bg-[#022c22] text-white px-12 py-3 rounded-full font-bold shadow-lg hover:bg-[#064e3b] transition-all">About Us</button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <CustomContentSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
