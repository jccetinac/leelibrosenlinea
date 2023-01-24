import React from 'react';
import { HiOutlineCog } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import SettingsHook from '../Hooks/SettingsHook';

const Menu = () => {
  const { id } = useParams();
  const { switchShowSettings, modeColor } = SettingsHook();

  return (
    <div className={`container-menu container-menu_${modeColor}`}>
      <Link to={`/`} className="title">
        LibrosEnLinea
      </Link>

      {id ? (
        <button
          className="settings-btn"
          onClick={() => {
            switchShowSettings();
          }}
        >
          <HiOutlineCog fontSize="1.4rem" />
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default Menu;
