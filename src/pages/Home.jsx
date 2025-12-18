import React from 'react';
import Hero from '../components/features/Hero';
import BrandStrip from '../components/features/BrandStrip';
import CategorySection from '../components/features/CategorySection';
import EarnSection from '../components/features/EarnSection';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/products';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    // Get top 8 products for "Featured"
    const featuredProducts = products.slice(0, 8);

    return (
        <div id="home-view" className="fade-in bg-white">
            <Hero />
            <BrandStrip />

            <CategorySection />

            {/* Featured Deals Section */}
            <div className="container mx-auto px-4 py-20 bg-gray-50/50">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-2 block">Don't Miss Out</span>
                    <h2 className="text-4xl font-heading font-bold mb-4 text-primary">Featured Deals</h2>
                    <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map(product => (
                        <div key={product.id} className="h-[480px]">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button
                        onClick={() => navigate('/deals')}
                        className="border-2 border-primary text-primary px-10 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all uppercase tracking-wider"
                    >
                        View All Deals
                    </button>
                </div>
            </div>

            <EarnSection />

            {/* Features Strip */}
            <div className="bg-white py-24 border-t border-gray-100">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
                    <div className="p-6 rounded-2xl hover:bg-gray-50 transition-colors group">
                        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🌍</div>
                        <h3 className="text-xl font-bold mb-2 font-heading">Worldwide Shipping</h3>
                        <p className="text-gray-500 text-sm">Affiliate partners deliver globally.</p>
                    </div>
                    <div className="p-6 rounded-2xl hover:bg-gray-50 transition-colors group">
                        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🛡️</div>
                        <h3 className="text-xl font-bold mb-2 font-heading">Verified Sellers</h3>
                        <p className="text-gray-500 text-sm">Trusted retailers and authentic brands.</p>
                    </div>
                    <div className="p-6 rounded-2xl hover:bg-gray-50 transition-colors group">
                        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
                        <h3 className="text-xl font-bold mb-2 font-heading">Daily Updates</h3>
                        <p className="text-gray-500 text-sm">New deals added every single hour.</p>
                    </div>
                    <div className="p-6 rounded-2xl hover:bg-gray-50 transition-colors group">
                        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🔒</div>
                        <h3 className="text-xl font-bold mb-2 font-heading">Secure Payments</h3>
                        <p className="text-gray-500 text-sm">Transactions handled by top gateways.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
