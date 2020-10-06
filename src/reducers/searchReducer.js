import { SEARCH_FILTER } from '../actions/actionType';

const searchState = {
  filter: '',
};

function searchReducer(state = searchState, action) {
  switch (action.type) {
    case SEARCH_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default: return state;
  }
}

export default searchReducer;
