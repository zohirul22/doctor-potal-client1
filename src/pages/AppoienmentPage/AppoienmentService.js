import React from 'react';

const AppoienmentService = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <div className="card-body">
        <h2 className="card-title ">{name}</h2>
        <p>
          {
            slots.length > 0 ?
              <span>{slots[0]}</span> :
              <span className='text-red-400'>No slots Available</span>
          }
        </p>
        <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} Available</p>
        <div className="card-actions justify-end">

          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            htmlFor="my-modal-6"
             className=" btn  bg-blue-500 ">Buy Now</label>

        </div>
      </div>
    </div>
  );
};

export default AppoienmentService;