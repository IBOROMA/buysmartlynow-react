
import React, { useState } from 'react';
import { Heart, Eye, ExternalLink, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    // 2. WISHLIST: State for wishlist toggle
    const [isWishlisted, setIsWishlisted] = useState(false);

    const toggleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsWishlisted(!isWishlisted);
        // Logic to sync with context/backend would go here
    };

    // Sort retailers to find best price
    const sortedRetailers = product.retailers ? [...product.retailers].sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
        return priceA - priceB;
    }) : [];

    // Fallback if no retailers
    const bestDeal = sortedRetailers.length > 0 ? sortedRetailers[0] : { price: product.price, name: 'Best Price', url: '#' };
    const bestPriceVal = parseFloat(bestDeal.price.replace(/[^0-9.]/g, ''));

    // Simulate original price (markup) and savings
    const markup = 1.35;
    const originalPrice = Math.floor(bestPriceVal * markup);
    const savingsAmount = originalPrice - bestPriceVal;
    const savingsPercent = Math.round((savingsAmount / originalPrice) * 100);

    const isHotDeal = savingsPercent > 25;
    const isLimited = Math.random() > 0.8; // Reduced random rendering

    return (
        <Link to={`/product/${product.id}`} className="block h-full">
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full relative">

                {/* 2. WISHLIST: Top-Right Toggle */}
                <button
                    onClick={toggleWishlist}
                    className="absolute top-3 right-3 z-20 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm hover:scale-110 active:scale-95 transition-all group-hover:opacity-100"
                >
                    <Heart
                        size={18}
                        className={`transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                    />
                </button>

                {/* Badges */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                    {isHotDeal && (
                        <span className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                            <Zap size={10} fill="currentColor" /> HOT
                        </span>
                    )}
                    {isLimited && (
                        <span className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                            LIMITED
                        </span>
                    )}
                </div>

                <div className="relative overflow-hidden h-60 bg-gray-50 px-4 pt-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{product.category}</span>
                        <div className="flex items-center gap-1 text-[10px] text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md">
                            <span className="font-bold">{sortedRetailers.length}</span> Stores
                        </div>
                    </div>

                    <h3 className="text-base font-bold text-gray-900 mb-1 leading-snug line-clamp-2 group-hover:text-primary transition-colors h-10">
                        {product.name}
                    </h3>

                    {/* Price Block */}
                    <div className="mt-4">
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-xl font-bold text-orange-600">{bestDeal.price}</span>
                            <span className="text-xs text-gray-400 line-through">₦{originalPrice.toLocaleString()}</span>
                        </div>
                    </div>

                    {/* Mini Retailer List (Visual Only) */}
                    <div className="mt-auto pt-3 border-t border-gray-100 flex flex-col gap-2">
                        {sortedRetailers.slice(0, 2).map((retailer, idx) => (
                            <div key={idx} className="flex justify-between items-center text-xs">
                                <div className="flex items-center gap-1.5">
                                    <div className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                    <span className="text-gray-600 font-medium truncate max-w-[80px]">{retailer.name}</span>
                                </div>
                                <span className="font-bold text-gray-700">{retailer.price}</span>
                            </div>
                        ))}
                        {sortedRetailers.length > 2 && (
                            <div className="text-[10px] text-primary font-bold text-center mt-1">
                                + {sortedRetailers.length - 2} more retailers
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
