import React from 'react';
import Banner from './header/Banner';
import { Helmet } from 'react-helmet';
import Subscribe from '../components/Subscribe';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MyPhotography | Home</title>
            </Helmet>
            <Banner />
            <Subscribe />
        </div>
    );
};

export default Home;