import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from '../pages/HomePage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <>Error</>,
        children: [
            { index: true, element: <HomePage /> },
            // { path: '/register', element: <RegisterPage /> },
            // {
            //     path: '/home',
            //     element: <HomePage />,
            // },
            // {
            //     path: '/profile',
            //     element: <ProfilePage />,
            // },
        ],
    },
]);
