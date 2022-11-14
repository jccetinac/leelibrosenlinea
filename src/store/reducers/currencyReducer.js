import { CHANGENAME } from '../actions/videoActions.js';

const INICIALSTATE = { name: 'inicial' };

const currencyReducer = (state = INICIALSTATE, action) => {
  switch (action.type) {
    case CHANGENAME:
      console.log('changeName');
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export { currencyReducer };
