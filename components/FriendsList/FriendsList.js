import React from "react";
import PropTypes from "prop-types";
import { LoaderCard, FriendCard } from "@components";
import Link from "next/link";

const FriendsList = ({ friends, pageSize }) => {
  if (friends.length === 0)
    return Array.from(Array(pageSize).keys()).map((el) => (
      <LoaderCard key={`loader-card-${el}`} />
    ));

  return friends.map((friend) => (
    <Link href={`/friends/${friend.id}`} key={`friend-card-${friend.id}`}>
      <FriendCard {...friend} showHover />
    </Link>
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
