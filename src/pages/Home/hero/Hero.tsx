/* eslint-disable react/no-unescaped-entities */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co/hdbs48J/Carousel1.jpg",
      position: "center",
    },
    {
      id: 2,
      image: "https://i.ibb.co/KjGtbMW/Carousel4.png",
      position: "center",
    },
    {
      id: 3,
      image: "https://i.ibb.co/6B3WRWx/Carousel2.jpg",
      position: "end",
    },
  ];

  return (
    <div className="max-w-[1230px] mx-auto px-2 lg:px-4 mb-16 lg:mb-0">
      <Swiper
        cssMode={true}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        mousewheel={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper rounded-lg lg:rounded-xl shadow-2xl overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh]"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: slide.position,
              }}
            >
              {/* Content Container */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 lg:px-12">
                  <div className="max-w-2xl lg:max-w-3xl">
                    {/* Main Heading */}
                    <h1 className="text-white mb-4 lg:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide leading-tight">
                      Empowering Your Mobile Experience With
                      <span className="block text-[#22A1F0] mt-2 lg:mt-3 text-shadow">
                        Mobile Mania
                      </span>
                    </h1>

                    {/* Description */}
                    <p className="text-white/90 mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-[50ch] backdrop-blur-sm bg-black/20 p-4 rounded-lg">
                      Welcome to{" "}
                      <span className="font-semibold text-[#22A1F0]">
                        Mobile Mania
                      </span>
                      , your premier destination for all things mobile. Dive into a
                      world where cutting-edge technology meets exceptional service.
                      Whether you're a tech enthusiast or a casual user, we've got
                      something for everyone.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                      <button className="group bg-[#22A1F0] hover:bg-[#1E8BC3] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1">
                        <span className="flex items-center justify-center gap-2">
                          Get Started
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </span>
                      </button>

                      <button className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#22A1F0] px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 backdrop-blur-sm">
                        <span className="flex items-center justify-center gap-2">
                          Learn More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:rotate-12"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Floating Elements */}
              <div className="absolute bottom-4 right-4 lg:hidden">
                <div className="bg-white/20 backdrop-blur-md rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;