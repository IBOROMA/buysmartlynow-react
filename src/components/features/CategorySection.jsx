import React from 'react';
import { Smartphone, Plane, Shirt, Home, ShoppingBag, Coffee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
    { id: 'gadgets', name: 'Electronics', icon: Smartphone, color: 'bg-blue-100 text-blue-600', link: '/deals?category=gadgets' },
    { id: 'fashion', name: 'Fashion', icon: Shirt, color: 'bg-pink-100 text-pink-600', link: '/deals?category=fashion' },
    { id: 'travel', name: 'Travel & Flights', icon: Plane, color: 'bg-orange-100 text-orange-600', link: '/travel' },
    { id: 'home', name: 'Home & Living', icon: Home, color: 'bg-green-100 text-green-600', link: '/deals?category=home' },
    { id: 'beauty', name: 'Beauty', icon: ShoppingBag, color: 'bg-purple-100 text-purple-600', link: '/deals?category=beauty' },
    { id: 'groceries', name: 'Groceries', icon: Coffee, color: 'bg-yellow-100 text-yellow-600', link: '/deals?category=groceries' }
];

const CategorySection = () => {
    const navigate = useNavigate();

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Browse Categories</h2>
                    <p className="text-gray-500">Find exactly what you need with the best discounts.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            onClick={() => navigate(cat.link)}
                            className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
                        >
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${cat.color} group-hover:scale-110 transition-transform`}>
                                <cat.icon size={28} />
                            </div>
                            <h3 className="font-bold text-gray-800 group-hover:text-primary transition-colors">{cat.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
