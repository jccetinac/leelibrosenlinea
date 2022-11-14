const CHANGENAME = 'CHANGENAME';
const SHOWSETTINGS = 'SHOWSETTINGS';

const changeName = (inputValue) => ({
  type: CHANGENAME,
  payload: inputValue,
});

const showSettings = (inputValue) => ({
  type: SHOWSETTINGS,
  payload: inputValue,
});

export { changeName, CHANGENAME, showSettings, SHOWSETTINGS };
