import React, { useState, useEffect } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import CourseDiscoveryPopup from './CourseDiscoveryPopup';
import CourseDetailsPopup from './CourseDetailsPopup';
import apiService from '../api/apiService';
import { mapCourseToCard } from '../utils/dataMapping';

const TrendingCourses = ({ onCompare }) => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        const fetchTrending = async () => {
            setLoading(true);
            setError(null);
            try {
                // Fetch first 8 courses as 'trending' for the home page display
                const data = await apiService.getCoursesAndBatches({ page: 1, limit: 8 });
                const mappedCourses = (data.courses || []).map(mapCourseToCard);
                setCourses(mappedCourses);
            } catch (err) {
                setError(err.message || 'Failed to fetch trending courses');
            } finally {
                setLoading(false);
            }
        };
        fetchTrending();
    }, []);

    return (
        <section className="bg-white dark:bg-gray-900 py-4 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4">

                <div className="bg-[#bef264] dark:bg-[#a3e635]/20 rounded-[2rem] p-8 md:p-10 relative transition-colors duration-300">
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white text-center w-full transition-colors duration-300">
                            Our Trending Courses
                        </h2>
                        <span
                            onClick={() => setIsPopupOpen(true)}
                            className="absolute top-8 right-8 text-xs font-bold text-gray-800 dark:text-gray-300 underline cursor-pointer hover:text-white dark:hover:text-[#bef264] transition-colors duration-300"
                        >
                            explore
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {loading ? (
                            [...Array(4)].map((_, i) => (
                                <div key={i} className="h-64 bg-white dark:bg-gray-800 rounded-xl animate-pulse shadow-sm border border-gray-100 dark:border-gray-700"></div>
                            ))
                        ) : error ? (
                            <div className="col-span-full py-10 text-center">
                                <p className="text-gray-500 dark:text-gray-400 font-bold text-sm">{error}</p>
                            </div>
                        ) : (
                            courses.map((c) => (
                                <div
                                    key={c.id}
                                    onClick={() => setSelectedCourse(c)}
                                    className="bg-white dark:bg-gray-800 rounded-xl w-full h-64 shadow-sm border-2 border-transparent dark:border-gray-700 hover:border-black/10 dark:hover:border-[#bef264]/50 transition-all cursor-pointer flex flex-col overflow-hidden group relative"
                                >

                                    <div className="h-40 w-full bg-gray-100 dark:bg-gray-700 relative overflow-hidden shrink-0">
                                        <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <button className="bg-brand-lime text-black text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                                View <ArrowRight size={10} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-4 flex flex-col flex-grow justify-between bg-white dark:bg-gray-800 transition-colors duration-300">
                                        <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight line-clamp-2 group-hover:text-brand-dark dark:group-hover:text-[#bef264] transition-colors duration-300">
                                            {c.title}
                                        </h3>

                                        <div className="flex items-center justify-between mt-3">
                                            <span className="text-sm font-extrabold text-[#064e3b] bg-[#d9f99d] px-2.5 py-1 rounded-md">
                                                {c.price || 'Free'}
                                            </span>
                                            <div className="flex items-center text-yellow-500">
                                                <Star size={12} fill="currentColor" />
                                                <span className="text-xs font-bold ml-1">4.8</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                </div>
            </div>
            <CourseDiscoveryPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} onCompareNow={onCompare} />
            <CourseDetailsPopup course={selectedCourse} isOpen={!!selectedCourse} onClose={() => setSelectedCourse(null)} />
        </section >
    );
};

export default TrendingCourses;
