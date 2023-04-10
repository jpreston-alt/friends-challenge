import React from "react";
import PropTypes from "prop-types";
import { LoaderCard, FriendCard } from "@components";

const FriendsList = ({ friends, pageSize }) => {
  if (friends.length === 0)
    return Array.from(Array(pageSize).keys()).map((el) => (
      <LoaderCard key={`loader-card-${el}`} />
    ));

  return friends.map((friend) => (
    <FriendCard key={`friend-card-${friend.id}`} {...friend} />
  ));
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      friendLevel: PropTypes.number,
    })
  ).isRequired,
  pageSize: PropTypes.number.isRequired,
};

export default FriendsList;
