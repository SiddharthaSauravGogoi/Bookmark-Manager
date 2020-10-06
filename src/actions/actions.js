import {
  TEST,
  SEARCH_FILTER,
} from './actionType';

export function test(payload) {
  return {
    type: TEST,
    payload,
  };
}

export function searchFilter(filter) {
  return {
    type: SEARCH_FILTER,
    filter,
  };
}
