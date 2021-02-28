import React from 'react'
import PropTypes from 'prop-types'

function TransactionsTable(props) {

  const {transactions, classes} = props;

  const renderTrasactions = (transactions) => 
        transactions.map((transaction, index) => 
        <tr>
            <td>{index + 1}</td>
            <td key={transaction.id} className={classes.tableData}>
              {`${transaction.type ? '+' : '-'}${transaction.sum}`}
            </td>
        </tr>)

    return (
        <table className={classes.table}>
            <thead className={classes.tableHeader}>
                <tr>
                    <td>Number</td>
                    <td>Transaction</td>
                </tr>
            </thead>
            <tbody className={classes.tableBody}>
                {renderTrasactions(transactions)}
            </tbody>
        </table>
    )
}

TransactionsTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.bool.isRequired,
    sum: PropTypes.number.isRequired
  })).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired
}

export default TransactionsTable
