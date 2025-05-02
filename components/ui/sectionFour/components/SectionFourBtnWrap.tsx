import React from 'react';
import SectionFourBtn from '../subcomponents/SectionFourBtn';

const SectionFourBtnWrap = () => {
  return (
    <div className="SectionFourBtnWrap">
      <SectionFourBtn link={'/dashboard/register'} text={'글쓰기'} />
      <SectionFourBtn link={'/dashboard/guestbook'} text={'전체보기'} />
    </div>
  );
};

export default SectionFourBtnWrap;
