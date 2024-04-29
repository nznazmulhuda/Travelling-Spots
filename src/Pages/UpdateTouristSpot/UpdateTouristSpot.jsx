import { useEffect, useState } from "react";
import useTitle from "react-dynamic-title";
import { json, useNavigate, useParams } from "react-router-dom"
import {toast} from 'react-toastify'


function UpdateTouristSpot() {

    const {id} = useParams()
    const [data, setData] = useState({})
    const navigate = useNavigate()

    
    useEffect(()=> {
        fetch(`http://localhost:5000/details/${id}`)
        .then(res=>res.json())
        .then(data=>setData(data))
    }, [])
    
    const {photoUrl,spotName,countryName,location,cost,season,travelTime,totalVisitors,shortDisc,_id} = data;

    useTitle("Update " + spotName);

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

        const newSpotDetail = {
            photoUrl,
            spotName,
            countryName,
            location,
            cost,
            season,
            travelTime,
            totalVisitors,
            shortDisc,
        }

        fetch(`http://localhost:5000/update/${_id}`, {
            method: "put",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(newSpotDetail)
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success("Spot Updated!");
            navigate("/my-lists");
    })
}

  return (
    <>
        <div className="contaFiner mx-auto my-10 border-t border-b py-10 rounded-t-3xl rounded-b-3xl border-green-700 shadow-2xl">
            <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl">
                <span className="text-green-500">U</span>pdate <span className="text-green-500">T</span>ourists <span className="text-green-500">S</span>pot
            </h1>

            <form className="w-full md:w-[90%] lg:w-[85%] mx-auto border p-2 md:p-5 lg:p-10 rounded-xl shadow-2xl mt-5" onSubmit={handleAddSpot}>
                <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                    <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Image</label>
                    <input className="outline-none border-b w-full py-2 bg-transparent focus:border-b-green-800 focus:shadow-xl px-3" type="url" name="photoUrl" defaultValue={photoUrl} placeholder={photoUrl} />
                </div>

                <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                    <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Spot Name</label>
                    <input className="outline-none border-b w-full py-2 bg-transparent focus:border-b-green-800 focus:shadow-xl px-3" type="text" name="spotName" defaultValue={spotName} placeholder={spotName} />
                </div>
                
                <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                    <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Country Name</label>
                    <select name="countryName" defaultValue={countryName} className="select select-bordered outline-none border-b w-full pb-2 focus:shadow-xl focus:outline-none focus:border-none border-t-0 border-r-0 border-l-0 rounded-none px-3">
                        <option selected disabled>{countryName}</option>
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
                    <input className="outline-none border-b w-full py-2 bg-transparent focus:border-b-green-800 focus:shadow-xl px-3" type="text" defaultValue={location} name="location" placeholder={location} />
                </div>
                
                <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                    <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Average Cost</label>
                    <input className="outline-none border-b w-full py-2 bg-transparent focus:border-b-green-800 focus:shadow-xl px-3" type="text" name="cost" defaultValue={cost} placeholder={cost} />
                </div>
                
                <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                    <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Seasonality</label>
                    <input className="outline-none border-b w-full py-2 bg-transparent focus:border-b-green-800 focus:shadow-xl px-3" type="text" name="season" defaultValue={season} placeholder={season} />
                </div>
                
                <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                    <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Travel Time</label>
                    <input className="outline-none border-b w-full py-2 bg-transparent focus:border-b-green-800 focus:shadow-xl px-3" type="text" name="travelTime" defaultValue={travelTime} placeholder={travelTime} />
                </div>
                
                <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                    <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Total Visitors Per Year</label>
                    <input className="outline-none border-b w-full py-2 bg-transparent focus:border-b-green-800 focus:shadow-xl px-3" type="number" name="totalVisitors" defaultValue={totalVisitors} placeholder={totalVisitors} />
                </div>

                <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                    <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Short Description</label>
                    <textarea className="outline-none border-b w-full py-2 bg-transparent focus:border-b-green-800 focus:shadow-xl px-3 resize-none" type="text" name="shortDisc" defaultValue={shortDisc} placeholder={shortDisc} />
                </div>
                
                <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                    <input className="outline-none bg-green-700 hover:bg-green-800 text-white font-bold hover:shadow-xl rounded-full w-full py-2 px-3" type="submit" value={"Update"} placeholder="Image URL" />
                </div>
            </form>
        </div>
    </>
  )
}

export default UpdateTouristSpot