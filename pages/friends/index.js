import { FilterFormContainer, FriendsList, LoaderCard } from "@components";
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
  } = useFriends();

  return (
    <div className={styles.container}>
      <FilterFormContainer
        addFilters={addFilters}
        clearFilters={clearFilters}
        disableClear={disableClear}
        filters={filters}
      />
      <FriendsList friends={friends} pageSize={pageSize} />
      {filters.length === 0 ? (
        <div ref={lastItemRef}>
          <LoaderCard />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Friends;

export const getStaticProps = () => ({
  props: { title: "Friends" },
});
