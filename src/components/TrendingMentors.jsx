import React, { useState, useEffect } from 'react';
import { Linkedin, Twitter, Linkedin as LinkedinIcon, Twitter as TwitterIcon } from 'lucide-react';
import apiService from '../api/apiService';
import { mapTeacherToMentorCard } from '../utils/dataMapping';

const TrendingMentors = ({ onNavigate }) => {
    const [mentors, setMentors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendingMentors = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await apiService.getTeachers({ page: 1, limit: 5 });
                const mapped = (data.teachers || []).map(mapTeacherToMentorCard);
                setMentors(mapped);
            } catch (err) {
                setError(err.message || 'Failed to fetch mentors');
            } finally {
                setLoading(false);
            }
        };
        fetchTrendingMentors();
    }, []);

    return (
        <section className="bg-white dark:bg-gray-900 py-4 mb-4 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4">
                {/* Dark Green Container */}
                <div className="bg-[#022c22] dark:bg-gray-800 rounded-[2rem] p-8 relative text-white border border-transparent dark:border-gray-700 transition-colors duration-300">

                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white text-center w-full">
                            Our Trending Mentor/SME
                        </h2>
                    </div>

                    {/* Slots Grid */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {loading ? (
                            [...Array(4)].map((_, i) => (
                                <div key={i} className="w-32 h-44 md:w-36 md:h-48 bg-white/5 animate-pulse rounded-xl"></div>
                            ))
                        ) : error ? (
                            <div className="text-white/50 text-xs font-bold py-10">{error}</div>
                        ) : (
                            mentors.map((mentor) => (
                                <div key={mentor.id} onClick={() => onNavigate && onNavigate('mentorProfile', mentor.id)} className="group relative w-32 h-44 md:w-36 md:h-48 perspective-1000 cursor-pointer">
                                    <div className="relative w-full h-full transition-all duration-500 transform style-preserve-3d group-hover:rotate-y-180">

                                        {/* Front Side */}
                                        <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-xl shadow-lg flex flex-col items-center p-3 backface-hidden border border-transparent dark:border-gray-700 transition-colors duration-300">
                                            <div className="w-20 h-20 rounded-full mb-3 border-2 border-brand-light dark:border-gray-700 overflow-hidden p-0.5 transition-colors duration-300">
                                                <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover rounded-full" />
                                            </div>
                                            <h3 className="text-gray-900 dark:text-white font-bold text-xs text-center leading-tight mb-1 transition-colors duration-300 line-clamp-1">{mentor.name}</h3>
                                            <p className="text-[#84cc16] dark:text-[#a3e635] text-[10px] font-semibold text-center transition-colors duration-300">{mentor.role}</p>
                                            <p className="text-gray-500 dark:text-gray-400 text-[9px] text-center mt-auto font-medium transition-colors duration-300">@ {mentor.company}</p>
                                        </div>

                                        {/* Back Side (Hover Info) */}
                                        <div className="absolute inset-0 bg-[#bef264] dark:bg-[#064e3b] rounded-xl shadow-xl flex flex-col items-center justify-center p-3 text-center backface-hidden rotate-y-180 transition-colors duration-300">
                                            <p className="text-[#022c22] dark:text-white text-[10px] font-bold mb-3 leading-snug line-clamp-3 transition-colors duration-300">
                                                {mentor.bio ? `"${mentor.bio}"` : "Dedicated educator helping students achieve their career goals."}
                                            </p>
                                            <div className="flex space-x-2 mb-2">
                                                <div className="p-1 bg-[#022c22]/10 dark:bg-black/20 text-[#022c22] dark:text-white rounded-full hover:bg-[#022c22] dark:hover:bg-[#a3e635] hover:text-white dark:hover:text-gray-900 transition-colors duration-300">
                                                    <LinkedinIcon size={12} />
                                                </div>
                                                <div className="p-1 bg-[#022c22]/10 dark:bg-black/20 text-[#022c22] dark:text-white rounded-full hover:bg-[#022c22] dark:hover:bg-[#a3e635] hover:text-white dark:hover:text-gray-900 transition-colors duration-300">
                                                    <TwitterIcon size={12} />
                                                </div>
                                            </div>
                                            <button className="bg-[#022c22] dark:bg-[#bef264] text-white dark:text-[#064e3b] text-[9px] font-bold px-3 py-1 rounded-full hover:bg-black dark:hover:bg-white transition-colors duration-300 mt-2">
                                                Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}

                        {/* 'More' Card */}
                        {!loading && !error && (
                            <div onClick={() => onNavigate && onNavigate('mentors')} className="w-32 h-44 md:w-36 md:h-48 bg-white/10 rounded-xl border-2 border-dashed border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all group">
                                <span className="text-white/70 font-bold text-sm group-hover:text-white group-hover:scale-110 transition-all">View All</span>
                            </div>
                        )}
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
        </section>
    );
};

export default TrendingMentors;
