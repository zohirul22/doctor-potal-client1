import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Appoienmentmodal from './Appoienmentmodal';
import AppoienmentService from './AppoienmentService';

const Availableappoientment = ({date}) => {
    const [services ,setServices]=useState([]);
    const [treatment ,setTreatment] =useState(null);

    useEffect( ()=>{
        fetch('http://localhost:5000/service')
        .then(res =>res.json())
        .then(data =>setServices(data))
    } ,[])
    return (
       <div className="mx-12 my-12">
            <div className='text-center mb-8 text-indigo-900 font-black'>
            <h1>Available Appointments: {format(date, 'PP')}</h1>
        </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {
                   services.map(service => <AppoienmentService
                   key={service._id}
                   service={service}
                   setTreatment={setTreatment}
                   ></AppoienmentService>)
               }
           </div>
           {treatment && <Appoienmentmodal 
           treatment={treatment}
           date={date}
           setTreatment={setTreatment}
           ></Appoienmentmodal>}
       </div>
    );
};

export default Availableappoientment;