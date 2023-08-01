import React, { FormEvent, useRef } from 'react';
import { HiAtSymbol, HiLockClosed } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/slices/usersApiSlice';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../redux/slices/authSlice';
import { BarLoader } from 'react-spinners';
import { RootState } from '../../redux/store';
import { LuArrowBigRight } from 'react-icons/lu';

interface LoginWidgetProps {}

const LoginWidget = ({ ...restProps }: LoginWidgetProps) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userInfo } = useSelector((state: RootState) => state.auth);
    const [login, { isLoading }] = useLoginMutation();

    const { search } = useLocation();
    // przejrzyj parametry pobrane z useLocation
    const sp = new URLSearchParams(search);
    // czy jest redirect, jeśli tak, ustaw, jeśli nie ustaw /
    const redirect = sp.get(`redirect`) || '/feed';

    // React.useEffect(() => {
    //     if (userInfo) navigate(redirect, { replace: true });
    // }, [navigate, redirect, userInfo]);

    async function submitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const email = emailRef?.current?.value;
        const password = passwordRef?.current?.value;
        if (email && password) {
            try {
                const res = await login({ email, password }).unwrap();
                dispatch(setCredentials({ ...res }));
                navigate(redirect, { replace: true });
            } catch (error: any) {
                toast.error(`No valid data provided`);
            }
        } else {
            toast.error('No email or password provided');
        }
    }

    return (
        <>
            {!userInfo ? (
                <div className='border border-slate-600 flex flex-col w-full max-w-md p-8 '>
                    <div className='self-center mb-6 text-xl font-light sm:text-2xl sm:font-medium'>
                        Login to your account
                    </div>
                    <div className='mt-8'>
                        <form onSubmit={submitHandler} autoComplete='off'>
                            <div className='flex flex-col mb-2'>
                                <div className='flex'>
                                    <span className='inline-flex items-center border-l border-t border-b rounded-l-md p-3'>
                                        <HiAtSymbol className='text-2xl' />
                                    </span>
                                    <input
                                        ref={emailRef}
                                        type='email'
                                        placeholder='Your email'
                                        className='rounded-r-lg flex-1 appearance-none border w-full py-2 px-4 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent'
                                        // defaultValue={'john@doe.com'}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col mb-2'>
                                <div className='flex'>
                                    <span className='inline-flex items-center border-l border-t border-b rounded-l-md p-3'>
                                        <HiLockClosed className='text-2xl' />
                                    </span>
                                    <input
                                        ref={passwordRef}
                                        type='password'
                                        placeholder='Your password'
                                        className='rounded-r-lg flex-1 appearance-none border w-full py-2 px-4 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent'
                                        // defaultValue={'123456'}
                                    />
                                </div>
                            </div>
                            <div className='flex items-center mb-6'>
                                <Link
                                    to={'/'}
                                    className='link text-xs font-thin sm:text-sm ml-auto'
                                >
                                    Forgot your password?
                                </Link>
                            </div>

                            <button
                                type='submit'
                                className='py-2 px-4 bg-primary rounded-lg w-full  focus:ring-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2'
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <BarLoader
                                        color='#eee'
                                        aria-label='Loading Spinner'
                                    />
                                ) : (
                                    <>Login</>
                                )}
                            </button>
                        </form>
                    </div>
                    <div className='mt-6 text-center'>
                        <Link
                            className='link'
                            to={
                                redirect
                                    ? `/register?redirect=${redirect}`
                                    : '/register'
                            }
                        >
                            You don&#x27;t have an account?
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    <Link
                        to='/feed'
                        type='button'
                        className='group relative flex items-center justify-center gap-8 py-2 px-4 border rounded-lg w-full '
                    >
                        <span>Przejdź do aplikacji</span>
                        <LuArrowBigRight className='animate-ping' />
                    </Link>
                </>
            )}
        </>
    );
};

export default LoginWidget;
