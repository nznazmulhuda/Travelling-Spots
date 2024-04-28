import { Link, useLoaderData } from "react-router-dom"
import Banner from "../../Components/Home/Banner"
import SpotCard from "../../Components/Home/SpotCard"
import SpotCard2 from "../../Components/Home/SpotCard2"


function Home() {

    const spots = useLoaderData()

    return (
        <>
        <div>
            <div>
                {/* <Banner /> */}
            </div>

            <div className="flex">
                <div className="container mx-auto space-y-8">
                    {
                        spots.slice(0,6).map((spot, id)=> <SpotCard2 spot={spot} key={id} id={id} />)
                    }
                </div>
            </div>

            <div className="text-center">
                {
                    spots.length > 6 && <Link to="/all-tourists-spot" className="btn btn-ghost bg-green-700 hover:bg-green-800 text-white font-bold text-sm md:text-lg my-5">Show all</Link>
                }
            </div>
        </div>
        </>
    )
}

export default Home