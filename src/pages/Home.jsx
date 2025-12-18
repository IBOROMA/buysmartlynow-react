import React from 'react';
import Hero from '../components/features/Hero';
import BrandStrip from '../components/features/BrandStrip';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/products';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const featuredProducts = products.slice(0, 8);

    return (
        <div id="home-view" className="fade-in">
            <Hero />
            <BrandStrip />

            {/* Promo Grid (3 Column) */}
            <div className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div onClick={() => navigate('/deals?category=Gadgets')} className="relative h-[450px] group cursor-pointer overflow-hidden rounded-sm">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500"></div>
                        <div className="absolute bottom-10 left-8 text-white z-10">
                            <h3 className="text-2xl font-bold mb-2">20% Off On Gadgets</h3>
                            <p className="mb-4 text-gray-100 font-light">Latest tech trends.</p>
                            <span className="inline-block px-8 py-3 bg-white text-gray-900 text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition">Shop Now</span>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div onClick={() => navigate('/travel')} className="relative h-[450px] group cursor-pointer overflow-hidden rounded-sm">
                        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500"></div>
                        <div className="absolute bottom-10 left-8 text-white z-10">
                            <h3 className="text-2xl font-bold mb-2">Latest Travel Deals</h3>
                            <p className="mb-4 text-gray-100 font-light">Fly for less.</p>
                            <span className="inline-block px-8 py-3 bg-white text-gray-900 text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition">Check Out</span>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div onClick={() => navigate('/deals?category=Fashion')} className="relative h-[450px] group cursor-pointer overflow-hidden rounded-sm">
                        <img src="https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500"></div>
                        <div className="absolute bottom-10 left-8 text-white z-10">
                            <h3 className="text-2xl font-bold mb-2">Let's Suit Up!</h3>
                            <p className="mb-4 text-gray-100 font-light">Premium collection.</p>
                            <span className="inline-block px-8 py-3 bg-white text-gray-900 text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition">Check Out</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Mock Products */}
            <div className="container mx-auto px-4 pb-20">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Products</h2>
                    <div className="h-0.5 w-16 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            {/* Special Banner */}
            <div className="h-[600px] relative overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=90&w=1600')" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-800/20 to-transparent"></div>
                <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-24 relative z-10">
                    <div className="max-w-lg text-white pl-4 md:pl-0">
                        <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Limited Time Offer</h4>
                        <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">Special Edition</h2>
                        <p className="text-lg mb-8 opacity-90 leading-relaxed font-light">Unlock exclusive partner deals on premium electronics and fashion. Use code <span className="font-bold">OFF20</span>.</p>
                        <h3 className="text-2xl font-bold mb-8">Buy This At 20% Discount</h3>
                        <button onClick={() => navigate('/deals')} className="bg-white text-blue-900 px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-100 transition shadow-xl">Shop Now</button>
                    </div>
                </div>
            </div>

            {/* Features Strip */}
            <div className="bg-white py-24 border-t">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
                    <div className="p-4">
                        <div className="text-5xl mb-6 text-gray-800">🌍</div>
                        <h3 className="text-xl font-bold mb-2">Worldwide Shipping</h3>
                        <p className="text-gray-500 text-sm">Affiliate partners deliver globally.</p>
                    </div>
                    <div className="p-4">
                        <div className="text-5xl mb-6 text-gray-800">👕</div>
                        <h3 className="text-xl font-bold mb-2">Best Quality</h3>
                        <p className="text-gray-500 text-sm">Verified retailers and brands.</p>
                    </div>
                    <div className="p-4">
                        <div className="text-5xl mb-6 text-gray-800">🎁</div>
                        <h3 className="text-xl font-bold mb-2">Best Offers</h3>
                        <p className="text-gray-500 text-sm">New deals updated daily.</p>
                    </div>
                    <div className="p-4">
                        <div className="text-5xl mb-6 text-gray-800">🔒</div>
                        <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
                        <p className="text-gray-500 text-sm">Payments handled by trusted platforms.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
