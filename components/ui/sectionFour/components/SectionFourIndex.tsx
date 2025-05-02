import React from 'react';
import { SectionFourMainText } from '../subcomponents/SectionFourMainText';
import { SectionFourCardWrap } from './SectionFourCardWrap';
import Link from 'next/link';
import SectionFourBtnWrap from './SectionFourBtnWrap';
import '../../../../style/Section4.css';

export const SectionFourIndex = () => {
  return (
    <>
      <div className="SectionFourLayout">
        <Link href={`/dashboard/register`}>
          <SectionFourMainText text={'GuestBook'} />
        </Link>
        <SectionFourCardWrap />
        <div className="SectionFourBtnLayout">
          <SectionFourBtnWrap />
        </div>
      </div>
    </>
  );
};
