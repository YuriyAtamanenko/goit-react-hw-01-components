import React from "react";
import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transaction}>
      <thead className={css.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.tibleLine}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.PropTypes.arrayOf(PropTypes.shape),
};
