import React from 'react';
import SettingsHook from '../Hooks/SettingsHook';

import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';

const Epub = () => {
  const {
    incressSizeFont,
    decressSizeFont,
    size,
    showSettings,
    switchShowSettings,
    switchModeColor,
    modeColor,
  } = SettingsHook();

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
                onClick={() => {
                  decressSizeFont();
                }}
              >
                <HiChevronLeft color="grey" fontSize="1.4rem" />
              </button>
              <span className="value">{size}%</span>
              <button
                className="icon-btn"
                onClick={() => {
                  incressSizeFont();
                }}
              >
                <HiChevronRight color="grey" fontSize="1.4rem" />
              </button>
            </div>
          </div>
        </div>

        <div className="settings">
          <div className="property">
            <button
              onClick={() => {
                switchModeColor('light');
              }}
            >
              light
            </button>
            <button
              onClick={() => {
                switchModeColor('dark');
              }}
            >
              Dark
            </button>
          </div>
        </div>
        <button
          className="close"
          onClick={() => {
            switchShowSettings();
          }}
        >
          <HiX color="grey" fontSize="1.4rem" />
        </button>
      </div>
    </>
  );
};

export default Epub;
