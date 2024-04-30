import { useEffect, useState } from "react"
import useTitle from "react-dynamic-title"
import { useParams } from "react-router-dom"


function SingleSpot() {

    const {id} = useParams()
    const [details, setDetails] = useState({})

    useEffect(()=> {
        fetch(`https://earth-server-side.vercel.app/details/${id}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])

    const {photoUrl, spotName, countryName, location, cost, season, travelTime, totalVisitors, shortDisc, email, name} = details
    const layout = Math.floor(Math.random() * 10);

    useTitle(spotName + " details");

  return (
    <>
      <div className="my-10 border-y-2 py-10 rounded-3xl border-green-600">

        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-5 -mt-5">
            <span className="text-green-500">D</span>etails <span className="text-green-500">A</span>bout: {" "}{spotName}
        </h1>

        <div className="w-full h-[45vh] relative">
          <img className="w-full h-full rounded-xl" src={photoUrl} alt="" />
          <div className="w-full h-full bg-black absolute top-0 rounded-xl opacity-55"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold flex flex-col items-center justify-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl mb-3">{spotName}</h1>
            <h1>{location}, <span>{countryName}</span></h1>
          </div>
        </div>

        <div className={`flex justify-between items-center mt-5 container mx-auto flex-col-reverse ${layout%2===0 ? "md:flex-row-reverse" : "md:flex-row"} ${layout%2===0 ? "lg:flex-row-reverse" : "lg:flex-row"} border p-4 rounded-lg shadow-xl`}>
            <div className='flex items-center justify-center w-full md:w-[60%] lg:w-[52%] flex-col'>
                <h1 className='text-xl lg:text-4xl font-bold mb-2 lg:mb-4'>
                    {spotName} 
                    <sub className='ml-2 text-xs lg:text-sm text-green-700'>( {countryName} )</sub>
                </h1>

                <p className="text-gray-500 text-[12px] lg:text-sm text-center mb-2">
                    {shortDisc}
                </p>

                <div className="w-full px-10">
                    <h1 className='text-sm lg:text-xl font-medium mb-1 lg:mb-2 flex justify-between'>
                        Location: <span className='text-sm lg:text-lg text-green-900 font-bold ml-2'>{location}</span>
                    </h1>

                    <h1 className='text-sm lg:text-xl font-medium mb-1 lg:mb-2 flex justify-between gap-4 items-center'>
                        Average Cost: <span className='text-sm lg:text-lg text-green-900 font-bold ml-2'>{cost}</span>
                    </h1>

                    <h1 className='text-sm lg:text-xl font-medium mb-1 lg:mb-2 flex justify-between gap-4 items-center'>
                        Seasonality: <span className='text-sm lg:text-lg text-green-900 font-bold ml-2'>{season}</span>
                    </h1>

                    <h1 className='text-sm lg:text-xl font-medium mb-1 lg:mb-2 flex justify-between gap-4 items-center'>
                        Travel Time: <span className='text-sm lg:text-lg text-green-900 font-bold ml-2'>{travelTime}</span>
                    </h1>

                    <h1 className='text-sm lg:text-xl font-medium mb-1 lg:mb-2 flex justify-between gap-4 items-center'>
                        Total Visitors: <span className='text-sm lg:text-lg text-green-900 font-bold ml-2'>{totalVisitors}+<small className='ml-1'>/ year</small></span>
                    </h1>

                    <h1 className='text-sm lg:text-xl font-medium mb-1 lg:mb-2 flex justify-between gap-4 items-center'>
                        Author: <span className='text-sm lg:text-lg text-green-900 font-bold ml-2'>{name}</span>
                    </h1>

                    <h1 className='text-sm lg:text-xl font-medium mb-1 lg:mb-2 flex justify-between gap-4 items-center'>
                        Contact: <span className='text-sm lg:text-lg text-green-900 font-bold ml-2'>{email}</span>
                    </h1>
                </div>
            </div>


            <div className='md:w-[50%] lg:w-[45%]'>
                <img className={`transition-all rounded-lg ease-all w-full h-full`} src={photoUrl} alt={spotName} />
            </div>
        </div>
      </div>
    </>
  )
}

export default SingleSpot