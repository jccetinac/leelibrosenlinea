import React, { useState, useEffect, useRef } from 'react';
import { ReactReader, ReactReaderStyle } from 'react-reader';
import Settings from './Settings';

const Epub = ({ uri }) => {
  // Set Page location
  const [location, setLocation] =
    localStorage.getItem('CurrentBook') == uri
      ? useState(JSON.parse(localStorage.CurrentPage))
      : useState(null);

  // Persist CurrentPage to local storage
  const current_book = localStorage.getItem('CurrentBook');

  // Settings Tile Stuff
  const [settingsOpen, setSettingOpen] = useState(false);
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

  // Font size stuff
  const [size, setSize] = localStorage.fontSize
    ? useState(JSON.parse(localStorage.fontSize))
    : useState(100);
  const renditionRef = useRef(null);
  const changeSize = (newSize) => {
    setSize(newSize);
  };
  useEffect(() => {
    if (renditionRef.current) {
      renditionRef.current.themes.fontSize(`${size}%`);
      localStorage.setItem('fontSize', JSON.stringify(size));
    }
  }, [size]);

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
      <Settings changeSize={changeSize} size={size} />
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
