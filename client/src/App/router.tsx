import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from 'pages/home-page/HomePage';
import ProfilePage from 'pages/profile-page/ProfilePage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <>Error</>,
        children: [
            { index: true, element: <ProfilePage /> },
            {
                path: '/posts',
                element: <HomePage />,
            },
        ],
    },
]);
