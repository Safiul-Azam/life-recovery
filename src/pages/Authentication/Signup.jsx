import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    console.log(user);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const onSubmit = async data => {
        const displayName = data.displayName
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName })
        console.log(data)
    };
    if (loading || updating) {
        return <p className='text-green-600 text-xl text-center mt-20'>Loading...</p>
    }
    let errorMessage;
    if (error || updateError) {
        errorMessage = <p className='text-red-400'>{error.message || updateError.message}</p>
    }
    if (user) {
        navigate('/')
    }
    return (
        <div className='lg:w-1/3 md:w-1/2 w-full mx-auto border rounded-xl p-10 shadow-inner my-16'>
            <img src={logo} className='bg-green-500 w-20 mx-auto mb-2' alt="" />
            <h2 className="text-2xl text-green-700 font-bold text-center mb-4 uppercase">Registration</h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <fieldset class="border border-solid px-3 text-gray-600 border-gray-300">
                        <legend class="text-lg">Password</legend>
                        <input
                            {...register('displayName', {
                                required: {
                                    value: true,
                                    message: 'name is required'
                                }
                            })}
                            type="text" placeholder="Your Name"
                            className="input border-none focus:border-none  outline-0 focus:outline-none w-full rounded-none"

                        />
                    </fieldset>

                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full">
                    {/* <label className="label">
                        <span className="label-text">Email</span>
                    </label> */}
                    <fieldset class="border border-solid px-3 text-gray-600 border-gray-300">
                        <legend class="text-lg">Email</legend>
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
                            className="input border-none focus:border-none  outline-0 focus:outline-none w-full rounded-none"
                        />
                    </fieldset>
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full ">
                    {/* <label className="label">
                        <span className="label-text">Password</span>
                    </label> */}
                    <fieldset class="border border-solid px-3 text-gray-600 border-gray-300">
                        <legend class="text-lg">Password</legend>
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
                            className="input border-none focus:border-none  outline-0 focus:outline-none w-full rounded-none"
                        />
                    </fieldset>
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                        {errors.password?.type === 'pattern' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                    </label>
                </div>
                {errorMessage}
                <input className='w-full btn bg-green-300 border-none text-green-800 text-lg' type="submit" value='sign up' />
                <p className='mt-6 text-sm'>Already have an account? <Link className='text-primary' to='/login'>please Login</Link></p>
            </form>
            <SocialLogin />
        </div>
    );
};

export default SignUp;