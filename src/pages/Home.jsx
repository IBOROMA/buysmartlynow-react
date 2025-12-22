
import React from 'react';
import Hero from '../components/features/Hero';
import FeaturedDeals from '../components/features/FeaturedDeals';
import CategorySection from '../components/features/CategorySection';
import TravelSection from '../components/features/TravelSection';
import EarnSection from '../components/features/EarnSection';

const Home = () => {
    return (
        <div id="home-view" className="fade-in bg-white">
            {/* 3.1 HERO SECTION */}
            <Hero />

            {/* 3.2 FEATURED DEALS SECTION */}
            <FeaturedDeals />

            {/* 3.3 CATEGORIES SECTION */}
            <CategorySection />

            {/* 3.4 TRAVEL / FLIGHT COMPARISON */}
            <TravelSection />

            {/* 3.5 EARN WITH BUYSMARTLY SECTION */}
            <EarnSection />
        </div>
    );
};

export default Home;
