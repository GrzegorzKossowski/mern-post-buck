import React from 'react';
import { Link } from 'react-router-dom';
import { useLoginMutation, useLogoutMutation } from 'state/slices/userSlice';
import { PiMagnifyingGlass  } from 'react-icons/pi';

interface NavbarProps {}

const Navbar = ({ ...restProps }: NavbarProps) => {
    const [login, { isLoading }] = useLoginMutation();
    const [logout] = useLogoutMutation();

    const handleLogin = async () => {
        try {
            const res = await login({
                email: 'mary@sue.com',
                password: '123456',
            }).unwrap();
            console.log({ ...res });
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = async () => {
        try {
            const res = await logout().unwrap();
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <header className='fixed w-full px-5 py-3 z-50 bg-slate-900 text-white'>
            <div id='' className='container flex justify-between items-center'>
                <div className='flex gap-5 items-center'>
                    <Link to={'/'} className='text-2xl'>
                        Postbuck
                    </Link>
                    <div className='flex gap-2 items-center bg-white text-black px-1'>
                        <input type='text' />
                        <PiMagnifyingGlass />
                    </div>
                </div>
                <div>test</div>
            </div>

            {/* <h1 className='text-2xl'>Navbar</h1>
            <div className='flex flex-row gap-3'>
                <button className='btn' onClick={handleLogin}>
                    Login
                </button>
                <button className='btn' onClick={handleLogout}>
                    Logout
                </button>
            </div> */}
        </header>
    );
};

export default Navbar;
