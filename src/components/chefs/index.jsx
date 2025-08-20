import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import gallary1 from '../../assets/chef-1.jpg';
import gallary2 from '../../assets/chef-2.jpg';
import gallary3 from '../../assets/chef-3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import 'swiper/css/autoplay'; // ✅ optional (styles for autoplay bullets if needed)

import '../../assets/style.css'; // Import your custom styles

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const Chef = () => {
    return (
        <section className='py-5'>
            <div className="container text-center">
                <h3>Our Delicious</h3>
                <h2 className='pb-5'>Meet Our Passionate Chefs</h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,   // time between slides (ms)
                        disableOnInteraction: false, // keep autoplay after user interaction
                    }}
                    loop={true} // ✅ makes it infinite
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper"
                    breakpoints={{   // ✅ Added this
                        0: {       // Mobile
                            slidesPerView: 1,
                        },
                        768: {     // Tablet
                            slidesPerView: 2,
                        },
                        1024: {    // Desktop
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <img src={gallary1} alt="error" className='chefImg' />
                        <h4 className='pt-3'>Meet Our Passionate Chefs</h4>
                        <p className='pb-5'>Head Sushi Chef</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallary2} alt="error" className='chefImg' />
                        <h4 className='pt-3'>Meet Our Passionate Chefs</h4>
                        <p className='pb-5'>Head Sushi Chef</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallary3} alt="error" className='chefImg' />
                        <h4 className='pt-3'>Meet Our Passionate Chefs</h4>
                        <p className='pb-5'>Head Sushi Chef</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallary1} alt="error" className='chefImg' />
                        <h4 className='pt-3'>Meet Our Passionate Chefs</h4>
                        <p className='pb-5'>Head Sushi Chef</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallary2} alt="error" className='chefImg' />
                        <h4 className='pt-3'>Meet Our Passionate Chefs</h4>
                        <p className='pb-5'>Head Sushi Chef</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={gallary3} alt="error" className='chefImg' />
                        <h4 className='pt-3'>Meet Our Passionate Chefs</h4>
                        <p className='pb-5'>Head Sushi Chef</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
export default Chef;
