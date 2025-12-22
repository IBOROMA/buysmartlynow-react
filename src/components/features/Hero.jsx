import React, { useState, useEffect } from 'react';
import { ArrowRight, Search, TrendingUp, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    // Countdown State
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('December 25, 2025 23:59:59').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-white overflow-hidden border-b border-gray-100">
            {/* 2. HERO: Abstract Noise/Pattern on Right */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>

            <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-primary text-xs font-bold px-3 py-1 rounded-full mb-6">
                        <TrendingUp size={14} className="text-secondary" />
                        <span> #1 Price Comparison Engine in Nigeria</span>
                    </div>

                    {/* Christmas Countdown */}
                    <div className="mb-8 inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-red-600/5 border border-red-200 p-4 rounded-2xl">
                        <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-wider text-sm">
                            <Clock size={18} />
                            Christmas Deals Ends In:
                        </div>
                        <div className="flex gap-2 text-gray-900 font-mono font-bold text-xl">
                            <div className="flex flex-col items-center bg-white border border-gray-200 px-3 py-1 rounded-lg shadow-sm">
                                <span>{String(timeLeft.days).padStart(2, '0')}</span>
                                <span className="text-[10px] text-gray-400 font-sans uppercase">Days</span>
                            </div>
                            <span className="self-start py-1">:</span>
                            <div className="flex flex-col items-center bg-white border border-gray-200 px-3 py-1 rounded-lg shadow-sm">
                                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                                <span className="text-[10px] text-gray-400 font-sans uppercase">Hrs</span>
                            </div>
                            <span className="self-start py-1">:</span>
                            <div className="flex flex-col items-center bg-white border border-gray-200 px-3 py-1 rounded-lg shadow-sm">
                                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                                <span className="text-[10px] text-gray-400 font-sans uppercase">Mins</span>
                            </div>
                            <span className="self-start py-1">:</span>
                            <div className="flex flex-col items-center bg-red-600 text-white border border-red-600 px-3 py-1 rounded-lg shadow-sm">
                                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                                <span className="text-[10px] text-red-100 font-sans uppercase">Secs</span>
                            </div>
                        </div>
                    </div>

                    {/* Headline - Tightened line-height */}
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                        Compare, Save & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Earn on Every Deal</span>
                    </h1>

                    <p className="text-lg text-gray-500 mb-10 max-w-xl leading-relaxed">
                        Smart prices across top global stores. We track millions of products to ensure you never overpay again.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        {/* 2. HERO: Dominant Primary CTA */}
                        <Link to="/deals" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                            SHOP BEST DEALS <ArrowRight size={20} />
                        </Link>
                        {/* 2. HERO: De-emphasized Secondary CTA */}
                        <Link to="/compare" className="bg-white border text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
                            <Search size={20} /> COMPARE PRICES
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-500">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-green-500" /> Verified Stores
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-green-500" /> Secure Checkout
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-green-500" /> Best Price Guarantee
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
