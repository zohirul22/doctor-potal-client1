import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appoienment from '../../../assets/images/appointment.png';

const Appoienment = () => {
    return (
      
            <section className='flex justify-center items-center ' style={{
           background :`url(${appoienment})`
       }}>
            <div className="flex-1 hidden lg:block ">
                <img className="mt-[-100px]"  src={doctor} alt="" />
            </div>
            <div className="flex-1 p-10 ">
                <h1 className='text-success font-bold mb-2'>Appointment</h1>
                <h2 className='text-2xl text-white'>Make an appointment Today</h2>
                <p className='text-white my-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button type='button' className=" btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Get Started</button>
            </div>
        </section>
      
    );
};

export default Appoienment;