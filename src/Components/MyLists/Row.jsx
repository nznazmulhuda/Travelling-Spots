import React from 'react'
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


function Row({row,id,datas,setDatas}) {

    const navigate = useNavigate()
    const {spotName,countryName,location,_id} = row;
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://earth-server-side.vercel.app/delete/${id}`, {
                    method: "delete"
                })
                .then(res=>res.json())
                .then(data=> {
                    if(data.deletedCount > 0) {
                        setDatas(datas.filter(d=> d._id!==id))
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your spot has been deleted.",
                            icon: "success"
                        });
                    }
                })

            }
        });
    }

  return (
    <div className="grid grid-cols-12 container mx-auto text-center">
        <div className="border flex items-center justify-center col-span-1 text-[8px] md:text-sm lg:text-lg py-1 font-medium">
            {id+1}
        </div>

        <div className="border flex items-center justify-center col-span-3 text-[8px] md:text-sm lg:text-lg py-1 font-medium">
            {spotName}
        </div>

        <div className="border flex items-center justify-center col-span-3 text-[8px] md:text-sm lg:text-lg py-1 font-medium">
            {countryName}
        </div>

        <div className="border flex items-center justify-center col-span-3 text-[8px] md:text-sm lg:text-lg py-1 font-medium">
            {location}
        </div>

        <div className="border flex items-center justify-center col-span-1 text-[8px] md:text-sm lg:text-lg py-1 font-medium">
            <Link to={`/update-tourists-spot/${_id}`} className="hidden md:flex lg:flex"><FiEdit className='cursor-pointer hover:text-green-800' /></Link> <span className="flex md:hidden lg:hidden"><FiEdit className='cursor-pointer hover:text-green-800' /></span>
        </div>

        <div onClick={()=> handleDelete(_id)} className="border flex items-center justify-center col-span-1 text-[8px] md:text-sm lg:text-lg py-1 font-medium">
            <span className="hidden md:flex lg:flex"><AiOutlineDelete  className='cursor-pointer hover:text-red-800' /></span> <span className="flex md:hidden lg:hidden"><AiOutlineDelete className='cursor-pointer hover:text-red-800' /></span>
        </div>
    </div>
  )
}

export default Row