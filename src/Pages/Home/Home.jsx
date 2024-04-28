import Banner from "../../Components/Home/Banner"
import SpotCard from "../../Components/Home/SpotCard"


function Home() {

    const test = [1,2,3,4,5,6,7,8,9]

    return (
        <>
        <div>
            <div>
                {/* <Banner /> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    test.slice(0,6).map((card, id)=><SpotCard key={id} />)
                }
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