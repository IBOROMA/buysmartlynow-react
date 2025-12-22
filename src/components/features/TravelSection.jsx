
import React from 'react';
import { Plane, Calendar, MapPin } from 'lucide-react';

const TravelSection = () => {
    return (
        <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000" alt="Travel Background" className="w-full h-full object-cover" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-heading font-bold mb-4">Compare Flight Prices</h2>
                    <p className="text-blue-200">Find the cheapest flights to your dream destinations.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto transform translate-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div className="relative">
                            <label className="block text-gray-500 text-xs font-bold uppercase mb-1">From</label>
                            <div className="flex items-center border border-gray-200 rounded-lg px-3 py-3 bg-gray-50 focus-within:ring-2 focus-within:ring-secondary focus-within:bg-white transition-all">
                                <MapPin size={18} className="text-gray-400 mr-2" />
                                <input type="text" defaultValue="Lagos" className="w-full bg-transparent outline-none text-gray-800 font-bold placeholder-gray-400" />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="block text-gray-500 text-xs font-bold uppercase mb-1">To</label>
                            <div className="flex items-center border border-gray-200 rounded-lg px-3 py-3 bg-gray-50 focus-within:ring-2 focus-within:ring-secondary focus-within:bg-white transition-all">
                                <MapPin size={18} className="text-gray-400 mr-2" />
                                <input type="text" defaultValue="London" className="w-full bg-transparent outline-none text-gray-800 font-bold placeholder-gray-400" />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="block text-gray-500 text-xs font-bold uppercase mb-1">Date</label>
                            <div className="flex items-center border border-gray-200 rounded-lg px-3 py-3 bg-gray-50 focus-within:ring-2 focus-within:ring-secondary focus-within:bg-white transition-all">
                                <Calendar size={18} className="text-gray-400 mr-2" />
                                <input type="date" className="w-full bg-transparent outline-none text-gray-800 font-bold placeholder-gray-400" />
                            </div>
                        </div>

                        <button className="bg-secondary text-white font-bold py-3.5 rounded-lg hover:bg-orange-600 transition-colors shadow-lg flex items-center justify-center gap-2">
                            <Plane size={20} /> COMPARE FLIGHTS
                        </button>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <span className="text-blue-200 text-sm font-bold uppercase tracking-wider mr-4">Popular Destinations:</span>
                    <div className="inline-flex flex-wrap justify-center gap-4 text-sm font-medium text-white">
                        {['Dubai', 'United Kingdom', 'USA', 'Canada', 'South Africa'].map((dest, i) => (
                            <span key={i} className="hover:text-secondary cursor-pointer transition-colors border-b border-white/20 hover:border-secondary pb-0.5">{dest}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelSection;
