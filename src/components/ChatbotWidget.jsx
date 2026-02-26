import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, ChevronDown } from 'lucide-react';

const predefinedOptions = [
    { id: 2, text: "If you have career concerns clike here", cleanText: "I have career concerns", response: "Our career advisors are available to help you map out your journey! Please visit our 'Mentors' page to book a 1-on-1 session with an industry expert tailored to your field." },
    { id: 3, text: "If you want to vedifai partner clike here", cleanText: "I want to become a Vedifai partner", response: "We love partnering with great educators! Please send your portfolio and teaching experience to partnerships@vedifai.com and our team will get back to you within 48 hours." },
    { id: 4, text: "If you have concer related products and services clike here", cleanText: "I have concerns regarding products and services", response: "For issues regarding course access, billing, or platform bugs, our technical team is here to help. You can email support@vedifai.com or check our FAQ section on the Support Hub." },
    { id: 5, text: "If you wann to know more about your growth program connect your growth manager", cleanText: "I want to connect with my growth manager", response: "Your Growth Manager is your personal guide to success. You can schedule your monthly sync via your student dashboard under the 'My Growth' tab." }
];

const ChatbotWidget = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        { id: 0, sender: 'bot', text: "Welcome to Vedifai Support! Please select an option below, or let us know how we can help you today." }
    ]);
    const [showOptions, setShowOptions] = useState(true);
    const messagesEndRef = useRef(null);

    // Auto scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleOptionSelect = (option) => {
        // Add user message using the cleanText property
        const userMsg = { id: Date.now(), sender: 'user', text: option.cleanText };
        setMessages(prev => [...prev, userMsg]);
        setShowOptions(false); // Hide options temporarily

        // Simulate typing delay, then add bot response
        setTimeout(() => {
            const botMsg = { id: Date.now() + 1, sender: 'bot', text: option.response };
            setMessages(prev => [...prev, botMsg]);

            // Show options again after response
            setTimeout(() => setShowOptions(true), 1000);
        }, 800);
    };

    const handleReset = () => {
        setMessages([
            { id: 0, sender: 'bot', text: "Welcome back! What else can I help you with?" }
        ]);
        setShowOptions(true);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col z-[100] overflow-hidden transition-all duration-300 font-sans">

            {/* Header */}
            <div className="bg-[#0f4d38] dark:bg-[#064e3b] p-4 flex items-center justify-between text-white border-b border-white/10 relative overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>

                <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-[#a3e635] shadow-sm overflow-hidden shrink-0">
                        <img src="/src/assets/vedifai-logo.jpg" alt="Vedifai Mascot" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h3 className="font-bold text-base leading-tight">Vedifai Support</h3>
                        <div className="flex items-center gap-1.5 text-xs text-white/70">
                            <span className="w-2 h-2 rounded-full bg-[#84cc16]"></span>
                            Typically replies instantly
                        </div>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors relative z-10 text-white/80 hover:text-white"
                    title="Close Chat"
                    aria-label="Close Chat"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-5 overflow-y-auto min-h-[350px] max-h-[500px] bg-gray-50 dark:bg-gray-900/50 space-y-4">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>

                            {/* Avatar */}
                            {msg.sender === 'bot' ? (
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
                                    <img src="/src/assets/vedifai-logo.jpg" alt="Vedifai Mascot" className="w-full h-full object-cover" />
                                </div>
                            ) : (
                                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0 border border-gray-300 dark:border-gray-600">
                                    <User size={16} className="text-gray-500 dark:text-gray-400" />
                                </div>
                            )}

                            {/* Message Bubble */}
                            <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                ? 'bg-[#0f4d38] text-white rounded-tr-sm shadow-sm'
                                : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-tl-sm shadow-sm'
                                }`}>
                                {msg.text}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Auto Scroll Anchor */}
                <div ref={messagesEndRef} />
            </div>

            {/* Interactive Options Area */}
            <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                {showOptions ? (
                    <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-1">Quick Actions</p>
                        {predefinedOptions.map((opt) => (
                            <button
                                key={opt.id}
                                onClick={() => handleOptionSelect(opt)}
                                className="w-full text-left p-2.5 text-sm bg-gray-50 dark:bg-gray-900 hover:bg-[#f0fdf4] dark:hover:bg-[#064e3b]/30 text-gray-700 dark:text-gray-300 hover:text-[#0f4d38] dark:hover:text-[#a3e635] rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[#86efac] dark:hover:border-[#166534] transition-all duration-200"
                            >
                                {opt.text}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleReset}
                            className="flex-1 py-2.5 text-sm font-bold bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-xl transition-colors"
                        >
                            Start Over
                        </button>
                        <div className="h-10 px-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center text-sm text-gray-400 italic flex-1">
                            Select an option above...
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatbotWidget;
