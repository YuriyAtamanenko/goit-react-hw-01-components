import React from "react";
import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friends }) {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <li className={css.item} key={id}>
      <span className={`${css.status} ${css[isOnline]}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  ));
}

FriendListItem.propTypes = {
  friends: PropTypes.PropTypes.arrayOf(PropTypes.shape),
};
