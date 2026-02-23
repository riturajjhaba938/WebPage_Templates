import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8 border-t border-transparent dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tighter text-brand">VEDIFAI</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering students and professionals to achieve their career goals through world-class education and mentorship.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-brand transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">Courses</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">Mentors</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Popular Courses</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-brand transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">Data Science</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">Digital Marketing</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">UI/UX Design</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">Business Analytics</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-3 mt-1 text-brand" />
                                <span>123 Education Lane, Knowledge Park,<br />Tech City, India 560100</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-3 text-brand" />
                                <span>+91 98765 43210</span>
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
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
