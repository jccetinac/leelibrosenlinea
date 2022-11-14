import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeVideo } from '../store/actions/videoActions';
const FormView = () => {
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          dispatch(changeVideo(e.target.value));
        }}
      />
    </>
  );
};

export default FormView;
