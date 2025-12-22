import React from 'react';
import { ArrowRight, CheckCircle, DollarSign, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EarnSection = () => {
    const navigate = useNavigate();

    return (
        <section className="py-20 bg-primary text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Content */}
                    <div className="md:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-full font-bold text-sm uppercase tracking-wider">
                            <DollarSign size={16} /> Affiliate Program
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight">
                            Turn Your Recommendations Into <span className="text-secondary">Real Income.</span>
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Join thousands of smart shoppers who earn while they share. Get exclusive links, track your impact, and cash out monthly.
                        </p>

                        <div className="space-y-4">
                            {[
                                "High commission rates on every scale",
                                "Real-time tracking dashboard",
                                "Monthly payouts via Bank Transfer or Crypto",
                                "Exclusive partner deals and coupons"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-green-400" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => navigate('/earn')}
                            className="inline-flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-orange-600 transition-all transform hover:-translate-y-1 mt-4"
                        >
                            Start Earning Now <ArrowRight size={20} />
                        </button>
                    </div>

                    {/* Visual / Stats Card */}
                    <div className="md:w-1/2 relative">
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <p className="text-gray-400 text-sm">Total Earnings</p>
                                    <h3 className="text-3xl font-bold">₦ 450,200.00</h3>
                                </div>
                                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                    <TrendingUp size={14} /> +24%
                                </div>
                            </div>

                            {/* Dummy Graph Bars */}
                            <div className="flex items-end justify-between h-32 gap-4">
                                {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                                    <div key={i} className="w-full bg-blue-500/30 rounded-t-lg relative group">
                                        <div
                                            style={{ height: `${h}%` }}
                                            className="absolute bottom-0 w-full bg-secondary rounded-t-lg transition-all duration-1000"
                                        ></div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/10 flex justify-between text-sm text-gray-400">
                                <span>Mon</span>
                                <span>Tue</span>
                                <span>Wed</span>
                                <span>Thu</span>
                                <span>Fri</span>
                                <span>Sat</span>
                                <span>Sun</span>
                            </div>
                        </div>

                        {/* Floater */}
                        <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <DollarSign className="text-green-600" size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold">Just received</p>
                                    <p className="font-bold">₦ 25,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EarnSection;
