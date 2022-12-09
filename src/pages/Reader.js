import React, { useState, useEffect } from 'react';

import Epub from '../Components/Epub';
import Ads from '../Components/Ads';
import Settings from '../Components/Settings';
import { useParams } from 'react-router-dom';
import BooksHook from '../Hooks/BooksHook';
import SettingsHook from '../Hooks/SettingsHook';

const Reader = () => {
  const { getBookById } = BooksHook();
  const [book, setBook] = useState({});
  const { settings } = SettingsHook();
  const { id } = useParams();

  useEffect(() => {
    const execute = async () => {
      // ese id creo que si lo tienes
      console.log('reader', id);
      const respuesta = await getBookById(id);
      setBook(respuesta);
      console.log(respuesta);
    };

    execute();
  }, []);

  return (
    <div>
      <div className="container-main">
        <div className="reader-container">
          {settings ? <Settings /> : ''}
          <Epub uri={book.uri} title={book.name} />
        </div>
        <Ads />
      </div>
      <Ads mobile />
    </div>
  );
};

export default Reader;
