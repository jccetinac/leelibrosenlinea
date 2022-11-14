import React from 'react';
import { HiOutlineCog } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Menu = ({ showSettings, setShowSettings }) => {
  return (
    <div className="container-menu">
      <Link to={`/`}>
        <h2>librosEnLinea</h2>
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
