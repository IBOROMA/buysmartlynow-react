import React from 'react';

const BrandStrip = () => {
    const brands = [
        { name: "Adidas", url: "https://cdn.simpleicons.org/adidas/000000" },
        { name: "Nike", url: "https://cdn.simpleicons.org/nike/000000" },
        { name: "Under Armour", url: "https://cdn.simpleicons.org/underarmour/000000" },
        { name: "Puma", url: "https://cdn.simpleicons.org/puma/000000" },
        { name: "New Balance", url: "https://cdn.simpleicons.org/newbalance/000000" },
        { name: "Samsung", url: "https://cdn.simpleicons.org/samsung/000000" },
        { name: "Apple", url: "https://cdn.simpleicons.org/apple/000000" },
        { name: "Sony", url: "https://cdn.simpleicons.org/sony/000000" },
    ];

    return (
        <div className="bg-white border-t border-b py-10 mt-10">
            <div className="container mx-auto px-4 flex flex-wrap justify-between items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 gap-8 justify-center md:justify-between">
                {brands.map((brand, idx) => (
                    <img
                        key={idx}
                        src={brand.url}
                        alt={brand.name}
                        className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition"
                    />
                ))}
            </div>
        </div>
    );
};

export default BrandStrip;
