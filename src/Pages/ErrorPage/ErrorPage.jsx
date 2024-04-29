import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/lottie.json";
import { Link } from "react-router-dom";
import useTitle from "react-dynamic-title";

function ErrorPage() {

  useTitle("error!")
  
  return (
    <>
      <Link to="/">
          <div className="absolute top-10 left-10 z-[99999999]">
            <h1 className="text-blue-600 font-bold text-sm md:text-lg lg:text-xl border py-2 px-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all ease-in">Go to homepage</h1>
          </div>
      </Link>

      <Lottie animationData={groovyWalkAnimation} />
    </>
  )
}

export default ErrorPage