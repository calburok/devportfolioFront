'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'; // next/image 임포트

gsap.registerPlugin(ScrollTrigger);

const SectionOneImgs = () => {
  const frogRef = useRef<HTMLImageElement | null>(null);
  const birusRef = useRef<HTMLImageElement | null>(null);
  const alienRef = useRef<HTMLImageElement | null>(null);
  const overRef = useRef<HTMLImageElement | null>(null);
  const peachRef = useRef<HTMLImageElement | null>(null);
  const imgBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!imgBoxRef.current) return;

    const introAnimations = [
      { ref: frogRef, delay: 0, y: -30, rotation: -4 },
      { ref: birusRef, delay: 0.2, y: 30, rotation: 3 },
      { ref: peachRef, delay: 0.4, y: -25, rotation: 2 },
      { ref: alienRef, delay: 0.6, y: 25, rotation: -3 },
      { ref: overRef, delay: 0.8, y: 20, rotation: 1 },
    ];

    introAnimations.forEach(({ ref, delay, y, rotation }) => {
      if (!ref.current) return;
      gsap.set(ref.current, { opacity: 1 });
      gsap.from(ref.current, {
        opacity: 0,
        y,
        rotation: ref === frogRef ? 19 : rotation, // frog는 19도
        duration: 0.8,
        ease: 'power2.out',
        delay,
      });
    });

    if (frogRef.current) {
      gsap.fromTo(
        frogRef.current,
        { scale: 1, rotation: 19 }, // frog는 19도에서 시작
        {
          y: 300,
          rotation: -2,
          scale: 2,
          overwrite: 'auto',
          scrollTrigger: {
            trigger: imgBoxRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.7,
            markers: true,
          },
        }
      );
    }

    const scrollAnimations = [
      { ref: birusRef, y: 120, x: 80, scale: 1, rotation: 100 },
      { ref: alienRef, y: -580, rotation: 100 }, // alien이 추가 회전할 값
      { ref: overRef, y: 130, scale: 1, rotation: 0 },
      { ref: peachRef, y: 250, x: 100, scale: 0.8, rotation: 300 },
    ];

    scrollAnimations.forEach(({ ref, y, x = 0, scale = 1, rotation = 0 }) => {
      if (!ref.current) return;

      gsap.fromTo(
        ref.current,
        {
          y: 0,
          x: 0,
          scale: 1,
          rotation: ref === alienRef ? 29 : 0, // alien만 29도에서 시작
        },
        {
          y,
          x,
          scale,
          rotation,
          overwrite: 'auto',
          scrollTrigger: {
            trigger: imgBoxRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.7,
            markers: true,
          },
        }
      );
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={imgBoxRef} className="sectionOneImgBox">
      <Image
        ref={frogRef}
        className="sectionOneImgFrog"
        src="/images/frog.png"
        alt="frog"
        width={500} // 원하는 너비 설정
        height={300} // 원하는 높이 설정
      />
      <Image
        ref={birusRef}
        className="sectionOneImgBirus"
        src="/images/article2.png"
        alt="birus"
        width={500}
        height={300}
      />
      <Image
        ref={peachRef}
        className="sectionOneImgPeach"
        src="/images/peach.png"
        alt="peach"
        width={500}
        height={300}
      />
      <Image
        ref={alienRef}
        className="sectionOneImgAlien"
        src="/images/moster.png"
        alt="alien"
        width={500}
        height={300}
      />
      <Image
        ref={overRef}
        className="sectionOneImgOver"
        src="/images/overwatch.png"
        alt="overwatch"
        width={500}
        height={300}
      />
    </div>
  );
};

export default SectionOneImgs;
