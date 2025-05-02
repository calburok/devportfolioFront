'use client';

import { SectionFourIndex } from '@/components/ui/sectionFour/components/SectionFourIndex';
import IndexSectionOne from '@/components/ui/sectionOne/component/IndexSection';
import SectionThreeIndex from '@/components/ui/sectionThree/components/SectionThreeIndex';
import SectionTwoIndex from '@/components/ui/sectionTwo/component/SectionTwoIndex';

export default function Home() {
  return (
    <>
      <IndexSectionOne />
      <SectionTwoIndex />
      <SectionThreeIndex />
      <SectionFourIndex />
    </>
  );
}
