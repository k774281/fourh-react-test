import React,{useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/style/Tab.scss';

function Tabs() {
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const cardData = [
    {
      id: 1,
      img: "https://example.com/img1.jpg",
      title: "2025 KT 4-H 韓臺四健青少...",
      date: "2025.11.12",
      description:
        "為推派優秀四健會會員赴韓國學習四健理念及農業新知，體驗生活文化...",
    },
    {
      id: 2,
      img: "https://example.com/img2.jpg",
      title: "2025 農業青年交流活動",
      date: "2025.10.05",
      description:
        "促進青年農民之間的交流與技術分享，共同推動農業永續發展。",
    },
    {
      id: 3,
      img: "https://example.com/img3.jpg",
      title: "四健會年度成果展",
      date: "2025.09.20",
      description: "展示全國四健會員一年來的努力成果與創新計畫。",
    },
    {
      id: 4,
      img: "https://example.com/img3.jpg",
      title: "四健會年度成果展",
      date: "2025.09.20",
      description: "展示全國四健會員一年來的努力成果與創新計畫。",
    },
    {
      id: 5,
      img: "https://example.com/img3.jpg",
      title: "四健會年度成果展",
      date: "2025.09.20",
      description: "展示全國四健會員一年來的努力成果與創新計畫。",
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
    swiperRef.current.slideTo(index);
  }

  const slideRepeat = Array(3).fill(0);
  return (
    <div className="tabs-container">
      <div className="tabs">
        {[ "tab1", "tab2", "tab3" ].map((tab,index) => (
          <button key={index} className={`tab-btn ${activeTab === index ? 'active' : ''}`} onClick={() => handleTabClick(index)}>{tab}</button>
        ))}
        
      </div>
      <Swiper onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => (setActiveTab(swiper.activeIndex))}>
          
        {slideRepeat.map((_, index)=>(
          <SwiperSlide>
            <div className="slide-content">
              <div className="grid-card">
                {cardData.map( (card) => {
                  return (
                    <div key={card.id} className='card-item'>
                      <img src={card.img} />
                      <div className="text">
                        <h2 className='title'>{card.title}</h2>
                        <p className='date'>{card.date}</p>
                        <p>{card.description}</p>
                        <button className='btn'>MORE</button>
                      </div>
                    </div>
                  )
                } )}           
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  )
}

export default Tabs