
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/products';
import { Filter, ChevronDown, CheckSquare, Square } from 'lucide-react';

const Deals = () => {
    // Mock States for Filters
    const [priceRange, setPriceRange] = useState(2000000);
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Sort State
    const [sortBy, setSortBy] = useState('best');
    const location = useLocation();

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header / Breadcrumb Area could go here if needed, but wireframe starts with FILTERS | SORT */}

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* 4. SIDEBAR - FILTERS */}
                    <div className="w-full md:w-1/4 flex-shrink-0">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                            <div className="flex items-center gap-2 mb-6 text-gray-800 font-bold border-b pb-4">
                                <Filter size={20} /> FILTERS
                            </div>

                            {/* Price Filter */}
                            <div className="mb-8">
                                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-500">Price Range</h4>
                                <input
                                    type="range"
                                    min="0"
                                    max="2000000"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(e.target.value)}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                                />
                                <div className="flex justify-between text-sm font-medium mt-2">
                                    <span>₦0</span>
                                    <span>₦{parseInt(priceRange).toLocaleString()}</span>
                                </div>
                            </div>

                            {/* Category Filter */}
                            <div className="mb-8">
                                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-500">Category</h4>
                                <div className="space-y-2">
                                    {['Electronics', 'Fashion', 'Travel', 'Home', 'Beauty'].map(cat => (
                                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                            <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center group-hover:border-secondary transition-colors">
                                                {/* Logic to toggle check would go here */}
                                            </div>
                                            <span className="text-gray-600 group-hover:text-primary transition-colors">{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Discount Filter */}
                            <div>
                                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-500">Discount</h4>
                                <div className="space-y-2">
                                    {['50% or more', '30% or more', '10% or more'].map(disc => (
                                        <label key={disc} className="flex items-center gap-3 cursor-pointer group">
                                            <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center group-hover:border-secondary transition-colors"></div>
                                            <span className="text-gray-600 group-hover:text-primary transition-colors">{disc}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MAIN CONTENT */}
                    <div className="flex-grow">
                        {/* SORT BAR */}
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center mb-6">
                            <span className="font-medium text-gray-500">{products.length} Deals Found</span>

                            <div className="flex items-center gap-3">
                                <span className="text-sm font-bold text-gray-700">SORT BY:</span>
                                <select
                                    className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-secondary focus:border-secondary block p-2.5 outline-none font-medium"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="best">Best Deals</option>
                                    <option value="price_low">Price: Low to High</option>
                                    <option value="price_high">Price: High to Low</option>
                                    <option value="newest">Newest First</option>
                                </select>
                            </div>
                        </div>

                        {/* DEALS GRID */}
                        {/* DEALS GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products
                                .filter(product => {
                                    // 1. Filter by Price
                                    if (parseInt(product.price.replace(/[^\d]/g, '')) > priceRange) return false;

                                    // 2. Filter by Category (from URL or Sidebar)
                                    // Get category from URL
                                    const params = new URLSearchParams(location.search);
                                    const urlCategory = params.get('category');

                                    // If sidebar categories selected, use those. Else if URL category, use that. Else show all.
                                    if (selectedCategories.length > 0) {
                                        return selectedCategories.includes(product.category);
                                    } else if (urlCategory) {
                                        return product.category === urlCategory;
                                    }

                                    return true;
                                })
                                .map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deals;
