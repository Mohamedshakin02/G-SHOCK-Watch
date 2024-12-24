import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

function Collections() {
    return (
        <>
        
            <div className="collection-heading">
                 <h1>New Arrivals</h1>
            </div>

            <Swiper
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1336:  {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      }
                  }}
                navigation={true}
                modules={[ Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='watch-collection'>
                        <img src="/images/watch-1.png" alt="" />
                        <p>GA-B2100CD-1A4</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='watch-collection'>
                        <img src="/images/watch-2.png" alt="" />
                        <p>GA-B2100C-9A</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='watch-collection'>
                        <img src="/images/watch-3.png" alt="" />
                        <p>GA-B2100-3A</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='watch-collection'>
                        <img src="/images/watch-4.png" alt="" />
                        <p>GA-B2100-2A</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='watch-collection'>
                        <img src="/images/watch-5.png" alt="" />
                        <p>GA-B2100CY-1A</p>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    );
}

export default Collections; 