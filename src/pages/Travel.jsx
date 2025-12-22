import React, { useState } from 'react';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/products';

const Travel = () => {
    const [activeTab, setActiveTab] = useState('deals');
    const travelDeals = products.filter(p => p.category === 'Travel');

    return (
        <div className="container mx-auto px-4 py-8 fade-in">
            <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Travel & Flights</h2>
                <div className="flex space-x-2 bg-gray-100 p-1 rounded-xl inline-flex">
                    <button
                        onClick={() => setActiveTab('deals')}
                        className={`px-6 py-2 rounded-lg text-sm font-bold transition ${activeTab === 'deals' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                        Travel Deals
                    </button>
                    <button
                        onClick={() => setActiveTab('flights')}
                        className={`px-6 py-2 rounded-lg text-sm font-bold transition ${activeTab === 'flights' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                        Flight Compare
                    </button>
                </div>
            </div>

            {activeTab === 'deals' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {travelDeals.length > 0 ? (
                        travelDeals.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">No travel deals available right now.</p>
                    )}
                </div>
            )}

            {activeTab === 'flights' && (
                <div className="max-w-4xl mx-auto text-center py-12 bg-white rounded-3xl border border-gray-100 shadow-xl">
                    <h3 className="text-2xl font-bold mb-4">Flight Comparison Tool</h3>
                    <p className="text-gray-500 mb-8">Coming soon... The flight search widget will be available shortly.</p>
                    {/* Placeholder for Flight Search Widget */}
                    <div className="p-8 bg-gray-50 rounded-xl mx-8 dashed border-2 border-gray-200">
                        [Flight Search Widget Component]
                    </div>
                </div>
            )}
        </div>
    );
};

export default Travel;
