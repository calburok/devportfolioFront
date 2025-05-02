'use client';
import React, { useEffect, useRef } from 'react';
import SubText from '../subComponent/SubText';
import SubTextWhite from '../subComponent/SubTextWhite';
import '../../../../style/Section1.css';
import gsap from 'gsap';

const SectionOneTexts = () => {
  const textWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textWrapRef.current) return;

    const q = gsap.utils.selector(textWrapRef);
    const tl = gsap.timeline();

    tl.from(q('.textItem'), {
      opacity: 0,
      y: 100,
      z: -400,
      scale: 0.4,
      rotationY: 100,
      transformPerspective: 1200,
      transformOrigin: 'center center',
      duration: 1.2,
      ease: 'power4.out',
      stagger: 0.15,
    });
  }, []);

  return (
    <article ref={textWrapRef} className="sectionOneTextWrap">
      <SubText text="Challenge" />
      <SubText text="Positive" />
      <SubText text="optimistic" />
      <SubText text="adventurer" />
      <SubText text="Creative" />
      <SubText text="cooperation" />
      <SubText text="laughs easily" />
      <SubText text="faithful" />
      <SubText text="responsible" />
      <SubTextWhite margin={50} text="창조적이고 도전을 즐기는" />
      <SubTextWhite margin={0} text="UI 개발자" />
    </article>
  );
};

export default SectionOneTexts;
