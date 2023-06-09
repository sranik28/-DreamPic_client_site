import React from 'react';
import Banner from './header/Banner';
import { Helmet } from 'react-helmet';
import Subscribe from '../components/Subscribe';
import Experience from '../components/Experience';
import TopCourses from '../components/TopCourses ';
import TopInstructor from '../components/TopInstructor';
import VideoSection from '../components/VideoSection';
// import ClientList from '../components/ClientList';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>DreamPic | Home</title>
            </Helmet>
            <Banner />
            <Experience />
            <TopCourses />
            <TopInstructor />
            <VideoSection />
            <Subscribe />
            {/* <ClientList /> */}
        </div>
    );
};

export default Home;