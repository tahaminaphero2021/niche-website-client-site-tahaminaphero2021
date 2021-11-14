import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

import Slider from '../Slider/Slider';
import HandmadeBanner from '../HandmadeBanner/HandmadeBanner';
import Products from '../Products/Products';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Slider></Slider>
            <Products></Products>
            <Review></Review>
            <HandmadeBanner></HandmadeBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;