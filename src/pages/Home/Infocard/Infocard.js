import React from 'react';

const Infocard = ({ img ,title ,bgColor }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl  p-2 ${bgColor}`}>

            <figure><img src={img} alt="Album" /></figure>

            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default Infocard;