import React, { useEffect } from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';

//Import Pages and Components
import HomePage from './Pages/HomePage';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';

import DATA from './Data Base/DATA';
import Epub from './Components/Epub';

export default function App() {
  const UrlBase = 'https://zeektenka.github.io/files/';

  return (
    <div>
      <h2>libros en Linea</h2>
      <div>controles</div>
      <Epub uri={'https://jccetinac.github.io/librosenlinea/sherlock.epub'} />
    </div>
  );
}
