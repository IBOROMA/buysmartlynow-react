import React from 'react';
import { Smartphone, Plane, Shirt, Armchair } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const CategorySection = () => {
    const categories = [
        { name: 'Electronics', icon: <Smartphone size={32} />, link: '/deals?category=Electronics', discount: 'Up to 40% off' },
        { name: 'Fashion', icon: <Shirt size={32} />, link: '/deals?category=Fashion', discount: 'New Arrivals' },
        { name: 'Travel', icon: <Plane size={32} />, link: '/travel', discount: 'Best Flight Deals' },
        { name: 'Home', icon: <Armchair size={32} />, link: '/deals?category=Home', discount: 'Clearance Sale' },
    ];

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* 3. CATEGORIES: Clean Header */}
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-2xl font-bold text-gray-900">Browse by Category</h2>
                    <Link to="/deals" className="text-sm font-bold text-primary hover:text-secondary transition-colors">View All Categories</Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <Link
                            key={idx}
                            to={cat.link}
                            className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {cat.icon}
                            </div>
                            <h3 className="font-bold text-gray-900 mb-1">{cat.name}</h3>
                            {/* 3. CATEGORIES: Micro-copy */}
                            <span className="text-xs text-secondary font-medium">{cat.discount}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategorySection;
