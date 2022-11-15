import React, { useEffect } from 'react';
import { ReactReader } from 'react-reader';
import ReaderHook from '../Hooks/ReaderHook';
import SettingsHook from '../Hooks/SettingsHook';

const Epub = ({ uri }) => {
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
    }
  }, [size]);

  return (
    <>
      <div className="reader">
        <ReactReader
          location={location}
          styles={initialStyles()}
          locationChanged={useLocation}
          url={uri}
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
