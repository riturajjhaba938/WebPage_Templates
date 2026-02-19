import React from 'react';
import { BookOpen, Star, ArrowRight } from 'lucide-react';

const courses = [
    { id: 1, title: 'Introduction to React.js', price: '₹499', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=300&h=200' },
    { id: 2, title: 'Python for Data Science', price: '₹899', image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=300&h=200' },
    { id: 3, title: 'UI/UX Design Fundamentals', price: '₹699', image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&q=80&w=300&h=200' },
    { id: 4, title: 'Digital Marketing 101', price: '₹399', image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=300&h=200' },
    { id: 5, title: 'Mastering TypeScript', price: '₹599', image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=300&h=200' },
];

const TrendingCourses = () => {
    return (
        <section className="bg-white py-4">
            <div className="max-w-6xl mx-auto px-4">
                {/* Lime Green Container */}
                <div className="bg-[#bef264] rounded-[2rem] p-8 md:p-10 relative">

                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-black text-center w-full">
                            Our Trending Course
                        </h2>
                        <span className="absolute top-8 right-8 text-xs font-bold underline cursor-pointer hover:text-white transition-colors">explore</span>
                    </div>

                    {/* Slots Grid */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {courses.map((course) => (
                            <div key={course.id} className="bg-white rounded-xl w-40 h-48 md:w-44 md:h-52 shadow-sm border-2 border-transparent hover:border-black/10 transition-all cursor-pointer flex flex-col overflow-hidden group relative">

                                {/* Image Area */}
                                <div className="h-3/5 w-full bg-gray-100 relative overflow-hidden">
                                    <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button className="bg-brand-lime text-black text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                            View <ArrowRight size={10} />
                                        </button>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-3 flex flex-col flex-grow justify-between">
                                    <h3 className="text-sm font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-brand-dark transition-colors">
                                        {course.title}
                                    </h3>

                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-xs font-extrabold text-[#064e3b] bg-[#d9f99d] px-2 py-0.5 rounded-md">
                                            {course.price}
                                        </span>
                                        <div className="flex items-center text-yellow-500">
                                            <Star size={10} fill="currentColor" />
                                            <span className="text-[10px] font-bold ml-0.5">4.8</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrendingCourses;
