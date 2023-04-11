import React from "react";
import PropTypes from "prop-types";
import { Text, Chip, Card } from "@components";
import { friendLevels } from "@mocks/friend-levels";
import styles from "./FriendCard.module.css";

const FriendCard = ({ name, email, phone, friendLevel, showHover }) => {
  return (
    <Card className={showHover && styles.hover}>
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
    </Card>
  );
};

FriendCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  friendLevel: PropTypes.oneOf([0, 1, 2]).isRequired,
};

export default FriendCard;
