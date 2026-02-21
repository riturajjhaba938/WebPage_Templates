import React, { useState } from 'react';

const IntroAnimation = ({ onComplete }) => {
    const [isFlashing, setIsFlashing] = useState(false);

    const handleVideoEnd = () => {
        setIsFlashing(true);
        setTimeout(() => {
            onComplete();
        }, 800); // Flash duration
    };

    return (
        <div className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-all duration-700 ease-in-out pointer-events-auto ${isFlashing ? 'opacity-0 transform scale-110' : 'opacity-100'}`}>
            <video
                autoPlay
                muted
                playsInline
                controls={false}
                crossOrigin="anonymous"
                onEnded={handleVideoEnd}
                className={`w-full h-full object-contain transition-opacity duration-300 ${isFlashing ? 'opacity-0' : 'opacity-100'}`}
                style={{ mixBlendMode: 'screen', filter: 'contrast(1.2) brightness(1.1)' }} // Enhance slightly to ensure background is completely knocked out
                src="https://res.cloudinary.com/dtqsbbz5r/video/upload/v1771587046/WhatsApp_Video_2026-02-20_at_16.58.45_vwbrs2.mp4"
            />

            <button
                onClick={handleVideoEnd}
                className={`fixed top-6 right-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 font-medium transition-all z-[110] shadow-sm pointer-events-auto ${isFlashing ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
            >
                Skip Intro
            </button>
        </div>
    );
};

export default IntroAnimation;
