import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Form from './Form';
import { toast } from 'react-toastify';
import { useLoginMutation } from 'state/slices/userSlice';
import { ApiErrorType } from 'types';

interface LoginPageProps {}

const LoginPage = ({ ...restProps }: LoginPageProps) => {
    const [login, { isLoading }] = useLoginMutation();
    const navigate = useNavigate();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const email = emailRef?.current?.value;
        const password = passwordRef?.current?.value;

        try {
            const res = await login({ email, password }).unwrap();
            console.log(res);
            navigate('/home', {
                replace: true,
            });
        } catch (error) {
            const { data } = error as ApiErrorType;
            const { message } = data;
            toast.error(message || `Invalid data`);
        }
    }

    return (
        <section className='w-full h-screen'>
            <div
                className={`container max-w-xs mx-auto h-full flex flex-col items-center justify-center`}
            >
                <form
                    className='flex flex-col space-y-4 w-full'
                    onSubmit={handleSubmit}
                >
                    <h1 className='text-center text-2xl font-bold'>Login</h1>
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
                    <div>
                        <button className='btn w-full' type='submit'>
                            Login
                        </button>
                    </div>
                    <div>
                        New here,{' '}
                        <Link className='link' to={'/register'}>
                            register now!
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default LoginPage;
