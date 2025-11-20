import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper-test.css'

function SwiperTest() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      centeredSlides={true}
      autoplay={{ delay: 2500 }}
      pagination={{ clickable: true, dynamicBullets: true, }}
      navigation={true}
      breakpoints={{
    // 當視窗 ≥ 1024px 時顯示 3 張
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // 當視窗 ≥ 768px 時顯示 2 張
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // 小於 768px 時顯示 1 張
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  }}
  style={{ width: '700px', height: '300px' }} // ✅ 寬度使用百分比以支援 RWD

    >
      <SwiperSlide className="box1">Slide 1</SwiperSlide>
      <SwiperSlide className="box2">Slide 2</SwiperSlide>
      <SwiperSlide className="box3">Slide 3</SwiperSlide>
      <SwiperSlide className="box4">Slide 4</SwiperSlide>
    </Swiper>
  );
}

export default SwiperTest;