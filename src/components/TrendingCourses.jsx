import React, { useState } from 'react';
import { BookOpen, Star, ArrowRight } from 'lucide-react';
import CourseDiscoveryPopup from './CourseDiscoveryPopup';

import platformData from '../data/platformData.json';

const courses = platformData.courses.filter(c => c.trending);

const TrendingCourses = ({ onCompare }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <section className="bg-white dark:bg-gray-900 py-4 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4">
                {/* Lime Green Container */}
                <div className="bg-[#bef264] dark:bg-[#a3e635]/20 rounded-[2rem] p-8 md:p-10 relative transition-colors duration-300">
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white text-center w-full transition-colors duration-300">
                            Our Trending Course
                        </h2>
                        <span
                            onClick={() => setIsPopupOpen(true)}
                            className="absolute top-8 right-8 text-xs font-bold text-gray-800 dark:text-gray-300 underline cursor-pointer hover:text-white dark:hover:text-[#bef264] transition-colors duration-300"
                        >
                            explore
                        </span>
                    </div>

                    {/* Slots Grid */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {courses.map((course) => (
                            <div key={course.id} className="bg-white dark:bg-gray-800 rounded-xl w-40 h-48 md:w-44 md:h-52 shadow-sm border-2 border-transparent dark:border-gray-700 hover:border-black/10 dark:hover:border-[#bef264]/50 transition-all cursor-pointer flex flex-col overflow-hidden group relative">

                                {/* Image Area */}
                                <div className="h-3/5 w-full bg-gray-100 relative overflow-hidden">
                                    <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button className="bg-brand-lime text-black text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                            View <ArrowRight size={10} />
                                        </button>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-3 flex flex-col flex-grow justify-between bg-white dark:bg-gray-800 transition-colors duration-300">
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight line-clamp-2 group-hover:text-brand-dark dark:group-hover:text-[#bef264] transition-colors duration-300">
                                        {course.title}
                                    </h3>

                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-xs font-extrabold text-[#064e3b] bg-[#d9f99d] px-2 py-0.5 rounded-md">
                                            {course.price}
                                        </span>
                                        <div className="flex items-center text-yellow-500">
                                            <Star size={10} fill="currentColor" />
                                            <span className="text-[10px] font-bold ml-0.5">4.8</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <CourseDiscoveryPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} onCompareNow={onCompare} />
        </section >
    );
};

export default TrendingCourses;
