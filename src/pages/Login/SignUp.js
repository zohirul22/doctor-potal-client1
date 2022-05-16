import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Home/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();


    let signInError;

    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }

    if (error || googleError || updateError) {
        signInError = <p className='text-red-400'>{error?.message || googleError?.message || updateError?.message }</p>
    }



    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName:data.name });
       
        navigate('/appointmentpage')
    };



    return (
        <div className='flex justify-center align-center mt-20'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-semibold">Sign Up</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* name field  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required"
                                    }
                                })}
                                type="text" placeholder="Yours Name" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}



                            </label>
                        </div>
                        {/* name field  */}


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


                        <input className='btn  w-full max-w-xs' type="submit" value="Sign Up" />
                        {signInError}
                    </form>
                    <p><small>Already create account?  <Link to='/login' className='text-red-500'>please login</Link></small> </p>
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

export default SignUp;