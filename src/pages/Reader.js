import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import Epub from '../Components/Epub';
import Ads from '../Components/Ads';
import Settings from '../Components/Settings';
import { useParams } from 'react-router-dom';
import DATA from '../Data/Data';

export default function Reader() {
  const settingsShow = useSelector((state) => state.settings);

  const { id } = useParams();

  const [size, setSize] = useState(
    localStorage.fontSize ? JSON.parse(localStorage.fontSize) : 100
  );

  const renditionRef = useRef(null);

  const { uri } = DATA.find((book) => book.id === id);

  useEffect(() => {
    if (renditionRef.current) {
      renditionRef.current.themes.fontSize(`${size}%`);
      localStorage.setItem('fontSize', JSON.stringify(size));
    }
  }, [size]);

  return (
    <div>
      <div className="container-main">
        <div className="reader-container">
          {settingsShow === true && <Settings setSize={setSize} size={size} />}
          <Epub uri={uri} renditionRef={renditionRef} size={size} />
        </div>
        <Ads />
      </div>
      <Ads mobile />
    </div>
  );
}
