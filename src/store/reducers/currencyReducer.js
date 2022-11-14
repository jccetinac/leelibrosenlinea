import { CHANGENAME, SHOWSETTINGS } from '../actions/videoActions.js';

const INICIALSTATE = {
  name: 'inicial',
  settings: false,
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
    default:
      return state;
  }
};

export { currencyReducer };
