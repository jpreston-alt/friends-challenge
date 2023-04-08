import React from "react";
import PropTypes from "prop-types";
import { Text, Chip } from "@components";
import styles from "./FriendCard.module.css";

const friendLevels = {
  1: {
    text: "Close Friends",
    color: "blue",
  },
  2: {
    text: "Super Close Friends",
    color: "green",
  },
};

const FriendCard = ({ name, email, phone, friendLevel }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <Text variant="h4" className={styles.title}>
          {name}
        </Text>
        {friendLevel > 0 ? (
          <Chip
            text={friendLevels[friendLevel].text}
            color={friendLevels[friendLevel].color}
          />
        ) : (
          <></>
        )}
      </div>
      <Text color="secondary">
        {email} &middot; {phone}
      </Text>
    </div>
  );
};

FriendCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  friendLevel: PropTypes.oneOf([0, 1, 2]).isRequired,
};

export default FriendCard;
