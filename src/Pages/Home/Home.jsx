import { Link, useLoaderData } from "react-router-dom"
import Banner from "../../Components/Home/Banner"
import SpotCard2 from "../../Components/Home/SpotCard2"
import { useEffect, useState } from "react"


function Home() {

    const [datas, setDatas] = useState([])

    useEffect(()=> {
        fetch("http://localhost:5000/addSpots")
            .then(res=>res.json())
            .then(data=>{
                for (let i = data.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [data[i], data[j]] = [data[j], data[i]];
                }
                setDatas(data)
            })
    },[])

    return (
        <>
        <div>
            {/* <div>
                <Banner />
            </div> */}

            <div className="flex">
                <div className="container mx-auto space-y-8">
                    {
                        datas.slice(0,6).map((spot, id)=> <SpotCard2 spot={spot} key={id} id={id} />)
                    }
                </div>
            </div>

            {/* <div className="text-center">
                {
                    datas.length > 6 && <Link to="/all-tourists-spot" className="btn btn-ghost bg-green-700 hover:bg-green-800 text-white font-bold text-sm md:text-lg my-5">Show all</Link>
                }
            </div> */}
        </div>
        </>
    )
}

export default Home