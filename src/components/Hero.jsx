import React, { useState, useEffect } from 'react';
import { Search, Star, Play, ArrowRight, ShieldCheck, MapPin, CheckCircle, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import vedifaiLogo from '../assets/vedifai-logo.jpg';

// Mock Data for Slides - focusing specifically on Vedifai's value proposition
const heroSlides = [
    {
        id: 1,
        title: "Vedifai Smart Match",
        subtitle: "Find The Perfect Educator",
        description: "Our AI-driven engine analyzes your learning style, goals, and location to connect you with the ideal tutors and institutes.",
        accentColor: "from-brand-lime to-brand-accent",
        glowColor: "bg-brand-lime",
        icon: <Search className="text-brand-dark-green" size={32} />,
        visual: (
            <div className="relative w-full max-w-sm mx-auto h-56 bg-[#252525] rounded-2xl border border-gray-700 shadow-xl overflow-hidden flex flex-col p-5">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-lime to-brand-accent flex items-center justify-center shadow-lg">
                        <Users className="text-gray-900" size={24} />
                    </div>
                    <div>
                        <div className="text-white font-bold">Matching Tutors...</div>
                        <div className="text-brand-lime text-xs">Analyzing prerequisites</div>
                    </div>
                </div>
                <div className="space-y-3 flex-1 overflow-hidden relative">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="w-full bg-gray-800 rounded-lg p-3 flex items-center gap-3 border border-brand-lime/30"
                    >
                        <div className="w-8 h-8 rounded-full bg-gray-600"></div>
                        <div className="flex-1 h-2 bg-gray-600 rounded"></div>
                        <div className="text-brand-lime font-bold text-sm">98% Match</div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, type: "spring" }}
                        className="w-full bg-gray-800 rounded-lg p-3 flex items-center gap-3"
                    >
                        <div className="w-8 h-8 rounded-full bg-gray-600"></div>
                        <div className="flex-1 h-2 bg-gray-600 rounded"></div>
                        <div className="text-yellow-400 font-bold text-sm">85% Match</div>
                    </motion.div>
                </div>
            </div>
        )
    },
    {
        id: 2,
        title: "Rigorous Verification",
        subtitle: "100% Trusted Platform",
        description: "Every educator and institute undergoes Vedifai's strict verification process for background, credentials, and teaching quality.",
        accentColor: "from-blue-400 to-indigo-500",
        glowColor: "bg-blue-500",
        icon: <ShieldCheck className="text-blue-900" size={32} />,
        visual: (
            <div className="relative w-full max-w-sm mx-auto h-56 bg-[#252525] rounded-2xl border border-gray-700 shadow-xl p-5 flex flex-col justify-center items-center">
                <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 border-2 border-blue-500/50 relative"
                >
                    <motion.div
                        className="absolute inset-0 rounded-full border-t-2 border-blue-400"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                    <CheckCircle className="text-blue-400" size={40} />
                </motion.div>
                <div className="text-white font-bold text-xl mb-3">Vedifai Certified</div>
                <div className="flex gap-1.5 w-full max-w-[200px]">
                    {[1, 2, 3, 4, 5].map(i => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: 6 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex-1 bg-blue-400 rounded-full"
                        ></motion.div>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: 3,
        title: "Real Student Reviews",
        subtitle: "Unbiased Feedback",
        description: "Make informed decisions based on genuine, verified ratings and reviews from real students in your locality.",
        accentColor: "from-yellow-400 to-orange-500",
        glowColor: "bg-yellow-500",
        icon: <Star className="text-yellow-900 fill-yellow-900" size={32} />,
        visual: (
            <div className="relative w-full max-w-sm mx-auto h-56 bg-[#252525] rounded-2xl border border-gray-700 shadow-xl p-5 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full bg-gray-600 border border-gray-800"></div>)}
                    </div>
                    <div className="bg-yellow-400/20 text-yellow-400 px-3 py-1.5 rounded-md text-sm font-bold flex items-center gap-1">
                        <Star size={14} className="fill-yellow-400" /> 4.9
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gray-800 rounded-xl p-4 border border-gray-700 relative"
                >
                    <div className="absolute top-2 left-2 text-gray-500 text-3xl font-serif">"</div>
                    <p className="text-gray-300 text-sm mt-3 ml-4 relative z-10 italic">"Vedifai helped me find the best physics tutor within miles. Totally verified!"</p>
                    <div className="mt-2 text-xs text-gray-500 text-right">- Rahul S.</div>
                </motion.div>
            </div>
        )
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000); // 5 seconds per slide
        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: { opacity: 0, x: 50 },
        center: { zIndex: 1, x: 0, opacity: 1 },
        exit: { zIndex: 0, opacity: 0, x: -50 }
    };

    return (
        <div className="w-full">
            {/* Dark Interactive Feature Slideshow Banner (Smaller height) */}
            <div className="bg-[#1a1a1a] relative overflow-hidden py-24 flex justify-center items-center group">
                {/* Background Accents */}
                <div className="absolute -left-1/4 top-0 h-[200%] w-1/2 opacity-10 transform -skew-x-12 bg-gradient-to-r from-gray-800 to-transparent"></div>

                {/* Dynamic Radial Glow tracking the active slide color */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 blur-[150px] rounded-full transition-colors duration-1000 ${heroSlides[currentSlide].glowColor}`}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16">
                    {/* Slideshow Container */}
                    <div className="relative min-h-[350px] md:min-h-[300px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="w-full"
                            >
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    {/* Text Content */}
                                    <div className="text-left order-2 md:order-1">
                                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${heroSlides[currentSlide].accentColor} mb-6 shadow-lg`}>
                                            {heroSlides[currentSlide].icon}
                                        </div>
                                        <h3 className={`font-bold tracking-widest text-sm uppercase mb-3 ${heroSlides[currentSlide].glowColor.replace('bg-', 'text-')}`}>
                                            {heroSlides[currentSlide].title}
                                        </h3>
                                        <h4 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                            {heroSlides[currentSlide].subtitle}
                                        </h4>
                                        <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
                                            {heroSlides[currentSlide].description}
                                        </p>
                                    </div>

                                    {/* Visual Content Element */}
                                    <div className="w-full order-1 md:order-2">
                                        {heroSlides[currentSlide].visual}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination/Dots Indicator */}
                    <div className="flex gap-4 mt-16 justify-center">
                        {heroSlides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className="group relative py-2 px-1 focus:outline-none"
                            >
                                <div className={`h-1.5 rounded-full transition-all duration-500 ease-out ${currentSlide === idx
                                    ? `w-16 ${heroSlides[currentSlide].glowColor} opacity-90 shadow-[0_0_15px_rgba(255,255,255,0.2)]`
                                    : 'w-6 bg-gray-600 group-hover:bg-gray-400 group-hover:w-10'
                                    }`}></div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Headline Section */}
            <div className="bg-white dark:bg-gray-900 py-16 md:py-24 text-center px-4 relative transition-colors duration-300">
                {/* Visual overlap connector */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-xl overflow-hidden p-2 transition-colors duration-300">
                    <img src={vedifaiLogo} alt="Vedifai Logo Icon" className="w-full h-full object-contain rounded-full" />
                </div>

                <div className="inline-flex items-center gap-2 bg-[#F3FCE3] dark:bg-[#a3e635]/10 px-6 py-2.5 rounded-full mb-8 shadow-sm border border-[#d9f99d] dark:border-[#a3e635]/30 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer mt-8">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bef264] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#65a30d]"></span>
                    </span>
                    <h2 className="text-xs md:text-sm font-bold text-[#4d7c0f] uppercase tracking-wider">
                        India's #1 Verified Educator Network
                    </h2>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-[1.1] max-w-5xl mx-auto transition-colors duration-300">
                    Find the Right <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-[#84cc16] dark:from-[#bef264] dark:to-[#4ade80]">Mentor</span>, <br className="hidden md:block" /> Anytime, Anywhere
                </h1>

                <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium transition-colors duration-300">
                    The smart way to discover, evaluate, and connect with top educators in your area. Stop guessing, start verifying.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button onClick={() => onNavigate('courses')} className="flex items-center justify-center gap-2 bg-[#022c22] dark:bg-[#a3e635] text-white dark:text-[#064e3b] px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-default dark:hover:bg-[#bef264] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto cursor-pointer">
                        Find Tutors Now <ArrowRight size={20} />
                    </button>
                    <button onClick={() => onNavigate('courses')} className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-gray-200 dark:border-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:border-[#bef264] dark:hover:border-[#bef264] hover:bg-[#f7fee7] dark:hover:bg-gray-700 transition-all duration-300 w-full sm:w-auto cursor-pointer">
                        <Play size={20} className="text-[#65a30d] dark:text-[#bef264]" fill="currentColor" /> See How It Works
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
