import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Appoienmentbannar = ({date, setDate}) => {
    
    return (
        <div class="hero ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="" class="max-w-sm rounded-lg shadow-2xl" />

                <div >
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default Appoienmentbannar;