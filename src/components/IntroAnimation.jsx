import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import mascotImage from '../assets/loading-logo.jpg';

const IntroAnimation = ({ onComplete }) => {
    const [isFadingOut, setIsFadingOut] = useState(false);
    const slogan = "Padhai se Result tak...";

    useEffect(() => {
        // Start fading out the entire screen after 4.5 seconds
        const fadeTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, 4500);

        // Notify parent to unmount after fade transition (5.2s total)
        const completeTimer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 5200);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    // Framer Motion Variants for Slogan Parent
    const sloganContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.8,
            },
        },
    };

    // Framer Motion Variants for Slogan Children (Letters)
    const sloganLetter = {
        hidden: { opacity: 0, y: 15, scale: 0.9, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            }
        },
    };

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#022c22] transition-opacity duration-700 ease-in-out ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            {/* Pulsing Glow Background */}
            <div className="absolute w-[300px] h-[300px] bg-[#8cc63f]/20 rounded-full blur-[100px] animate-pulse"></div>

            {/* Container for Image and Spinner */}
            <div className="relative flex items-center justify-center p-8">

                {/* Outer spinning dashed ring. */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#8cc63f] border-r-[#8cc63f] opacity-80 animate-spin" style={{ animationDuration: '1.5s' }}></div>

                {/* Inner counter-spinning ring */}
                <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-[#bef264] border-l-[#bef264] opacity-60 animate-[spin_2s_linear_infinite_reverse]"></div>

                {/* Mascot Image with slow pulse/pumping effect */}
                <img
                    src={mascotImage}
                    alt="Vedifai Mascot Loading"
                    className="w-48 h-48 rounded-full object-cover relative z-10 animate-[pulse_1.5s_ease-in-out_infinite] drop-shadow-[0_0_15px_rgba(140,198,63,0.5)]"
                />
            </div>

            <div className="mt-8 text-center relative z-10 font-sans flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#8cc63f] to-[#bef264] mb-3 drop-shadow-[0_0_10px_rgba(140,198,63,0.4)]"
                >
                    VEDIFAI
                </motion.h2>

                {/* Aesthetic Slogan Animation */}
                <div className="h-10 flex items-center justify-center mt-2 perspective-[1000px]">
                    <motion.p
                        variants={sloganContainer}
                        initial="hidden"
                        animate="visible"
                        className="text-2xl font-semibold text-gray-100 tracking-wide flex"
                    >
                        {slogan.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={sloganLetter}
                                className={char === " " ? "w-2" : "inline-block"}
                                style={{ transformOrigin: "bottom center" }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default IntroAnimation;
