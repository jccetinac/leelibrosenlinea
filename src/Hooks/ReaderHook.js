import React, { useRef } from 'react';
import { ReactReaderStyle } from 'react-reader';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../store/actions/videoActions';

const ReaderHook = () => {
  //const dispatch = useDispatch();
  const dispatch = useDispatch();

  const size = useSelector((state) => state.size);
  const location = useSelector((state) => state.location);

  const bookRenderReference = useRef(null);
  const bindReference = (BookProperties) => {
    bookRenderReference.current = BookProperties;
    bookRenderReference.current.themes.fontSize(`${size}%`);
    bookRenderReference.current.themes.register('custom', {
      div: {
        background: 'skyblue',
      },
      p: {
        'font-family': 'Helvetica, sans-serif',
        'font-weight': '400',
        color: 'red',
      },
    });
    bookRenderReference.current.themes.select('custom');
  };

  const initialStyles = () => {
    const { readerArea, tocAreaButton, tocArea, arrow } = ReactReaderStyle;

    const ownStyles = {
      ...ReactReaderStyle,
      readerArea: {
        ...readerArea,
        backgroundColor: 'pink',
        transition: 'all .3s ease',
      },
      tocAreaButton: {
        ...tocAreaButton,
        borderBottom: '1px solid #efefef',
        color: 'skyblue',
      },
      tocArea: {
        ...tocArea,
        backgroundColor: '#333',
      },
      arrow: {
        ...arrow,
        background: 'red',
        borderRadius: '100%',
        width: '32px',
        height: '32px',
        padding: '0px 0px',
        marginTop: '0',
        margin: '0 10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '32px',
      },
    };

    return ownStyles;
  };

  const useLocation = (val) => {
    if (val) {
      localStorage.setItem('CurrentPage', JSON.stringify(val));
      dispatch(setLocation(val));
    }
  };

  return {
    initialStyles,
    bookRenderReference,
    bindReference,
    size,
    useLocation,
    location,
  };
};

export default ReaderHook;
