'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SwiperPage from '../subcomponents/SwiperPage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SectionTwoswiper = () => {
  const techStack = [
    {
      title: 'React',
      img: '/images/react.png',
      text: '컴포넌트 기반의 효율적인 UI 개발',
    },
    {
      title: 'TypeScript',
      img: '/images/typescript.png',
      text: '타입 안정성과 더 나은 개발 경험',
    },
    {
      title: 'Nest.js',
      img: '/images/nest.png',
      text: '엔터프라이즈급 Node.js 프레임워크',
    },
    {
      title: 'Node.js',
      img: '/images/node.png',
      text: '서버 사이드 JavaScript 런타임',
    },
    {
      title: 'SQL',
      img: '/images/sql2.png',
      text: '관계형 데이터베이스 관리 시스템',
    },
  ];

  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {techStack.map((item, index) => (
          <SwiperSlide key={index}>
            <SwiperPage title={item.title} img={item.img} text={item.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionTwoswiper;
