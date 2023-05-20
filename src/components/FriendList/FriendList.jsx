import React from "react";
import PropTypes from "prop-types";
import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      <FriendListItem friends={friends} />
      {/* <!-- Довільна кіл-сть FriendListItem --> */}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.PropTypes.arrayOf(PropTypes.shape),
};
