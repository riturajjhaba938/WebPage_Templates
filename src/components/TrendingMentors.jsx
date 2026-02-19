import React from 'react';
import { Linkedin, Twitter, Globe, Github } from 'lucide-react';

const mentors = [
    {
        id: 1,
        name: 'Dr. Anjali Mehta',
        role: 'AI Researcher',
        company: 'Google DeepMind',
        bio: 'Pioneering research in generative models.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
        id: 2,
        name: 'Vikram Singh',
        role: 'Sr. Backend Eng.',
        company: 'Amazon',
        bio: 'Architecting scalable cloud solutions.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
        id: 3,
        name: 'Kavita Patel',
        role: 'Product Lead',
        company: 'Cred',
        bio: 'Building fintech products for the next billion.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
        id: 4,
        name: 'Arjun Red',
        role: 'Tech Lead',
        company: 'Zomato',
        bio: 'Full stack wizard obsessed with performance.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
        id: 5,
        name: 'Sneha Gupta',
        role: 'Data Scientist',
        company: 'Microsoft',
        bio: 'Turning raw data into actionable insights.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150'
    },
];

const TrendingMentors = () => {
    return (
        <section className="bg-white py-4 mb-4">
            <div className="max-w-6xl mx-auto px-4">
                {/* Dark Green Container */}
                <div className="bg-[#022c22] rounded-[2rem] p-8 relative text-white">

                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white text-center w-full">
                            Our Trending Mentor/SME
                        </h2>
                        <span className="absolute top-8 right-8 text-xs font-bold underline cursor-pointer hover:text-brand-lime transition-colors">explore</span>
                    </div>

                    {/* Slots Grid */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {mentors.map((mentor) => (
                            <div key={mentor.id} className="group relative w-32 h-44 md:w-36 md:h-48 perspective-1000 cursor-pointer">
                                <div className="relative w-full h-full transition-all duration-500 transform style-preserve-3d group-hover:rotate-y-180">

                                    {/* Front Side */}
                                    <div className="absolute inset-0 bg-white rounded-xl shadow-lg flex flex-col items-center p-3 backface-hidden">
                                        <div className="w-20 h-20 rounded-full mb-3 border-2 border-brand-light overflow-hidden p-0.5">
                                            <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover rounded-full" />
                                        </div>
                                        <h3 className="text-gray-900 font-bold text-xs text-center leading-tight mb-1">{mentor.name}</h3>
                                        <p className="text-brand-accent text-[10px] font-semibold text-center">{mentor.role}</p>
                                        <p className="text-gray-500 text-[9px] text-center mt-auto font-medium">@ {mentor.company}</p>
                                    </div>

                                    {/* Back Side (Hover Info) */}
                                    <div className="absolute inset-0 bg-brand-lime rounded-xl shadow-xl flex flex-col items-center justify-center p-3 text-center backface-hidden rotate-y-180">
                                        <p className="text-[#022c22] text-[10px] font-bold mb-3 leading-snug line-clamp-3">
                                            "{mentor.bio}"
                                        </p>
                                        <div className="flex space-x-2 mb-2">
                                            <div className="p-1 bg-[#022c22]/10 rounded-full hover:bg-[#022c22] hover:text-white transition-colors">
                                                <Linkedin size={12} />
                                            </div>
                                            <div className="p-1 bg-[#022c22]/10 rounded-full hover:bg-[#022c22] hover:text-white transition-colors">
                                                <Twitter size={12} />
                                            </div>
                                        </div>
                                        <button className="bg-[#022c22] text-white text-[9px] font-bold px-3 py-1 rounded-full hover:bg-black transition-colors">
                                            Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* 'More' Card */}
                        <div className="w-32 h-44 md:w-36 md:h-48 bg-white/10 rounded-xl border-2 border-dashed border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all group">
                            <span className="text-white/70 font-bold text-sm group-hover:text-white group-hover:scale-110 transition-all">View All</span>
                        </div>
                    </div>

                    {/* CSS for Flip Effect (Inline for simplicity or could be in index.css) */}
                    <style jsx>{`
                .perspective-1000 { perspective: 1000px; }
                .style-preserve-3d { transform-style: preserve-3d; }
                .rotate-y-180 { transform: rotateY(180deg); }
                .backface-hidden { backface-visibility: hidden; }
            `}</style>
                </div>
            </div>
        </section>
    );
};

export default TrendingMentors;
