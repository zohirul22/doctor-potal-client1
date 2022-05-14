import React from 'react';
import { format } from 'date-fns';
const Appoienmentmodal = ({ date, treatment,setTreatment }) => {
    const {_id, name, slots } = treatment;

    const handelmodel =(event)=>{
        event.preventDefault();
        const slot =event.target.slot.value;
        console.log(_id,name,slot)
        setTreatment(null)
    }


    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-success">Booking for:{name}</h3>
                    <form onSubmit={handelmodel} className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered input-success w-full max-w-xs" />

                        <select name='slot' class="select select-bordered w-full max-w-xs">
                           {
                               slots.map(slot =><option value={slot}>{slot}</option>)
                           }
                        </select>

                        <input type="text" name='name' placeholder="Yours Name" class="input input-bordered input-success w-full max-w-xs" />
                        <input type="email" name='email'  placeholder="email" class="input input-bordered input-success w-full max-w-xs" />
                        <input type="email" name='Phone'  placeholder="phone Number" class="input input-bordered input-success w-full max-w-xs" />

                        <input type="submit" value="submit" class="input btn input-bordered input-success w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Appoienmentmodal;