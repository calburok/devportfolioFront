import Link from 'next/link';
import React from 'react';
import '../../../../style/Section3.css';
import { MdArrowRightAlt } from 'react-icons/md';

const Card = ({
  title,
  text,
  tech,
  link,
  code,
  pageNum,
}: {
  title: string;
  text: string;
  tech: string[];
  link: string;
  code: string;
  pageNum: string;
}) => {
  return (
    <div className="sectionThreeCard ">
      <div className="cardInner">
        <h1 className="cardTitle sectionThreeColor">{title}</h1>
        <p className="cardText sectionThreeColor">{text}</p>
        <div className="techWrap ">
          {tech.map((v, i) => (
            <div className="techbtn " key={i}>
              {v}
            </div>
          ))}
        </div>

        <div className="pageNum sectionThreeColor">{pageNum}</div>
        <div className="btnWrap sectionThreeColor">
          <Link href={link} className="viewBtn sectionThreeColor">
            VIEW SITE <MdArrowRightAlt className="arrowIcon" />
          </Link>
          <Link href={code} className="codeBtn sectionThreeColor">
            CODE REVIEW
            <MdArrowRightAlt className="arrowIcon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
