import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Provider } from 'react-redux';
import store from 'state/store';

interface AppWrapperProps {}

const AppWrapper = ({ ...restProps }: AppWrapperProps) => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
};

export default AppWrapper;
