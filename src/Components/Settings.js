import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showSettings, setSize } from '../store/actions/videoActions';

import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';

const Epub = () => {
  const dispatch = useDispatch();

  const settingsShow = useSelector((state) => state.settings);
  const size = useSelector((state) => state.size);

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
                onClick={() => dispatch(setSize(Math.min(200, size - 10)))}
              >
                <HiChevronLeft color="grey" fontSize="1.4rem" />
              </button>
              <span className="value">{size}%</span>
              <button
                className="icon-btn"
                onClick={() => dispatch(setSize(Math.min(200, size + 10)))}
              >
                <HiChevronRight color="grey" fontSize="1.4rem" />
              </button>
            </div>
          </div>
        </div>
        <button
          className="close"
          onClick={() => {
            dispatch(showSettings(!settingsShow));
          }}
        >
          <HiX color="grey" fontSize="1.4rem" />
        </button>
      </div>
    </>
  );
};

export default Epub;
