import React from 'react';
import { Search } from 'lucide-react';


const Hero = () => {
    return (
        <div className="w-full">
            {/* Dark Banner Section */}
            <div className="bg-[#1a1a1a] relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 flex justify-center items-center">
                {/* Background Accents (chevrons) */}
                <div className="absolute left-0 top-0 h-full w-1/3 opacity-20 transform -skew-x-12 bg-gradient-to-r from-brand-lime to-transparent"></div>
                <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 transform skew-x-12 bg-gradient-to-l from-brand-lime to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
                    {/* 3D Hand/Phone Placeholder - Visualizing the screenshot */}
                    <div className="mb-8 relative">
                        <div className="w-32 h-48 bg-gray-700 rounded-xl border-4 border-gray-600 shadow-2xl transform rotate-12 flex items-center justify-center">
                            <span className="text-gray-400 text-xs">App UI</span>
                        </div>
                        {/* Sparkles/Decorations */}
                        <div className="absolute -top-4 -right-4 text-brand-lime text-4xl">✨</div>
                        <div className="absolute -bottom-4 -left-4 text-brand-lime text-4xl">✨</div>
                    </div>

                    {/* Dots */}
                    <div className="flex gap-2 mb-8">
                        <div className="w-3 h-3 rounded-full bg-brand-lime"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                    </div>
                </div>
            </div>

            {/* Headline Section */}
            <div className="bg-white py-12 text-center">
                <div className="inline-block bg-[#D9F99D] px-6 py-2 rounded-full mb-4 shadow-sm border border-[#bef264]">
                    <h2 className="text-xs md:text-sm font-extrabold text-[#3F6212] uppercase tracking-wide">
                        Find Best Teacher/Courses Near You
                    </h2>
                </div>

                <h1 className="text-xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">
                    Pahle <span className="text-brand-default">Vedifai</span> Karo Fir Padhai Karo
                </h1>
            </div>
        </div>
    );
};

export default Hero;
