
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ChevronRight, ShieldCheck, Heart, Share2, Star, Store, ShoppingCart } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    // In a real app, fetch by ID. Here finding in dummy data.
    const product = products.find(p => p.id === parseInt(id)) || products[0];

    // Mock gallery images (using the main image for all for now)
    const images = [product.image, product.image, product.image];
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="bg-white min-h-screen pb-20 fade-in">
            {/* 5.1 BREADCRUMBS */}
            <div className="bg-gray-50 py-4 border-b border-gray-100">
                <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
                    <Link to="/" className="hover:text-primary">Home</Link>
                    <ChevronRight size={14} />
                    <Link to="/deals" className="hover:text-primary">Deals</Link>
                    <ChevronRight size={14} />
                    <span className="text-gray-900 font-medium capitalize">{product.category}</span>
                    <ChevronRight size={14} />
                    <span className="text-gray-900 font-medium truncate max-w-[200px]">{product.name}</span>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* 5.2 IMAGE GALLERY */}
                    <div className="space-y-4">
                        <div className="aspect-square bg-white border border-gray-100 rounded-2xl overflow-hidden p-6 relative group">
                            <img src={images[selectedImage]} alt={product.name} className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                {product.discount} OFF
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`aspect-square border rounded-xl p-2 cursor-pointer transition-all ${selectedImage === idx ? 'border-secondary ring-2 ring-secondary/20' : 'border-gray-200 hover:border-gray-300'}`}
                                >
                                    <img src={img} alt="Thumb" className="w-full h-full object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 5.3 PRODUCT INFO */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex text-yellow-400">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                            </div>
                            <span className="text-sm text-gray-500 font-medium">(128 Reviews)</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">{product.name}</h1>

                        <div className="flex items-end gap-4 mb-8">
                            <div>
                                <p className="text-gray-400 text-lg mb-1 line-through font-medium">{product.oldPrice}</p>
                                <p className="text-4xl font-bold text-primary">{product.price}</p>
                            </div>
                            <div className="mb-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                <ShieldCheck size={16} /> Verified Seller
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button className="flex-1 bg-secondary hover:bg-orange-600 text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                                <ShoppingCart size={20} /> GET DEAL
                            </button>
                            <button className="flex-1 bg-white border-2 border-gray-200 hover:border-primary hover:text-primary text-gray-600 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                                <Heart size={20} className="group-hover:text-red-500" /> SAVE DEAL
                            </button>
                        </div>

                        {/* Store Info */}
                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center text-gray-400">
                                    <Store size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Official Store</p>
                                    <p className="text-sm text-green-600 flex items-center gap-1"><ShieldCheck size={12} /> Trusted Partner</p>
                                </div>
                            </div>
                            <button className="text-primary font-bold text-sm hover:underline">Visit Store</button>
                        </div>
                    </div>
                </div>

                {/* 5.4 TABS: Description | Reviews */}
                <div className="border-t border-gray-200 pt-12">
                    <div className="flex items-center gap-8 border-b border-gray-200 mb-8">
                        <button className="pb-4 border-b-2 border-secondary text-secondary font-bold text-lg">Description</button>
                        <button className="pb-4 border-b-2 border-transparent text-gray-500 font-medium text-lg hover:text-gray-800">Reviews (128)</button>
                        <button className="pb-4 border-b-2 border-transparent text-gray-500 font-medium text-lg hover:text-gray-800">Shipping</button>
                    </div>

                    <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
                        <p className="mb-4 text-lg">
                            Experience the pinnacle of performance with the {product.name}. Designed for professionals and enthusiasts alike,
                            this product features state-of-the-art technology, verified durability, and a sleek design that stands out.
                        </p>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Industry-leading performance metrics verified by independent labs.</li>
                            <li>Premium build quality ensuring longevity and reliability.</li>
                            <li>Seamless integration with your existing ecosystem.</li>
                            <li>Backed by a comprehensive warranty and support.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
