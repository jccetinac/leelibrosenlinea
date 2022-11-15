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
    const ownStyles = {
      ...ReactReaderStyle,
      readerArea: {
        ...ReactReaderStyle.readerArea,
      },
    };
    console.log(ownStyles);
    ownStyles.arrow.background = 'red';
    ownStyles.arrow.borderRadius = '100%';
    ownStyles.arrow.width = '32px';
    ownStyles.arrow.height = '32px';
    ownStyles.arrow.padding = '0px 0px';
    ownStyles.arrow.marginTop = '0';
    ownStyles.arrow.margin = '0 10px';
    ownStyles.arrow.display = 'flex';
    ownStyles.arrow.justifyContent = 'center';
    ownStyles.arrow.alignItems = 'center';
    ownStyles.arrow.fontSize = '32px';
    ownStyles.readerArea.backgroundColor = 'pink';
    ownStyles.readerArea.color = '#fff !important';
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
