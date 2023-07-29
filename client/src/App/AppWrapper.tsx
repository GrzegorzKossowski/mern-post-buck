import { RouterProvider } from 'react-router-dom';
import { router } from './router';

interface AppWrapperProps {}

const AppWrapper = ({ ...restProps }: AppWrapperProps) => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default AppWrapper;
