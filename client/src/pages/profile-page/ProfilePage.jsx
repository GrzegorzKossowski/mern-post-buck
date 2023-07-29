import * as React from 'react';
import { Form, useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const navigate = useNavigate();
    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(`submitting`);
        const response = await fetch(`/api/v1/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }),
        });
        const data = response.json();
        if (data) navigate('/posts');
    };
    return (
        <>
            <h1 className='text-4xl'>Profile page</h1>

            <Form className='max-w-xs' onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label htmlFor='email'>Email</label>
                    <input
                        ref={emailRef}
                        type='email'
                        id='email'
                        name='email'
                        autoComplete='off'
                        required
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='password'>password</label>
                    <input
                        ref={passwordRef}
                        type='password'
                        id='password'
                        name='password'
                        autoComplete='off'
                        required
                    />
                </div>
                <div className='my-4'>
                    <button
                        className='border border-black p-2 bg-slate-800 text-white rounded-md'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </Form>
        </>
    );
};

export default ProfilePage;
