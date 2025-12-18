import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            if (searchQuery.trim()) {
                navigate(`/deals?search=${encodeURIComponent(searchQuery)}`);
            }
        }
    };

    return (
        <section className="relative min-h-[700px] flex items-center bg-gray-900 overflow-hidden">
            {/* Full Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2115&auto=format&fit=crop"
                    alt="Christmas Gifts and Shopping"
                    className="w-full h-full object-cover opacity-80 animate-slow-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
                <div className="max-w-2xl text-white space-y-6">
                    <span className="inline-block px-4 py-1 bg-red-600 text-white font-bold rounded-full text-sm uppercase tracking-wider mb-2 shadow-lg animate-bounce">
                        🎄 Season's Greetings
                    </span>
                    <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Unwrap The Best <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">Christmas Deals</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-gray-200 drop-shadow-md animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        Up to 60% off on Gadgets, Gifts & Holiday Travel.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                        <button
                            onClick={() => navigate('/deals')}
                            className="bg-red-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-red-700 transition shadow-xl transform hover:scale-105 duration-300 border border-red-500"
                        >
                            Shop Gifts
                        </button>
                        <button
                            onClick={() => document.getElementById('hero-search')?.focus()}
                            className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white/20 transition"
                        >
                            Compare Prices
                        </button>
                    </div>

                    {/* Search Integrated */}
                    <div className="mt-10 relative max-w-lg animate-slide-up" style={{ animationDelay: '0.7s' }}>
                        <input
                            type="text"
                            id="hero-search"
                            placeholder="Find the perfect gift..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={handleSearch}
                            className="w-full pl-6 pr-12 py-5 rounded-full bg-white/95 border-0 focus:ring-4 focus:ring-red-500/30 text-gray-900 placeholder-gray-500 shadow-2xl transition"
                        />
                        <button
                            onClick={handleSearch}
                            className="absolute right-3 top-3 p-2.5 bg-red-600 text-white rounded-full hover:bg-red-700 shadow-md"
                        >
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
