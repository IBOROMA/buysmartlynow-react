
import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

const FeaturedDeals = ({ deals }) => {
    // Fallback if no deals provided, use first 4 products from data
    const displayDeals = deals || products.slice(0, 4);

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-gray-900">Featured Deals</h2>
                        <div className="h-1 w-20 bg-secondary rounded-full mt-2"></div>
                    </div>
                    <Link to="/deals" className="hidden md:flex items-center text-primary font-bold hover:text-secondary transition-colors">
                        View All Deals <ArrowRight size={18} className="ml-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayDeals.map((deal) => (
                        <div key={deal.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 group">
                            {/* Image Container */}
                            <div className="relative h-48 bg-gray-100 overflow-hidden">
                                <img src={deal.image} alt={deal.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                                    -{deal.discount}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1">{deal.name}</h3>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-gray-400 text-sm line-through">₦{deal.oldPrice}</span>
                                    <span className="text-secondary font-bold text-xl">₦{deal.newPrice}</span>
                                </div>
                                <button className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-blue-900 transition-colors flex justify-center items-center gap-2">
                                    <ShoppingBag size={18} />
                                    Get Deal
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <Link to="/deals" className="btn-secondary px-8 py-3 rounded-full inline-flex items-center">
                        View All Deals <ArrowRight size={18} className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedDeals;
