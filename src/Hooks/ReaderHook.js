import React, { useRef, useEffect } from 'react';
import { ReactReaderStyle } from 'react-reader';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../store/actions/readerActions';

const ReaderHook = () => {
  const dispatch = useDispatch();
  const size = useSelector((state) => state.size);
  const modeColor = useSelector((state) => state.modeColor);
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
        color: 'purple',
      },
    });
    bookRenderReference.current.themes.select('custom');
  };

  const initialStyles = () => {
    const { readerArea, tocAreaButton, tocArea, arrow, tocButtonBar } =
      ReactReaderStyle;

    const ownStyles = {
      ...ReactReaderStyle,
      readerArea: {
        ...readerArea,
        backgroundColor: modeColor === 'light' ? 'skyblue' : 'pink',
        transition: 'all .3s ease',
        color: modeColor === 'light' ? 'red' : 'yellow',
      },
      tocAreaButton: {
        ...tocAreaButton,
        borderBottom: '1px solid #efefef',
        color: 'skyblue',
      },
      tocArea: {
        ...tocArea,
        backgroundColor: 'red',
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
      tocButtonBar: {
        ...tocButtonBar,
        background: 'red',
      },
    };

    return ownStyles;
  };

  useEffect(() => {
    initialStyles();
  }, [modeColor]);

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
