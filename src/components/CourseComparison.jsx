import React from 'react';
import { CheckCircle, Clock, Star, Users, MessageSquareText, UsersRound } from 'lucide-react';
import coursesData from '../data/coursesData.json';

const CourseComparison = ({ courseIds = [], onBack, onNavigate }) => {
    let comps = [];
    for (let i = 0; i < courseIds.length; i++) {
        let found = coursesData.find(c => c.id === courseIds[i]);
        if (found) {
            comps.push(found);
        }
    }

    if (comps.length === 0) {
        return (
            <div className="min-h-screen bg-[#11241a] text-white flex flex-col items-center justify-center p-8">
                <h2 className="text-2xl font-bold mb-4">Comparison Queue Empty</h2>
                <p className="text-gray-400 mb-6 text-sm text-center max-w-md">Please select at least one program from the catalog to generate a side-by-side analysis.</p>
                <button onClick={onBack} className="bg-brand-lime text-[#022c22] px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity">Return to Catalog</button>
            </div>
        );
    }

    let layoutCls = 'grid grid-cols-1 md:grid-cols-2';
    if (comps.length === 2) {
        layoutCls = 'grid grid-cols-1 md:grid-cols-3';
    } else if (comps.length === 3) {
        layoutCls = 'grid grid-cols-1 md:grid-cols-4';
    }

    const getBorderCls = (idx) => {
        if (idx < comps.length - 1) {
            return 'md:border-r border-gray-700/50';
        }
        return '';
    };

    return (
        <div className="min-h-screen bg-[#11241a] text-white pt-24 pb-16 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-10">
                    <div className="text-xs text-gray-400 mb-4 flex items-center gap-2">
                        <button onClick={() => onNavigate('home')} className="hover:text-brand-lime transition-colors cursor-pointer">Home</button>
                        <span>›</span>
                        <button onClick={() => onNavigate('courses')} className="hover:text-brand-lime transition-colors cursor-pointer">Course Search</button>
                        <span>›</span>
                        <span className="text-white font-bold">Comparison Detail</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-3 text-white">Course Comparison</h1>
                    <p className="text-gray-400 text-sm max-w-xl">
                        Compare industry-leading certifications side-by-side to find the perfect curriculum for your career trajectory.
                    </p>
                </div>

                <div className="bg-[#1a2e24] rounded-2xl border border-gray-700 overflow-hidden mb-8 shadow-2xl">

                    <div className={`${layoutCls} border-b border-gray-700`}>
                        <div className="p-6 md:p-8 flex items-end justify-start border-r border-gray-700/50 hidden md:flex">
                            <span className="text-brand-lime text-xs font-bold uppercase tracking-widest">METRICS & FEATURES</span>
                        </div>

                        {comps.map((c, i) => {
                            let bdr = getBorderCls(i);
                            let bg = c.bgTheme || 'bg-[#1e3441]';
                            return (
                                <div key={c.id} className={`p-6 border-b md:border-b-0 relative ${bdr}`}>
                                    {c.verified && (
                                        <div className="absolute top-4 right-4 bg-brand-lime/20 text-brand-lime text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 z-10">
                                            <CheckCircle size={10} /> VERIFIED
                                        </div>
                                    )}
                                    <div className={`${bg} h-40 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-gray-600/30`}>
                                        {c.image && (
                                            <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" />
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">{c.title}</h3>
                                    <p className="text-xs text-gray-400">Offered by {c.mentor}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className={`${layoutCls} border-b border-gray-700/50 items-center`}>
                        <div className="p-4 md:p-6 md:border-r border-gray-700/50 text-sm font-medium text-gray-300">Price</div>
                        {comps.map((c, i) => {
                            let bdr = getBorderCls(i);
                            let pType = 'Free access';
                            if (c.priceValue > 0) pType = 'One-time payment';
                            return (
                                <div key={'p-' + c.id} className={`p-4 md:p-6 ${bdr}`}>
                                    <div className="text-2xl font-bold text-white mb-1">{c.price}</div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">{pType}</div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={`${layoutCls} border-b border-gray-700/50 items-center bg-[#15251c]`}>
                        <div className="p-4 md:p-6 md:border-r border-gray-700/50 text-sm font-medium text-gray-300">Duration</div>
                        {comps.map((c, i) => {
                            let bdr = getBorderCls(i);
                            return (
                                <div key={'d-' + c.id} className={`p-4 md:p-6 flex items-center gap-2 text-sm text-gray-200 ${bdr}`}>
                                    <Clock size={16} className="text-brand-lime shrink-0" />
                                    <span><span className="font-bold">{c.duration}</span></span>
                                </div>
                            );
                        })}
                    </div>

                    <div className={`${layoutCls} border-b border-gray-700/50 items-center`}>
                        <div className="p-4 md:p-6 md:border-r border-gray-700/50 text-sm font-medium text-gray-300">Mentor Rating</div>
                        {comps.map((c, i) => {
                            let bdr = getBorderCls(i);
                            let stars = [];
                            for (let s = 0; s < 5; s++) {
                                stars.push(<Star key={s} size={12} fill="currentColor" className={s < Math.floor(c.rating) ? '' : 'text-gray-600'} />);
                            }
                            return (
                                <div key={'r-' + c.id} className={`p-4 md:p-6 ${bdr}`}>
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="flex text-brand-lime">
                                            {stars}
                                        </div>
                                        <span className="text-white font-bold text-sm">{c.rating}</span>
                                    </div>
                                    <div className="text-[10px] text-gray-500">Based on {c.reviews} reviews</div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={`${layoutCls} border-b border-gray-700/50 bg-[#15251c]`}>
                        <div className="p-4 md:p-6 md:border-r border-gray-700/50 text-sm font-medium text-gray-300">Details</div>
                        {comps.map((c, i) => {
                            let bdr = getBorderCls(i);
                            return (
                                <div key={'det-' + c.id} className={`p-4 md:p-6 space-y-3 ${bdr}`}>
                                    <div className="flex items-start gap-2 text-xs text-gray-300">
                                        <CheckCircle size={14} className="text-brand-lime mt-0.5 shrink-0" />
                                        <span>Level: <strong className="text-white">{c.level}</strong></span>
                                    </div>
                                    <div className="flex items-start gap-2 text-xs text-gray-300">
                                        <CheckCircle size={14} className="text-brand-lime mt-0.5 shrink-0" />
                                        <span>Format: <strong className="text-white">{c.format}</strong></span>
                                    </div>
                                    <div className="flex items-start gap-2 text-xs text-gray-300">
                                        <CheckCircle size={14} className="text-brand-lime mt-0.5 shrink-0" />
                                        <span>Subject: <strong className="text-white">{c.subject}</strong></span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={`${layoutCls} border-b border-gray-700/50 items-center`}>
                        <div className="p-4 md:p-6 md:border-r border-gray-700/50 text-sm font-medium text-gray-300">Enrollment</div>
                        {comps.map((c, i) => {
                            let bdr = getBorderCls(i);
                            let revs = c.reviews || 45;
                            let calc = Math.floor((c.rating * 1850) + (revs % 15 * 120));
                            return (
                                <div key={'e-' + c.id} className={`p-4 md:p-6 flex items-center gap-2 text-sm text-white font-bold ${bdr}`}>
                                    <Users size={16} className="text-gray-400" /> {calc}+ Active Learners
                                </div>
                            );
                        })}
                    </div>

                    <div className={`${layoutCls} bg-[#132219]`}>
                        <div className="hidden md:block p-6 border-r border-gray-700/50"></div>
                        {comps.map((c, i) => {
                            let bdr = getBorderCls(i);
                            let pt = 'Free Access';
                            if (c.priceValue > 0) pt = 'Financial Aid Available';
                            return (
                                <div key={'a-' + c.id} className={`p-6 flex flex-col items-center ${bdr}`}>
                                    <a
                                        href={c.link || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-[80%] bg-[#38e567] text-[#022c22] font-black py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#2fd35b] transition-colors mb-3"
                                    >
                                        ENROLL NOW <span className="text-lg leading-none">→</span>
                                    </a>
                                    <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">
                                        {pt}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[#11241a] rounded-2xl border border-brand-lime/30 p-8 relative overflow-hidden group hover:border-brand-lime/60 transition-colors">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-brand-lime/20 flex items-center justify-center border border-brand-lime/50">
                                <div className="w-3 h-3 bg-brand-lime rounded-full absolute shadow-[0_0_10px_#bef264]"></div>
                            </div>
                            <h3 className="text-xl font-bold text-white">Vedifai Recommends</h3>
                        </div>

                        <p className="text-sm text-gray-300 leading-relaxed mb-6">
                            If you are starting your journey in Data Science, the <strong className="text-brand-lime font-bold">Professional Certificate</strong> provides a more comprehensive foundation including SQL and career coaching. For existing practitioners looking to specialize in AI, the <strong className="text-brand-lime font-bold">Advanced ML Specialization</strong> is the industry standard.
                        </p>

                        <div className="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100&h=100" alt="Counselor" className="w-10 h-10 rounded-full border border-gray-600 object-cover" />
                            <div>
                                <div className="text-sm font-bold text-white">Sarah Jenkins</div>
                                <div className="text-[10px] text-gray-400">Vedifai Senior Counselor</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#1a2e24] rounded-2xl border border-gray-700 p-8 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-white mb-2">Still undecided?</h3>
                        <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                            Connect with current students or alumni from both programs in our community channels to get first-hand insights.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 border border-gray-600 rounded-lg py-3 px-4 flex items-center justify-center gap-2 text-sm font-bold text-white hover:bg-white/5 transition-colors">
                                <UsersRound size={16} /> Join Community
                            </button>
                            <button className="flex-1 border border-gray-600 rounded-lg py-3 px-4 flex items-center justify-center gap-2 text-sm font-bold text-white hover:bg-white/5 transition-colors">
                                <MessageSquareText size={16} /> Ask Mentor
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CourseComparison;
