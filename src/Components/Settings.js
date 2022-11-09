import React, { useState, useEffect, useRef } from 'react';
import { ReactReader, ReactReaderStyle } from 'react-reader';
import { HiOutlineCog, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// If confused ,Read the Docs https://github.com/gerhardsletten/react-reader#add--adjust-custom-css-for-the-epub-html

const Epub = ({ changeSize, size }) => {
  // Settings Tile Stuff
  const [settingsOpen, setSettingOpen] = useState(false);

  return (
    <>
      <div className="settings">
        <button
          className="icon-btn"
          onClick={() => setSettingOpen(!settingsOpen)}
        >
          <HiOutlineCog
            color={settingsOpen ? 'orange' : 'grey'}
            fontSize="1.4rem"
          />
        </button>
        <div
          id="settings_container"
          style={{ display: settingsOpen ? 'flex' : 'none' }}
        >
          <p className="small-title">Font Size</p>
          <div className="fontsize_change_div">
            <button
              className="icon-btn"
              onClick={() => changeSize(Math.max(70, size - 10))}
            >
              <HiChevronLeft color="grey" fontSize="1.4rem" />
            </button>
            <span className="size">{size}%</span>
            <button
              className="icon-btn"
              onClick={() => changeSize(Math.min(200, size + 10))}
            >
              <HiChevronRight color="grey" fontSize="1.4rem" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Epub;
