import React, { useMemo } from 'react';
import { ChevronLeft, CheckCircle, Clock, Star, Users, MessageSquareText, Play, Calendar, ShieldCheck } from 'lucide-react';
import mentorsData from '../data/mentorsData.json';
import coursesData from '../data/coursesData.json';

const MentorProfile = ({ mentorId, onBack, onCourseClick }) => {
    // Find Mentor
    const mentor = useMemo(() => mentorsData.find(m => m.id === (mentorId || 1)), [mentorId]);

    // Find Mentor's Courses
    const mentorCourses = useMemo(() => {
        if (!mentor) return [];
        return mentor.courses.map(id => coursesData.find(c => c.id === id)).filter(Boolean);
    }, [mentor]);

    if (!mentor) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Mentor Not Found</h2>
                <button onClick={onBack} className="mt-4 px-6 py-2 bg-brand-default text-white rounded-lg">Go Back</button>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 pt-24 font-sans transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Nav / Breadcrumb */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#064e3b] dark:hover:text-[#a3e635] font-bold mb-6 transition-colors"
                >
                    <ChevronLeft size={20} /> Back to Mentors
                </button>

                <div className="max-w-5xl mx-auto space-y-8">

                    {/* Profile Header Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                        {/* Decorative Blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f0fdf4] dark:bg-[#064e3b]/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                            {/* Profile Image */}
                            <div className="relative">
                                <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-md">
                                    <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-1">
                                    <div className="bg-[#84cc16] w-5 h-5 rounded-full border-2 border-white dark:border-gray-800"></div>
                                </div>
                            </div>

                            {/* Header Info */}
                            <div className="flex-1 text-center sm:text-left">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                                    <h1 className="text-3xl font-black text-gray-900 dark:text-white leading-none">
                                        {mentor.name}
                                    </h1>
                                    {mentor.verified && (
                                        <span className="inline-flex max-w-max mx-auto sm:mx-0 items-center px-2.5 py-1 rounded-full text-xs font-bold leading-none bg-[#fefce8] dark:bg-[#022c22] text-[#84cc16] dark:text-[#a3e635] border border-[#fef08a] dark:border-[#14532d]">
                                            VERIFIED MENTOR
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 font-medium text-lg mb-6">{mentor.role}</p>

                                {/* Stats Row */}
                                <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                                    <div className="bg-[#f8fafc] dark:bg-gray-900/50 rounded-xl px-5 py-3 border border-gray-100 dark:border-gray-700 flex-1 sm:flex-none">
                                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Success Rate</div>
                                        <div className="text-xl font-black text-[#84cc16] dark:text-[#a3e635]">{mentor.successRate}</div>
                                    </div>
                                    <div className="bg-[#f8fafc] dark:bg-gray-900/50 rounded-xl px-5 py-3 border border-gray-100 dark:border-gray-700 flex-1 sm:flex-none">
                                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Experience</div>
                                        <div className="text-xl font-black text-[#0f172a] dark:text-white">{mentor.experience}</div>
                                    </div>
                                    <div className="bg-[#f8fafc] dark:bg-gray-900/50 rounded-xl px-5 py-3 border border-gray-100 dark:border-gray-700 flex-1 sm:flex-none">
                                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Students</div>
                                        <div className="text-xl font-black text-[#0f172a] dark:text-white">{mentor.students}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Introduction Video Section */}
                    <div>
                        <h2 className="text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-white mb-4">
                            <Play size={20} className="text-[#84cc16]" fill="currentColor" /> Introduction Video
                        </h2>
                        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-3xl aspect-video relative overflow-hidden group cursor-pointer border border-gray-100 dark:border-gray-700">
                            <img src={mentor.videoThumbnail} alt="Video Preview" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                            {/* Play Button Container */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-[#84cc16] text-white rounded-full flex items-center justify-center pl-1 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    <Play size={32} fill="currentColor" />
                                </div>
                            </div>

                            {/* Video Metadata Overlay */}
                            <div className="absolute bottom-6 left-6 text-white font-medium drop-shadow-md">
                                <div className="text-lg font-bold mb-1">Watch {mentor.name.split(' ')[0]}'s Teaching Style</div>
                                <div className="text-xs text-white/80 opacity-90">3:45 mins • Verified Intro</div>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About {mentor.name.split(' ')[0]}</h2>
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 space-y-4">
                            {mentor.about && mentor.about.split('\n').map((paragraph, idx) => (
                                <p key={idx} className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
                                    {paragraph}
                                </p>
                            ))}

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-4">
                                {mentor.tags && mentor.tags.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-bold border border-gray-200 dark:border-gray-600">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mentor's Courses Section */}
                    {mentorCourses.length > 0 && (
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{mentor.name.split(' ')[0]}'s Courses</h2>
                                <button onClick={() => onCourseClick()} className="text-[#84cc16] font-bold text-sm hover:underline">View All</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {mentorCourses.map(course => (
                                    <div key={course.id} className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => onCourseClick()}>
                                        {/* Course Top Image Area */}
                                        <div className={`h-32 ${course.bgTheme || 'bg-[#84cc16]/20'} relative p-4 rounded-t-3xl`}>
                                            {/* Simulated UI details from the mockup */}
                                            {course.level && (
                                                <span className="absolute top-4 left-4 bg-[#022c22] text-white text-[10px] font-black uppercase px-2 py-1 rounded-full tracking-wider">
                                                    {course.level}
                                                </span>
                                            )}
                                            {/* Illustration / Graphic placeholder */}
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-4/5 h-20 bg-white/20 dark:bg-black/20 rounded-t-xl backdrop-blur-sm shadow-inner flex justify-center pt-2 gap-4">
                                                <div className="w-2 h-4 bg-white/50 rounded-full"></div>
                                                <div className="w-2 h-4 bg-white/50 rounded-full"></div>
                                            </div>
                                        </div>

                                        {/* Course Info */}
                                        <div className="p-5 flex-1 flex flex-col bg-white dark:bg-gray-800 z-10">
                                            <h3 className="font-bold text-gray-900 dark:text-white leading-tight mb-3">
                                                {course.title}
                                            </h3>
                                            <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 mb-4">
                                                <span className="flex items-center gap-1.5"><Clock size={14} /> {course.duration}</span>
                                                <span className="flex items-center gap-1.5"><Users size={14} /> {course.reviews} Students</span>
                                            </div>
                                            <button className="mt-auto w-full py-2.5 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl text-sm font-bold border border-gray-200 dark:border-gray-700 transition-colors">
                                                Know More
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MentorProfile;
