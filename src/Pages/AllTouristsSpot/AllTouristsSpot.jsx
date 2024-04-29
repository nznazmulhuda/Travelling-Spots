import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import SpotCard2 from '../../Components/Home/SpotCard2'


function AllTouristsSpot() {

  const [displayData, setDisplayData] = useState([])
  const [sortData, setSortData] = useState([])

  useEffect(()=> {
    fetch("http://localhost:5000/addSpots")
      .then(res=>res.json())
      .then(data=> {
        setDisplayData(data)
      })
  }, [])

    const handleSort = () => {
      displayData.sort((a,b)=>b.cost.split(" ")[0] - a.cost.split(" ")[0])
      setSortData(displayData)
    }

  return (
    <>


      <div className="my-10 border-y-2 border-green-600 rounded-3xl py-10">


      <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center"><span className="text-green-600">A</span>ll <span className="text-green-600">T</span>ourists <span className="text-green-600">S</span>pot</h1>

      <div className="text-center mb-5 mt-5">
        <div className="dropdown dropdown-hover dropdown-top">
          <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <button onClick={handleSort} >Cost</button>
            </li>
          </ul>
        </div>
      </div>

        <div className="container mx-auto space-y-8">
            {
                sortData ? displayData.map((spot, id)=> <SpotCard2 spot={spot} key={id} id={id} />) : sortData.map((spot, id)=> <SpotCard2 spot={spot} key={id} id={id} />)
            }
        </div>
      </div>
    </>
  )
}

export default AllTouristsSpot