import React from 'react';

const Review = ({ testimonial }) => {
    return (
        <div className="card  bg-base-100 shadow-xl ">
            <div className="">
                <div class="">
                    <div class="card-body">

                        <p>{testimonial.description}</p>
                        <div class="card-actions justify-end">

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center p-8">

                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-success ring-offset-base-100 mr-4">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
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