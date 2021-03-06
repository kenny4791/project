import React from 'react';
import cn from 'classnames';

import Paragraph from './components/Paragraph';
import MusicTrigger from './components/MusicTrigger';

import part1 from './content/1-1';

const Chapter1 = () => {
  const insideClass = cn(
    'col-xs',
    'col-sm',
    'col-md',
    'col-lg',
  );
  return (
    <div className="row">
      <div className={insideClass}>
        <Paragraph
          text={"第一章"}
          textAlign="center"
          verticalAlign="middle"
          height="100vh"
          fontSize="3em"
        />
        <Paragraph
          text={"（滾到這裡開始有音效）"}
          textAlign="center"
          fontSize="1em"
        />
        <MusicTrigger
          musicSrc="https://s3-ap-southeast-1.amazonaws.com/novel-videos/wave.mp3"
          volume={0.5}
          playing={true}
          fadeInDUration={10000}
          soundRemainPx="-200px"
        />
        <Paragraph
          text={part1}
          fontSize="1em"
        />
      </div>
    </div>
  );
};

export default Chapter1;
