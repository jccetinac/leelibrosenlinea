import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store/actions/videoActions';
const FormView = () => {
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          dispatch(changeName(e.target.value));
        }}
      />
    </>
  );
};

export default FormView;
