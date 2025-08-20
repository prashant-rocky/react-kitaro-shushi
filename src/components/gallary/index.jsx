import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import gallary1 from '../../assets/gallary1.jpg';
import gallary2 from '../../assets/gallary2.jpg';
import gallary3 from '../../assets/gallary3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../../assets/style.css';

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const Gallery = () => {
  return (
    <section className='py-5'>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          0: {       // 👶 Mobile
            slidesPerView: 1,
          },
          768: {     // 📱 Tablet (md)
            slidesPerView: 2,
          },
          1024: {    // 💻 Desktop
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <img src={gallary1} alt="error" className='position-relative'/>
          <h3 className='gallaryChild position-absolute'>Dragon Roll</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallary2} alt="error" className='position-relative'/>
          <h3 className='gallaryChild position-absolute'>Golden Shrimp Tempura</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallary3} alt="error" className='position-relative'/>
          <h3 className='gallaryChild position-absolute'>Tuna Tataki Delight</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallary1} alt="error" className='position-relative'/>
          <h3 className='gallaryChild position-absolute'>Kitaro Salmon Nigiri</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallary2} alt="error" className='position-relative'/>
          <h3 className='gallaryChild position-absolute'>Seafood Harmony Platter</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallary3} alt="error" className='position-relative'/>
          <h3 className='gallaryChild position-absolute'>Dragon Roll Supreme</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
export default Gallery;
