import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <main className='mx-auto md:max-w-5xl'>
                <Outlet />
            </main>
            <ToastContainer position='bottom-right' />
        </>
    );
}

export default App;
