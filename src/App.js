import React, { useEffect, useState, useRef } from 'react';
import './Styles/App.scss';
import Epub from './Components/Epub';
import Ads from './Components/Ads';
import Menu from './Components/Menu';
import Settings from './Components/Settings';

export default function App() {
  const [size, setSize] = useState(
    localStorage.fontSize ? JSON.parse(localStorage.fontSize) : 100
  );
  const [showSettings, setShowSettings] = useState(true);
  const renditionRef = useRef(null);
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
          {showSettings === true && <Settings setSize={setSize} size={size} />}
          <Epub
            uri={'https://jccetinac.github.io/librosenlinea/sherlock.epub'}
            renditionRef={renditionRef}
            size={size}
          />
        </div>
        <Ads />
      </div>
    </div>
  );
}
