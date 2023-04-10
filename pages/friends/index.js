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
    isLastPage,
  } = useFriends();

  const LastEl = () => {
    if (isLastPage) return <>No More Friends</>;
    if (filters.length === 0)
      return (
        <div ref={lastItemRef}>
          <LoaderCard />
        </div>
      );
    return <></>;
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
      {isLastPage ? (
        <>No More Friends</>
      ) : (
        <div ref={lastItemRef}>
          <LoaderCard />
        </div>
      )}
      {/* <LastEl /> */}
    </div>
  );
};

export default Friends;

export const getStaticProps = () => ({
  props: { title: "Friends" },
});
