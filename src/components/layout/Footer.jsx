import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ShieldCheck, Lock, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer-contact" className="bg-neutral-light border-t border-gray-200 mt-auto pt-16 pb-8 font-sans">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand Column (4 cols) */}
                    <div className="md:col-span-4 space-y-6">
                        <Link to="/" className="flex items-center gap-2 mb-2 group">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-heading font-bold text-xl group-hover:rotate-3 transition-transform">
                                B
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-heading font-bold text-primary tracking-tight leading-none">BuySmartly</span>
                                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Compare & Earn</span>
                            </div>
                        </Link>
                        <p className="text-gray-500 leading-relaxed text-sm pr-4">
                            Your ultimate destination for smart shopping. We aggregate the best deals from top retailers and help you earn rewards on every purchase.
                        </p>

                        {/* Trust Badges - Mini */}
                        <div className="flex items-center gap-4 pt-2">
                            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium bg-white px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
                                <Lock size={12} className="text-green-500" /> SSL Secured
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium bg-white px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
                                <ShieldCheck size={12} className="text-primary" /> Verified
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-2 md:col-start-6">
                        <h4 className="font-heading font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">Categories</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link to="/deals" className="hover:text-secondary transition-colors">Electronics & Gadgets</Link></li>
                            <li><Link to="/deals" className="hover:text-secondary transition-colors">Fashion & Style</Link></li>
                            <li><Link to="/travel" className="hover:text-secondary transition-colors">Travel & Flights</Link></li>
                            <li><Link to="/deals" className="hover:text-secondary transition-colors">Home & Living</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-heading font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">Earn With Us</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link to="/earn" className="hover:text-secondary transition-colors font-medium text-primary">Affiliate Program</Link></li>
                            <li><Link to="/earn" className="hover:text-secondary transition-colors">Partner Login</Link></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Refer & Earn</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Commission Rates</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-heading font-bold text-gray-900 mb-6 uppercase text-xs tracking-wider">Support</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-secondary transition-colors">Help Center</a></li>
                            <li><a href="mailto:support@buysmartlynow.com" className="hover:text-secondary transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Trust & Safety</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Terms & Privacy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400">© 2025 BuySmartlyNow. All rights reserved.</p>

                    <div className="flex items-center gap-4 text-gray-400">
                        <a href="#" className="hover:text-primary transition-colors p-2 hover:bg-white rounded-full"><Twitter size={18} /></a>
                        <a href="#" className="hover:text-primary transition-colors p-2 hover:bg-white rounded-full"><Instagram size={18} /></a>
                        <a href="#" className="hover:text-primary transition-colors p-2 hover:bg-white rounded-full"><Linkedin size={18} /></a>
                        <a href="#" className="hover:text-primary transition-colors p-2 hover:bg-white rounded-full"><Facebook size={18} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
