import * as actionTypes from './actionTypes';

export function saveResult(result) {
  return {
    type: actionTypes.STORE_RESULT,
    result,
  }
}

export function storeResult(result) {
  return function(dispatch, getState) {
    const oldCounter = getState().ctr.counter;
    setTimeout( () => {
      console.log(oldCounter)
      dispatch(saveResult(result))
    }, 2000);
  }
}

export function deleteResult(resultElId) {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId,
  }
}