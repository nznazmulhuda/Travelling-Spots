import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"


function AllTouristsSpot() {

    const datas = useLoaderData()

  return (
    <div>AllTouristsSpot: {datas.length}</div>
  )
}

export default AllTouristsSpot