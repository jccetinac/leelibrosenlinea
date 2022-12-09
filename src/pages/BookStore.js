import React, { useEffect, useState } from 'react';

import DATA from '../Data/Data';
import { Link } from 'react-router-dom';
import BooksHook from '../Hooks/BooksHook';

const BookStore = () => {
  const UrlBase = 'https://zeektenka.github.io/files/';
  const { getBooks } = BooksHook();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const execute = async () => {
      // ese id creo que si lo tienes
      console.log('aqui');
      const respuesta = await getBooks();
      setBooks(respuesta);
      console.log(respuesta);
    };

    execute();
  }, []);

  return (
    <>
      <div className="list-books">
        {books.map((item) => {
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
