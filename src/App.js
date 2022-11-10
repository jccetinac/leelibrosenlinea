import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import Epub from './Components/Epub';
import Ads from './Components/Ads';
import Menu from './Components/Menu';
import Settings from './Components/Settings';

export default function App() {
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

  return (
    <div>
      <Menu />
      <div className="container-main">
        <div className="reader-container">
          <Settings setSize={setSize} size={size} />
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
