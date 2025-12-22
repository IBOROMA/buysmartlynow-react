import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle, Tag, Clock } from 'lucide-react';
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
        <section className="bg-primary text-white py-20 relative overflow-hidden">
            {/* Background Element (Subtle) */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 skew-x-12 transform translate-x-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                {/* Christmas Countdown */}
                <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 border border-white/20 p-4 rounded-2xl mb-8 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-secondary font-bold uppercase tracking-wider text-sm">
                        <Clock size={18} />
                        Christmas Deals Ends In:
                    </div>
                    <div className="flex gap-2 text-white font-mono font-bold text-xl">
                        <div className="flex flex-col items-center bg-white/20 border border-white/10 px-3 py-1 rounded-lg">
                            <span>{String(timeLeft.days).padStart(2, '0')}</span>
                            <span className="text-[10px] text-gray-300 font-sans uppercase">Days</span>
                        </div>
                        <span className="self-start py-1">:</span>
                        <div className="flex flex-col items-center bg-white/20 border border-white/10 px-3 py-1 rounded-lg">
                            <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                            <span className="text-[10px] text-gray-300 font-sans uppercase">Hrs</span>
                        </div>
                        <span className="self-start py-1">:</span>
                        <div className="flex flex-col items-center bg-white/20 border border-white/10 px-3 py-1 rounded-lg">
                            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                            <span className="text-[10px] text-gray-300 font-sans uppercase">Mins</span>
                        </div>
                        <span className="self-start py-1">:</span>
                        <div className="flex flex-col items-center bg-secondary text-white border border-secondary px-3 py-1 rounded-lg">
                            <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                            <span className="text-[10px] text-white/80 font-sans uppercase">Secs</span>
                        </div>
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                    Compare, Save & Earn <br className="hidden md:block" />on Every Deal
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-2xl mx-auto">
                    Smart prices across top global stores
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
                    <Link
                        to="/deals"
                        className="w-full md:w-auto px-8 py-4 bg-secondary hover:bg-orange-600 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                        SHOP BEST DEALS
                    </Link>
                    <Link
                        to="/compare"
                        className="w-full md:w-auto px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold rounded-full text-lg transition-all"
                    >
                        COMPARE PRICES
                    </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap text-sm md:text-base text-gray-300">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="text-accent" size={20} />
                        <span>Verified Stores</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="text-accent" size={20} />
                        <span>Secure</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Tag className="text-accent" size={20} />
                        <span>Best Prices</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
