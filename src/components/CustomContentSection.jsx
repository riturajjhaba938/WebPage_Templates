import React from 'react';
import { Search, ShieldCheck, GraduationCap } from 'lucide-react';

const steps = [
    {
        icon: <Search className="text-white" size={32} />,
        title: "1. Search & Filter",
        desc: "Find verified tutors and institutes in your area.",
        color: "bg-brand-default text-white",
        ringColor: "ring-brand-default/30"
    },
    {
        icon: <ShieldCheck className="text-gray-900" size={32} />,
        title: "2. View Ratings",
        desc: "Check real reviews and Vedifai verification scores.",
        color: "bg-brand-lime text-gray-900",
        ringColor: "ring-brand-lime/50"
    },
    {
        icon: <GraduationCap className="text-white" size={32} />,
        title: "3. Start Learning",
        desc: "Connect directly and begin your learning journey.",
        color: "bg-[#022c22] text-white",
        ringColor: "ring-[#022c22]/30"
    }
];

const CustomContentSection = () => {
    return (
        <section className="w-full py-20 bg-gray-50 rounded-[3rem] my-12 relative overflow-hidden shadow-inner">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-3">How it works</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-gray-900">Simple 3-Step Process</h3>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Skip the guesswork. Our verified platform connects you with the right educators effortlessly.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                    {/* Connecting Line (Desktop only) */}
                    <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-0.5 bg-gray-200 z-0">
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-brand-lime to-brand-default origin-left animate-[scaleX_2s_ease-out_forwards]"></div>
                    </div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center group cursor-default">
                            {/* Icon Circle */}
                            <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center mb-6 shadow-xl ring-8 ${step.ringColor} transform group-hover:scale-110 transition-transform duration-300 relative`}>
                                {step.icon}
                                {/* Step number badge */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm shadow-sm group-hover:rotate-12 transition-transform">
                                    {index + 1}
                                </div>
                            </div>

                            <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-default transition-colors">{step.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomContentSection;
