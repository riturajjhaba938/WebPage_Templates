import React from 'react';
import { Search, Star, Play, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="w-full">
            {/* Dark Banner Section */}
            <div className="bg-[#1a1a1a] relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 flex justify-center items-center group">
                {/* Background Accents (Animated Gradients) */}
                <div className="absolute -left-1/4 top-0 h-[150%] w-1/2 opacity-20 transform -skew-x-12 bg-gradient-to-r from-brand-lime via-[#a3e635] to-transparent animate-pulse delay-75"></div>
                <div className="absolute -right-1/4 top-0 h-[150%] w-1/2 opacity-20 transform skew-x-12 bg-gradient-to-l from-brand-lime via-[#a3e635] to-transparent animate-pulse"></div>

                {/* Radial Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-lime opacity-10 blur-[100px] rounded-full"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center transition-transform duration-700 hover:scale-[1.02]">
                    {/* 3D Glassmorphic App Mockup */}
                    <div className="mb-12 relative w-64 md:w-80 group cursor-pointer">
                        {/* Shadow underneath */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black opacity-40 blur-xl rounded-[100%]"></div>

                        <div className="relative bg-[#252525] bg-opacity-80 backdrop-blur-md rounded-3xl border border-gray-700 shadow-2xl overflow-hidden transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(190,242,100,0.15)] transition-all duration-500 ease-out z-20">
                            {/* App Header (Mock) */}
                            <div className="h-10 bg-gray-800/80 border-b border-gray-700 flex items-center px-4 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                </div>
                                <div className="mx-auto w-24 h-4 bg-gray-700 rounded-full opacity-50"></div>
                            </div>

                            {/* App Content (Mock) */}
                            <div className="p-5 flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-lime to-brand-accent flex items-center justify-center shadow-lg">
                                        <span className="text-gray-900 font-bold text-sm">VI</span>
                                    </div>
                                    <div>
                                        <div className="w-24 h-3 bg-gray-600 rounded-full mb-1"></div>
                                        <div className="w-16 h-2 bg-gray-500 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="w-full h-24 bg-gray-700/50 rounded-xl border border-gray-600/50 flex flex-col justify-between p-3">
                                    <div className="w-full h-3 bg-gray-600 rounded-full"></div>
                                    <div className="w-3/4 h-3 bg-gray-600 rounded-full"></div>
                                    <div className="w-1/2 h-3 bg-brand-lime/70 rounded-full"></div>
                                </div>
                                <div className="flex gap-2 mt-2">
                                    <div className="h-8 flex-1 bg-brand-lime text-black rounded-lg flex items-center justify-center font-bold text-xs">Match</div>
                                    <div className="h-8 flex-1 bg-gray-700 text-white rounded-lg flex items-center justify-center font-bold text-xs border border-gray-600">Explore</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-6 -right-8 bg-[#333] border border-gray-600 p-2 rounded-xl shadow-xl flex items-center gap-2 transform rotate-6 animate-bounce delay-100 z-30 opacity-90 backdrop-blur-sm">
                            <Star size={16} className="text-yellow-400 fill-yellow-400" />
                            <span className="text-white text-xs font-bold">4.9/5 Match</span>
                        </div>
                        <div className="absolute -bottom-6 -left-8 bg-brand-lime text-black p-2 rounded-xl shadow-xl flex items-center gap-2 transform -rotate-6 animate-bounce z-30 opacity-90">
                            <Search size={16} />
                            <span className="text-xs font-bold">Find Tutors</span>
                        </div>
                    </div>

                    {/* Pagination/Dots Indicator */}
                    <div className="flex gap-3 mb-6">
                        <div className="w-8 h-2 rounded-full bg-brand-lime shadow-[0_0_10px_rgba(190,242,100,0.5)]"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-600 cursor-pointer hover:bg-gray-400 transition-colors"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-600 cursor-pointer hover:bg-gray-400 transition-colors"></div>
                    </div>
                </div>
            </div>

            {/* Headline Section */}
            <div className="bg-white py-16 md:py-24 text-center px-4">
                <div className="inline-flex items-center gap-2 bg-[#F3FCE3] px-6 py-2.5 rounded-full mb-6 shadow-sm border border-[#d9f99d] transform hover:-translate-y-1 transition-transform cursor-pointer">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bef264] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#65a30d]"></span>
                    </span>
                    <h2 className="text-xs md:text-sm font-bold text-[#4d7c0f] uppercase tracking-wider">
                        Find the Best Teachers & Courses Near You
                    </h2>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-[1.1] max-w-5xl mx-auto">
                    Pahle <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-[#84cc16]">Vedifai</span> Karo <br className="hidden md:block" /> Fir Padhai Karo
                </h1>

                <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                    The smart way to discover, evaluate, and connect with top educators in your area. Stop guessing, start verifying.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="flex items-center gap-2 bg-[#022c22] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-default transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
                        Get Started <ArrowRight size={20} />
                    </button>
                    <button className="flex items-center gap-2 bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-[#bef264] hover:bg-[#f7fee7] transition-all w-full sm:w-auto">
                        <Play size={20} className="text-[#65a30d]" fill="currentColor" /> Watch Video
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
