
import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = ({ onOpenAuth }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, logout } = useAuth();

    return (
        <nav className="bg-primary shadow-lg sticky top-0 z-50 transition-all duration-300">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg transform group-hover:rotate-3 transition-transform">
                            B
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-heading font-bold text-white tracking-tight leading-none">BuySmartly</span>
                            <span className="text-[10px] text-gray-300 uppercase tracking-wider font-light">Compare & Earn</span>
                        </div>
                    </Link>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex relative w-1/3 max-w-md mx-8">
                        <input
                            type="text"
                            placeholder="Search deals, flights, products..."
                            className="w-full bg-blue-900/50 text-white border border-blue-700/50 rounded-full py-2.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all placeholder-blue-300/70 text-sm"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300 h-4 w-4" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex gap-6 text-sm font-medium text-gray-200">
                            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
                            <Link to="/deals" className="hover:text-secondary transition-colors">Deals</Link>
                            <Link to="/travel" className="hover:text-secondary transition-colors">Travel</Link>
                            <Link to="/earn" className="hover:text-secondary transition-colors flex items-center gap-1">
                                <span className="text-secondary">●</span> Earn
                            </Link>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-5 pl-4 border-l border-white/10">
                            <button className="text-gray-200 hover:text-white relative group">
                                <ShoppingCart size={22} strokeWidth={1.5} />
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary text-white text-[10px] flex items-center justify-center rounded-full font-bold shadow-sm">0</span>
                            </button>

                            {user ? (
                                <div className="flex items-center gap-3">
                                    <div className="h-9 w-9 rounded-full bg-blue-800 flex items-center justify-center text-white font-bold border border-blue-600 ring-2 ring-blue-900 shadow-sm cursor-pointer hover:bg-blue-700 transition">
                                        {user.name.charAt(0)}
                                    </div>
                                    <button onClick={logout} className="text-xs text-red-300 hover:text-red-200 font-medium">Sign Out</button>
                                </div>
                            ) : (
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => onOpenAuth('login')}
                                        className="text-gray-200 font-bold hover:text-white text-sm transition-colors"
                                    >
                                        Log In
                                    </button>
                                    <button
                                        onClick={() => onOpenAuth('partner')}
                                        className="bg-secondary text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg hover:bg-orange-600 transition-all transform hover:-translate-y-0.5"
                                    >
                                        Start Earning
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-200 focus:outline-none p-2 hover:bg-white/10 rounded-lg transition"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-primary border-t border-white/10 px-4 py-6 space-y-4 shadow-2xl absolute w-full left-0 z-40 animate-fade-in backdrop-blur-lg bg-opacity-95">
                    {/* Mobile Search */}
                    <div className="relative mb-6">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="w-full bg-blue-900/50 text-white border border-blue-700/50 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300 h-5 w-5" />
                    </div>

                    <div className="space-y-2">
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-200 font-medium hover:text-secondary hover:bg-white/5 px-4 py-3 rounded-xl transition-all">Home</Link>
                        <Link to="/deals" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-200 font-medium hover:text-secondary hover:bg-white/5 px-4 py-3 rounded-xl transition-all">Deals</Link>
                        <Link to="/travel" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-200 font-medium hover:text-secondary hover:bg-white/5 px-4 py-3 rounded-xl transition-all">Travel</Link>
                        <Link to="/earn" onClick={() => setIsMobileMenuOpen(false)} className="block text-secondary font-bold hover:bg-white/5 px-4 py-3 rounded-xl transition-all">Partner Dashboard</Link>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                        {user ? (
                            <button
                                onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                                className="w-full py-3.5 border border-red-500/30 text-red-300 rounded-xl font-bold hover:bg-red-900/20 transition"
                            >
                                Sign Out ({user.name})
                            </button>
                        ) : (
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => { onOpenAuth('login'); setIsMobileMenuOpen(false); }}
                                    className="w-full py-3.5 border border-white/20 rounded-xl font-bold text-white hover:bg-white/10 transition"
                                >
                                    Log In
                                </button>
                                <button
                                    onClick={() => { onOpenAuth('partner'); setIsMobileMenuOpen(false); }}
                                    className="w-full py-3.5 bg-secondary text-white rounded-xl font-bold shadow-lg hover:bg-orange-600 transition"
                                >
                                    Sign Up
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
