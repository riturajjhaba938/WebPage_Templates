import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo with Green Monstera/Leaf Icon placeholder */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-brand-lime rounded-lg flex items-center justify-center text-brand-dark-green font-bold text-xs">
                            VF
                        </div>
                        <a href="#" className="text-xl font-extrabold tracking-tighter text-gray-900">
                            VEDIFAI
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        <div className="flex bg-[#bef264] rounded-lg p-1 space-x-1">
                            <a href="#" className="px-4 py-1.5 rounded-md bg-[#4ade80] text-white font-bold text-xs shadow-sm">HOME</a>
                            <a href="#" className="px-4 py-1.5 rounded-md hover:bg-white/50 text-[#064e3b] font-bold text-xs transition-colors">COURSES</a>
                            <a href="#" className="px-4 py-1.5 rounded-md hover:bg-white/50 text-[#064e3b] font-bold text-xs transition-colors">SUPPORT</a>
                        </div>

                        {/* User Icon */}
                        <button className="ml-4 p-2 rounded-full bg-[#bef264] text-[#064e3b] hover:bg-[#a3e635] transition-colors">
                            <User size={20} />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 border-t border-gray-100">
                    <div className="flex flex-col p-4 space-y-2">
                        <a href="#" className="font-bold text-gray-900 py-2 border-b border-gray-50">HOME</a>
                        <a href="#" className="font-bold text-gray-600 py-2 border-b border-gray-50">COURSES</a>
                        <a href="#" className="font-bold text-gray-600 py-2">SUPPORT</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
