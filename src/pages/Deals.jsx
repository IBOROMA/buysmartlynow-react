import React, { useEffect, useState } from 'react';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/products';
import { useSearchParams } from 'react-router-dom';

const Deals = () => {
    const [searchParams] = useSearchParams();
    const [filteredProducts, setFilteredProducts] = useState(products);
    const categoryFilter = searchParams.get('category');
    const searchQuery = searchParams.get('search');

    useEffect(() => {
        let result = products;

        if (categoryFilter) {
            result = result.filter(p => p.category === categoryFilter);
        }

        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            result = result.filter(p =>
                p.name.toLowerCase().includes(lowerQuery) ||
                p.description.toLowerCase().includes(lowerQuery) ||
                p.category.toLowerCase().includes(lowerQuery)
            );
        }

        setFilteredProducts(result);
    }, [categoryFilter, searchQuery]);

    const title = categoryFilter
        ? `${categoryFilter} Deals`
        : searchQuery
            ? `Search Results for "${searchQuery}"`
            : "All Deals";

    return (
        <div className="container mx-auto px-4 py-12 fade-in">
            <h2 className="text-3xl font-bold mb-8">{title}</h2>

            {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-500 mb-4">No products found matching your criteria.</p>
                    <a href="/deals" className="text-primary font-bold hover:underline">View All Deals</a>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Deals;
