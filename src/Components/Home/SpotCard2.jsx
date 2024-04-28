import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function SpotCard2({id, spot}) {

    const {photoUrl,spotName,countryName,shortDisc,cost,season,travelTime,totalVisitors,location,_id} = spot;
  return (
    <>
        <div className={`flex justify-between items-center flex-col-reverse ${id%2===0 ? "md:flex-row-reverse" : "md:flex-row"} ${id%2===0 ? "lg:flex-row-reverse" : "lg:flex-row"} border p-4 rounded-lg shadow-xl`}>
            <div className='flex items-center justify-center w-full md:w-[60%] lg:w-[52%] flex-col'>
                <h1 className='text-xl lg:text-4xl font-bold mb-2 lg:mb-4'>
                    {spotName} 
                    <sub className='ml-2 text-xs lg:text-sm text-green-700'>( {countryName} )</sub>
                </h1>

                <p className="text-gray-500 text-[12px] lg:text-sm text-center mb-2">
                    {
                        shortDisc.split(" ").slice(0, 30).join(" ")
                    }
                    {
                        shortDisc.split(" ").length > 30 && '...'
                    }
                </p>

                <div>
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
                </div>

                <div className="divider my-0 mx-3"></div>

                <Link to={`/details/${_id}`} className='w-full text-center'>
                    <button className="btn btn-ghost w-[80%] bg-green-700 hover:bg-green-800 text-white font-bold text-sm lg:text-lg">View Details</button>
                </Link>
            </div>


            <div className='md:w-[50%] lg:w-[45%]'>
                <img className={`transition-all rounded-lg ease-all w-full h-full`} src={photoUrl} alt={spotName} />
            </div>
        </div>
    </>
  )
}

SpotCard2.propTypes = {
    id: PropTypes.number,
}

export default SpotCard2