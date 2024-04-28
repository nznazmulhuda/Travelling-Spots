import React from 'react'
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Row({row,id}) {

    const {spotName,countryName,location,_id} = row;

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

        <div className="border flex items-center justify-center col-span-1 text-[8px] md:text-sm lg:text-lg py-1 font-medium">
            <span className="hidden md:flex lg:flex"><AiOutlineDelete  className='cursor-pointer hover:text-red-800' /></span> <span className="flex md:hidden lg:hidden"><AiOutlineDelete className='cursor-pointer hover:text-red-800' /></span>
        </div>
    </div>
  )
}

export default Row