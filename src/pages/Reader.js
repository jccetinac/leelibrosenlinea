import React, { useEffect, useState, useRef } from 'react';
import Epub from '../Components/Epub';
import Ads from '../Components/Ads';
import Menu from '../Components/Menu';
import Settings from '../Components/Settings';
import { useParams } from 'react-router-dom';
import DATA from '../Data/Data';

export default function Reader() {
  const { name } = useParams();
  console.log(name);

  const [size, setSize] = useState(
    localStorage.fontSize ? JSON.parse(localStorage.fontSize) : 100
  );

  const [showSettings, setShowSettings] = useState(false);
  const renditionRef = useRef(null);

  const { uri } = DATA.find((book) => book.name === name);
  console.log(uri);

  useEffect(() => {
    if (renditionRef.current) {
      renditionRef.current.themes.fontSize(`${size}%`);
      localStorage.setItem('fontSize', JSON.stringify(size));
    }
  }, [size]);

  return (
    <div>
      <Menu showSettings={showSettings} setShowSettings={setShowSettings} />
      <div className="container-main">
        <div className="reader-container">
          {showSettings === true && (
            <Settings
              setSize={setSize}
              size={size}
              setShowSettings={setShowSettings}
            />
          )}
          <Epub uri={uri} renditionRef={renditionRef} size={size} />
        </div>
        <Ads />
      </div>
      <Ads mobile />
    </div>
  );
}
