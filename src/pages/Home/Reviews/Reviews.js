import React from 'react';
import quota from '../../../assets/icons/quote.svg'
import people1 from "../../../assets/images/people1.png"
import people2 from "../../../assets/images/people2.png"
import people3 from "../../../assets/images/people3.png"
import Review from '../Review/Review';

const Reviews = () => {
    const testimonials = [
        {
            _id: 1,
            name: "Winson Herry",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            country:"California"
        },
        {
            _id: 2,
            name: "Winson Herry",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            country:"California"
        },
        {
            _id: 3,
            name: "Winson Herry",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            country:"California"
        }
    ]
    return (
        <div className='mt-8'>
            <div className="flex justify-between">
                <div>
                    <h1 className='text-2xl text-accent'>Testimonial</h1>
                    <h2 className='text-neutral text-4xl'>What Our Patients Says</h2>
                </div>
                <div className="">
                    <img className='lg:w-48 w-24' src={quota} alt="" />
                </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {
            testimonials.map(testimonial =><Review
                 key={testimonial._id}
                 testimonial={testimonial}
            ></Review>)
        }
            </div>

        </div>
    );
};

export default Reviews;