import PropTypes from 'prop-types'

function SpotCard2({id}) {

    const disc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi vitae illo temporibus, id error esse corrupti quasi libero aliquam, ea, omnis tempora quis ullam sequi! In id labore saepe veritatis harum sint cum. Maiores, in pariatur blanditiis optio distinctio dolorum.'

  return (
    <>
        <div className={`flex justify-between items-center flex-col-reverse ${id%2===0 ? "md:flex-row-reverse" : "md:flex-row"} ${id%2===0 ? "lg:flex-row-reverse" : "lg:flex-row"} border p-4 rounded-lg shadow-xl`}>
            <div className='flex items-center justify-center w-full md:w-[60%] lg:w-[52%] flex-col'>
                <h1 className='text-xl lg:text-4xl font-bold mb-2 lg:mb-4'>
                    Spot Name 
                    <sub className='ml-2 text-xs lg:text-sm text-green-700'>( Country name )</sub>
                </h1>

                <p className="text-gray-500 text-[12px] lg:text-sm text-center mb-2">
                    {
                        disc.split(" ").slice(0, 20).join(" ")
                    }...
                </p>

                <div>
                    <h1 className='text-sm lg:text-xl font-medium mb-1 lg:mb-2 flex justify-between'>
                        Location: <span className='text-sm lg:text-lg text-green-900 font-bold ml-2'>Location</span>
                    </h1>

                    <h1 className='text-sm lg:text-xl font-medium mb-1 lg:mb-2 flex justify-between gap-4 items-center'>
                        Average Cost: <span className='text-sm lg:text-lg text-green-900 font-bold ml-2'>Cost</span>
                    </h1>

                    <h1 className='text-sm lg:text-xl font-medium mb-1 lg:mb-2 flex justify-between gap-4 items-center'>
                        Seasonality: <span className='text-sm lg:text-lg text-green-900 font-bold ml-2'>Summer</span>
                    </h1>

                    <h1 className='text-sm lg:text-xl font-medium mb-1 lg:mb-2 flex justify-between gap-4 items-center'>
                        Travel Time: <span className='text-sm lg:text-lg text-green-900 font-bold ml-2'>15 days</span>
                    </h1>

                    <h1 className='text-sm lg:text-xl font-medium mb-1 lg:mb-2 flex justify-between gap-4 items-center'>
                        Total Visitors: <span className='text-sm lg:text-lg text-green-900 font-bold ml-2'>10000+<small className='ml-1'>/ year</small></span>
                    </h1>
                </div>

                <div className="divider my-0 mx-3"></div>

                <button className="btn btn-ghost w-[80%] bg-green-700 hover:bg-green-800 text-white font-bold text-sm lg:text-lg">View Details</button>
            </div>


            <div className='md:w-[50%] lg:w-[45%]'>
                <img className={`transition-all rounded-lg ease-all w-full h-full`} src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            </div>
        </div>
    </>
  )
}

SpotCard2.propTypes = {
    id: PropTypes.number,
}

export default SpotCard2