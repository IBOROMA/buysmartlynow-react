
import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = ({ onOpenAuth }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const location = useLocation();

    // Helper to check active link
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-primary shadow-lg sticky top-0 z-50 transition-all duration-300 border-b border-white/5">
            <div className="container mx-auto px-4">
                {/* 1. HEADER: Reduced vertical padding (h-16) */}
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
                        <div className="w-9 h-9 bg-secondary rounded-xl flex items-center justify-center text-white font-heading font-bold text-lg shadow-lg transform group-hover:rotate-3 transition-transform">
                            B
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-heading font-bold text-white tracking-tight leading-none">BuySmartly</span>
                        </div>
                    </Link>

                    {/* Search Bar - Desktop - Sleeker */}
                    <div className="hidden md:flex relative w-1/3 max-w-md mx-8 transition-all focus-within:w-1/2 focus-within:max-w-xl">
                        <input
                            type="text"
                            placeholder="Search deals, flights, products..."
                            className="w-full bg-blue-950/50 text-white border border-blue-800/50 rounded-full py-1.5 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-secondary/50 focus:border-secondary transition-all placeholder-blue-300/50 text-sm"
                        />
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-400 h-4 w-4" />
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* Auth / Earn */}
                        <div className="flex items-center gap-4 border-r border-white/10 pr-6">
                            {user ? (
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-blue-100">Hi, {user.name}</span>
                                    <button onClick={logout} className="text-xs text-red-300 hover:text-white transition-colors">Logout</button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => onOpenAuth('login')}
                                    className="text-sm font-medium text-white hover:text-secondary transition-colors flex items-center gap-2"
                                >
                                    <User size={16} /> Login
                                </button>
                            )}

                            <Link
                                to="/earn"
                                className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 border border-white/5"
                            >
                                <Zap size={12} className="text-yellow-400 fill-current" /> Earn
                            </Link>
                        </div>

                        {/* Cart - Defined Touch Target */}
                        <div className="relative cursor-pointer group">
                            <div className="bg-gray-100 p-2 rounded-full group-hover:bg-white/10 transition-colors">
                                <ShoppingCart className="text-white h-5 w-5" />
                            </div>
                            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-primary">0</span>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Bottom Row Navigation - Desktop */}
                <div className="hidden md:flex items-center justify-center gap-8 py-2 border-t border-white/5">
                    <div className="flex items-center gap-8 text-xs font-medium tracking-wide uppercase text-blue-200">
                        <Link to="/deals" className={`hover: text - white transition - colors flex items - center gap - 1 ${isActive('/deals') ? 'text-secondary' : ''} `}>
                            Deals
                        </Link>
                        <Link to="/travel" className={`hover: text - white transition - colors flex items - center gap - 1 ${isActive('/travel') ? 'text-secondary' : ''} `}>
                            Travel
                        </Link>
                        <Link to="/compare" className={`hover: text - white transition - colors flex items - center gap - 1 ${isActive('/compare') ? 'text-secondary' : ''} `}>
                            Compare Prices
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-primary border-t border-white/10 px-4 py-6 space-y-4 fixed w-full left-0 z-40 shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)]">
                    <Link to="/deals" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-200 border-b border-white/5 pb-2">Deals</Link>
                    <div onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-200 border-b border-white/5 pb-2">Categories</div>
                    <Link to="/travel" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-200 border-b border-white/5 pb-2">Travel</Link>
                    <Link to="/compare" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-gray-200 border-b border-white/5 pb-2">Compare</Link>
                    <Link to="/earn" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-bold text-secondary border-b border-white/5 pb-2">Earn Money</Link>

                    <div className="pt-4">
                        {user ? (
                            <button
                                onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                                className="w-full text-left text-red-400 font-medium"
                            >
                                Sign Out ({user.name})
                            </button>
                        ) : (
                            <button
                                onClick={() => { onOpenAuth('login'); setIsMobileMenuOpen(false); }}
                                className="w-full text-left text-white font-medium"
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
