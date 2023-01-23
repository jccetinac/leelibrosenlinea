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
      try {
        const respuesta = await getBooks();
        setBooks(respuesta);
        console.log(respuesta);
      } catch (e) {
        console.log(e);
      }
    };

    execute();
  }, []);

  return (
    <>
      <div className="list-books">
        {books?.map((item) => {
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
