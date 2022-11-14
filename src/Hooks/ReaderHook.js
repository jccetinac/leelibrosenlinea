import React, { useRef } from 'react';
import { ReactReaderStyle } from 'react-reader';

import { useSelector } from 'react-redux';

const ReaderHook = () => {
  //const dispatch = useDispatch();
  const size = useSelector((state) => state.size);

  const bookRenderReference = useRef(null);
  const bindReference = (BookProperties) => {
    bookRenderReference.current = BookProperties;
    bookRenderReference.current.themes.select('custom');
    bookRenderReference.current.themes.fontSize(`${size}%`);
  };

  const initialStyles = () => {
    const ownStyles = {
      ...ReactReaderStyle,
      readerArea: {
        ...ReactReaderStyle.readerArea,
      },
    };
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
    ownStyles.readerArea.color = '#fff';
    return ownStyles;
  };

  return {
    initialStyles,
    bookRenderReference,
    bindReference,
    size,
  };
};

export default ReaderHook;
