'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SliderTime({pages}:{pages:[]}) {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    // const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
        
    //     if (progressCircle.current) {
    //         progressCircle.current.style.setProperty('--progress', 1 - progress);
    //     }

    //     if (progressContent.current) {
    //         progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    //     }
    // };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    // delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                // onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {pages.map((item:any,index) => <SwiperSlide key={index}>{item}</SwiperSlide>
               )}

                <div className="autoplay-progress" slot="container-end">

                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
