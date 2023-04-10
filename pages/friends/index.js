import { useState, useEffect } from "react";
import { FriendCard, FilterFormContainer } from "@components";
import styles from "./friends.module.css";

// TODO replace with /api/friends
import { friendsData } from "@mocks/friends-data";

const Friends = () => {
  const [filters, setFilters] = useState([]);
  const [friends, setFriends] = useState(friendsData);
  const addFilters = (_filters) => setFilters(_filters);
  const clearFilters = () => setFilters([]);
  const disableClear = filters.length === 0;

  let friendsToDisplay = [...friends];
  if (filters.length > 0)
    friendsToDisplay = friends.filter((f) => filters.includes(f.friendLevel));

  return (
    <div className={styles.container}>
      <FilterFormContainer
        addFilters={addFilters}
        clearFilters={clearFilters}
        disableClear={disableClear}
        filters={filters}
      />
      {friendsToDisplay.map((friend) => (
        <FriendCard key={friend.id} {...friend} />
      ))}
    </div>
  );
};

export default Friends;

export const getStaticProps = () => ({
  props: { title: "Friends" },
});
