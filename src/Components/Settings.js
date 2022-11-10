import React, { useState, useEffect, useRef } from 'react';

import { HiOutlineCog, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Epub = ({ setSize, size }) => {
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
              onClick={() => setSize(Math.max(70, size - 10))}
            >
              <HiChevronLeft color="grey" fontSize="1.4rem" />
            </button>
            <span className="size">{size}%</span>
            <button
              className="icon-btn"
              onClick={() => setSize(Math.min(200, size + 10))}
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
