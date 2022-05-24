import React from 'react';
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
        </div>
    );
};

export default Landing;