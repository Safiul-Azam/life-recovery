import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.inite';
import logo from '../../images/logo.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    
    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password)
        console.log(data)
    };
    return (
        <div className='lg:w-1/3 md:w-1/2 w-full mx-auto border rounded-xl p-10 shadow-inner mt-24 mb-14'>
            <img src={logo} className='bg-green-500 w-20 mx-auto mb-2' alt="" />
            <h2 className="text-2xl text-green-700 font-bold text-center mb-4 uppercase">Registration</h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    {/* <label className="label">
                        <span className="label-text">Your Name</span>
                    </label> */}
                    <input
                        {...register('displayName', {
                            required: {
                                value: true,
                                message: 'name is required'
                            }
                        })}
                        type="text" placeholder="Your Name"
                        className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full">
                    {/* <label className="label">
                        <span className="label-text">Email</span>
                    </label> */}
                    <input
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid email'
                            }
                        })}
                        type="email" placeholder="Enter Your Email"
                        className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full ">
                    {/* <label className="label">
                        <span className="label-text">Password</span>
                    </label> */}
                    <input
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'The password must be at least 6 characters long'
                            }
                        })}
                        type="password" placeholder="Enter Your Password"
                        className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                        {errors.password?.type === 'pattern' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                    </label>
                </div>
                <input className='w-full btn bg-green-300 border-none text-green-800 text-lg' type="submit" value='sign up' />
                <p className='mt-6 text-sm'>Already have an account? <Link className='text-primary' to='/login'>please Login</Link></p>
            </form>
        </div>
    );
};

export default Login;