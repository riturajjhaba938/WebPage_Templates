import React, { useState, useMemo } from 'react';
import { Search, X, CheckCircle, SlidersHorizontal, ChevronLeft, ChevronRight, Star, Filter, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import coursesData from '../data/coursesData.json';

const allSubjects = [...new Set(coursesData.map(c => c.subject))];

const CoursesPage = ({ onCompareNow, onBack }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSubjects, setSelectedSubjects] = useState(allSubjects);
    const [maxPrice, setMaxPrice] = useState(50000);
    const [minRating, setMinRating] = useState(0);
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [selectedFormat, setSelectedFormat] = useState('All');
    const [sortBy, setSortBy] = useState('Most Trending');

    // Mobile specific UI state
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    // New State for comparison
    const [selectedForCompare, setSelectedForCompare] = useState([]);

    // Filter Logic
    const filteredCourses = useMemo(() => {
        let result = coursesData.filter(course => {
            // Search
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.mentor.toLowerCase().includes(searchQuery.toLowerCase());
            // Subjects
            const matchesSubject = selectedSubjects.includes(course.subject);
            // Price
            const matchesPrice = course.priceValue <= maxPrice;
            // Rating
            const matchesRating = course.rating >= minRating;
            // Level
            const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
            // Format
            const matchesFormat = selectedFormat === 'All' || course.format === selectedFormat;

            return matchesSearch && matchesSubject && matchesPrice && matchesRating && matchesLevel && matchesFormat;
        });

        // Sorting
        if (sortBy === 'Price: Low to High') {
            result.sort((a, b) => a.priceValue - b.priceValue);
        } else if (sortBy === 'Highest Rated') {
            result.sort((a, b) => b.rating - a.rating);
        }

        return result;
    }, [searchQuery, selectedSubjects, maxPrice, minRating, selectedLevel, selectedFormat, sortBy]);

    const handleSubjectToggle = (subject) => {
        if (selectedSubjects.includes(subject)) {
            setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
        } else {
            setSelectedSubjects([...selectedSubjects, subject]);
        }
    };

    const clearAllFilters = () => {
        setSearchQuery('');
        setSelectedSubjects(allSubjects);
        setMaxPrice(50000);
        setMinRating(0);
        setSelectedLevel('All');
        setSelectedFormat('All');
        setSortBy('Most Trending');
    };

    const handleToggleCompare = (courseId) => {
        setSelectedForCompare(prev => {
            if (prev.includes(courseId)) {
                return prev.filter(id => id !== courseId);
            }
            if (prev.length >= 3) {
                // Maximum 3 courses can be compared at a time
                alert("You can only compare up to 3 courses at a time.");
                return prev;
            }
            return [...prev, courseId];
        });
    };

    return (
        <div className="min-h-screen bg-[#fbfff2] dark:bg-gray-900 pt-16 flex flex-col transition-colors duration-300">
            {/* Header ToolBar */}
            <div className="bg-[#022c22] text-white px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 transition-colors duration-300">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                    <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-full cursor-pointer transition-colors shadow-sm -ml-2">
                        <ChevronLeft size={24} className="text-white" />
                    </button>
                    <div className="flex items-center gap-3">
                        <span className="bg-[#bef264] text-[#022c22] w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold transition-all shadow-sm">
                            {selectedForCompare.length}
                        </span>
                        <span className="text-sm font-medium">Courses selected</span>

                        {/* Visual Indicators for Selected Slots */}
                        <div className="flex gap-1 ml-2 hidden sm:flex">
                            {[0, 1, 2].map((slotIndex) => (
                                <div
                                    key={slotIndex}
                                    className={`w-6 h-6 rounded-full border border-[#022c22] -ml-2 transition-colors duration-300 ${slotIndex < selectedForCompare.length ? 'bg-brand-lime' : 'bg-white/20'}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
                    {selectedForCompare.length > 0 && (
                        <button onClick={() => setSelectedForCompare([])} className="text-xs text-brand-lime hover:underline hidden lg:block">Clear selection</button>
                    )}
                    <button
                        onClick={() => {
                            if (onCompareNow) onCompareNow(selectedForCompare);
                        }}
                        disabled={selectedForCompare.length === 0}
                        className={`px-6 py-2 rounded-full text-xs font-bold transition-all shadow-lg whitespace-nowrap ${selectedForCompare.length > 0
                            ? 'bg-[#bef264] text-[#022c22] hover:bg-[#a3e635] cursor-pointer'
                            : 'bg-white/10 text-white/40 cursor-not-allowed opacity-70'
                            }`}
                    >
                        Compare Now <span className="ml-1">→</span>
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col md:flex-row flex-1 overflow-hidden relative">

                {/* Mobile Filter Toggle (Visible only on small screens) */}
                <div className="md:hidden p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex justify-between items-center transition-colors duration-300 shrink-0">
                    <h2 className="font-bold text-gray-800 dark:text-white">Filters & Search</h2>
                    <button
                        onClick={() => setShowMobileFilters(true)}
                        className="flex items-center gap-2 text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 transition-colors cursor-pointer"
                    >
                        <SlidersHorizontal size={16} /> Show
                    </button>
                </div>

                {/* Mobile Backdrop Overlay */}
                <AnimatePresence>
                    {showMobileFilters && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowMobileFilters(false)}
                            className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                        />
                    )}
                </AnimatePresence>

                {/* Left Sidebar (Filters) */}
                <div className={`fixed inset-y-0 left-0 z-50 w-[85%] max-w-[320px] transform ${showMobileFilters ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:w-72 bg-white dark:bg-gray-800 p-6 border-r border-gray-200 dark:border-gray-700 overflow-y-auto transition-transform duration-300 ease-in-out shadow-2xl md:shadow-none shrink-0`}>
                    <div className="flex items-center justify-between font-bold mb-6 text-[#022c22] dark:text-gray-200 uppercase tracking-wide">
                        <div className="flex items-center gap-2"><SlidersHorizontal size={18} className="text-brand-lime" /> Filter Library</div>
                        <button onClick={() => setShowMobileFilters(false)} className="md:hidden p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer text-gray-500">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Search */}
                    <div className="relative mb-8">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search courses or educators..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 dark:bg-gray-700/50 dark:border-gray-600 rounded-xl py-2.5 pl-10 pr-3 text-sm focus:ring-2 focus:ring-brand-lime focus:border-transparent focus:outline-none transition-all dark:text-white"
                        />
                    </div>

                    {/* Subjects */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">CATEGORY</h4>
                            <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1 ml-3"></div>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                            {allSubjects.map(subject => (
                                <label key={subject} className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative flex items-center justify-center">
                                        <input
                                            type="checkbox"
                                            className="peer w-5 h-5 rounded border-2 border-gray-300 dark:border-gray-600 outline-none appearance-none checked:bg-brand-lime checked:border-brand-lime transition-all cursor-pointer"
                                            checked={selectedSubjects.includes(subject)}
                                            onChange={() => handleSubjectToggle(subject)}
                                        />
                                        <CheckCircle size={14} className="absolute text-[#022c22] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                                    </div>
                                    <span className="group-hover:text-brand-lime transition-colors font-medium">{subject}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Extra Filters (Level & Format) */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">LEVEL & FORMAT</h4>
                            <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1 ml-3"></div>
                        </div>
                        <div className="space-y-4">
                            <div className="relative">
                                <select
                                    value={selectedLevel}
                                    onChange={(e) => setSelectedLevel(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 dark:bg-gray-700/50 dark:border-gray-600 rounded-xl py-2.5 px-3 whitespace-nowrap text-sm focus:ring-2 focus:ring-brand-lime focus:outline-none cursor-pointer text-gray-700 dark:text-gray-200 appearance-none transition-colors"
                                >
                                    <option value="All">All Difficulty Levels</option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <ChevronRight size={16} className="text-gray-400 rotate-90" />
                                </div>
                            </div>

                            <div className="relative">
                                <select
                                    value={selectedFormat}
                                    onChange={(e) => setSelectedFormat(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 dark:bg-gray-700/50 dark:border-gray-600 rounded-xl py-2.5 px-3 text-sm focus:ring-2 focus:ring-brand-lime focus:outline-none cursor-pointer text-gray-700 dark:text-gray-200 appearance-none transition-colors"
                                >
                                    <option value="All">All Formats</option>
                                    <option value="Online">Online Learning</option>
                                    <option value="Offline">Offline / Classroom</option>
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <ChevronRight size={16} className="text-gray-400 rotate-90" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                        <h4 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider flex items-center justify-between">
                            MAX BUDGET
                            <span className="bg-white dark:bg-gray-800 px-2 py-0.5 rounded text-brand-lime shadow-sm">₹{maxPrice.toLocaleString()}</span>
                        </h4>
                        <input
                            type="range"
                            min="0"
                            max="50000"
                            step="1000"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer mb-2 accent-brand-lime"
                        />
                        <div className="flex justify-between text-[10px] font-bold text-gray-400">
                            <span>₹0</span>
                            <span>₹50,000+</span>
                        </div>
                    </div>

                    {/* Ratings */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">MIN RATING</h4>
                            <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1 ml-3"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {[4.5, 4.0, 3.5, 0].map((rating, idx) => (
                                <button
                                    key={rating}
                                    onClick={() => setMinRating(rating)}
                                    className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-sm font-medium border transition-all ${minRating === rating
                                        ? 'bg-brand-lime text-[#022c22] border-brand-lime shadow-sm'
                                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-brand-lime/50 hover:bg-brand-lime/5'
                                        }`}
                                >
                                    {rating === 0 ? (
                                        <span>Any</span>
                                    ) : (
                                        <>
                                            <Star size={14} className={minRating === rating ? 'fill-[#022c22]' : 'fill-yellow-500 text-yellow-500'} />
                                            <span>{rating}+</span>
                                        </>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Clear Filters */}
                    <button
                        onClick={clearAllFilters}
                        className="w-full py-3 mt-4 text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all mb-8 md:mb-0"
                    >
                        Reset All Filters
                    </button>
                </div>

                {/* Right Content Area */}
                <div className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto bg-[#F3FCE3] dark:bg-gray-900/50 transition-colors duration-300">
                    <div className="max-w-6xl mx-auto">

                        {/* Title Section */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4 border-b border-gray-200 dark:border-gray-800 pb-6 transition-colors duration-300">
                            <div>
                                <h1 className="text-3xl md:text-5xl font-black text-[#022c22] dark:text-white mb-3 tracking-tight transition-colors">
                                    Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-[#84cc16] dark:from-[#bef264] dark:to-[#4ade80]">Courses</span>
                                </h1>
                                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-xl transition-colors">
                                    Showing <strong className="text-gray-900 dark:text-white">{filteredCourses.length}</strong> verified learning paths tailored to your career goals.
                                </p>
                            </div>

                            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 pl-4 pr-1 py-1 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 transition-colors w-full sm:w-auto mt-2 sm:mt-0">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider shrink-0">Sort By Focus</span>
                                <div className="h-4 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="bg-transparent text-sm font-bold focus:outline-none cursor-pointer text-[#022c22] dark:text-white py-2 pr-4 appearance-none hover:text-brand-lime transition-colors"
                                >
                                    <option>Most Trending</option>
                                    <option>Price: Low to High</option>
                                    <option>Highest Rated</option>
                                </select>
                            </div>
                        </div>

                        {/* Course Grid */}
                        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
                            <AnimatePresence>
                                {filteredCourses.map((course) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        key={course.id}
                                        className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                                    >
                                        {/* Top Image Area */}
                                        <div className={`${course.bgTheme || 'bg-[#1e3441]'} h-48 relative flex items-center justify-center overflow-hidden`}>
                                            {course.image && (
                                                <img src={course.image} alt={course.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:scale-105 transition-transform duration-700 ease-out" />
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>

                                            {course.verified && (
                                                <div className="absolute top-4 left-4 bg-[#bef264] text-[#022c22] text-xs font-black px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                                                    <CheckCircle size={12} /> VERIFIED
                                                </div>
                                            )}

                                            <button
                                                onClick={() => handleToggleCompare(course.id)}
                                                className={`absolute top-4 right-4 text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 cursor-pointer transition-all shadow-lg backdrop-blur ${selectedForCompare.includes(course.id)
                                                    ? 'bg-brand-lime text-[#022c22] border-2 border-brand-lime shadow-[0_0_15px_rgba(190,242,100,0.5)]'
                                                    : 'bg-white/10 text-white border border-white/30 hover:bg-white/30 hover:scale-105'
                                                    }`}
                                            >
                                                {selectedForCompare.includes(course.id) ? (
                                                    <>
                                                        <CheckCircle size={14} className="text-[#022c22]" /> SELECTED
                                                    </>
                                                ) : (
                                                    'COMPARE'
                                                )}
                                            </button>

                                            {/* Format Badge overlay on image */}
                                            <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                                <span className="bg-black/60 backdrop-blur text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/20">
                                                    {course.format}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Details Area */}
                                        <div className="p-6 md:p-7 flex flex-col flex-1 bg-white dark:bg-gray-800 transition-colors duration-300">
                                            <div className="flex-1">
                                                <div className="text-[10px] font-black text-[#65a30d] dark:text-[#a3e635] mb-2 uppercase tracking-widest transition-colors">{course.subject}</div>
                                                <h3 className="font-black text-xl text-[#022c22] dark:text-white mb-2 leading-tight group-hover:text-brand-lime transition-colors">
                                                    {course.title}
                                                </h3>
                                                <div className="flex items-center gap-2 mb-4">
                                                    <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex shrink-0 border border-gray-300 dark:border-gray-600 overflow-hidden">
                                                        {course.mentorImage ? <img src={course.mentorImage} alt="mentor" className="w-full h-full object-cover" /> : null}
                                                    </div>
                                                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors">
                                                        {course.mentor}
                                                    </p>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-gray-600 dark:text-gray-300 mb-6 transition-colors">
                                                    <span className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                                                        <Clock size={12} className="text-brand-lime" /> {course.duration}
                                                    </span>
                                                    <span className="flex items-center gap-1.5 bg-[#fefce8] dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-500 px-3 py-1.5 rounded-lg border border-yellow-200 dark:border-yellow-700/50 shadow-sm">
                                                        <Star size={12} className="fill-current" /> {course.rating} ({course.reviews})
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Action Footer */}
                                            <div className="flex items-end justify-between border-t border-gray-100 dark:border-gray-700 pt-5 mt-auto transition-colors duration-300">
                                                <div>
                                                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Lifetime Access</div>
                                                    <div className="font-black text-2xl text-[#022c22] dark:text-white leading-none transition-colors">{course.price}</div>
                                                </div>
                                                <a
                                                    href={course.link || "#"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-[#022c22] dark:bg-white text-white dark:text-[#022c22] text-sm font-black px-6 py-3 rounded-xl hover:bg-brand-lime hover:text-[#022c22] transition-colors shadow-lg active:scale-95 flex items-center gap-2"
                                                >
                                                    ENROLL <ChevronRight size={16} />
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}

                                {filteredCourses.length === 0 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="col-span-full py-20 flex flex-col items-center justify-center text-center bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 transition-colors duration-300 shadow-sm"
                                    >
                                        <div className="w-20 h-20 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center mb-6 shadow-inner transition-colors duration-300">
                                            <Search size={32} className="text-gray-400" />
                                        </div>
                                        <h3 className="text-2xl font-black text-[#022c22] dark:text-white mb-3 tracking-tight transition-colors duration-300">No courses found matching criteria</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-base max-w-md mb-8 transition-colors duration-300">
                                            We couldn't find any learning paths matching your current filters. Try broadening your search or adjusting the difficulty.
                                        </p>
                                        <button
                                            onClick={clearAllFilters}
                                            className="px-8 py-4 bg-brand-lime text-[#022c22] font-black uppercase tracking-widest rounded-full text-sm shadow-xl hover:scale-105 transition-all"
                                        >
                                            Reset All Filters
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Pagination */}
                        {filteredCourses.length > 0 && (
                            <div className="flex justify-center mt-12 gap-3 items-center text-sm font-black pb-8">
                                <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:text-[#022c22] dark:hover:text-brand-lime shadow-sm transition-colors border border-gray-200 dark:border-gray-700"><ChevronLeft size={18} /></button>
                                <button className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#022c22] text-brand-lime shadow-lg">1</button>
                                <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:text-[#022c22] dark:hover:text-brand-lime shadow-sm transition-colors border border-gray-200 dark:border-gray-700">2</button>
                                <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:text-[#022c22] dark:hover:text-brand-lime shadow-sm transition-colors border border-gray-200 dark:border-gray-700"><ChevronRight size={18} /></button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;
