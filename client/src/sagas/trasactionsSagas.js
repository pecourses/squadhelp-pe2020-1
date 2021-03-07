import {put} from 'redux-saga/effects'
import {getTransactionsRequest, getTransactionsSuccess, getTransactionsError} from './../actions/actionCreator'
import * as restController from './../api/rest/restController'

export function* getTransactionsSaga(action){
  const {data} = action;
  yield put(getTransactionsRequest());
  try{
    const {
      data: {
        data: transactions
        }
      } = yield restController.getTransactions(data);
    yield put(getTransactionsSuccess(transactions));
  }
  catch (err) {
    yield put(getTransactionsError(err));
  }
}