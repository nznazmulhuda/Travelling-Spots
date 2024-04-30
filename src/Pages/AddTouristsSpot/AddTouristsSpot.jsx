import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {AuthContext} from '../../AuthProvider/AuthProvider'
import useTitle from "react-dynamic-title";


function AddTouristsSpot() {
    useTitle("Add Tourists Spot");
    const navigate = useNavigate()
    const {user, emailCheck} = useContext(AuthContext)

    const handleAddSpot = e => {
        e.preventDefault();
        const form = e.target;
        const photoUrl = form.photoUrl.value;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const season = form.season.value;
        const travelTime = form.travelTime.value;
        const totalVisitors = form.totalVisitors.value;
        const shortDisc = form.shortDisc.value;
        const email = user.email;
        const name = user.displayName;

        const spot = {
            photoUrl,
            spotName,
            countryName,
            location,
            cost,
            season,
            travelTime,
            totalVisitors,
            shortDisc,
            email,
            name
        }

        fetch("https://earth-server-side.vercel.app/addSpots", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(spot)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged) {
                toast.success("Your Spots are added!")
                navigate("/my-lists")
                form.reset()
            } else {
                toast.error("Somthing is wrong! try again");
                form.reset();
            }
        })
    }
  return (
    <>
        {
            emailCheck ? 
                <div className="contaFiner mx-auto my-10 border-t border-b py-10 rounded-t-3xl rounded-b-3xl border-green-700 shadow-2xl">
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center">
                    <span className="text-green-500">A</span>dd <span className="text-green-500">T</span>ourists <span className="text-green-500">S</span>pot
                </h1>

                <form className="w-full md:w-[90%] lg:w-[85%] mx-auto border p-2 md:p-5 lg:p-10 rounded-xl shadow-2xl mt-5" onSubmit={handleAddSpot}>
                    <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                        <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Image</label>
                        <input className="outline-none bg-transparent border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3" type="url" name="photoUrl" placeholder="Image URL" required />
                    </div>

                    <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                        <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Spot Name</label>
                        <input className="outline-none bg-transparent border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3" type="text" name="spotName" placeholder="Tourists Spot Name" required />
                    </div>
                    
                    <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                        <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Country Name</label>
                        <select name="countryName" className="select select-bordered outline-none border-b w-full pb-2 focus:shadow-xl focus:outline-none focus:border-none border-t-0 border-r-0 border-l-0 rounded-none px-3">
                            <option disabled>Pick Country</option>
                            <option>Bangladesh</option>
                            <option>Thailand</option>
                            <option>Indonesia</option>
                            <option>Malaysia</option>
                            <option>Vietnam</option>
                            <option>Cambodia</option>
                        </select>
                    </div>
                    
                    <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                        <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Location</label>
                        <input className="outline-none bg-transparent border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3" type="text" name="location" placeholder="Location" required />
                    </div>
                    
                    <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                        <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Average Cost</label>
                        <input className="outline-none bg-transparent border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3" type="text" name="cost" placeholder="Average Cost" required />
                    </div>
                    
                    <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                        <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Seasonality</label>
                        <input className="outline-none bg-transparent border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3" type="text" name="season" placeholder="Seasonality" required />
                    </div>
                    
                    <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                        <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Travel Time</label>
                        <input className="outline-none bg-transparent border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3" type="text" name="travelTime" placeholder="Travel Time" required />
                    </div>
                    
                    <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                        <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Total Visitors Per Year</label>
                        <input className="outline-none bg-transparent border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3" type="number" name="totalVisitors" placeholder="Total Visitors Per Year" required />
                    </div>

                    <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                        <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Short Description</label>
                        <textarea className="outline-none bg-transparent border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3 resize-none" type="text" name="shortDisc" placeholder="Total Visitors Per Year" required />
                    </div>
                    
                    <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                        <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Email</label>
                        <input className={`outline-none border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3 ${user.email && 'cursor-not-allowed'}`} type="email" name="email" value={user.email} disabled={user.email && 'disabled'} placeholder="Email" />
                    </div>
                    
                    <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                        <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Name</label>
                        <input className={`outline-none border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3 ${user.displayName && 'cursor-not-allowed'}`} type="email" name="email" value={user.displayName} disabled={user.displayName && 'disabled'} placeholder="Name" required />
                    </div>
                    
                    <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                        <input className="outline-none bg-green-700 hover:bg-green-800 text-white font-bold hover:shadow-xl rounded-full w-full py-2 px-3" type="submit" placeholder="Image URL" required />
                    </div>
                </form>
                </div> :
                <Navigate state={"/add-tourists-spot"} to={"/emailVerify"} />
        }
    </>
  )
}

export default AddTouristsSpot