import React from 'react';
import Banner from './header/Banner';
import Subscribe from '../components/Subscribe';
import Experience from '../components/Experience';
import TopCourses from '../components/TopCourses ';
import TopInstructor from '../components/TopInstructor';
import VideoSection from '../components/VideoSection';
import ClientList from '../components/ClientList';
import useTitle from '../hook/useHook';
import Gallery from '../components/Gallery';
import Campuses from '../components/Campuses';
import Technology from '../components/Technology';
// import Reviews from '../components/Reviews';





const Home = () => {
    useTitle('Home')
    return (
        <div>

            <Banner />
            <Experience />
            <Gallery />
            <Campuses />
            <TopCourses />
            <Technology />
            <TopInstructor />
            <VideoSection />
            {/* <Reviews /> */}
            <ClientList />
            <Subscribe />
        </div>
    );
};

export default Home;