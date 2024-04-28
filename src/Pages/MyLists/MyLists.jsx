import { useContext } from "react"
import { useEffect } from "react"
import {AuthContext} from '../../AuthProvider/AuthProvider'


function MyLists() {

  const {user} = useContext(AuthContext)

  useEffect(()=> {
    fetch(`http://localhost:5000/myLists/${user.email}`)
    .then(res=>res.json())
    .then(data=>console.log(data))
  }, [])

  return (
    <div>MyLists</div>
  )
}

export default MyLists