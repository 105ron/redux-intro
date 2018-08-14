export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export function increment() {
  return {
    type: INCREMENT,
  }
}

export function decrement() {
  return {
    type: DECREMENT,
  }
}

export function add(value) {
  return {
    type: ADD,
    value,
  }
}

export function saveResult(result) {
  return {
    type: STORE_RESULT,
    result,
  }
}

export function storeResult(result) {
  return function(dispatch) {
    setTimeout( () => {
      dispatch(saveResult(result))
    }, 2000);
  }
}

export function deleteResult(resultElId) {
  return {
    type: STORE_RESULT,
    resultElId,
  }
}