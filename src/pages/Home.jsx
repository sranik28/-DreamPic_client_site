import React from 'react';
import Banner from './header/Banner';
import { Helmet } from 'react-helmet';
import Subscribe from '../components/Subscribe';
import Experience from '../components/Experience';
import TopCourses from '../components/TopCourses ';
import TopInstructor from '../components/TopInstructor';
import Table from '../Dashboard.jsx/Components/Table';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MyPhotography | Home</title>
            </Helmet>
            <Banner />
            <Experience />
            <TopCourses />
            <TopInstructor />
            <Table />
            <Subscribe />
        </div>
    );
};

export default Home;