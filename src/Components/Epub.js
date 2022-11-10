import React, { useState, useEffect, useRef } from 'react';
import { ReactReader, ReactReaderStyle } from 'react-reader';

const Epub = ({ uri, renditionRef, size }) => {
  // Set Page location
  const [location, setLocation] =
    localStorage.getItem('CurrentBook') == uri
      ? useState(JSON.parse(localStorage.CurrentPage))
      : useState(null);

  // Persist CurrentPage to local storage
  const current_book = localStorage.getItem('CurrentBook');

  const ownStyles = {
    ...ReactReaderStyle,
    readerArea: {
      ...ReactReaderStyle.readerArea,
    },
  };

  // And your own state logic to persist state

  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi);
    localStorage.setItem('CurrentPage', JSON.stringify(location));
  };

  const initialStyles = () => {
    ReactReaderStyle.arrow.background = 'green';
    ReactReaderStyle.readerArea.backgroundColor = '#fff';
    ReactReaderStyle.readerArea.color = '#fff';
  };

  useEffect(() => {
    console.log(ReactReaderStyle);
    initialStyles();
  }, []);

  return (
    <>
      <div className="reader">
        <ReactReader
          location={location}
          styles={ownStyles}
          locationChanged={locationChanged}
          url={uri}
          getRendition={(rendition) => {
            renditionRef.current = rendition;
            renditionRef.current.themes.fontSize(`${size}%`);
            // Custom Styles
            rendition.themes.register('custom', {
              img: {
                width: '100%',
              },
            });
            rendition.themes.select('custom');
          }}
        />
      </div>
    </>
  );
};

export default Epub;
