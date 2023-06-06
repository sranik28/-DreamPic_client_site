import React from 'react';
import Banner from './header/Banner';
import { Helmet } from 'react-helmet';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MyPhotography | Home</title>
            </Helmet>
            <Banner />
        </div>
    );
};

export default Home;