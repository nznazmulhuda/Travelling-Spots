import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SpotCard from '../../Components/Country/SpotCard'
import useTitle from "react-dynamic-title"


function Country() {

    const {countryName} = useParams()
    const [cards, setCards] = useState([])
    useTitle(countryName);
    
    useEffect(()=> {
        fetch(`http://localhost:5000/category/${countryName}`)
            .then(res=>res.json())
            .then(data=> setCards(data))

    }, [])

  return (
    <>
    <div className="my-10 border-y-2 py-10 border-green-600 rounded-3xl">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-5 -mt-5"><span className="text-green-600">{countryName.charAt()}</span>{countryName.slice(1)}</h1>
        <div className="container mx-auto space-y-8">
            {
                cards.map((card, id) => <SpotCard key={card._id} id={id} spot={card} />)
            }
        </div>
    </div>
    </>
  )
}

export default Country