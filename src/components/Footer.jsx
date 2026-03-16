import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import vedifaiLogo from '../assets/vedifai-logo.jpg';

const Footer = ({ onNavigate }) => {
    return (
        <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8 border-t border-transparent dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img src={vedifaiLogo} alt="Vedifai Logo" className="h-[40px] w-auto object-contain rounded-lg" />
                            <h3 className="text-2xl font-bold tracking-tighter text-brand">VEDIFAI</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering students and professionals to achieve their career goals through world-class education and mentorship.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://wa.me/message/JEXCEPSQVDUCF1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="https://instagram.com/thevedifai?igsh=eXF2NjJqZWN6cTRt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="https://wa.me/message/JEXCEPSQVDUCF1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Phone size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><button onClick={() => onNavigate && onNavigate('home')} className="hover:text-brand transition-colors text-left w-full">Home</button></li>
                            <li><button onClick={() => onNavigate && onNavigate('courses')} className="hover:text-brand transition-colors text-left w-full">Courses</button></li>
                            <li><button onClick={() => onNavigate && onNavigate('home')} className="hover:text-brand transition-colors text-left w-full">Mentors</button></li>
                            <li><a href="https://example.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Popular Courses</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><button onClick={() => onNavigate && onNavigate('courses')} className="hover:text-brand transition-colors text-left w-full">Web Development</button></li>
                            <li><button onClick={() => onNavigate && onNavigate('courses')} className="hover:text-brand transition-colors text-left w-full">Data Science</button></li>
                            <li><button onClick={() => onNavigate && onNavigate('courses')} className="hover:text-brand transition-colors text-left w-full">Digital Marketing</button></li>
                            <li><button onClick={() => onNavigate && onNavigate('courses')} className="hover:text-brand transition-colors text-left w-full">UI/UX Design</button></li>
                            <li><button onClick={() => onNavigate && onNavigate('courses')} className="hover:text-brand transition-colors text-left w-full">Business Analytics</button></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-3 mt-1 text-brand" />
                                <span>1st floor, Enkay Tower, Plot no. B&B1, <br />Vanijya Kunj, Udyog Vihar, Phase 5, <br />Gurgaon, Haryana- 122016</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-3 text-brand" />
                                <span>+91 93546 43565</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-3 text-brand" />
                                <span>support@vedifai.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} VEDIFAI. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="https://example.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="https://example.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="https://example.com/cookies" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
