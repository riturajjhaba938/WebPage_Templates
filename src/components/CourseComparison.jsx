import React from 'react';
import { CheckCircle, Clock, Star, Users, MessageSquareText, UsersRound } from 'lucide-react';

const CourseComparison = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-[#11241a] text-white pt-24 pb-16 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumbs & Header */}
                <div className="mb-10">
                    <div className="text-xs text-gray-400 mb-4 flex items-center gap-2">
                        <button onClick={onBack} className="hover:text-brand-lime transition-colors cursor-pointer">Home</button>
                        <span>›</span>
                        <span className="hover:text-brand-lime transition-colors cursor-pointer">Course Search</span>
                        <span>›</span>
                        <span className="text-white font-bold">Comparison Detail</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-3">Course Comparison</h1>
                    <p className="text-gray-400 text-sm max-w-xl">
                        Compare industry-leading certifications side-by-side to find the perfect curriculum for your career trajectory.
                    </p>
                </div>

                {/* Comparison Table Grid */}
                <div className="bg-[#1a2e24] rounded-2xl border border-gray-700 overflow-hidden mb-8 shadow-2xl">

                    {/* Header Row (Images & Titles) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-700">
                        {/* Empty Label Cell */}
                        <div className="p-6 md:p-8 flex items-end justify-start border-r border-gray-700/50 hidden md:flex">
                            <span className="text-brand-lime text-xs font-bold uppercase tracking-widest">METRICS & FEATURES</span>
                        </div>

                        {/* Course 1 Header */}
                        <div className="p-6 border-b md:border-b-0 md:border-r border-gray-700/50 relative">
                            <div className="absolute top-4 right-4 bg-brand-lime/20 text-brand-lime text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                <CheckCircle size={10} /> VEDIFAI VERIFIED
                            </div>
                            <div className="h-40 bg-[#1e3441] rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-gray-600/30">
                                {/* Mock UI inside the box matching the image */}
                                <div className="absolute w-3/4 h-3/4 max-w-[200px] flex items-end gap-2 bottom-4">
                                    <div className="w-10 h-16 bg-white rounded flex items-center justify-center text-[8px] text-gray-400 font-serif rotate-2 drop-shadow-md">PDF</div>
                                    <div className="flex-1 h-full bg-[#172530] rounded-t-lg border border-gray-500 shadow-xl overflow-hidden flex flex-col">
                                        <div className="h-2 w-full bg-gray-600 flex gap-1 p-0.5"><div className="w-1 h-1 rounded-full bg-red-400"></div></div>
                                        <div className="flex-1 p-2 flex flex-col gap-1 justify-end">
                                            <div className="w-full text-brand-lime text-[8px]">data = pd.read_csv()</div>
                                            <div className="w-full h-8 flex items-end justify-between gap-1 mt-1">
                                                <div className="w-1/4 bg-blue-400/50 h-1/3 rounded-t"></div>
                                                <div className="w-1/4 bg-brand-lime/50 h-2/3 rounded-t"></div>
                                                <div className="w-1/4 bg-purple-400/50 h-full rounded-t"></div>
                                                <div className="w-1/4 bg-pink-400/50 h-1/2 rounded-t"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 leading-tight">Data Science Professional Certificate</h3>
                            <p className="text-xs text-gray-400">Offered by IBM Global Services</p>
                        </div>

                        {/* Course 2 Header */}
                        <div className="p-6 relative">
                            <div className="h-40 bg-gray-900 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-gray-700">
                                {/* Mock Code Block background */}
                                <div className="absolute inset-2 bg-black rounded p-3 text-[5px] text-green-400 font-mono leading-tight opacity-50 select-none hidden sm:block">
                                    {`function initNeuralNet() {\n  const layers = [64, 128, 256];\n  let weights = tf.variable(tf.randomNormal([784, 64]));\n  \n  // Compile model\n  const model = tf.sequential();\n  model.add(tf.layers.dense({units: 64, activation: 'relu'}));\n  model.add(tf.layers.dense({units: 10, activation: 'softmax'}));\n  \n  return model.compile({optimizer: 'adam', loss: 'categoricalCrossentropy'});\n}`}
                                </div>
                                <div className="relative z-10 text-white font-mono text-xs opacity-70">Python / PyTorch</div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 leading-tight">Advanced Machine Learning Specialization</h3>
                            <p className="text-xs text-gray-400">Offered by DeepLearning.AI</p>
                        </div>
                    </div>

                    {/* Feature Row: Price */}
                    <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-700/50 items-center">
                        <div className="p-4 md:p-6 md:border-r border-gray-700/50 text-sm font-medium text-gray-300">Price</div>
                        <div className="p-4 md:p-6 md:border-r border-gray-700/50">
                            <div className="text-2xl font-bold text-white mb-1">$299</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-wider">One-time payment</div>
                        </div>
                        <div className="p-4 md:p-6">
                            <div className="text-2xl font-bold text-white mb-1">$49<span className="text-sm font-medium text-gray-400">/mo</span></div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-wider">Subscription based</div>
                        </div>
                    </div>

                    {/* Feature Row: Duration */}
                    <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-700/50 items-center bg-[#15251c]">
                        <div className="p-4 md:p-6 md:border-r border-gray-700/50 text-sm font-medium text-gray-300">Duration</div>
                        <div className="p-4 md:p-6 md:border-r border-gray-700/50 flex items-center gap-2 text-sm text-gray-200">
                            <Clock size={16} className="text-brand-lime" /> <span className="font-bold">6 Months</span> (10 hrs/week)
                        </div>
                        <div className="p-4 md:p-6 flex items-center gap-2 text-sm text-gray-200">
                            <Clock size={16} className="text-brand-lime" /> <span className="font-bold">4 Months</span> (15 hrs/week)
                        </div>
                    </div>

                    {/* Feature Row: Mentor Rating */}
                    <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-700/50 items-center">
                        <div className="p-4 md:p-6 md:border-r border-gray-700/50 text-sm font-medium text-gray-300">Mentor Rating</div>
                        <div className="p-4 md:p-6 md:border-r border-gray-700/50">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="flex text-brand-lime"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                                <span className="text-white font-bold text-sm">4.8</span>
                            </div>
                            <div className="text-[10px] text-gray-500">Based on 2.4k reviews</div>
                        </div>
                        <div className="p-4 md:p-6">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="flex text-brand-lime"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} className="text-gray-600" fill="currentColor" /></div>
                                <span className="text-white font-bold text-sm">4.6</span>
                            </div>
                            <div className="text-[10px] text-gray-500">Based on 1.1k reviews</div>
                        </div>
                    </div>

                    {/* Feature Row: Syllabus Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-700/50 bg-[#15251c]">
                        <div className="p-4 md:p-6 md:border-r border-gray-700/50 text-sm font-medium text-gray-300">Syllabus Highlights</div>
                        <div className="p-4 md:p-6 md:border-r border-gray-700/50 space-y-3">
                            <div className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle size={14} className="text-brand-lime mt-0.5 shrink-0" />
                                <span>Python & SQL Fundamentals</span>
                            </div>
                            <div className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle size={14} className="text-brand-lime mt-0.5 shrink-0" />
                                <span>Data Visualization (Matplotlib, Seaborn)</span>
                            </div>
                            <div className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle size={14} className="text-brand-lime mt-0.5 shrink-0" />
                                <span>Applied ML Capstone Project</span>
                            </div>
                        </div>
                        <div className="p-4 md:p-6 space-y-3">
                            <div className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle size={14} className="text-brand-lime mt-0.5 shrink-0" />
                                <span>Neural Networks & Deep Learning</span>
                            </div>
                            <div className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle size={14} className="text-brand-lime mt-0.5 shrink-0" />
                                <span>Convolutional Neural Networks (CNN)</span>
                            </div>
                            <div className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle size={14} className="text-brand-lime mt-0.5 shrink-0" />
                                <span>NLP & Sequence Models</span>
                            </div>
                        </div>
                    </div>

                    {/* Feature Row: Enrollment */}
                    <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-700/50 items-center">
                        <div className="p-4 md:p-6 md:border-r border-gray-700/50 text-sm font-medium text-gray-300">Enrollment</div>
                        <div className="p-4 md:p-6 md:border-r border-gray-700/50 flex items-center gap-2 text-sm text-white font-bold">
                            <Users size={16} className="text-gray-400" /> 15,400+ Students
                        </div>
                        <div className="p-4 md:p-6 flex items-center gap-2 text-sm text-white font-bold">
                            <Users size={16} className="text-gray-400" /> 8,200+ Students
                        </div>
                    </div>

                    {/* Action Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 bg-[#132219]">
                        <div className="hidden md:block p-6 border-r border-gray-700/50"></div>
                        <div className="p-6 md:border-r border-gray-700/50 flex flex-col items-center">
                            <button className="w-full sm:w-[80%] bg-[#38e567] text-[#022c22] font-black py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#2fd35b] transition-colors mb-3">
                                ENROLL NOW <span className="text-lg leading-none">→</span>
                            </button>
                            <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Financial Aid Available</span>
                        </div>
                        <div className="p-6 flex flex-col items-center">
                            <button className="w-full sm:w-[80%] bg-[#38e567] text-[#022c22] font-black py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#2fd35b] transition-colors mb-3">
                                ENROLL NOW <span className="text-lg leading-none">→</span>
                            </button>
                            <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">7-Day Free Trial</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Recommendation & Community */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Vedifai Recommends */}
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

                    {/* Still Undecided? */}
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
