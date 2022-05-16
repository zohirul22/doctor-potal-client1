import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Home/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

//    requireauth 
let navigate = useNavigate();
let location = useLocation();
let from = location.state?.from?.pathname || "/";
//    requireauth 


useEffect( ()=>{
    if(googleUser || user){
        //    requireauth 
      navigate(from, { replace: true });
      //    requireauth 
    }
} ,[googleUser , user, from , navigate])


let signInError;

  if(loading || googleLoading) {
      return  <Loading></Loading>
  }

  if(error || googleError){
    signInError=<p className='text-red-400'>{error?.message || googleError?.message}</p>
  }




    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };


    return (
        <div className='flex justify-center align-center mt-20'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-semibold">Login</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* email field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'provider a valid email'
                                    }
                                })}
                                type="email" placeholder="Yours Email" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        {/* email field */}

                        {/* password field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "password is Required"
                                    },
                                    pattern: {
                                        minLength: 6,
                                        message: 'provider 6 characters password'
                                    }
                                })}
                                type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {/* password field */}

                               
                        <input className='btn  w-full max-w-xs' type="submit" value="Login" />
                        {signInError} 
                    </form>
                    <p><small>New to Doctors Portal?<Link to='/signup' className='text-red-500'>Create New Account</Link></small> </p> 
                    {/* react hooks from */}


                    <div className="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-accent text-black">SignIn With Google</button>


                </div>
            </div>
        </div>
    );
};

export default Login;
