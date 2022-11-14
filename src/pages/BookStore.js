import React from 'react';

import DATA from '../Data/Data';
import { Link } from 'react-router-dom';

const BookStore = () => {
  const UrlBase = 'https://zeektenka.github.io/files/';

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
