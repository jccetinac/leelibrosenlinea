import React from 'react';

import Epub from '../Components/Epub';
import Ads from '../Components/Ads';
import Settings from '../Components/Settings';
import { useParams } from 'react-router-dom';
import DATA from '../Data/Data';

import SettingsHook from '../Hooks/SettingsHook';

const Reader = () => {
  const { size, settings } = SettingsHook();

  const { id } = useParams();

  const { uri } = DATA.find((book) => book.id === id);

  return (
    <div>
      <div className="container-main">
        <div className="reader-container">
          {settings ? <Settings /> : ''}
          <Epub uri={uri} />
        </div>
        <Ads />
      </div>
      <Ads mobile />
    </div>
  );
};

export default Reader;
