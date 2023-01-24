import React, { useEffect } from 'react';
import { ReactReader } from 'react-reader';
import ReaderHook from '../Hooks/ReaderHook';
import SettingsHook from '../Hooks/SettingsHook';

const Epub = ({ uri, title }) => {
  const {
    initialStyles,
    bindReference,
    bookRenderReference,
    size,
    location,
    useLocation,
  } = ReaderHook();

  const { modeColor } = SettingsHook();

  useEffect(() => {
    if (bookRenderReference.current) {
      bookRenderReference.current.themes.fontSize(`${size}%`);
      localStorage.setItem('fontSize', JSON.stringify(size));
      const backGroundSelected = modeColor === 'light' ? 'white' : 'black';
      const fontColorSelected = modeColor === 'light' ? 'black' : 'white';
      bookRenderReference.current.themes.register('custom', {
        '*': {
          color: 'gray',
          background: backGroundSelected,
        },
        p: {
          color: fontColorSelected,
        },
      });
      bookRenderReference.current.themes.select('custom');
    }
  }, [size, modeColor]);

  return (
    <>
      <div className={`reader ${modeColor}`}>
        <ReactReader
          location={location}
          styles={initialStyles()}
          locationChanged={useLocation}
          url={uri}
          title={title}
          getRendition={bindReference}
          epubInitOptions={{
            openAs: 'epub',
          }}
        />
      </div>
    </>
  );
};

export default Epub;
