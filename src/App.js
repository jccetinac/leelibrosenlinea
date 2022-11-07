import React, { useEffect } from 'react';
import './style.css';
import Epub from './Components/Epub';
import Ads from './Components/Ads';
import Menu from './Components/Menu';

export default function App() {
  return (
    <div>
      <Menu />
      <div className="container-main">
        <div className="reader-container">
          <Epub
            uri={'https://jccetinac.github.io/librosenlinea/sherlock.epub'}
          />
        </div>
        <Ads />
      </div>
    </div>
  );
}
