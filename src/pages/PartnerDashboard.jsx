
import React from 'react';
import { DollarSign, MousePointer, ShoppingBag, Copy, TrendingUp, BarChart2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const PartnerDashboard = () => {
    const { user } = useAuth();
    // Use user name or fallback
    const userName = user?.name || "Partner";

    return (
        <div className="bg-gray-50 min-h-screen py-10 fade-in">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-heading font-bold text-gray-900">Welcome back, {userName}!</h1>
                        <p className="text-gray-500">Here's how your affiliate links are performing today.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-bold shadow-sm hover:bg-gray-50">Settings</button>
                        <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-blue-900">Withdraw Funds</button>
                    </div>
                </div>

                {/* 6. PARTNER DASHBOARD STATS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Total Earnings</p>
                            <h3 className="text-3xl font-bold text-gray-900">₦ 450,200</h3>
                        </div>
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                            <DollarSign size={24} />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Total Clicks</p>
                            <h3 className="text-3xl font-bold text-gray-900">12,543</h3>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                            <MousePointer size={24} />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Total Sales</p>
                            <h3 className="text-3xl font-bold text-gray-900">342</h3>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                            <ShoppingBag size={24} />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* CHART SECTION */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                                <TrendingUp size={20} className="text-secondary" /> Performance Chart
                            </h3>
                            <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-1 outline-none">
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                                <option>This Year</option>
                            </select>
                        </div>

                        {/* Mock Chart */}
                        <div className="h-64 flex items-end justify-between gap-2 px-2">
                            {[30, 45, 35, 60, 50, 75, 65, 80, 55, 70, 90, 85].map((h, i) => (
                                <div key={i} className="w-full bg-blue-50 rounded-t-lg relative group">
                                    <div
                                        style={{ height: `${h}%` }}
                                        className="absolute bottom-0 w-full bg-primary/80 group-hover:bg-primary rounded-t-lg transition-all duration-300"
                                    ></div>
                                    {/* Tooltip */}
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {h}%
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between text-xs text-gray-400 uppercase tracking-widest font-bold">
                            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        </div>
                    </div>

                    {/* REFERRAL LINK */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-xl text-gray-900 mb-6">Your Referral Link</h3>
                        <p className="text-gray-500 text-sm mb-6">Share this link to earn 5% commission on all purchases made within 30 days.</p>

                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6 relative group cursor-pointer hover:border-secondary transition-colors">
                            <p className="font-mono text-sm text-gray-600 truncate pr-8">buysmartly.com/ref/{user?.name?.toLowerCase().replace(/\s/g, '') || 'partner123'}</p>
                            <Copy size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-secondary" />
                        </div>

                        <button className="w-full bg-secondary text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                            Copy Link
                        </button>

                        <div className="mt-8">
                            <h4 className="font-bold text-sm text-gray-900 mb-4">Quick Share</h4>
                            <div className="flex gap-4">
                                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-700">Facebook</button>
                                <button className="flex-1 bg-sky-500 text-white py-2 rounded-lg text-sm font-bold hover:bg-sky-600">Twitter</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PartnerDashboard;
