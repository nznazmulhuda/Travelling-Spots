import { FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide1 from "../../assets/banner1.png";
import Slide2 from "../../assets/banner2.png";
import Slide3 from "../../assets/banner3.jpg";
import { Typewriter } from 'react-simple-typewriter'

function Banner() {

    const words = ["Explore", "Dream", "Discover"]

    return (
        <>
            <div className="relative mt-5">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper h-[80vh] md:h-[80vh] lg:h-[70vh] rounded-xl"
                >
                    <SwiperSlide>
                        <div className="w-full h-full relative bg-gradient-to-r from-green-100 to-green-900">
                            <img
                                className="w-full h-full opacity-50"
                                src={Slide1}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full h-full relative bg-gradient-to-r from-green-100 to-green-700">
                            <img
                                className="w-full h-full opacity-50"
                                src={Slide2}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full h-full relative bg-gradient-to-r from-green-100 to-green-700">
                            <img
                                className="w-full h-full opacity-50"
                                src={Slide3}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="absolute z-[9998] top-1/2 w-full md:w-[60%] lg:w-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-y-1/2 lg:-translate-y-3/4">
                    <div className="w-full text-center">
                        <h3 className="text-white text-lg font-semibold mb-3 md:mb-5 lg:mb-5">
                            Traveling With Earh Preview
                        </h3>

                        <h1 className="text-white font-lato text-xl md:text-3xl lg:text-5xl font-semibold leading-6 md:leading-8 lg:leading-[50px] mb-3 md:mb-5 lg:mb-8">
                            <span className="text-green-600">W</span>anderlust <span className="text-green-600">E</span>xpeditions: <Typewriter typeSpeed={150} words={words} cursorColor="green" cursor loop="0" /></h1>

                        <p className="font-medium md:font-semibold lg:font-semibold text-xs md:text-sm lg:text-sm text-base-200">
                            Welcome to <span className="border-b border-green-800 cursor-pointer">Earth Preview</span>, where the world is at your fingertips. Dive into a virtual realm of exploration and adventure, where every click opens up new horizons and possibilities. 
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;