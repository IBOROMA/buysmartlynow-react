import React from 'react';

const ProductCard = ({ product }) => {
    // Sort retailers by price
    const sortedRetailers = [...product.retailers].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
    });

    return (
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full transform hover:-translate-y-2">
            <div className="relative overflow-hidden h-64 bg-gray-50 group">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                {/* Category Pill */}
                <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {product.category}
                </span>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition">
                    {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
                    {product.description}
                </p>

                <div className="mt-auto border-t border-gray-100 pt-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Compare Prices</p>
                    <div className="flex flex-col gap-3">
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
                                        alert(`Redirecting via Cloaked Link: ${retailer.url}\n(This counts as a click!)`);
                                    }}
                                    className={`flex justify-between items-center w-full px-6 py-3 rounded-xl text-sm font-bold transition transform hover:scale-[1.02] active:scale-95 shadow-sm hover:shadow-md ${retailer.color} ${isBestPrice ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                                >
                                    <div className="flex flex-col items-start leading-tight">
                                        <span className="opacity-90">Buy on</span>
                                        <span className="text-lg">{retailer.name}</span>
                                    </div>
                                    <div className="flex flex-col items-end text-right">
                                        {isBestPrice && (
                                            <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full mb-1 uppercase tracking-wider">Best Deal</span>
                                        )}
                                        <span className="text-lg font-extrabold">{retailer.price}</span>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
