import React from 'react';
import appointment from '../../../assets/images/appointment.png'
const Contract = () => {
    return (
        <div className='text-center my-12 p-4' style={{
            background: `url(${appointment})`
        }}>
            <div className="">
                <h1 className='text-success text-2xl'>Contact Us</h1>
                <h2 className='text-secondary text-4xl'>Stay connected with us</h2>
            </div>
            <div className="mx-auto w-96 my-8">


                <input type="text" placeholder="Email" class="input block mb-4 input-bordered input-xs w-full max-w-xs" />

                <input type="text" placeholder="Message" class="input block mb-4 input-bordered input-sm w-full max-w-xs" />


                <input type="text" placeholder="Your Message details" class="input block mb-4  input-bordered input-lg w-full max-w-xs" />

                <button type='button' class=" btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Get Started</button>
            </div>
        </div>
    );
};

export default Contract;