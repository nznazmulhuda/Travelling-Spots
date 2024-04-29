import { Link, useLoaderData } from "react-router-dom"
import Banner from "../../Components/Home/Banner"
import SpotCard2 from "../../Components/Home/SpotCard2"
import { useEffect, useState } from "react"
import CountryCard from "../../Components/Home/CountryCard"


function Home() {

    const [datas, setDatas] = useState([])
    const category = useLoaderData()

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
            <div>
                <Banner />
            </div>

            <div className="my-10 border-y-2 py-10 border-green-600 rounded-3xl">
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-5 -mt-5"><span className="text-green-600">T</span>ourists <span className="text-green-600">S</span>pot</h1>
                <div className="container mx-auto space-y-8">
                    {
                        datas.slice(0,6).map((spot, id)=> <SpotCard2 spot={spot} key={id} id={id} />)
                    }
                </div>

                <div className="text-center">
                    {
                        datas.length > 6 && <Link to="/all-tourists-spot" className="btn btn-ghost bg-green-700 hover:bg-green-800 text-white font-bold text-sm md:text-lg mt-10">Show all</Link>
                    }
                </div>
            </div>

            <div className="my-10 border-y-2 py-10 border-green-600 rounded-3xl">
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-5 -mt-5"><span className="text-green-600">C</span>ountries</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-5">
                    {
                        category.map((data, id)=> <CountryCard key={id} data={data} />)
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Home