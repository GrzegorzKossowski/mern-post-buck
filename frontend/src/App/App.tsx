import Navbar from 'components/navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
            <ToastContainer position='bottom-right' />
        </>
    );
}

export default App;
