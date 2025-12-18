import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = ({ onOpenAuth }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, logout } = useAuth();

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                            B
                        </div>
                        <span className="text-xl font-bold text-gray-900 tracking-tight">BuySmartlyNow</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
                        <Link to="/" className="hover:text-primary transition">Home</Link>
                        <Link to="/deals" className="hover:text-primary transition">Deals</Link>
                        <Link to="/travel" className="hover:text-primary transition">Travel</Link>
                        <a href="#gadgets" className="hover:text-primary transition">Gadgets</a>
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        {user ? (
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border border-blue-200">
                                    {user.name.charAt(0)}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-700 text-sm leading-tight">{user.name}</span>
                                    <button onClick={logout} className="text-xs text-red-500 hover:underline text-left">Sign Out</button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <button
                                    onClick={() => onOpenAuth('login')}
                                    className="text-gray-600 font-bold hover:text-blue-600 transition"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => onOpenAuth('partner')}
                                    className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition transform hover:-translate-y-0.5"
                                >
                                    Affiliate Sign In
                                </button>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-600 focus:outline-none p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl mb-4 rounded-b-2xl absolute w-full left-0 z-40 fade-in">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 font-medium hover:text-primary hover:pl-2 transition-all">Home</Link>
                    <Link to="/deals" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 font-medium hover:text-primary hover:pl-2 transition-all">Deals</Link>
                    <Link to="/travel" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 font-medium hover:text-primary hover:pl-2 transition-all">Travel</Link>

                    <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                        {user ? (
                            <button
                                onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                                className="w-full text-center py-3 border border-red-200 text-red-600 rounded-xl font-bold hover:bg-red-50"
                            >
                                Sign Out ({user.name})
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={() => { onOpenAuth('login'); setIsMobileMenuOpen(false); }}
                                    className="w-full text-center py-3 border border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-50"
                                >
                                    Log In
                                </button>
                                <button
                                    onClick={() => { onOpenAuth('partner'); setIsMobileMenuOpen(false); }}
                                    className="w-full text-center py-3 bg-primary text-white rounded-xl font-bold shadow-md hover:bg-blue-700"
                                >
                                    Partner Sign In
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
