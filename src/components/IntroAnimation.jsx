import React, { useEffect, useState } from 'react';
import mascotImage from '../assets/loading-logo.jpg';

const IntroAnimation = ({ onComplete }) => {
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Start fading out after 2.5 seconds
        const fadeTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, 2500);

        // Notify parent to unmount after fade transition (3s total)
        const completeTimer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 3000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#022c22] transition-opacity duration-500 ease-in-out ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            {/* Pulsing Glow Background */}
            <div className="absolute w-[300px] h-[300px] bg-[#8cc63f]/20 rounded-full blur-[100px] animate-pulse"></div>

            {/* Container for Image and Spinner */}
            <div className="relative flex items-center justify-center p-8">

                {/* 
                  Outer spinning dashed ring. 
                  We use inset-0 to perfectly overlap the image container. 
                */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#8cc63f] border-r-[#8cc63f] opacity-80 animate-spin" style={{ animationDuration: '1.5s' }}></div>

                {/* Inner counter-spinning ring for complex effect */}
                <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-[#bef264] border-l-[#bef264] opacity-60 animate-[spin_2s_linear_infinite_reverse]"></div>

                {/* Mascot Image with slow pulse/pumping effect */}
                <img
                    src={mascotImage}
                    alt="Vedifai Mascot Loading"
                    className="w-48 h-48 rounded-full object-cover relative z-10 animate-[pulse_1.5s_ease-in-out_infinite] drop-shadow-[0_0_15px_rgba(140,198,63,0.5)]"
                />
            </div>

            <div className="mt-8 text-center relative z-10">
                <h2 className="text-3xl font-black tracking-tight text-white mb-2">VEDIFAI</h2>
                <div className="flex items-center justify-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#8cc63f] animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 rounded-full bg-[#8cc63f] animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 rounded-full bg-[#8cc63f] animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
            </div>

        </div>
    );
};

export default IntroAnimation;
