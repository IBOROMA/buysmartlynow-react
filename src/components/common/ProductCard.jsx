import React from 'react';
import { Heart, Eye, ExternalLink, Zap } from 'lucide-react';

const ProductCard = ({ product }) => {
    // Sort retailers to find best price
    const sortedRetailers = [...product.retailers].sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
        return priceA - priceB;
    });

    const bestDeal = sortedRetailers[0];
    const bestPriceVal = parseFloat(bestDeal.price.replace(/[^0-9.]/g, ''));

    // Simulate original price (20% - 40% markup) and savings
    const markup = 1.35;
    const originalPrice = Math.floor(bestPriceVal * markup);
    const savingsAmount = originalPrice - bestPriceVal;
    const savingsPercent = Math.round((savingsAmount / originalPrice) * 100);

    const isHotDeal = savingsPercent > 25;
    const isLimited = Math.random() > 0.7;

    return (
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full relative">
            {/* Badges */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                {isHotDeal && (
                    <span className="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                        <Zap size={10} fill="currentColor" /> HOT DEAL
                    </span>
                )}
                {isLimited && (
                    <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                        LOW STOCK
                    </span>
                )}
            </div>

            <div className="relative overflow-hidden h-64 bg-gray-50">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 bg-opacity-30 backdrop-blur-[2px]">
                    <button className="bg-white text-gray-800 p-2.5 rounded-full hover:bg-secondary hover:text-white transition-all shadow-lg transform hover:scale-110">
                        <Heart size={18} />
                    </button>
                    <button className="bg-white text-gray-800 p-2.5 rounded-full hover:bg-primary hover:text-white transition-all shadow-lg transform hover:scale-110">
                        <Eye size={18} />
                    </button>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                {/* Store & Category */}
                <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{product.category}</span>
                </div>

                <h3 className="text-lg font-bold text-primary mb-2 leading-tight line-clamp-2 min-h-[3rem] group-hover:text-secondary transition-colors">
                    {product.name}
                </h3>

                {/* Price Comparison Section */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Compare Prices</p>
                    <div className="flex flex-col gap-2">
                        {sortedRetailers.map((retailer, index) => {
                            const isBestPrice = index === 0;
                            return (
                                <a
                                    key={index}
                                    href={retailer.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        alert(`Redirecting via Cloaked Link: ${retailer.url}\n(Tracked Click!)`);
                                    }}
                                    className={`flex justify-between items-center w-full px-4 py-2 rounded-lg text-sm transition-all duration-200 border ${isBestPrice
                                            ? 'bg-blue-50/50 border-blue-200 hover:bg-blue-50 shadow-sm'
                                            : 'bg-white border-gray-100 hover:bg-gray-50'
                                        }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${isBestPrice ? 'bg-secondary' : 'bg-gray-300'}`}></div>
                                        <span className={`font-medium ${isBestPrice ? 'text-blue-900' : 'text-gray-600'}`}>{retailer.name}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {isBestPrice && (
                                            <span className="bg-secondary text-white text-[10px] px-1.5 py-0.5 rounded-sm font-bold uppercase tracking-wide">
                                                Best
                                            </span>
                                        )}
                                        <span className={`font-bold ${isBestPrice ? 'text-primary text-base' : 'text-gray-500 text-sm'}`}>
                                            {retailer.price}
                                        </span>
                                        <ExternalLink size={12} className="text-gray-300" />
                                    </div>
                                </a>
                            );
                        })}
                    </div>

                    {/* Savings Summary */}
                    {isHotDeal && (
                        <div className="mt-3 text-center">
                            <span className="text-xs text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full">
                                Save up to {savingsPercent}% by comparing
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
