import React from "react";
import PropTypes from "prop-types";
import { Text } from "@components";
import styles from "./FriendCard.module.css";

const FriendCard = ({ name, email, phone, level }) => {
  return (
    <div className={styles.container}>
      <Text variant="h4" className={styles.title}>
        {name}
      </Text>
      <Text color="secondary" className={styles.subtitle}>
        {email} &middot; {phone}
      </Text>
    </div>
  );
};

FriendCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  level: PropTypes.oneOf([0, 1, 2]).isRequired,
};

export default FriendCard;
