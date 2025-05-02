import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const SwiperPage = ({
  title,
  img,
  text,
}: {
  title: string;
  img: string;
  text: string;
}) => {
  return (
    <motion.div
      className="swiperPage"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="swiperPage__image-container">
        <Image
          width={500}
          height={300}
          src={img}
          alt={text}
          className="swiperPage__image"
        />
      </div>
      <div className="swiperPage__content">
        <h3 className="swiperPage__title">{title}</h3>
        <p className="swiperPage__text">{text}</p>
      </div>
    </motion.div>
  );
};

export default SwiperPage;
