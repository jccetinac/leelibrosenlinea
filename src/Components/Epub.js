import React, { useState, useEffect, useRef } from 'react';
import { ReactReader } from 'react-reader';
import ReaderHook from '../Hooks/ReaderHook';

const Epub = ({ uri }) => {
  const { initialStyles, bindReference, bookRenderReference, size } =
    ReaderHook();

  // Set Page location

  const [location, setLocation] = useState(
    localStorage.getItem('CurrentPage')
      ? JSON.parse(localStorage.CurrentPage)
      : null
  );

  const locationChanged = (epubcifi) => {
    setLocation(epubcifi);
    localStorage.setItem('CurrentPage', JSON.stringify(location));
  };

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
          locationChanged={locationChanged}
          url={uri}
          getRendition={bindReference}
        />
      </div>
    </>
  );
};

export default Epub;
