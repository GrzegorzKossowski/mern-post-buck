import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Dropzone from 'react-dropzone';

const registerSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string().required('required'),
    email: yup.string().email('invalid email').required('required'),
    password: yup.string().required('required'),
    location: yup.string().required('required'),
    occupation: yup.string().required('required'),
    picture: yup.string().required('required'),
});
const loginSchema = yup.object().shape({
    email: yup.string().email('invalid email').required('required'),
    password: yup.string().required('required'),
});

const initialValuesRegister = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    location: '',
    occupation: '',
    picture: '',
};

const initialValuesLogin = {
    email: '',
    password: '',
};

const Form = ({ ...restProps }) => {
    const navigate = useNavigate();
    const [pageType, setPageType] = useState('login');
    const isLogin = pageType === 'login';
    const isRegister = pageType === 'register';

    const handleFormSubmit = async (values, onSubmitProps) => {};

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={
                !isLogin ? initialValuesLogin : initialValuesRegister
            }
            validationSchema={isLogin ? loginSchema : registerSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit={handleSubmit}>
                    {!isRegister && (
                        <>
                            <div className='flex flex-col'>
                                <Dropzone
                                >
                                    {({ getRootProps, getInputProps }) => (
                                        <section>
                                            <div
                                                {...getRootProps({
                                                    className:
                                                        'border-2 border-dashed p-1',
                                                })}
                                            >
                                                <input {...getInputProps()} />
                                                <p>
                                                    Drag 'n' drop some files
                                                    here, or click to select
                                                    files
                                                </p>
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='firstName'>First name</label>
                                <input
                                    className='text-input'
                                    type='text'
                                    placeholder='John'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    name='firstName'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='lastName'>Last name</label>
                                <input
                                    className='text-input'
                                    type='text'
                                    placeholder='Wick'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    name='lastName'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='location'>Location</label>
                                <input
                                    className='text-input'
                                    type='text'
                                    placeholder='Wick'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.location}
                                    name='location'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='ocupation'>Ocupation</label>
                                <input
                                    className='text-input'
                                    type='text'
                                    placeholder='Wick'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.ocupation}
                                    name='ocupation'
                                />
                            </div>
                        </>
                    )}
                </form>
            )}
        </Formik>
    );
};

export default Form;
