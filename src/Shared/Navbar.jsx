import { Link, NavLink } from "react-router-dom"
import {IoMdMenu } from 'react-icons/io'
import {RxCross1} from 'react-icons/rx'
import { useState } from "react"

function Navbar() {
    const [isMenu, setIsMenu] = useState(false)

    // large device links
    const largeLinks = <ul className="flex gap-5">
        <NavLink to={"/"} className={({isActive})=> isActive? "text-green-600 text-[12px] border-b font-semibold" : "text-black hover:text-green-600 hover:border-b text-[12px] font-semibold"}>
            Home
        </NavLink>

        <NavLink to={"/all-tourists-spot"}  className={({isActive})=> isActive? "text-green-600 text-[12px] border-b font-semibold" : "text-black hover:text-green-600 hover:border-b text-[12px] font-semibold"}>
            All Tourists Spot
        </NavLink>

        <NavLink to={"/add-tourists-spot"}  className={({isActive})=> isActive? "text-green-600 text-[12px] border-b font-semibold" : "text-black hover:text-green-600 hover:border-b text-[12px] font-semibold"}>
            Add Tourists Spot
        </NavLink>

        <NavLink to={"/my-lists"}  className={({isActive})=> isActive? "text-green-600 text-[12px] border-b font-semibold" : "text-black hover:text-green-600 hover:border-b text-[12px] font-semibold"}>
            My List
        </NavLink>
    </ul>

    const mdLinks = <ul className="grid grid-cols-1 gap-5">
    <NavLink to={"/"} className={({isActive})=> isActive? "text-green-600 text-[12px] border-b font-semibold text-center" : "text-black text-center hover:text-green-600 hover:border-b text-[12px] font-semibold"}>
        Home
    </NavLink>

    <NavLink to={"/all-tourists-spot"}  className={({isActive})=> isActive? "text-green-600 text-[12px] border-b font-semibold text-center" : "text-black text-center hover:text-green-600 hover:border-b text-[12px] font-semibold"}>
        All Tourists Spot
    </NavLink>

    <NavLink to={"/add-tourists-spot"}  className={({isActive})=> isActive? "text-green-600 text-[12px] border-b font-semibold text-center" : "text-black text-center hover:text-green-600 hover:border-b text-[12px] font-semibold"}>
        Add Tourists Spot
    </NavLink>

    <NavLink to={"/my-lists"}  className={({isActive})=> isActive? "text-green-600 text-[12px] border-b font-semibold text-center" : "text-black text-center hover:text-green-600 hover:border-b text-[12px] font-semibold"}>
        My List
    </NavLink>
</ul>

    return (
        <>
        <div className="container mx-auto">
            {/* Desktop Navbar */}
            <div className="flex md:flex lg:flex">
                <div className="grid grid-cols-3 items-center w-full">
                    <div className="hidden lg:flex items-center justify-start">
                        {largeLinks}
                    </div>

                    <div className="flex lg:hidden">
                        <IoMdMenu className={`text-xl ${isMenu ? "hidden" : "flex"}`} onClick={()=>setIsMenu(true)}/>
                        <RxCross1 className={`text-xl ${isMenu ? "flex" : "hidden"}`} onClick={()=>setIsMenu(false)}/>
                    </div>

                    <div className={`${isMenu ? "space-y-4 py-3 px-4 absolute top-10 z-[99999] bg-white flex" : "hidden"}`}>
                        {mdLinks}
                    </div>

                    <Link to={"/"} className="flex items-center justify-center">
                        <div className="flex flex-row lg:flex-col">
                            <h1 className="md:text-2xl lg:text-3xl font-bold"><span className="text-green-500">E</span>arth</h1>
                            <h1 className="md:text-2xl lg:text-3xl font-bold md:ml-3 lg:ml-7"><span className="text-green-500">P</span>review</h1>
                        </div>
                    </Link>

                    <div className="hidden md:flex lg:flex items-center justify-end">
                        <div className="space-x-1 md:space-x-2 lg:space-x-3">
                            <Link to={"/login"} className="btn btn-ghost text-[12px] rounded-lg md:text-[14px] lg:text-[16px] bg-green-700 hover:bg-green-800 text-white">
                                Login
                            </Link>

                            <Link to={"/register"} className="btn btn-ghost text-[12px] rounded-lg md:text-[14px] lg:text-[16px] bg-green-700 hover:bg-green-800 text-white">
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex md:hidden lg:hidden justify-around mt-2">
                            <Link to={"/login"} className="btn btn-ghost text-[12px] rounded-lg md:text-[14px] lg:text-[16px] bg-green-700 hover:bg-green-800 text-white">
                                Login
                            </Link>

                            <Link to={"/register"} className="btn btn-ghost text-[12px] rounded-lg md:text-[14px] lg:text-[16px] bg-green-700 hover:bg-green-800 text-white">
                                Register
                            </Link>
                        </div>
        </div>
        </>
    )
}

export default Navbar