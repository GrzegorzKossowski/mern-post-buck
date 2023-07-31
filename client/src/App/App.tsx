import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            {/* <footer>Footer</footer> */}
            <ToastContainer position='bottom-right' />
        </>
    );
}

export default App;
