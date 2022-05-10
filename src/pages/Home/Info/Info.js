import React from 'react';
import Infocard from '../Infocard/Infocard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3  gap-5 px-12'>
            <Infocard  img={clock} title="Opening Hours" bgColor="bg-gradient-to-r from-green-400 to-blue-500"></Infocard>
            <Infocard img={marker} title="Visit our location" bgColor="bg-gradient-to-r from-indigo-500"></Infocard>
            <Infocard img={phone} title="Contact us now" bgColor="bg-gradient-to-r from-green-400 to-blue-500"></Infocard>
        </div>
    );
};

export default Info;