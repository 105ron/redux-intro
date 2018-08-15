import * as actionTypes from './actionTypes';

export function increment() {
  return {
    type: actionTypes.INCREMENT,
  }
}

export function decrement() {
  return {
    type: actionTypes.DECREMENT,
  }
}

export function add(value) {
  return {
    type: actionTypes.ADD,
    value,
  }
}
