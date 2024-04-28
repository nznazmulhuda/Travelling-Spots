import { useEffect } from "react"
import { useParams } from "react-router-dom"


function SingleSpot() {

    const {id} = useParams()
console.log(id);
    useEffect(()=> {
        fetch(`http://localhost:5000/details/${id}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])

  return (
    <div>SingleSpot</div>
  )
}

export default SingleSpot