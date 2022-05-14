import React from 'react';

const AppoienmentService = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card w-96 bg-base-100 shadow-xl ">
      <div class="card-body">
        <h2 class="card-title ">{name}</h2>
        <p>
          {
            slots.length > 0 ?
              <span>{slots[0]}</span> :
              <span className='text-red-400'>No slots Available</span>
          }
        </p>
        <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} Available</p>
        <div class="card-actions justify-end">

          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            for="my-modal-6"
             className=" btn  bg-blue-500 ">Buy Now</label>

        </div>
      </div>
    </div>
  );
};

export default AppoienmentService;