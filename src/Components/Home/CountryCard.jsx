import { Link } from "react-router-dom"


function CountryCard({data}) {

    const {photoUrl,countryName,shortDescription,_id} = data;

  return (
    <>
        <Link to={`/category/${countryName}`} className="border p-4 rounded-xl shadow-xl">
            <div className="w-full h-[40vh]">
                <img className="w-full h-full rounded-xl" src={photoUrl} alt="" />
            </div>

            <div className="px-4 mt-4">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{countryName}</h1>
                <p className="w-[80%] text-xs md:text-sm text-gray-500">{shortDescription}</p>
            </div>
        </Link>
    </>
  )
}

export default CountryCard