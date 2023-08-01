import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import FeedPage from '../pages/FeedPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <>Error</>,
        children: [
            { index: true, element: <LoginPage /> },
            {
                path: '/feed',
                element: <HomePage />,
                children: [{ index: true, element: <FeedPage /> }],
            },
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
