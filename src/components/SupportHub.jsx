import React, { useState } from 'react';
import { BookOpen, MonitorPlay, Calculator, GraduationCap, Users, PlusCircle, MessageCircle, Mail, ChevronDown, Check, Clock } from 'lucide-react';

// Mock Data for the Hub based on user request & design
const resources = [
    { id: 1, title: 'Verification Guide', icon: <BookOpen className="text-red-500" size={24} />, bgColor: 'bg-red-50', link: 'https://example.com/verification-guide' },
    { id: 2, title: 'Platform Tour', icon: <MonitorPlay className="text-blue-500" size={24} />, bgColor: 'bg-blue-50', link: 'https://example.com/platform-tour' },
    { id: 3, title: 'Fee Calculator', icon: <Calculator className="text-red-500" size={24} />, bgColor: 'bg-red-50', link: 'https://example.com/fee-calculator' },
    { id: 4, title: 'Scholarship Info', icon: <GraduationCap className="text-green-500" size={24} />, bgColor: 'bg-green-50', link: 'https://example.com/scholarship-info' },
    { id: 5, title: 'Mentor Connect', icon: <Users className="text-blue-500" size={24} />, bgColor: 'bg-blue-50', link: '#mentor-connect' },
];

const forums = [
    { id: 1, title: 'How to verify teacher credentials in 2024?', replies: 12, time: '2h ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4' },
    { id: 2, title: 'Best React courses for beginners on Vedifai', replies: 45, time: '5h ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Avery&backgroundColor=c0aede' },
    { id: 3, title: 'Tips for managing online class schedules', replies: 8, time: '1d ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jocelyn&backgroundColor=ffdfbf' },
];

const faqs = [
    {
        question: 'How does the teacher verification process work?',
        answer: 'Our verification process involves a 3-step check: identity confirmation, educational qualification validation, and a mandatory platform orientation to ensure high teaching standards.'
    },
    {
        question: 'Can I request a refund for an enrolled course?',
        answer: 'Refund policies vary by course provider. However, Vedifai ensures a 7-day money-back guarantee for all verified platform-hosted courses.'
    },
    {
        question: 'How do I connect with a subject matter expert?',
        answer: "You can use our 'Find Mentor' tool on the homepage. Filter by subject, experience, and budget to find the perfect match for your needs."
    },
];

const SupportHub = ({ onOpenChat }) => {
    const [openFaqIndex, setOpenFaqIndex] = useState(0); // First FAQ opened by default

    const toggleFaq = (idx) => {
        if (openFaqIndex === idx) {
            setOpenFaqIndex(null);
        } else {
            setOpenFaqIndex(idx);
        }
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-0 transition-colors duration-300 font-sans">

            {/* Hero Header */}
            <div className="bg-[#0b3b24] dark:bg-[#022c22] pt-32 pb-24 px-4 text-center border-b-[8px] border-[#84cc16]">
                <div className="max-w-3xl mx-auto space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Support & Resource Hub
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Everything you need to navigate your educational journey with confidence. Find resources, community, and expert help.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">

                {/* Resource Library Row */}
                <div className="mb-16 bg-white dark:bg-gray-800 rounded-[2rem] p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h2 className="text-2xl font-black text-[#0f4d38] dark:text-[#a3e635]">Resource Library</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Downloadable guides, templates, and video walkthroughs.</p>
                        </div>
                        <a href="#" className="hidden sm:flex text-[#4d7c0f] dark:text-[#bef264] font-bold text-sm hover:underline items-center gap-1">
                            Explore all →
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {resources.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target={item.link.startsWith('http') ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-100 dark:border-gray-800 p-6 flex flex-col items-center justify-center text-center hover:border-[#84cc16] dark:hover:border-[#65a30d] hover:shadow-md transition-all cursor-pointer group"
                            >
                                <div className={`w-14 h-14 ${item.bgColor} dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <span className="text-xs font-bold text-gray-800 dark:text-gray-200">{item.title}</span>
                            </a>
                        ))}

                        {/* More Button */}
                        <a
                            href="https://example.com/all-resources"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#0b3b24] dark:bg-[#064e3b] rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-[#0f4d38] dark:hover:bg-[#022c22] transition-colors cursor-pointer text-white block"
                        >
                            <PlusCircle size={24} className="mb-4 text-[#84cc16] mx-auto" />
                            <span className="text-xs font-bold">More</span>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column (Community & FAQ) */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Community Forum */}
                        <div>
                            <div className="flex justify-between items-end mb-6">
                                <h2 className="text-2xl font-black text-[#0f4d38] dark:text-[#a3e635]">Community Forum</h2>
                                <a href="#" className="text-[#4d7c0f] dark:text-[#bef264] font-bold text-sm hover:underline flex items-center gap-1">
                                    Join Discussion <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            </div>
                            <div className="space-y-3">
                                {forums.map((forum) => (
                                    <div key={forum.id} className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-[#f1f5f9] dark:bg-gray-700 shrink-0 overflow-hidden border border-gray-200 dark:border-gray-600">
                                            <img src={forum.avatar} alt="User avatar" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 dark:text-white mb-1.5 leading-tight">{forum.title}</h3>
                                            <div className="flex gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
                                                <span className="flex items-center gap-1"><MessageCircle size={12} /> {forum.replies} replies</span>
                                                <span className="flex items-center gap-1"><Clock size={12} /> {forum.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQs */}
                        <div>
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-black text-[#0f4d38] dark:text-[#a3e635]">Frequently Asked Questions</h2>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Clear answers to the most common inquiries.</p>
                            </div>
                            <div className="space-y-3">
                                {faqs.map((faq, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => toggleFaq(idx)}
                                        className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm group cursor-pointer hover:border-[#84cc16] transition-colors"
                                    >
                                        <div className="flex justify-between items-start gap-4 mb-2">
                                            <h3 className="font-bold text-gray-900 dark:text-white text-[15px]">{faq.question}</h3>
                                            <ChevronDown size={18} className={`text-[#84cc16] shrink-0 mt-0.5 transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                                        </div>
                                        {openFaqIndex === idx && (
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pr-8 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                                                {faq.answer}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar (Immediate Help Card) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-[#fefce8] dark:bg-[#422006]/20 border-2 border-dashed border-[#84cc16] rounded-3xl p-8 relative overflow-hidden">
                            {/* Decorative element */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#bef264]/20 rounded-full blur-2xl"></div>

                            <div className="w-12 h-12 bg-[#65a30d] rounded-xl flex items-center justify-center mb-6 shadow-md relative z-10 text-white">
                                <MessageCircle size={24} />
                            </div>

                            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-3 relative z-10">
                                Need immediate help?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-8 relative z-10 font-medium">
                                Our student support team is online and ready to assist you with enrollment, verification, or any technical issues you might face.
                            </p>

                            <div className="space-y-3 relative z-10">
                                <button
                                    onClick={onOpenChat}
                                    className="w-full bg-[#65a30d] hover:bg-[#4d7c0f] text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                                >
                                    <MessageCircle size={18} /> Start Live Chat
                                </button>
                                <a
                                    href="mailto:vedafaisupport@gmail.com"
                                    className="w-full bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                                >
                                    <Mail size={18} /> Email Support Team
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SupportHub;
