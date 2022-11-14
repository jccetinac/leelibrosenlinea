import React from 'react';
import { HiOutlineCog } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showSettings } from '../store/actions/videoActions';
import { useParams } from 'react-router-dom';

const Menu = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const { id } = useParams();

  return (
    <div className="container-menu">
      <Link to={`/`} className="title">
        LibrosEnLinea
      </Link>

      {id ? (
        <button
          className="settings-btn"
          onClick={() => {
            dispatch(showSettings(!settings));
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
