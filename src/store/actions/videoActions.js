const CHANGENAME = 'CHANGENAME';
const SHOWSETTINGS = 'SHOWSETTINGS';
const SET_SIZE = 'SET_SIZE';

const changeName = (inputValue) => ({
  type: CHANGENAME,
  payload: inputValue,
});

const showSettings = (inputValue) => ({
  type: SHOWSETTINGS,
  payload: inputValue,
});

const setSize = (inputValue) => ({
  type: SET_SIZE,
  payload: inputValue,
});

export {
  changeName,
  CHANGENAME,
  showSettings,
  SHOWSETTINGS,
  setSize,
  SET_SIZE,
};
