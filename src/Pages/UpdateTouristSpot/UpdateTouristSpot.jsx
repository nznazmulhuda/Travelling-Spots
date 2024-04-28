

function UpdateTouristSpot() {

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
    const email = form.email.value;
    const name = form.name.value;

    console.log({
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
    });
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
                    <input className="outline-none border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3" type="url" name="photoUrl" placeholder="Image URL" required />
                </div>

                <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                    <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Spot Name</label>
                    <input className="outline-none border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3" type="text" name="spotName" placeholder="Tourists Spot Name" required />
                </div>
                
                <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                    <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Country Name</label>
                    {/* <input className="outline-none border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3" type="text" name="countryName" placeholder="Counrty Name" required /> */}
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
                    <input className="outline-none border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3" type="text" name="location" placeholder="Location" required />
                </div>
                
                <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                    <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Average Cost</label>
                    <input className="outline-none border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3" type="text" name="cost" placeholder="Average Cost" required />
                </div>
                
                <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                    <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Seasonality</label>
                    <input className="outline-none border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3" type="text" name="season" placeholder="Seasonality" required />
                </div>
                
                <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                    <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Travel Time</label>
                    <input className="outline-none border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3" type="text" name="travelTime" placeholder="Travel Time" required />
                </div>
                
                <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                    <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Total Visitors Per Year</label>
                    <input className="outline-none border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3" type="number" name="totalVisitors" placeholder="Total Visitors Per Year" required />
                </div>

                <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                    <label className="text-sm md:text-lg lg:text-xl font-normal" htmlFor="photoUrl">Short Description</label>
                    <textarea className="outline-none border-b w-full py-2 focus:border-b-green-800 focus:shadow-xl px-3 resize-none" type="text" name="shortDisc" placeholder="Total Visitors Per Year" required />
                </div>
                
                <div className="space-y-2 flex flex-col items-start gap-2 mb-8">
                    <input className="outline-none bg-green-700 hover:bg-green-800 text-white font-bold hover:shadow-xl rounded-full w-full py-2 px-3" type="submit" value={"Update"} placeholder="Image URL" required />
                </div>
            </form>
        </div>
    </>
  )
}

export default UpdateTouristSpot