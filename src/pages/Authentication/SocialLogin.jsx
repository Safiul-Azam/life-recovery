import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.inite';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(user);
    return (
        <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className="btn btn-primary text-white tracking-widest w-full ">Google Sign In</button>
        </div>
    );
};

export default SocialLogin;