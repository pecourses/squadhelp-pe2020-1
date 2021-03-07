import produce from 'immer'
import ACTION from '../actions/actionTypes';

const initialState = {
  transactions: [],
  isFetching: false,
  error: null
}

export default (state = initialState, action) => {
  const {type} = action;
  switch (type) {

  case ACTION.GET_TRANSACTIONS_REQUEST: {
    return produce(state, draftState => {
      draftState.isFetching = true;
      draftState.error = null;
    })
  }
  
  case ACTION.GET_TRANSACTIONS_SUCCESS: {
    const {data} = action
    return produce(state, draftState => {
      draftState.isFetching = false;
      draftState.transactions = [...data];
    })
  }
  
  case ACTION.GET_TRANSACTIONS_ERROR: {
    const {error} = action
    return produce(state, draftState => {
      draftState.isFetching = false;
      draftState.error = error;
    })
  }

  default:
    return state
  }
}
