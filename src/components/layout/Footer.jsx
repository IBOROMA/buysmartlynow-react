
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary text-gray-300 pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg">B</div>
                            <span className="text-xl font-heading font-bold text-white">BuySmartly</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6 text-gray-400">
                            The smartest way to shop online. Compare prices, find verified deals, and earn cash rewards on every purchase.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-secondary hover:text-white transition-all"><Facebook size={18} /></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-secondary hover:text-white transition-all"><Twitter size={18} /></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-secondary hover:text-white transition-all"><Instagram size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/deals" className="hover:text-secondary transition-colors flex items-center gap-2"><span>›</span> Browse Deals</Link></li>
                            <li><Link to="/travel" className="hover:text-secondary transition-colors flex items-center gap-2"><span>›</span> Flight Comparison</Link></li>
                            <li><Link to="/earn" className="hover:text-secondary transition-colors flex items-center gap-2"><span>›</span> Partner Program</Link></li>
                            <li><Link to="/about" className="hover:text-secondary transition-colors flex items-center gap-2"><span>›</span> About Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-secondary shrink-0 mt-1" />
                                <span className="text-sm">123 Innovation Drive, Lekki Phase 1, Lagos, Nigeria</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-secondary shrink-0" />
                                <span className="text-sm">+234 800 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-secondary shrink-0" />
                                <span className="text-sm">support@buysmartly.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Newsletter</h4>
                        <p className="text-sm text-gray-400 mb-4">Subscribe for daily deal alerts and exclusive offers.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                            />
                            <button className="absolute right-2 top-1.5 bg-secondary text-white p-1.5 rounded-md hover:bg-orange-600 transition-colors">
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} BuySmartly. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
