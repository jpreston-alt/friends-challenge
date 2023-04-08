import { FriendCard } from "@components";
import styles from "./friends.module.css";

import { friendsData } from "@mocks/friends-data";

const Friends = () => {
  return (
    <div className={styles.container}>
      {friendsData.map((friend) => (
        <FriendCard key={friend.id} {...friend} />
      ))}
    </div>
  );
};

export default Friends;

export const getStaticProps = () => ({
  props: { title: "Friends" },
});
