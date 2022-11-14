import { CHANGENAME, SHOWSETTINGS, SET_SIZE } from '../actions/videoActions.js';

const INICIALSTATE = {
  name: 'inicial',
  settings: false,
  size: 100,
};

const currencyReducer = (state = INICIALSTATE, action) => {
  switch (action.type) {
    case CHANGENAME:
      console.log('changeName');
      return {
        ...state,
        name: action.payload,
      };
    case SHOWSETTINGS:
      console.log('show Settings');
      return {
        ...state,
        settings: action.payload,
      };
    case SET_SIZE:
      console.log('setSize');
      return {
        ...state,
        size: action.payload,
      };
    default:
      return state;
  }
};

export { currencyReducer };
