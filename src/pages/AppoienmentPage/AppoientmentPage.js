import React, { useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Appoienmentbannar from './Appoienmentbannar';
import Availableappoientment from './Availableappoientment';

const AppoientmentPage = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='my-12 '>
          <Appoienmentbannar date={date} setDate={setDate}></Appoienmentbannar> 
          <Availableappoientment date={date}></Availableappoientment>
           <Footer></Footer>
        </div>
    );
};

export default AppoientmentPage;