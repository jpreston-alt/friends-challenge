import { useState, useEffect } from "react";
import { FriendCard, FilterFormContainer } from "@components";
import styles from "./friends.module.css";

// TODO replace with /api/friends
import { friendsData } from "@mocks/friends-data";

const Friends = () => {
  const [filters, setFilters] = useState(null);
  const [friends, setFriends] = useState(friendsData);

  const addFilters = (val) => {
    console.log(val);
  };

  return (
    <div className={styles.container}>
      <FilterFormContainer addFilters={addFilters} />
      {friends.map((friend) => (
        <FriendCard key={friend.id} {...friend} />
      ))}
    </div>
  );
};

export default Friends;

export const getStaticProps = () => ({
  props: { title: "Friends" },
});
