import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import vedifaiLogo from '../assets/vedifai-logo.jpg';

const sentences = [
  "Feeling lost in your career journey, confused about what step to take next, or unsure where to even begin? Don’t worry—Vedifai is here to guide you, help you discover the right path, and give you the clarity you need to build a future you truly believe in.",
  "Not sure which field is right for you or which entrance exam can shape your future? At Vedifai, we help you explore your strengths, understand your options, and together choose the path that truly fits you—with the right mindset and clear direction to build your career.",
  "Once you find the right path, the next challenge is knowing where to start, which resources to trust, and who the right mentor is. At Vedifai, we provide a complete ecosystem to support your journey—from expert mentors and structured learning paths to live projects, doubt-solving sessions, and the right resources—guiding you step by step from your starting point all the way to your destination.",
  "Why trust Vedifai? Because Vedifai is built around you. We follow a smooth and thoughtful journey that starts with understanding who you are, guiding you through a personality test, analyzing your results to identify your true interests, and then connecting you with the best industry mentors. From that moment on, we support you with the right guidance, learning path, and real-world experience—helping you grow step by step until you become a confident, job-ready professional."
];

const images = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400"
];

const HexagonSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 0 to 5 for clockwise images
  const [isHovered, setIsHovered] = useState(false);
  const [manualHoverIndex, setManualHoverIndex] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  // Automation for clockwise cycle
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Automation for center coin flip
  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 6000);
    return () => clearInterval(flipInterval);
  }, []);

  const handleMouseEnter = (index) => {
    setIsHovered(true);
    setManualHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setManualHoverIndex(null);
  };

  const displayIndex = manualHoverIndex !== null ? manualHoverIndex : activeIndex;
  // Map 6 images to 4 sentences
  const currentSentence = sentences[displayIndex % sentences.length];

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Side: Animated Sentences */}
        <div className="lg:w-1/2 flex flex-col justify-center min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayIndex % sentences.length}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-black text-green-800 dark:text-green-400 tracking-tight">
                {activeIndex % 2 === 0 ? "Discover Your Future" : "Guided By Experts"}
              </h2>
              <p className="text-xl text-gray-900 dark:text-gray-100 leading-relaxed font-medium">
                {currentSentence.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.003 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Honeycomb Grid */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="hex-grid-container scale-150 transform">
            
            {/* Surrounding Hexagons (1-6) */}
            {images.map((img, idx) => {
              const hexId = idx + 1;
              const isActive = displayIndex === idx;
              const isOtherHovered = manualHoverIndex !== null && manualHoverIndex !== idx;

              return (
                <div 
                  key={idx}
                  className={`hexagon-wrapper hex-${hexId}`}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.div 
                    className={`hexagon-content ${isActive ? 'active-hex' : ''}`}
                    style={{ 
                      opacity: isOtherHovered ? 0.3 : 1,
                      scale: isActive ? 1 : 0.95
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <img src={img} alt={`career ${idx}`} className="w-full h-full object-cover" />
                    {isActive && (
                      <motion.div 
                        layoutId="active-border"
                        className="absolute inset-0 border-[3px] border-green-400 dark:border-green-500 z-20 pointer-events-none"
                        style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
                      />
                    )}
                  </motion.div>
                </div>
              );
            })}

            {/* Center Hexagon (Hex 7) with Coin Flip Effect */}
            <div 
              className="hexagon-wrapper hex-7 cursor-pointer"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className={`coin-container ${isFlipped ? 'flipped' : ''}`}>
                {/* Front: Logo */}
                <div className="hexagon-content coin-front bg-white dark:bg-gray-800 flex flex-col items-center justify-center p-2 text-white">
                  <img src={vedifaiLogo} alt="VEDIFAI Logo" className="w-full h-full object-contain p-2" />
                </div>
                {/* Back: Full Form */}
                <div className="hexagon-content coin-back bg-green-800 dark:bg-green-900 flex flex-col items-center justify-center p-4 text-white">
                  <div className="text-[10px] text-center uppercase tracking-tighter leading-none font-bold">
                    Variety of Education Intelligently Designed for AI Age Individuals
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hex-grid-container {
          display: grid;
          grid-template: repeat(6, 1fr) / 1fr repeat(3, 2fr 1fr);
          width: 320px;
          height: 320px;
          gap: 2px;
        }

        .hexagon-wrapper {
          grid-area: span 2 / span 3;
          position: relative;
        }

        /* Specific Hexagon Positions */
        .hex-1 { grid-area: 1 / 3 / span 2 / span 3; }
        .hex-2 { grid-area: 2 / 5 / span 2 / span 3; }
        .hex-3 { grid-area: 4 / 5 / span 2 / span 3; }
        .hex-4 { grid-area: 5 / 3 / span 2 / span 3; }
        .hex-5 { grid-area: 4 / 1 / span 2 / span 3; }
        .hex-6 { grid-area: 2 / 1 / span 2 / span 3; }
        .hex-7 { grid-area: 3 / 3 / span 2 / span 3; z-index: 5; }

        .hexagon-content {
          width: 100%;
          height: 100%;
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        /* Coin Flip styles */
        .coin-container {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        
        .coin-container.flipped {
          transform: rotateY(180deg);
        }

        .coin-front, .coin-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }

        .coin-back {
          transform: rotateY(180deg);
        }

        .active-hex {
          z-index: 10;
          box-shadow: 0 0 20px rgba(74, 222, 128, 0.5);
        }

        /* Responsive scaling */
        @media (max-width: 768px) {
          .hex-grid-container {
            scale: 1.1;
          }
        }
      `}} />
    </div>
  );
};

export default HexagonSection;
