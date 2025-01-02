// Import React and hooks (useRef and useState) from React
import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles for basic styling and functionality
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper modules for added functionalities like autoplay, pagination, and navigation
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

// Created collections function to display collection section
function Collections() {
    return (
        <>
            {/* Section heading for the collections */}
            <div className="collection-heading">
                 <h1>New Arrivals</h1>
            </div>

            {/* Swiper component to create a slider */}
            <Swiper
                spaceBetween={30} // // Space between slides
                loop={true}  // // Enable infinite loop for the slider
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}  // Autoplay slides
                pagination={{
                    clickable: true,
                }}
                // Breakpoints for responsive design
                breakpoints={{
                    0: {
                      slidesPerView: 1, // Shows 1 slide on mobile screens
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 2,  // Show 2 slides on tablet screens
                      spaceBetween: 30,
                    },
                    1336:  {
                        slidesPerView: 3,
                        spaceBetween: 30,  // Show 3 slides on laptop or desktop screens
                      }
                  }}
                navigation={true}
                modules={[ Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                
                {/* Watch sliders */}
                <SwiperSlide>
                    <div className='watch-collection'>
                        <img src="/images/watch-1.png" alt="GA-B2100CD-1A4" />
                        <p>GA-B2100CD-1A4</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='watch-collection'>
                        <img src="/images/watch-2.png" alt="GA-B2100C-9A" />
                        <p>GA-B2100C-9A</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='watch-collection'>
                        <img src="/images/watch-3.png" alt="GA-B2100-3A" />
                        <p>GA-B2100-3A</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='watch-collection'>
                        <img src="/images/watch-4.png" alt="GA-B2100-2A" />
                        <p>GA-B2100-2A</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='watch-collection'>
                        <img src="/images/watch-5.png" alt="GA-B2100CY-1A" />
                        <p>GA-B2100CY-1A</p>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    );
}

export default Collections; 