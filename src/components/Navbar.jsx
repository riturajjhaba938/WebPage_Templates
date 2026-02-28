import React, { useState, useEffect } from 'react';
import vedifaiLogo from '../assets/vedifai-logo.jpg';
import { Menu, X, User, Bell, Sun, Moon, ChevronDown, Tag, Flame, Star, Clock, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import notificationsData from '../data/notificationsData.json';

const PREDEFINED_TEXTS = [
    "VEDIFAI",
    "India's On-Demand Personalised Learning Platform for Every Student"
];

const Navbar = ({ theme, toggleTheme, onHomeClick = () => { }, onCoursesClick = () => { }, onSupportClick = () => { }, onMentorsClick = () => { } }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    // Notifications State
    const [currentNotification, setCurrentNotification] = useState(notificationsData[0]);
    const [showNotification, setShowNotification] = useState(false);

    const categories = {
        KNOWLEDGE: [
            "ACADEMIC K 12",
            "JEE/NEET/GATE",
            "UPSC/STATE/PCS",
            "SAT/CAT/CLAT"
        ],
        SKILL: [
            "AI & MACHINE LEARNING",
            "DATA SCI & ANALYST",
            "SOFTWARE DEV.",
            "90 DAYS JOB READY"
        ],
        VALUES: [
            "CIVIL SENS",
            "CRITICAL THINKING",
            "ADDICTION MANAGMENT",
            "ANGER MANAGMENT",
            "PERSONALITY DEVELOPMENT",
            "LEADERSHIP",
            "REWIRING YOUR SELF",
            "CREATIVE DESIGN"
        ]
    };

    // Rotate text every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % PREDEFINED_TEXTS.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    // Notification Loop
    useEffect(() => {
        const notifyInterval = setInterval(() => {
            // Pick random notification
            const randomNotif = notificationsData[Math.floor(Math.random() * notificationsData.length)];
            setCurrentNotification(randomNotif);
            setShowNotification(true);

            // Hide after 6 seconds
            setTimeout(() => {
                setShowNotification(false);
            }, 6000);
        }, 20000); // Trigger every 20 seconds

        return () => clearInterval(notifyInterval);
    }, []);

    const getNotificationIcon = (type) => {
        switch (type) {
            case 'sale': return <Tag size={16} className="text-brand-lime" />;
            case 'fire': return <Flame size={16} className="text-orange-500" />;
            case 'star': return <Star size={16} className="text-yellow-400" />;
            case 'clock': return <Clock size={16} className="text-blue-400" />;
            case 'rocket': return <Rocket size={16} className="text-purple-400" />;
            default: return <Bell size={16} className="text-brand-lime" />;
        }
    };

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

                            {/* Mega Menu Parent */}
                            <div className="relative group">
                                <button
                                    onClick={() => onCoursesClick()}
                                    className="px-4 py-1.5 rounded-md hover:bg-white/50 dark:hover:bg-white/10 text-[#064e3b] dark:text-[#a3e635] font-bold text-xs transition-colors cursor-pointer flex items-center gap-1"
                                >
                                    COURSES <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                                </button>

                                {/* Mega Menu Dropdown */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-6 w-[800px] flex gap-8">
                                        {Object.entries(categories).map(([category, topics]) => (
                                            <div key={category} className="flex-1">
                                                <h3 className="text-sm font-black text-[#022c22] dark:text-brand-lime mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                                                    {category}
                                                </h3>
                                                <ul className="space-y-2">
                                                    {topics.map(topic => (
                                                        <li key={topic}>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    onCoursesClick(topic);
                                                                }}
                                                                className="text-left w-full text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-brand-lime dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 px-3 py-2 rounded-lg transition-colors"
                                                            >
                                                                {topic}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button onClick={onMentorsClick} className="px-4 py-1.5 rounded-md hover:bg-white/50 dark:hover:bg-white/10 text-[#064e3b] dark:text-[#a3e635] font-bold text-xs transition-colors cursor-pointer">MENTORS</button>

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
                        <div className="relative">
                            <button className="ml-2 p-2 rounded-full relative bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-brand-accent dark:hover:text-[#bef264] transition-colors relative z-20">
                                <Bell size={20} />
                                {/* Notification Badge */}
                                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white dark:border-gray-900"></span>
                            </button>

                            {/* Animated Notification Popup */}
                            <AnimatePresence>
                                {showNotification && currentNotification && (
                                    <motion.a
                                        href={currentNotification.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{ duration: 0.3, type: 'spring', bounce: 0.4 }}
                                        className="absolute top-14 right-0 w-72 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] p-4 flex gap-4 cursor-pointer hover:border-brand-lime/50 dark:hover:border-brand-lime/50 group z-50 transition-colors"
                                    >
                                        <div className="mt-1 bg-gray-50 dark:bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                                            {getNotificationIcon(currentNotification.iconType)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1 group-hover:text-brand-lime transition-colors leading-tight">
                                                {currentNotification.title}
                                            </h4>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">
                                                {currentNotification.message}
                                            </p>
                                        </div>
                                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-xs font-bold text-brand-lime tracking-widest hidden sm:block">GO</span>
                                        </div>
                                    </motion.a>
                                )}
                            </AnimatePresence>
                        </div>

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

                        <div>
                            <button
                                onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                                className="w-full flex items-center justify-between text-left font-bold text-gray-600 dark:text-gray-400 py-2 border-b border-gray-50 dark:border-gray-800 cursor-pointer"
                            >
                                COURSES
                                <ChevronDown size={16} className={`transition-transform duration-300 ${mobileCoursesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {mobileCoursesOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden bg-gray-50 dark:bg-gray-800/50 rounded-lg mt-2 mb-2"
                                    >
                                        <div className="p-4 space-y-6">
                                            {Object.entries(categories).map(([category, topics]) => (
                                                <div key={category}>
                                                    <h3 className="text-xs font-black text-[#022c22] dark:text-brand-lime mb-2 pl-2">
                                                        {category}
                                                    </h3>
                                                    <ul className="space-y-1">
                                                        {topics.map(topic => (
                                                            <li key={topic}>
                                                                <button
                                                                    onClick={() => {
                                                                        onCoursesClick(topic);
                                                                        setIsOpen(false);
                                                                    }}
                                                                    className="text-left w-full text-xs font-bold text-gray-500 dark:text-gray-400 py-2 pl-4 active:bg-gray-200 dark:active:bg-gray-700 rounded-md transition-colors"
                                                                >
                                                                    {topic}
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <button onClick={() => { onMentorsClick(); setIsOpen(false); }} className="text-left font-bold text-gray-600 dark:text-gray-400 py-2 border-b border-gray-50 dark:border-gray-800 cursor-pointer">MENTORS</button>
                        <button onClick={() => { onSupportClick(); setIsOpen(false); }} className="text-left font-bold text-gray-600 dark:text-gray-400 py-2 cursor-pointer">SUPPORT</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
