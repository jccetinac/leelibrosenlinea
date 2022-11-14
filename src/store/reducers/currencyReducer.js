import { CHANGEVIDEO } from '../actions/videoActions.js';

const currencyReducer = (state = { file: 'inicial' }, action) => {
  switch (action.type) {
    case CHANGEVIDEO:
      console.log('changevideo');
      return {
        ...state,
        file: action.payload,
      };
    default:
      return state;
  }
};

export { currencyReducer };
