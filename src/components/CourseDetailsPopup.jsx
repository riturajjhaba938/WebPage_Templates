import React from 'react';
import { X, Star, Clock, CheckCircle, GraduationCap, Video, Users } from 'lucide-react';

const CourseDetailsPopup = ({ course, isOpen, onClose }) => {
    if (!isOpen || !course) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden relative border border-gray-200 dark:border-gray-700 max-h-[90vh] flex flex-col">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10 backdrop-blur-md"
                >
                    <X size={20} />
                </button>

                {/* Header Image */}
                <div className="relative h-48 md:h-64 shrink-0 bg-gray-100 dark:bg-gray-900">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover mix-blend-overlay dark:opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
                        {course.verified && (
                            <span className="bg-[#a3e635] text-[#064e3b] text-xs font-bold px-3 py-1 rounded-full w-max flex items-center gap-1 shadow-sm">
                                <CheckCircle size={12} /> VERIFIED COURSE
                            </span>
                        )}
                        <h2 className="text-2xl md:text-3xl font-black text-white leading-tight drop-shadow-md">{course.title}</h2>
                        <p className="text-gray-200 font-medium drop-shadow-sm">{course.mentor}</p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto">
                    <div className="flex flex-wrap items-center justify-between mb-8 gap-4 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-2xl border border-gray-200 dark:border-gray-600">
                        <div className="text-center sm:text-left">
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-bold mb-1">Price</p>
                            <p className="text-3xl font-black text-[#0f4d38] dark:text-[#a3e635]">{course.price}</p>
                        </div>
                        <div className="flex gap-6">
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-1 text-yellow-500 font-bold text-lg">
                                    <Star size={18} fill="currentColor" /> {course.rating}
                                </div>
                                <span className="text-xs text-gray-500 dark:text-gray-400 tracking-wide">{course.reviews} reviews</span>
                            </div>
                            <div className="w-px bg-gray-200 dark:bg-gray-600"></div>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-1 text-gray-700 dark:text-gray-200 font-bold text-lg">
                                    <Clock size={16} /> {course.duration}
                                </div>
                                <span className="text-xs text-gray-500 dark:text-gray-400 tracking-wide">Duration</span>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Course Highlights</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
                                <GraduationCap size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Subject Area</p>
                                <p className="font-bold text-gray-900 dark:text-gray-100">{course.subject}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-500">
                                <Users size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Difficulty Level</p>
                                <p className="font-bold text-gray-900 dark:text-gray-100">{course.level}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-500">
                                <Video size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Delivery Format</p>
                                <p className="font-bold text-gray-900 dark:text-gray-100">{course.format}</p>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-[#0f4d38] dark:bg-[#bef264] text-white dark:text-[#064e3b] font-bold text-lg py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                        Enroll Now
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-4">Vedifai 7-Day Money-Back Guarantee applies.</p>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPopup;
