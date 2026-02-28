import React from 'react';
import { Search, BookOpen, UserCheck, BarChart3, ArrowRight } from 'lucide-react';

const services = [
    {
        id: 1,
        title: "Find Tutors",
        description: "Discover top-rated educators tailored to your learning style.",
        icon: <Search className="text-[#4d7c0f]" size={24} />,
        bgColor: "bg-[#d9f99d]",
        borderColor: "border-[#bef264]",
        link: "https://example.com/find-tutors"
    },
    {
        id: 2,
        title: "Explore Courses",
        description: "Browse curated courses across various local institutes.",
        icon: <BookOpen className="text-[#4d7c0f]" size={24} />,
        bgColor: "bg-[#e5e7eb]", // Subtle contrast
        borderColor: "border-gray-300",
        link: "https://example.com/explore-courses"
    },
    {
        id: 3,
        title: "Verified Reviews",
        description: "Read genuine feedback from real students and parents.",
        icon: <UserCheck className="text-[#4d7c0f]" size={24} />,
        bgColor: "bg-[#d9f99d]",
        borderColor: "border-[#bef264]",
        link: "https://example.com/reviews"
    },
    {
        id: 4,
        title: "Track Progress",
        description: "Monitor your learning journey with intuitive dashboards.",
        icon: <BarChart3 className="text-[#4d7c0f]" size={24} />,
        bgColor: "bg-[#e5e7eb]", // Subtle contrast
        borderColor: "border-gray-300",
        link: "https://example.com/progress"
    }
];

const OurServices = ({ onNavigate }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 cursor-default">
            <div className="bg-gradient-to-br from-[#bef264] to-[#a3e635] shadow-2xl rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-14 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-2xl md:blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-black opacity-5 rounded-full blur-2xl md:blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 space-y-4 md:space-y-0">
                        <div>
                            <h2 className="text-sm md:text-xl font-bold text-[#4d7c0f] dark:text-[#65a30d] uppercase tracking-wider mb-1 md:mb-2 transition-colors duration-300">Features</h2>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight transition-colors duration-300">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#022c22] to-[#047857] dark:from-[#bef264] dark:to-[#4ade80]">Services</span>
                            </h3>
                        </div>
                        <a href="https://example.com/all-services" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-[#022c22] dark:bg-gray-900/80 text-white dark:text-[#bef264] px-6 py-3 rounded-full font-bold hover:bg-[#064e3b] dark:hover:bg-gray-800 transition-all duration-300 shadow-md group border border-transparent dark:border-[#bef264]/20 cursor-pointer">
                            View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service) => (
                            <a
                                key={service.id}
                                href={service.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${service.bgColor} dark:bg-gray-800 dark:border-gray-700 border border-white/20 rounded-2xl p-6 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer relative overflow-hidden block`}
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 dark:bg-white/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>

                                <div className="bg-white dark:bg-gray-900 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm z-10 transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 z-10 transition-colors duration-300">{service.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow z-10 transition-colors duration-300">{service.description}</p>

                                <div className="mt-6 flex items-center justify-between z-10">
                                    <span className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-bold border border-gray-200 dark:border-gray-700 group-hover:bg-[#022c22] dark:group-hover:bg-brand-lime group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-300 shadow-sm cursor-pointer">
                                        Know More
                                    </span>
                                    <ArrowRight size={16} className="text-gray-400 dark:text-gray-500 group-hover:text-[#022c22] dark:group-hover:text-brand-lime opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center md:hidden">
                        <a href="https://example.com/all-services" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#022c22] dark:bg-gray-900/80 text-white dark:text-[#bef264] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#064e3b] dark:hover:bg-gray-800 border border-transparent dark:border-[#bef264]/20 transition-all duration-300 w-full justify-center cursor-pointer">
                            View All <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
