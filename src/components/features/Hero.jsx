import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, Plane, ShoppingBag, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slides = [
    {
        id: 1,
        headline: "Compare. Save. Earn.",
        subtext: "Find the smartest deals across trusted stores and earn rewards on every purchase.",
        image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070&auto=format&fit=crop",
        cta: "Shop Deals",
        path: "/deals",
        accent: "text-secondary"
    },
    {
        id: 2,
        headline: "Fly For Less.",
        subtext: "Compare flight prices instantly and book your next adventure with confidence.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
        cta: "Compare Flights",
        path: "/travel",
        accent: "text-blue-400"
    },
    {
        id: 3,
        headline: "Latest Gadgets.",
        subtext: "Get the best prices on the newest tech releases. Don't overpay for innovation.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
        cta: "View Tech",
        path: "/deals?category=electronics",
        accent: "text-purple-400"
    }
];

const Hero = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-rotate slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentSlide];

    return (
        <section className="relative min-h-[600px] md:h-[85vh] flex items-center bg-primary overflow-hidden">
            {/* Background Slides */}
            {slides.map((s, index) => (
                <div
                    key={s.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={s.image}
                        alt={s.headline}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
                </div>
            ))}

            <div className="container mx-auto px-6 md:px-12 relative z-10 pt-10">
                <div className="max-w-3xl text-white space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-medium animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        Live Price Tracking
                    </div>

                    {/* Dynamic Text */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight tracking-tight drop-shadow-xl transition-all duration-500 transform translate-y-0">
                            {slide.headline.split(' ').map((word, i) => (
                                <span key={i} className={i === 1 || word.includes('Save') ? slide.accent : 'text-white'}> {word} </span>
                            ))}
                        </h1>
                        <p className="text-lg md:text-2xl font-light text-gray-200 max-w-xl leading-relaxed opacity-90">
                            {slide.subtext}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                            onClick={() => navigate(slide.path)}
                            className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-orange-600 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                        >
                            {slide.cta}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => navigate('/compare')}
                            className="backdrop-blur-md bg-white/5 border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                        >
                            Compare Prices
                        </button>
                    </div>

                    {/* Stats / Trust */}
                    <div className="pt-12 flex items-center gap-8 md:gap-16 border-t border-white/10 text-gray-400">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">50+</span>
                            <span className="text-xs uppercase tracking-wider">Stores</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">24/7</span>
                            <span className="text-xs uppercase tracking-wider">Updates</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">100%</span>
                            <span className="text-xs uppercase tracking-wider">Free</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === index ? 'w-8 h-2 bg-secondary' : 'w-2 h-2 bg-white/50 hover:bg-white'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
