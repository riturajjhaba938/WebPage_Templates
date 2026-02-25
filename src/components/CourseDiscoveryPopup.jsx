import React, { useState, useMemo } from 'react';
import { Search, X, CheckCircle, SlidersHorizontal, ChevronLeft, ChevronRight, Star, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import platformData from '../data/platformData.json';

const allSubjects = [...new Set(platformData.courses.map(c => c.subject))];

const CourseDiscoveryPopup = ({ isOpen, onClose, onCompareNow }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSubjects, setSelectedSubjects] = useState(allSubjects);
    const [maxPrice, setMaxPrice] = useState(50000);
    const [minRating, setMinRating] = useState(0);
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [selectedFormat, setSelectedFormat] = useState('All');
    const [sortBy, setSortBy] = useState('Most Trending');

    // New State for comparison
    const [selectedForCompare, setSelectedForCompare] = useState([]);

    // Filter Logic
    const filteredCourses = useMemo(() => {
        let result = platformData.courses.filter(course => {
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
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-y-auto">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 shadow-2xl backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-[#fbfff2] dark:bg-gray-900 w-full max-w-[1200px] rounded-xl shadow-2xl flex flex-col h-full max-h-[90vh] overflow-hidden relative z-10 mt-10"
                    >
                        {/* Header Sub-bar */}
                        <div className="bg-[#022c22] text-white px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="bg-[#bef264] text-[#022c22] w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold transition-all">
                                    {selectedForCompare.length}
                                </span>
                                <span className="text-sm font-medium">Courses selected for comparison</span>

                                {/* Visual Indicators for Selected Slots */}
                                <div className="flex gap-1 ml-2">
                                    {[0, 1, 2].map((slotIndex) => (
                                        <div
                                            key={slotIndex}
                                            className={`w-6 h-6 rounded-full border border-[#022c22] -ml-2 transition-colors duration-300 ${slotIndex < selectedForCompare.length ? 'bg-brand-lime' : 'bg-white/20'
                                                }`}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                {selectedForCompare.length > 0 && (
                                    <button onClick={() => setSelectedForCompare([])} className="text-xs text-brand-lime hover:underline hidden sm:block">Clear selection</button>
                                )}
                                <button
                                    onClick={() => {
                                        onClose();
                                        if (onCompareNow) onCompareNow(selectedForCompare);
                                    }}
                                    disabled={selectedForCompare.length === 0}
                                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all shadow-lg ${selectedForCompare.length > 0
                                        ? 'bg-[#bef264] text-[#022c22] hover:bg-[#a3e635] cursor-pointer'
                                        : 'bg-white/10 text-white/40 cursor-not-allowed opacity-70'
                                        }`}
                                >
                                    Compare Now <span className="ml-1">→</span>
                                </button>
                                <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full cursor-pointer ml-2 transition-colors">
                                    <X size={20} className="text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                            {/* Left Sidebar (Filters) */}
                            <div className="w-full md:w-64 bg-white dark:bg-gray-800 p-6 border-r border-gray-200 dark:border-gray-700 overflow-y-auto hidden md:block">
                                <div className="flex items-center gap-2 font-bold mb-6 text-gray-800 dark:text-gray-200">
                                    <SlidersHorizontal size={16} /> Filters
                                </div>

                                {/* Search */}
                                <div className="relative mb-6">
                                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search courses..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-gray-50 border border-gray-200 dark:bg-gray-700 dark:border-gray-600 rounded-lg py-2 pl-9 pr-3 text-xs focus:ring-1 focus:ring-brand-lime focus:outline-none transition-shadow"
                                    />
                                </div>

                                {/* Subjects */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">SUBJECTS</h4>
                                    <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                                        {allSubjects.map(subject => (
                                            <label key={subject} className="flex items-center gap-2 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 rounded border-gray-300 text-brand-lime focus:ring-brand-lime cursor-pointer"
                                                    checked={selectedSubjects.includes(subject)}
                                                    onChange={() => handleSubjectToggle(subject)}
                                                />
                                                <span className="group-hover:text-brand-lime transition-colors">{subject}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Extra Filters (Level & Format) */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">LEVEL & FORMAT</h4>
                                    <div className="space-y-4">
                                        <select
                                            value={selectedLevel}
                                            onChange={(e) => setSelectedLevel(e.target.value)}
                                            className="w-full bg-gray-50 border border-gray-200 dark:bg-gray-700 dark:border-gray-600 rounded-lg py-2 px-3 text-xs focus:outline-none cursor-pointer text-gray-700 dark:text-gray-300"
                                        >
                                            <option value="All">All Levels</option>
                                            <option value="Beginner">Beginner</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Advanced">Advanced</option>
                                        </select>

                                        <select
                                            value={selectedFormat}
                                            onChange={(e) => setSelectedFormat(e.target.value)}
                                            className="w-full bg-gray-50 border border-gray-200 dark:bg-gray-700 dark:border-gray-600 rounded-lg py-2 px-3 text-xs focus:outline-none cursor-pointer text-gray-700 dark:text-gray-300"
                                        >
                                            <option value="All">All Formats</option>
                                            <option value="Online">Online</option>
                                            <option value="Offline">Offline</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Price Range */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">MAX PRICE</h4>
                                    <input
                                        type="range"
                                        min="0"
                                        max="50000"
                                        step="1000"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                                        className="w-full accent-brand-lime mb-2 cursor-pointer"
                                    />
                                    <div className="flex justify-between text-xs font-bold text-gray-700 dark:text-gray-300">
                                        <span>₹0</span>
                                        <span className="text-[#022c22] dark:text-[#bef264]">₹{maxPrice.toLocaleString()}</span>
                                    </div>
                                </div>

                                {/* Ratings */}
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">MIN RATING</h4>
                                    {[4.5, 4.0, 3.5, 0].map(rating => (
                                        <label key={rating} className="flex items-center gap-2 cursor-pointer text-sm mb-2 group">
                                            <input
                                                type="radio"
                                                name="rating"
                                                checked={minRating === rating}
                                                onChange={() => setMinRating(rating)}
                                                className="w-4 h-4 text-brand-lime focus:ring-brand-lime cursor-pointer"
                                            />
                                            {rating === 0 ? (
                                                <span className="text-gray-600 dark:text-gray-400 group-hover:text-brand-lime transition-colors">Any Rating</span>
                                            ) : (
                                                <>
                                                    <div className="flex items-center text-yellow-500">
                                                        <Star size={14} fill="currentColor" />
                                                        <span className="ml-1 text-xs font-bold">{rating}</span>
                                                    </div>
                                                    <span className="text-gray-600 dark:text-gray-400 text-xs">& up</span>
                                                </>
                                            )}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Right Content Area */}
                            <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-[#F3FCE3] dark:bg-gray-900">
                                {/* Title Section */}
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#022c22] dark:text-white mb-2 tracking-tight">
                                            Pahle <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-[#84cc16] dark:from-[#bef264] dark:to-[#4ade80]">Vedifai</span> Karo Fir Padhai Karo
                                        </h2>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                                            Discover verified courses from top teachers near you.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                                        <Filter size={14} className="text-gray-400" />
                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="bg-transparent font-bold focus:outline-none cursor-pointer text-[#022c22] dark:text-white"
                                        >
                                            <option>Most Trending</option>
                                            <option>Price: Low to High</option>
                                            <option>Highest Rated</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Course Grid */}
                                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <AnimatePresence>
                                        {filteredCourses.map((course) => (
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                transition={{ duration: 0.2 }}
                                                key={course.id}
                                                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative group"
                                            >
                                                {/* Top Image Area */}
                                                <div className={`${course.bgTheme || 'bg-gray-200'} h-32 relative flex items-center justify-center overflow-hidden`}>
                                                    {course.image && (
                                                        <img src={course.image} alt={course.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-110 transition-transform duration-700" />
                                                    )}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                                                    {course.verified && (
                                                        <div className="absolute top-3 left-3 bg-[#bef264] text-[#022c22] text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                                                            <CheckCircle size={10} /> VERIFIED
                                                        </div>
                                                    )}

                                                    <button
                                                        onClick={() => handleToggleCompare(course.id)}
                                                        className={`absolute top-3 right-3 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 cursor-pointer transition-all shadow-sm ${selectedForCompare.includes(course.id)
                                                                ? 'bg-[#022c22] text-[#bef264] border border-[#bef264]'
                                                                : 'bg-white/90 backdrop-blur text-gray-800 hover:bg-white'
                                                            }`}
                                                    >
                                                        {selectedForCompare.includes(course.id) ? (
                                                            <>
                                                                <CheckCircle size={12} className="text-[#bef264]" /> SELECTED
                                                            </>
                                                        ) : (
                                                            'COMPARE'
                                                        )}
                                                    </button>

                                                    {/* Format Badge */}
                                                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded-full">
                                                        {course.format}
                                                    </div>
                                                </div>

                                                {/* Details Area */}
                                                <div className="p-4 flex flex-col h-[calc(100%-8rem)]">
                                                    <div className="flex-1">
                                                        <div className="text-[9px] font-bold text-[#65a30d] mb-1 uppercase tracking-wider">{course.subject}</div>
                                                        <h3 className="font-bold text-[#022c22] dark:text-white text-sm mb-1 line-clamp-2 min-h-[40px] group-hover:text-brand-lime transition-colors">
                                                            {course.title}
                                                        </h3>
                                                        <p className="text-gray-500 text-xs mb-3">
                                                            {course.mentor}
                                                        </p>
                                                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-4 font-medium">
                                                            <span className="flex items-center gap-1 bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded-md">
                                                                ⏳ {course.duration}
                                                            </span>
                                                            <span className="flex items-center gap-1 bg-[#fefce8] dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 px-2 py-1 rounded-md">
                                                                <Star size={10} className="fill-current" /> {course.rating} ({course.reviews})
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-3 mt-auto">
                                                        <div>
                                                            <div className="text-[10px] text-gray-400 font-medium">Total Price</div>
                                                            <div className="font-black text-lg text-[#022c22] dark:text-white leading-none">{course.price}</div>
                                                        </div>
                                                        <button className="bg-[#022c22] dark:bg-[#bef264] text-white dark:text-[#022c22] text-xs font-bold px-5 py-2 rounded-full hover:bg-brand-lime hover:text-[#022c22] dark:hover:bg-white transition-all shadow-md transform active:scale-95">
                                                            Details
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}

                                        {filteredCourses.length === 0 && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="col-span-full py-12 flex flex-col items-center justify-center text-center"
                                            >
                                                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                                                    <Search size={24} className="text-gray-400" />
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">No courses found</h3>
                                                <p className="text-gray-500 text-sm max-w-sm">
                                                    We couldn't find any courses matching your current filters. Try adjusting them or clearing filters.
                                                </p>
                                                <button
                                                    onClick={clearAllFilters}
                                                    className="mt-6 px-4 py-2 bg-brand-lime text-[#022c22] font-bold rounded-full text-sm shadow-md"
                                                >
                                                    Clear All Filters
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* 'Can't find' Card (Only show if there are results) */}
                                    {filteredCourses.length > 0 && (
                                        <motion.div layout className="rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center p-6 text-center h-full min-h-[300px] cursor-pointer hover:bg-white dark:hover:bg-gray-800 hover:border-[#bef264] transition-all group">
                                            <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-[#bef264] group-hover:text-[#022c22] transition-colors flex items-center justify-center text-gray-400 mb-4 shadow-inner">
                                                <Search size={20} />
                                            </div>
                                            <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-2 group-hover:text-[#022c22] transition-colors">
                                                Can't find what you're looking for?
                                            </h3>
                                            <button className="text-xs font-bold text-brand-lime dark:text-[#a3e635] hover:underline cursor-pointer bg-brand-lime/10 px-3 py-1.5 rounded-full mt-2">
                                                Request a verified course
                                            </button>
                                        </motion.div>
                                    )}
                                </motion.div>

                                {/* Pagination */}
                                {filteredCourses.length > 0 && (
                                    <div className="flex justify-center mt-10 gap-2 items-center text-sm font-medium pb-4">
                                        <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-white dark:hover:bg-gray-800 shadow-sm"><ChevronLeft size={16} /></button>
                                        <button className="w-8 h-8 rounded-full flex items-center justify-center bg-[#022c22] text-white shadow-md">1</button>
                                        <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:bg-white dark:hover:bg-gray-800 shadow-sm">2</button>
                                        <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-white dark:hover:bg-gray-800 shadow-sm"><ChevronRight size={16} /></button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CourseDiscoveryPopup;
