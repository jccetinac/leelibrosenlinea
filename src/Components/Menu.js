import React from 'react';
import { HiOutlineCog } from 'react-icons/hi';

const Menu = ({ showSettings, setShowSettings }) => {
  return (
    <div className="container-menu">
      <h2>librosEnLinea</h2>
      <button
        className="settings-btn"
        onClick={() => {
          setShowSettings(!showSettings);
        }}
      >
        <HiOutlineCog />
      </button>
    </div>
  );
};

export default Menu;
