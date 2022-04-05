import ImageHotspots from '@jacobsdigitalfactory/react-image-hotspots';
import clsx from 'clsx';
import React from 'react';

import body from '../../assets/body.png';
import './Body.scss';

interface BodyProps {
  activePart?: string | null;
  parts: { x: number; y: number; text: string }[];
  setActivePart: React.Dispatch<React.SetStateAction<string | null>>;
}

function Body({ activePart, setActivePart, parts }: BodyProps) {
  const generateTooltip = (text: string) => {
    return (
      <div className="ratio ratio-1x1">
        <button
          className={clsx({
            btn: true,
            'btn-danger': activePart === text,
            'btn-primary': activePart !== text,
            'rounded-circle': true
          })}
          onClick={() => setActivePart(text)}
          onMouseEnter={() => setActivePart(text)}
        >
          <span className="visually-hidden">{text}</span>
        </button>
      </div>
    );
  };

  return (
    <div className="body">
      <ImageHotspots
        hideFullscreenControl={true}
        hideZoomControls={true}
        hideMinimap={true}
        src={body}
        background="transparent"
        alt="Sample image"
        hotspots={parts.map(part => {
          const { x, y, text } = part;
          return { x, y, content: generateTooltip(text) };
        })}
      />
    </div>
  );
}

export default Body;
