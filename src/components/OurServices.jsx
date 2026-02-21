import React from 'react';
import { Search, BookOpen, UserCheck, BarChart3, ArrowRight } from 'lucide-react';

const services = [
    {
        id: 1,
        title: "Find Tutors",
        description: "Discover top-rated educators tailored to your learning style.",
        icon: <Search className="text-[#4d7c0f]" size={24} />,
        bgColor: "bg-[#d9f99d]",
        borderColor: "border-[#bef264]"
    },
    {
        id: 2,
        title: "Explore Courses",
        description: "Browse curated courses across various local institutes.",
        icon: <BookOpen className="text-[#4d7c0f]" size={24} />,
        bgColor: "bg-[#e5e7eb]", // Subtle contrast
        borderColor: "border-gray-300"
    },
    {
        id: 3,
        title: "Verified Reviews",
        description: "Read genuine feedback from real students and parents.",
        icon: <UserCheck className="text-[#4d7c0f]" size={24} />,
        bgColor: "bg-[#d9f99d]",
        borderColor: "border-[#bef264]"
    },
    {
        id: 4,
        title: "Track Progress",
        description: "Monitor your learning journey with intuitive dashboards.",
        icon: <BarChart3 className="text-[#4d7c0f]" size={24} />,
        bgColor: "bg-[#e5e7eb]", // Subtle contrast
        borderColor: "border-gray-300"
    }
];

const OurServices = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
            <div className="bg-gradient-to-br from-[#bef264] to-[#a3e635] shadow-2xl rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                        <div>
                            <h2 className="text-xl font-bold text-[#4d7c0f] uppercase tracking-wider mb-2">Features</h2>
                            <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#022c22] to-[#047857]">Services</span>
                            </h3>
                        </div>
                        <button className="hidden md:flex items-center gap-2 bg-[#022c22] text-white px-6 py-3 rounded-full font-bold hover:bg-[#064e3b] transition-all shadow-md group">
                            View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className={`${service.bgColor} border border-white/20 rounded-2xl p-6 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer relative overflow-hidden`}
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>

                                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm z-10">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2 z-10">{service.title}</h4>
                                <p className="text-gray-600 text-sm flex-grow z-10">{service.description}</p>

                                <div className="mt-6 flex items-center justify-between z-10">
                                    <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-bold border border-gray-200 group-hover:bg-[#022c22] group-hover:text-white transition-colors">
                                        Know More
                                    </span>
                                    <ArrowRight size={16} className="text-gray-400 group-hover:text-[#022c22] opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center md:hidden">
                        <button className="flex items-center gap-2 bg-[#022c22] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#064e3b] transition-all w-full justify-center">
                            View All <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-12 mb-8">
                <button className="bg-white text-[#022c22] border-2 border-[#022c22] px-12 py-4 rounded-full font-black text-lg shadow-sm hover:bg-[#022c22] hover:text-white hover:shadow-xl transition-all transform hover:-translate-y-1">
                    About Us
                </button>
            </div>
        </div>
    );
};

export default OurServices;
