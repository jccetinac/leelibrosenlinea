import React from 'react';

const Menu = ({ showSettings, setShowSettings }) => {
  return (
    <div className="container-menu">
      <h2>librosEnLinea</h2>
      <button
        onClick={() => {
          setShowSettings(!showSettings);
        }}
      >
        settings
      </button>
    </div>
  );
};

export default Menu;
