import React, { useEffect } from 'react';

import DATA from '../Data/Data';
import { Link } from 'react-router-dom';
import BooksHook from '../Hooks/BooksHook';

const BookStore = () => {
  const UrlBase = 'https://zeektenka.github.io/files/';
  const { getItemsByCategory } = BooksHook();

  useEffect(() => {
    const execute = async () => {
      // ese id creo que si lo tienes
      console.log('aqui');
      const respuesta = await getItemsByCategory('zibKaBNAi48QvVO7cHC6');
      console.log(respuesta);
    };

    execute();
  }, []);

  return (
    <>
      <div className="list-books">
        {DATA.map((item) => {
          return (
            <div className="item">
              <Link to={`/book/${item.id}`}>
                <img className="portrait" src={item.portrait} />
                <p>{item.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BookStore;
