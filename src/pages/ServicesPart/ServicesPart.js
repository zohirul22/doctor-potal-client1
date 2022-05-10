import React from 'react';
import img from '../../assets/images/treatment.png'

const ServicesPart = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl mt-12">
        <figure>
            <img src={img} alt="Album"/>
            </figure>
        <div class="card-body">
          <h2 class="card-title">Exceptional Dental Care, on Your Terms</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
          <div class="card-actions ">
          <button type='button' class=" btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default ServicesPart;