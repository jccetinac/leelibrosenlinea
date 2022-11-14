import React from 'react';
import DATA from '../Data/Data';
import { Link } from 'react-router-dom';

const BookStore = () => {
  const UrlBase = 'https://zeektenka.github.io/files/';

  return (
    <div className="list-books">
      {DATA.map((item) => {
        return <Link to={`/book/${item.name}`}>{item.name}</Link>;
      })}
    </div>
  );
};

export default BookStore;
