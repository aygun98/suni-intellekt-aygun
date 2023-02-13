import React from 'react';
import '../assets/css/Colleagues_section.css';
import Colleague from './Colleague'
import Colleague0 from '../assets/images/group-400.svg'
import Colleague1 from '../assets/images/group-401.svg'
import Colleague2 from '../assets/images/group-402.svg'
import Colleague3 from '../assets/images/group-403.svg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//AutoPlay elave etmek
import { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";

const Colleagues = () => {
  return (
    
    <div className='colleagues_section' >
    <Swiper
        autoplay 
        slidesPerView={3}
        spaceBetween={30}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          327: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          590: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
         
        }}
      >
        <SwiperSlide><Colleague  daxilindekiSekil={Colleague0}/></SwiperSlide>
        <SwiperSlide><Colleague  daxilindekiSekil={Colleague1}/></SwiperSlide>
        <SwiperSlide><Colleague  daxilindekiSekil={Colleague2}/></SwiperSlide>
        <SwiperSlide><Colleague  daxilindekiSekil={Colleague3}/></SwiperSlide>
        <SwiperSlide><Colleague  daxilindekiSekil={Colleague0}/></SwiperSlide>
        <SwiperSlide><Colleague  daxilindekiSekil={Colleague1}/></SwiperSlide>
        <SwiperSlide><Colleague  daxilindekiSekil={Colleague2}/></SwiperSlide>
        <SwiperSlide><Colleague  daxilindekiSekil={Colleague3}/></SwiperSlide>
        
      </Swiper>
   
   
   
   
   </div>
   
  )
}

export default Colleagues