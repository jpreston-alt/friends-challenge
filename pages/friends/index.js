import {
  FilterFormContainer,
  FriendsList,
  LoaderCard,
  Text,
} from "@components";
import { useFriends } from "@hooks";
import styles from "./friends.module.css";

const Friends = () => {
  const {
    filters,
    addFilters,
    clearFilters,
    disableClear,
    friends,
    pageSize,
    lastItemRef,
    isLastPage,
  } = useFriends();

  const getLastEl = () => {
    if (filters.length > 0) return <></>;
    if (isLastPage)
      return (
        <Text color="secondary" className={styles.text_end}>
          End of Content
        </Text>
      );
    return (
      <div ref={lastItemRef}>
        <LoaderCard />
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <FilterFormContainer
        addFilters={addFilters}
        clearFilters={clearFilters}
        disableClear={disableClear}
        filters={filters}
      />
      <FriendsList friends={friends} pageSize={pageSize} />
      {getLastEl()}
    </div>
  );
};

export default Friends;

export const getStaticProps = () => ({
  props: { title: "Friends" },
});
