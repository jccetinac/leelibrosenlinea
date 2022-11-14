import React, { useEffect, useState, useRef } from 'react';

import DATA from '../Data/Data';
import { Link } from 'react-router-dom';
import Menu from '../Components/Menu';
import FormView from '../Components/FormView';
const BookStore = () => {
  const [showSettings, setShowSettings] = useState(false);

  const UrlBase = 'https://zeektenka.github.io/files/';

  return (
    <>
      <Menu showSettings={showSettings} setShowSettings={setShowSettings} />
      <FormView/>
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
