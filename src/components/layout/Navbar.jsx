import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = ({ onOpenAuth }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, logout } = useAuth();

    return (
        <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
            {/* Top Row: Logo | Search | Login | Earn */}
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center gap-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 flex-shrink-0">
                        <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg">
                            B
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <span className="text-xl font-heading font-bold tracking-tight leading-none">BuySmartly</span>
                        </div>
                    </Link>

                    {/* Search Bar - Always Visible (Expanded on Desktop) */}
                    <div className="flex-grow max-w-2xl mx-4 relative">
                        <input
                            type="text"
                            placeholder="Search products, deals, travel..."
                            className="w-full bg-white/10 border border-white/20 rounded-full py-2.5 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white/20 placeholder-gray-400 transition-all"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                    </div>

                    {/* Right Actions (Desktop) */}
                    <div className="hidden md:flex items-center gap-4 flex-shrink-0">
                        {user ? (
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-medium">{user.name}</span>
                                <button onClick={logout} className="text-xs text-gray-300 hover:text-white">Sign Out</button>
                            </div>
                        ) : (
                            <button
                                onClick={() => onOpenAuth('login')}
                                className="text-sm font-bold hover:text-secondary transition-colors"
                            >
                                Login
                            </button>
                        )}

                        <Link
                            to="/earn"
                            className="bg-secondary px-4 py-2 rounded-full text-sm font-bold shadow-md hover:bg-orange-600 transition-transform transform hover:-translate-y-0.5"
                        >
                            Earn
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex md:hidden items-center gap-3">
                        <button className="relative p-1">
                            <ShoppingCart size={24} />
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary text-white text-[10px] flex items-center justify-center rounded-full font-bold">0</span>
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Row (Desktop Only): Nav Links + Cart */}
            <div className="hidden md:block border-t border-white/10 bg-primary/95 backdrop-blur-sm">
                <div className="container mx-auto px-4 h-12 flex items-center justify-between">
                    <div className="flex items-center gap-8 text-sm font-medium text-gray-300">
                        <Link to="/deals" className="hover:text-white flex items-center gap-1 transition-colors">
                            Deals
                        </Link>

                        <div className="group relative cursor-pointer h-12 flex items-center">
                            <span className="hover:text-white flex items-center gap-1 transition-colors">
                                Categories <ChevronDown size={14} />
                            </span>
                            {/* Simple Dropdown Placeholder */}
                            <div className="absolute top-12 left-0 w-48 bg-white text-gray-800 rounded-b-lg shadow-xl py-2 hidden group-hover:block border-t-2 border-secondary">
                                <Link to="/category/electronics" className="block px-4 py-2 hover:bg-gray-100">Electronics</Link>
                                <Link to="/category/fashion" className="block px-4 py-2 hover:bg-gray-100">Fashion</Link>
                                <Link to="/category/travel" className="block px-4 py-2 hover:bg-gray-100">Travel</Link>
                                <Link to="/category/home" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
                            </div>
                        </div>

                        <Link to="/travel" className="hover:text-white transition-colors">Travel</Link>
                        <Link to="/compare" className="hover:text-white transition-colors">Compare</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/cart" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
                            <div className="relative">
                                <ShoppingCart size={20} />
                                <span className="absolute -top-2 -right-2 w-4 h-4 bg-secondary text-white text-[10px] flex items-center justify-center rounded-full font-bold shadow-sm">0</span>
                            </div>
                            <span className="text-sm font-medium">Cart</span>
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
