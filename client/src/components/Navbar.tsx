import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
// the hook
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../redux/slices/usersApiSlice';
import { removeCredentials } from '../redux/slices/authSlice';
import { toast } from 'react-toastify';

interface NavbarProps {}

interface DropdownProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const Dropdown = ({ active, setActive }: DropdownProps) => {
    const { i18n } = useTranslation();
    const languages = i18n.languages;
    return (
        <div className={`w-[50px] pt-14 md:${active ? '' : 'hidden'}`}>
            {languages
                .filter(lang => lang !== i18n.language)
                .map(lang => (
                    <button
                        key={lang}
                        onClick={() => {
                            setActive(false);
                            i18n.changeLanguage(lang);
                        }}
                        className='w-full text-center py-2 px-2 bg-slate-100 text-gray-700 hover:bg-slate-700 hover:text-slate-300 '
                    >
                        {lang.toUpperCase()}
                    </button>
                ))}
        </div>
    );
};

const Navbar = ({ ...restProps }: NavbarProps) => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState<boolean>(false);
    const handleClick = () => setOpen(!open);
    const [active, setActive] = useState<boolean>(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logout, { isLoading }] = useLogoutMutation();

    async function handleLogout(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        try {
            console.log(`handle logout`);

            const res = await logout().unwrap();
            dispatch(removeCredentials());
            navigate('/', { replace: true });
        } catch (error: any) {
            toast.error(`No valid data provided`);
        }
    }

    return (
        <header className='fixed top-0 left-0 w-full px-5 py-3 flex justify-between items-center z-50 backdrop-blur-md border-b-[1px] border-slate-700 bg-slate-alpha-7'>
            <Link className='text-2xl font-semibold' to='/'>
                Postbuck
            </Link>
            <nav className='text-lg font-medium'>
                <ul className='hidden md:flex'>
                    <li className='hover:text-[#00abf0]'>
                        <Link to='/'>{t('navbar.home')}</Link>
                    </li>
                    <li className='hover:text-[#00abf0]'>
                        <Link to='/'>{t('navbar.profile')}</Link>
                    </li>
                    <li className='hover:text-[#00abf0]'>
                        <button onClick={handleLogout}>
                            {t('navbar.logout')}
                        </button>
                    </li>
                    <li
                        className='relative hover:text-[#00abf0]'
                        onMouseEnter={() => setActive(true)}
                    >
                        <div onClick={() => setActive(!active)}>
                            {i18n.language.toUpperCase()}
                        </div>
                        <div
                            className={`absolute right-0 top-0 pt-50 md:${
                                active ? '' : 'hidden'
                            }`}
                            onMouseLeave={() => setActive(false)}
                        >
                            <Dropdown active={active} setActive={setActive} />
                        </div>
                    </li>
                </ul>
                <button
                    className='z-10 absolute right-5 top-3 md:hidden'
                    onClick={handleClick}
                >
                    {open ? <FaTimes size={30} /> : <FaBars size={30} />}
                </button>

                <ul
                    className={
                        open
                            ? 'absolute top-0 left-0 bg-primary w-full h-screen flex flex-col items-center md:hidden'
                            : 'hidden'
                    }
                >
                    <li className='py-6 text-3xl'>
                        <Link onClick={handleClick} to='/'>
                            {t('navbar.home')}
                        </Link>
                    </li>
                    <li className='py-6 text-3xl'>
                        <Link onClick={handleClick} to='/'>
                            {t('navbar.profile')}
                        </Link>
                    </li>
                    <li className='py-6 text-3xl'>
                        <Link onClick={handleClick} to='/'>
                            About
                        </Link>
                    </li>
                    <li className='py-6 text-3xl'>
                        <button
                            onClick={() => {
                                i18n.changeLanguage('pl');
                                handleClick();
                            }}
                        >
                            PL
                        </button>
                        {' | '}
                        <button
                            onClick={() => {
                                i18n.changeLanguage('en');
                                handleClick();
                            }}
                        >
                            EN
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
