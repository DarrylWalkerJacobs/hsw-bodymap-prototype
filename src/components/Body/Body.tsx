import React from 'react';
import ImageHotspots from 'react-image-hotspots';

import body from '../../assets/body.png';
import './Body.scss';

interface BodyProps {
  setActiveTable: React.Dispatch<React.SetStateAction<string | null>>;
}

function Body({ setActiveTable }: BodyProps) {
  const generateTooltip = (text: string) => {
    return (
      <div className="ratio ratio-1x1">
        <button
          className="btn btn-primary rounded-circle"
          onClick={() => setActiveTable(text)}
        >
          <span className="visually-hidden">{text}</span>
        </button>
      </div>
    );
  };

  const tooltips = [
    {
      x: 45,
      y: 5,
      text: 'head'
    },
    {
      x: 72,
      y: 35,
      text: 'arm'
    },
    {
      x: 30,
      y: 70,
      text: 'leg'
    }
  ];

  return (
    <div className="body">
      <ImageHotspots
        hideFullscreenControl={true}
        hideZoomControls={true}
        hideMinimap={true}
        src={body}
        background="transparent"
        alt="Sample image"
        hotspots={tooltips.map(tooltip => {
          const { x, y, text } = tooltip;
          return { x, y, content: generateTooltip(text) };
        })}
      />
    </div>
  );
}

export default Body;
