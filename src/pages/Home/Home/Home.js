import React from 'react';
import Appoienment from '../Appoientment/Appoienment';
import Bannar from '../Bannar/Bannar';
import Contract from '../Contract/Contract';
import Info from '../Info/Info';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Bannar></Bannar>
            <Info></Info>
            <Services></Services>
            <Appoienment></Appoienment>
            <Reviews></Reviews>
            <Contract></Contract>
        </div>
    );
};

export default Home;