import React, {useEffect}  from 'react'
import PropTypes from 'prop-types'
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import styles from './TransactionPage.module.sass'
import Header from './../../components/Header/Header'
import TransactionsTable from './../../components/TransactionsTable'
import {getTransactionsAction} from './../../actions/actionCreator'

// const transactions = [
//   {
//     id: 1,
//     type: true,
//     sum: 100
//   },
//   {
//     id: 2,
//     type: false,
//     sum: 100
//   },
//   {
//     id: 3,
//     type: true,
//     sum: 100
//   },
//   {
//     id: 4,
//     type: false,
//     sum: 100
//   },
// ]

function TransactionPage(props) {

  const {transactions, isFetching, error} = useSelector(({transaction}) => transaction)
  const dispatch = useDispatch()
  const getTransactions = bindActionCreators(getTransactionsAction, dispatch)

  useEffect(() => {
    getTransactions({limit:5, offset: 0});
  }, [])

  const tableClasses = {
    table: styles.table,
    tableHeader: styles.tableHeader,
    tableBody: styles.tableBody,
    tableData: styles.tableData
  };

  return (
    <div>
      <Header/>
      <div className={styles.tableWrapper}>
        {
          transactions
          ?
          <TransactionsTable transactions={transactions} classes={tableClasses}/>
          :
          <div className={styles.noTransactions}>
            No transactions.
          </div>
        }
      </div>
      

    </div>
  )
}

TransactionPage.propTypes = {

}

export default TransactionPage
