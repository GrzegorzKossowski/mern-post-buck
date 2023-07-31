import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from 'pages/home-page';
import ProfilePage from 'pages/profile-page';
import LoginPage from 'pages/login-page';
import RegisterPage from 'pages/register-page';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <>Error</>,
        children: [
            { index: true, element: <LoginPage /> },
            { path: '/register', element: <RegisterPage /> },
            {
                path: '/home',
                element: <HomePage />,
            },
            {
                path: '/profile',
                element: <ProfilePage />,
            },
        ],
    },
]);
