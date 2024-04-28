import Banner from "../../Components/Home/Banner"
import SpotCard from "../../Components/Home/SpotCard"
import SpotCard2 from "../../Components/Home/SpotCard2"


function Home() {

    const test = [1,2,3,4,5,6,7,8,9]

    return (
        <>
        <div>
            <div>
                {/* <Banner /> */}
            </div>

            <div className="flex">
                <div className="container mx-auto space-y-8">
                    {
                        test.slice(0,6).map((card, id)=> <SpotCard2 key={id} id={id} />)
                    }
                </div>
            </div>

            <div className="text-center">
                {
                    test.length > 6 && <button className="btn btn-ghost bg-green-700 hover:bg-green-800 text-white font-bold text-sm md:text-lg my-5">Show all</button>
                }
            </div>
        </div>
        </>
    )
}

export default Home