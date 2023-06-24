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





const Home = () => {
    useTitle('Home')
    return (
        <div>

            <Banner />
            <Experience />
            <Gallery />
            <TopCourses />
            <TopInstructor />
            <VideoSection />
            <ClientList />
            <Subscribe />
        </div>
    );
};

export default Home;