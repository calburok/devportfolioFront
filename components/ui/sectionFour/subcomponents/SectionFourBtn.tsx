import Link from 'next/link';
import React from 'react';
import '../../../../style/Section4.css';

const SectionFourBtn = ({ link, text }: { link: string; text: string }) => {
  return (
    <div>
      <Link href={link} className="SectionFourBtn">
        {text}
      </Link>
    </div>
  );
};

export default SectionFourBtn;
