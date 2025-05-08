import React from 'react';
import Card from '../subcomponents/Card';
import '../../../../style/Section3.css';
import { MainText } from '@/components/common/components/MainText';

const SectionThreeIndex = () => {
  return (
    <div className="sectionThree">
      <MainText text="PortFolio" />
      <div className="cardWrapper">
        <Card
          title="Twosome Place"
          text="투썸플레이스를 모티브로 한 반응형 카페 웹사이트입니다."
          tech={['React', 'Next.js', 'Node.js']}
          link="https://project-twosome2.vercel.app/"
          code="https://github.com/juntae-123/project_twosome"
          pageNum="1"
        />

        <Card
          title="Hansam Food"
          text="한삼식품 소개 및 제품 정보를 담은 기업형 홈페이지 클론 프로젝트입니다."
          tech={['JavaScript', 'HTML', 'GSAP', 'CSS']}
          link="https://calburok.github.io/hansamhome/"
          code="https://github.com/calburok/hansamhome"
          pageNum="2"
        />

        <Card
          title="Airbnb Clone"
          text="Airbnb를 클론한 숙소 예약 웹사이트입니다. 지도와 검색 기능 포함."
          tech={['JavaScript', 'HTML', 'CSS']}
          link="https://khj3535.github.io/airbnb/"
          code="https://github.com/khj3535/airbnb"
          pageNum="3"
        />

        <Card
          title="강남언니 클론"
          text="성형 정보 제공 플랫폼 '강남언니'를 모티브로 한 팀 프로젝트입니다."
          tech={['HTML', 'CSS']}
          link="https://khj3535.github.io/team_portfolio/index.html"
          code="https://github.com/khj3535/team_portfolio"
          pageNum="4"
        />
      </div>
    </div>
  );
};

export default SectionThreeIndex;
