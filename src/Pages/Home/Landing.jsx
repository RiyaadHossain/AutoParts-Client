import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import FeaturedBrand from './FeaturedBrand';
import Parts from './Parts';
import Reviews from './Reviews';
import WhyChooseUs from './WhyChooseUs';

const Landing = () => {
    return (
        <div>
            <Banner/>
            <FeaturedBrand/>
            <Parts/>
            <BusinessSummary/>
            <WhyChooseUs/>
            <Reviews/>
            <Dashboard/>
        </div>
    );
};

export default Landing;