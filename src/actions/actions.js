import {
  TEST,
} from './actionType';

export default function test(payload) {
  return {
    type: TEST,
    payload,
  };
}
