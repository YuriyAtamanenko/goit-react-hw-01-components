import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";
import getRandomColor from "../../utils/getRandomColor";

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>Upload stats</h2>}

      <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={css.item}
            key={id}
            style={{
              backgroundColor: `${getRandomColor()}`,
            }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.PropTypes.arrayOf(PropTypes.shape),
};
