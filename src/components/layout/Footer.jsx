import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="footer-contact" className="bg-gray-50 border-t border-gray-200 mt-auto pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand Column (4 cols) */}
                    <div className="md:col-span-4 space-y-4">
                        <a href="#" className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                                B
                            </div>
                            <span className="text-xl font-bold text-gray-900 tracking-tight">BuySmartlyNow</span>
                        </a>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            We compare prices across Amazon, Jumia, Konga, and more to ensure you never overpay. Shop smart, save big.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-2 md:col-start-6">
                        <h4 className="font-bold text-gray-900 mb-6">Shop</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-primary transition">Gadgets</a></li>
                            <li><a href="#" className="hover:text-primary transition">Daily Deals</a></li>
                            <li><a href="#" className="hover:text-primary transition">Travel</a></li>
                            <li><a href="#" className="hover:text-primary transition">Fashion</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-bold text-gray-900 mb-6">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-primary transition">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition">Press</a></li>
                            <li><a href="#" className="hover:text-primary transition">Become a Partner</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-bold text-gray-900 mb-6">Support</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-primary transition">Help Center</a></li>
                            <li><a href="mailto:support@buysmartlynow.com" className="hover:text-primary transition">Contact Us</a></li>
                            <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">© 2025 BuySmartlyNow. All rights reserved.</p>

                    <div className="flex items-center gap-4 text-gray-400">
                        <a href="#" className="hover:text-primary transition"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-primary transition"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-primary transition"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-primary transition"><Facebook size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
