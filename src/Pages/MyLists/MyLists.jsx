import { useContext, useState } from "react"
import { useEffect } from "react"
import {AuthContext} from '../../AuthProvider/AuthProvider'
import Row from "../../Components/MyLists/Row"


function MyLists() {

  const {user} = useContext(AuthContext)
  const [datas, setDatas] = useState([])

  useEffect(()=> {
    fetch(`http://localhost:5000/myLists/${user.email}`)
    .then(res=>res.json())
    .then(data=>setDatas(data))
  }, [])

  return (
    <>
      <div className="my-10 border-t border-b rounded-3xl border-green-800 pt-7 pb-10">

        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-5">
          <span className="text-green-500">
            {
              user.displayName.charAt()
            }
          </span>
          <span>
            {
              user.displayName.split("").slice(1)
            }
          </span>
          ,{" "}
          <span className="text-sm md:text-lg lg:text-xl font-semibold">
            Your List
          </span>
        </h1>
        <div className="grid grid-cols-12 container mx-auto text-center">
            <div className="border flex items-center justify-center col-span-1 text-[8px] md:text-sm lg:text-lg py-1 font-bold uppercase">
              no.
            </div>

            <div className="border flex items-center justify-center col-span-3 text-[8px] md:text-sm lg:text-lg py-1 font-bold uppercase">
              spot name
            </div>

            <div className="border flex items-center justify-center col-span-3 text-[8px] md:text-sm lg:text-lg py-1 font-bold uppercase">
              country name
            </div>

            <div className="border flex items-center justify-center col-span-3 text-[8px] md:text-sm lg:text-lg py-1 font-bold uppercase">
              location
            </div>

            <div className="border flex items-center justify-center col-span-1 text-[8px] md:text-sm lg:text-lg py-1 font-bold uppercase">
              <span className="hidden md:flex lg:flex">Update</span> <span className="flex md:hidden lg:hidden">Up</span>
            </div>

            <div className="border flex items-center justify-center col-span-1 text-[8px] md:text-sm lg:text-lg py-1 font-bold uppercase">
              <span className="hidden md:flex lg:flex">Delete</span> <span className="flex md:hidden lg:hidden">Del</span>
            </div>
        </div>

        {
          datas.map((row, id)=><Row key={row._id} row={row} id={id} />)
        }
      </div>
    </>
  )
}

export default MyLists