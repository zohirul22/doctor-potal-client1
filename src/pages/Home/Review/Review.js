import React from 'react';

const Review = ({ testimonial }) => {
    return (
        <div className="card  bg-base-100 shadow-xl ">
            <div className="">
                <div className="">
                    <div className="card-body">

                        <p>{testimonial.description}</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center p-8">

                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-success ring-offset-base-100 mr-4">
                       <img src={testimonial.img} alt="" />
                    </div>
                </div>

                <div className="">
                    <h1>{testimonial.name}</h1>
                    <h3>{testimonial.country}</h3>
                </div>
            </div>
        </div>
    );
};

export default Review;