import React from 'react';

import SectionTwoswiper from './SectionTwoswiper';
import '../../../../style/Section2.css';
import SectionMainText from './SectionTwoMainText';

const SectionTwoIndex = () => {
  return (
    <div className="SectionTwoIndex">
      <SectionMainText text={'Tech Stack'} />
      <SectionTwoswiper />
    </div>
  );
};

export default SectionTwoIndex;
