import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface RegisterPageProps {}

const RegisterPage = ({ ...restProps }: RegisterPageProps) => {
    const [isRegister, setIsRegister] = useState<boolean>(false);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();
    const location = useLocation();

    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/home';

    useEffect(() => {
        setIsRegister(location.pathname === '/register');
    }, [location.pathname]);

    function handleRegister(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log(
            passwordRef?.current?.value,
            confirmPasswordRef?.current?.value
        );

        if (
            passwordRef?.current?.value !== confirmPasswordRef?.current?.value
        ) {
            toast.error('Passwords do not match');
        }

        // navigate(redirect);
    }

    function handleLogin(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log(`handle login`);
        // navigate(redirect);
    }

    return (
        <section className='w-full h-screen'>
            <div
                className={`container max-w-xs mx-auto h-full flex flex-col items-center justify-center`}
            >
                <form
                    className='flex flex-col space-y-4 w-full'
                    onSubmit={isRegister ? handleRegister : handleLogin}
                >
                    <h1 className='text-center text-2xl font-bold'>
                        {isRegister ? 'Register' : 'Login'}
                    </h1>
                    {isRegister && (
                        <>
                            <div className='flex flex-col'>
                                <label htmlFor='firstName'>First name</label>
                                <input
                                    ref={firstNameRef}
                                    className='text-input'
                                    type='text'
                                    name='firstName'
                                    placeholder='John'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='lastName'>Last name</label>
                                <input
                                    ref={lastNameRef}
                                    className='text-input'
                                    type='text'
                                    name='lastName'
                                    placeholder='Wick'
                                />
                            </div>
                        </>
                    )}
                    <div className='flex flex-col'>
                        <label htmlFor='email'>Email</label>
                        <input
                            ref={emailRef}
                            className='text-input'
                            type='email'
                            name='email'
                            placeholder='john@wick.dev'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='password'>Password</label>
                        <input
                            ref={passwordRef}
                            className='text-input'
                            type='password'
                            name='password'
                            placeholder='hk-P30L-9mm'
                        />
                    </div>
                    {isRegister && (
                        <>
                            <div className='flex flex-col'>
                                <label htmlFor='confirmPassword'>
                                    Confirm password
                                </label>
                                <input
                                    ref={confirmPasswordRef}
                                    className='text-input'
                                    type='password'
                                    name='password'
                                    placeholder=''
                                    defaultValue={'hk-P30L-9mm'}
                                />
                            </div>
                        </>
                    )}
                    <div>
                        <button className='btn w-full' type='submit'>
                            {isRegister ? 'Register' : 'Login'}
                        </button>
                    </div>
                    {isRegister ? (
                        <div>
                            Have an account,{' '}
                            <Link
                                className='link'
                                to={redirect ? `/?redirect=${redirect}` : '/'}
                            >
                                login now!
                            </Link>
                        </div>
                    ) : (
                        <div>
                            New here,{' '}
                            <Link
                                className='link'
                                to={
                                    redirect
                                        ? `/register?redirect=${redirect}`
                                        : '/register'
                                }
                            >
                                register now!
                            </Link>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default RegisterPage;
