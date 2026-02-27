import React, { useState, useEffect } from 'react';
import vedifaiLogo from '../assets/vedifai-logo.jpg';
import { Menu, X, User, Bell, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PREDEFINED_TEXTS = [
    "VEDIFAI",
    "India's On-Demand Personalised Learning Platform for Every Student"
];

const Navbar = ({ theme, toggleTheme, onHomeClick = () => { }, onCoursesClick = () => { }, onSupportClick = () => { } }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    // Rotate text every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % PREDEFINED_TEXTS.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo with New Image and Animated Brand Name */}
                    <div className="flex items-center gap-2 cursor-pointer w-[60%] md:w-auto md:min-w-[300px]" onClick={onHomeClick}>
                        <img src={vedifaiLogo} alt="Vedifai Logo" className="h-[40px] md:h-[50px] w-auto object-contain rounded-lg flex-shrink-0" />
                        <div className="flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={textIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full flex"
                                >
                                    {/* Typing Effect wrapper wrapping words so they don't break characters mid-word */}
                                    <div className={`font-bold text-gray-900 dark:text-white transition-colors flex flex-wrap gap-x-1 ${textIndex === 0 ? 'text-xl md:text-2xl tracking-tighter uppercase' : 'text-[11px] leading-[1.2] md:text-sm md:leading-tight'}`}>
                                        {PREDEFINED_TEXTS[textIndex].split(' ').map((word, wordIndex) => (
                                            <span key={`${textIndex}-w${wordIndex}`} className="whitespace-nowrap flex">
                                                {word.split('').map((char, charIndex) => {
                                                    const globalIndex = PREDEFINED_TEXTS[textIndex].substring(0, PREDEFINED_TEXTS[textIndex].indexOf(word)).length + charIndex;
                                                    return (
                                                        <motion.span
                                                            key={`${textIndex}-c${globalIndex}`}
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ duration: 0.05, delay: globalIndex * 0.03 }}
                                                        >
                                                            {char}
                                                        </motion.span>
                                                    );
                                                })}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        <div className="flex bg-[#bef264] dark:bg-[#a3e635]/20 rounded-lg p-1 space-x-1 transition-colors duration-300">
                            <button onClick={onHomeClick} className="px-4 py-1.5 rounded-md hover:bg-white/50 dark:hover:bg-white/10 text-[#064e3b] dark:text-[#a3e635] font-bold text-xs shadow-sm transition-colors cursor-pointer">HOME</button>
                            <button onClick={onCoursesClick} className="px-4 py-1.5 rounded-md hover:bg-white/50 dark:hover:bg-white/10 text-[#064e3b] dark:text-[#a3e635] font-bold text-xs transition-colors cursor-pointer">COURSES</button>
                            <button onClick={onSupportClick} className="px-4 py-1.5 rounded-md hover:bg-[#84cc16] hover:text-white dark:hover:bg-[#84cc16] text-[#064e3b] dark:text-[#a3e635] font-bold text-xs transition-colors cursor-pointer">SUPPORT</button>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="ml-4 p-2 rounded-full relative bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-brand-accent dark:hover:text-[#bef264] transition-colors"
                            aria-label="Toggle Dark Mode"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {/* Notifications Icon */}
                        <button className="ml-2 p-2 rounded-full relative bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-brand-accent dark:hover:text-[#bef264] transition-colors">
                            <Bell size={20} />
                            {/* Notification Badge */}
                            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white dark:border-gray-900"></span>
                        </button>

                        {/* User Icon */}
                        <button className="ml-2 p-2 rounded-full bg-[#bef264] text-[#064e3b] hover:bg-[#a3e635] transition-colors">
                            <User size={20} />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        {/* Theme Toggle for Mobile */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-gray-600 dark:text-gray-300"
                        >
                            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 right-0 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
                    <div className="flex flex-col p-4 space-y-2">
                        <button onClick={() => { onHomeClick(); setIsOpen(false); }} className="text-left font-bold text-gray-900 dark:text-white py-2 border-b border-gray-50 dark:border-gray-800 cursor-pointer">HOME</button>
                        <button onClick={() => { onCoursesClick(); setIsOpen(false); }} className="text-left font-bold text-gray-600 dark:text-gray-400 py-2 border-b border-gray-50 dark:border-gray-800 cursor-pointer">COURSES</button>
                        <button onClick={() => { onSupportClick(); setIsOpen(false); }} className="text-left font-bold text-gray-600 dark:text-gray-400 py-2 cursor-pointer">SUPPORT</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
