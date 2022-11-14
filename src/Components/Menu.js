import React from 'react';
import { HiOutlineCog } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Menu = ({ showSettings, setShowSettings }) => {
  const video = useSelector((state) => state.file);

  return (
    <div className="container-menu">
      <Link to={`/`}>
        <h1>state counter: {video}</h1>
      </Link>
      <button
        className="settings-btn"
        onClick={() => {
          setShowSettings(!showSettings);
        }}
      >
        <HiOutlineCog fontSize="1.4rem" />
      </button>
    </div>
  );
};

export default Menu;
