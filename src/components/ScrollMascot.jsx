import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollMascot = ({ onChatClick = () => { } }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [showHelpBubble, setShowHelpBubble] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);

            // Show mascot after scrolling down a bit
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Periodic Help Bubble Logic
    useEffect(() => {
        if (!isVisible) return; // Don't run timer if hiding

        const helpInterval = setInterval(() => {
            setShowHelpBubble(true);

            // Hide after 5 seconds
            setTimeout(() => {
                setShowHelpBubble(false);
            }, 5000);
        }, 12000); // Ask every 12 seconds

        return () => clearInterval(helpInterval);
    }, [isVisible]);

    // If we're at the very top, don't show the mascot
    if (!isVisible) return null;

    // Calculate vertical position (keep it within bounds so it doesn't go off-screen)
    // The top constraint ensures it doesn't go above a certain point, e.g., navbar
    // The bottom constraint ensures it stays above footer
    const verticalPos = `calc(${Math.max(10, Math.min(scrollProgress, 90))}% )`;

    return (
        <div
            className="fixed right-2 z-[90] pointer-events-none transition-all duration-100 ease-out"
            style={{ top: verticalPos }}
        >
            <div className="relative group pointer-events-auto">
                {/* Speech Bubble (visible periodically or on hover) */}
                <AnimatePresence>
                    {showHelpBubble && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8, x: 10 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.8, x: 10 }}
                            transition={{ type: 'spring', bounce: 0.5 }}
                            onClick={onChatClick}
                            className="absolute right-16 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 text-[#022c22] dark:text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg whitespace-nowrap hidden sm:block pointer-events-auto border border-brand-lime/50 dark:border-brand-lime/50 cursor-pointer hover:bg-brand-lime/10 dark:hover:bg-brand-lime/10 transition-colors z-50"
                        >
                            Need some help?
                            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-gray-800 transform rotate-45 border-r border-t border-brand-lime/50 dark:border-brand-lime/50 transition-colors"></div>
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Mascot Body */}
                <div
                    onClick={onChatClick}
                    className="w-12 h-16 bg-[#bef264] rounded-full flex flex-col items-center justify-center relative shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] border-2 border-[#022c22] transform hover:scale-110 transition-transform cursor-pointer animate-bounce-slow overflow-hidden"
                >

                    {/* Character Face */}
                    <div className="flex gap-1.5 mt-1 relative z-10">
                        {/* Eyes */}
                        <div className="w-2 h-2.5 bg-[#022c22] rounded-full animate-blink relative">
                            <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                        </div>
                        <div className="w-2 h-2.5 bg-[#022c22] rounded-full animate-blink relative">
                            <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                        </div>
                    </div>

                    {/* Mouth */}
                    <div className="w-3 h-2 border-b-2 border-[#022c22] rounded-full mt-1 z-10"></div>

                    {/* Cute Details */}
                    <div className="absolute top-1 right-2 w-1.5 h-1.5 bg-[#a3e635] rounded-full mix-blend-multiply opacity-50"></div>
                    <div className="absolute top-1 left-2 w-1.5 h-1.5 bg-[#a3e635] rounded-full mix-blend-multiply opacity-50"></div>
                </div>

                {/* Arms 'holding' the scrollbar */}
                <div className="absolute -right-1 top-1/2 w-4 h-1.5 bg-[#bef264] border-y-2 border-r-2 border-[#022c22] rounded-r-full"></div>
            </div>

            {/* Custom Animation Styles */}
            <style jsx>{`
                @keyframes blink {
                    0%, 96%, 98% { transform: scaleY(1); }
                    97% { transform: scaleY(0.1); }
                }
                .animate-blink {
                    animation: blink 4s infinite;
                }
                @keyframes bounceSlow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                .animate-bounce-slow {
                    animation: bounceSlow 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default ScrollMascot;
