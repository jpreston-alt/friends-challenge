import { useState, useEffect } from "react";
import { FilterFormContainer, FriendsList, LoaderCard } from "@components";
import styles from "./friends.module.css";

const Friends = () => {
  const [filters, setFilters] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await fetch("/api/friends");
      const resJson = await res.json();
      setFriends((friends) => [...friends, ...resJson]);
    };

    getFriends();
  }, []);

  const addFilters = (_filters) => setFilters(_filters);
  const clearFilters = () => setFilters([]);
  const disableClear = filters.length === 0;

  let friendsFiltered = [...friends];
  if (filters.length > 0)
    friendsFiltered = friends.filter((f) => filters.includes(f.friendLevel));

  return (
    <div className={styles.container}>
      <FilterFormContainer
        addFilters={addFilters}
        clearFilters={clearFilters}
        disableClear={disableClear}
        filters={filters}
      />
      <FriendsList friends={friendsFiltered} />
      <LoaderCard />
    </div>
  );
};

export default Friends;

export const getStaticProps = () => ({
  props: { title: "Friends" },
});
