import React from 'react';
import { Linkedin, Twitter, ArrowLeft, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import mentorsData from '../data/mentorsData.json';

const MentorsPage = ({ onNavigate, onBack }) => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-24 transition-colors duration-300 font-sans">

            {/* Header / Hero */}
            <div className="bg-[#0b3b24] dark:bg-[#022c22] pt-32 pb-24 px-4 text-center border-b-[8px] border-[#84cc16]">
                <div className="max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-2">
                        <Users size={32} className="text-[#84cc16]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Our Expert Mentors
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Learn directly from industry leaders and subject matter experts from top global institutions.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">

                {/* Back Button & Actions */}
                <div className="flex justify-between items-center mb-12 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#0f4d38] dark:hover:text-[#84cc16] font-bold text-sm bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </button>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600">
                        Showing {mentorsData.length} Mentors
                    </div>
                </div>

                {/* Mentors Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {mentorsData.map((mentor) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            key={mentor.id}
                            onClick={() => onNavigate && onNavigate('mentorProfile', mentor.id)}
                            className="group relative h-[280px] perspective-1000 cursor-pointer"
                        >
                            <div className="relative w-full h-full transition-all duration-500 transform style-preserve-3d group-hover:rotate-y-180">
                                {/* Front Side */}
                                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl flex flex-col items-center p-6 backface-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300">
                                    {mentor.trending && (
                                        <div className="absolute top-3 right-3 bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wide">
                                            Trending
                                        </div>
                                    )}
                                    <div className="w-24 h-24 rounded-full mb-4 border-4 border-gray-50 dark:border-gray-700 overflow-hidden shadow-sm transition-colors duration-300">
                                        <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover rounded-full" />
                                    </div>
                                    <h3 className="text-gray-900 dark:text-white font-black text-lg text-center leading-tight mb-1">{mentor.name}</h3>
                                    <p className="text-[#65a30d] dark:text-[#a3e635] text-xs font-bold text-center mb-1">{mentor.role}</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-[11px] text-center mt-auto font-medium bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-lg w-full">@ {mentor.company}</p>
                                </div>

                                {/* Back Side (Hover Info) */}
                                <div className="absolute inset-0 bg-[#064e3b] dark:bg-[#022c22] rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 text-center backface-hidden rotate-y-180 border border-green-800 transition-colors duration-300">
                                    <p className="text-white text-xs font-medium mb-5 leading-relaxed line-clamp-4 opacity-90">
                                        "{mentor.bio}"
                                    </p>
                                    <div className="flex space-x-3 mb-4">
                                        <div className="p-2 bg-white/10 text-white rounded-full hover:bg-[#84cc16] hover:text-[#022c22] transition-colors duration-300">
                                            <Linkedin size={16} />
                                        </div>
                                        <div className="p-2 bg-white/10 text-white rounded-full hover:bg-[#84cc16] hover:text-[#022c22] transition-colors duration-300">
                                            <Twitter size={16} />
                                        </div>
                                    </div>
                                    <button className="bg-[#84cc16] text-[#022c22] text-xs font-black px-6 py-2 rounded-full shadow-lg hover:bg-white transition-colors duration-300 uppercase tracking-wider w-full">
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CSS for Flip Effect */}
                <style jsx>{`
                    .perspective-1000 { perspective: 1000px; }
                    .style-preserve-3d { transform-style: preserve-3d; }
                    .rotate-y-180 { transform: rotateY(180deg); }
                    .backface-hidden { backface-visibility: hidden; }
                `}</style>

            </div>
        </div>
    );
};

export default MentorsPage;
