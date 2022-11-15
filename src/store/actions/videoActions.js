const CHANGENAME = 'CHANGENAME';
const SHOWSETTINGS = 'SHOWSETTINGS';
const SET_SIZE = 'SET_SIZE';
const SET_LOCATION = 'SET_LOCATION';

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

const setLocation = (inputValue) => ({
  type: SET_LOCATION,
  payload: inputValue,
});

export {
  changeName,
  CHANGENAME,
  showSettings,
  SHOWSETTINGS,
  setSize,
  SET_SIZE,
  setLocation,
  SET_LOCATION,
};
