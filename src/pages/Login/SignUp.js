import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Home/Loading/Loading';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    let signInError;

    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    if (error || googleError) {
        signInError = <p className='text-red-400'>{error?.message || googleError?.message}</p>
    }



    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password)
    };




    return (
        <div className='flex justify-center align-center mt-20'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-semibold">Sign Up</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* name field  */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required"
                                    }
                                })}
                                type="text" placeholder="Yours Name" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}



                            </label>
                        </div>
                        {/* name field  */}


                        {/* email field */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
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
                                type="email" placeholder="Yours Email" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        {/* email field */}

                        {/* password field */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

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
                                type="password" placeholder="password" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                                {errors.password?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {/* password field */}


                        <input className='btn  w-full max-w-xs' type="submit" value="Sign Up" />
                        {signInError}
                    </form>
                    <p><small>Already create account?  <Link to='/login' className='text-red-500'>please login</Link></small> </p>
                    {/* react hooks from */}


                    <div class="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline btn-accent text-black">SignIn With Google</button>


                </div>
            </div>
        </div>
    );
};

export default SignUp;