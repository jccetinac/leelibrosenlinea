import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux';

import Epub from '../Components/Epub';
import Ads from '../Components/Ads';
import Settings from '../Components/Settings';
import { useParams } from 'react-router-dom';
import DATA from '../Data/Data';

import SettingsHook from '../Hooks/SettingsHook';

const Reader = () => {
  const { size, settings } = SettingsHook();

  const { id } = useParams();

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
          {settings ? <Settings /> : ''}
          <Epub uri={uri} renditionRef={renditionRef} />
        </div>
        <Ads />
      </div>
      <Ads mobile />
    </div>
  );
};

export default Reader;
