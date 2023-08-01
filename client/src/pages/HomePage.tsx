import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

interface HomePageProps {}

const HomePage = ({ ...restProps }: HomePageProps) => {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default HomePage;
