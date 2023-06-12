import NavBar from '../pages/header/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';



const Root = () => {

  

    return (
        <div className='overflow-x-hidden'>
            <NavBar />
            <div className='md:min-h-[calc(100vh-100px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;