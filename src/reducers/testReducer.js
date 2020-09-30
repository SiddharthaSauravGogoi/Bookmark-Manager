import { TEST } from '../actions/actionType';

const defaultState = {
  payload: '',
};

function defaultReducer(state = defaultState, action) {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        payload: action.payload,
      };
    default: return state;
  }
}

export default defaultReducer;
