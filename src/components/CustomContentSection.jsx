import React, { useRef, useEffect } from 'react';
import { Search, ShieldCheck, GraduationCap } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';

const steps = [
    {
        icon: <Search className="text-white relative z-20" size={32} />,
        title: "1. Personality Test",
        desc: "Discover your true interests and identify the career path that truly fits you.",
        color: "bg-brand-default dark:bg-[#4ade80] text-white",
        ringColor: "ring-brand-default/30 dark:ring-[#4ade80]/20"
    },
    {
        icon: <ShieldCheck className="text-gray-900 relative z-20" size={32} />,
        title: "2. Expert Mentors",
        desc: "Connect with industry leaders who guide you step by step to your destination.",
        color: "bg-brand-lime text-gray-900",
        ringColor: "ring-brand-lime/50 dark:ring-brand-lime/30"
    },
    {
        icon: <GraduationCap className="text-white relative z-20" size={32} />,
        title: "3. Live Projects",
        desc: "Gain real-world experience with live projects and become a job-ready professional.",
        color: "bg-brand-dark-green dark:bg-[#064e3b] text-white",
        ringColor: "ring-brand-dark-green/30 dark:ring-[#064e3b]/40"
    }
];

const CustomContentSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    // Path animation
    const pathVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: { duration: 4, ease: "linear" }
        }
    };

    // Spark/Lightning effect moving across the line
    const sparkVariants = {
        hidden: { left: "0%", opacity: 0 },
        visible: {
            left: "100%",
            opacity: [0, 1, 1, 0],
            transition: { duration: 4, ease: "linear", times: [0, 0.05, 0.95, 1] }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 2, delayChildren: 0.1 } // Hits nodes at 0.1s, 2.1s, and 4.1s roughly
        }
    };

    const stepVariants = {
        hidden: { opacity: 0.4, scale: 0.85, filter: "grayscale(100%)", y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            filter: "grayscale(0%)",
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 15 }
        }
    };

    return (
        <section ref={sectionRef} className="w-full py-12 md:py-20 bg-gray-50 dark:bg-gray-800/50 rounded-3xl md:rounded-[3rem] my-8 md:my-12 relative overflow-hidden shadow-inner dark:shadow-none transition-colors duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-bold text-brand-accent dark:text-[#a3e635] uppercase tracking-widest mb-3 transition-colors duration-300">How it works</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white transition-colors duration-300">Simple 3-Step Process</h3>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">Skip the guesswork. Our verified platform connects you with the right educators effortlessly.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative mt-4 md:mt-16">
                    {/* Connecting Line Container (Desktop only) */}
                    <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-1 bg-gray-200 z-0 rounded-full">
                        {/* Fluid animated line fill */}
                        <motion.div
                            variants={pathVariants}
                            initial="hidden"
                            animate={controls}
                            className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-brand-lime via-brand-default to-brand-dark-green origin-left rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                        ></motion.div>

                        {/* Lightning bright spark */}
                        <motion.div
                            variants={sparkVariants}
                            initial="hidden"
                            animate={controls}
                            className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full mix-blend-screen blur-[6px] shadow-[0_0_20px_10px_rgba(255,255,255,0.9),0_0_40px_20px_rgba(16,185,129,0.8)] z-10 pointer-events-none"
                        ></motion.div>

                        <motion.div
                            variants={sparkVariants}
                            initial="hidden"
                            animate={controls}
                            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_5px_rgba(255,255,255,1)] z-20 pointer-events-none"
                        ></motion.div>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={stepVariants}
                                className="relative z-10 flex flex-col items-center text-center group cursor-default"
                            >
                                {/* Icon Circle */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, -5, 5, 0] }}
                                    transition={{ duration: 0.6 }}
                                    className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center mb-6 shadow-xl ring-8 ${step.ringColor} shadow-black/10 relative transition-all duration-300`}
                                >
                                    {/* Flash Effect initially */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-white max-w-full max-h-full"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={controls}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.8 },
                                            visible: {
                                                opacity: [0, 0.8, 0],
                                                scale: [0.8, 1.4, 1.6],
                                                transition: {
                                                    delay: index * 2 + 0.1, // Matches staggerChildren + delay
                                                    duration: 1.2,
                                                    ease: "easeOut"
                                                }
                                            }
                                        }}
                                    />
                                    {step.icon}
                                    {/* Step number badge */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-900 dark:text-white font-bold text-sm shadow-md group-hover:bg-brand-default dark:group-hover:bg-[#4ade80] group-hover:text-white dark:group-hover:text-gray-900 group-hover:border-transparent transition-all duration-300 z-30">
                                        {index + 1}
                                    </div>
                                </motion.div>

                                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-default dark:group-hover:text-[#4ade80] transition-colors duration-300">{step.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">{step.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CustomContentSection;
