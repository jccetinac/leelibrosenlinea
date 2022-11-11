import React, { useState, useEffect, useRef } from 'react';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Epub = ({ setSize, size }) => {
  const [settingsOpen, setSettingOpen] = useState(false);

  return (
    <>
      <div className="settings-container">
        <div className="settings">
          <div className="property">
            <div className="name">
              <p>Font Size</p>
            </div>
            <div className="controls">
              <button
                className="icon-btn"
                onClick={() => setSize(Math.max(70, size - 10))}
              >
                <HiChevronLeft color="grey" fontSize="1.4rem" />
              </button>
              <span className="value">{size}%</span>
              <button
                className="icon-btn"
                onClick={() => setSize(Math.min(200, size + 10))}
              >
                <HiChevronRight color="grey" fontSize="1.4rem" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Epub;
