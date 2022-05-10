import React from 'react';
import whitening from '../../../assets/images/whitening.png';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import Service from '../Service/Service';
import ServicesPart from '../../ServicesPart/ServicesPart';

const Services = () => {

    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "",
            img: whitening,
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "",
            img: fluoride,
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "",
            img: cavity,
        },
    ]

    return (
        <div>
            <div className="text-center my-24">
                <h1 className='text-accent text-2xl mb-4'>OUR SERVICES</h1>
                <h2 className='text-4xl'> Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3  gap-5 px-12'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}  ></Service>)
                }

            </div>
            <ServicesPart></ServicesPart>
        </div>
    );
};

export default Services;