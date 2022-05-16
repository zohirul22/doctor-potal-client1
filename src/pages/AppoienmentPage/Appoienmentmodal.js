import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Appoienmentmodal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const [user, loading, error] = useAuthState(auth);

    const handelmodel = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot)
        setTreatment(null)
    }


    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-success">Booking for:{name}</h3>
                    <form onSubmit={handelmodel} className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered input-success w-full max-w-xs" />

                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered input-success w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered input-success w-full max-w-xs" />
                        <input type="email" name='Phone' placeholder="phone Number" className="input input-bordered input-success w-full max-w-xs" />

                        <input type="submit" value="submit" className="input btn input-bordered input-success w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Appoienmentmodal;