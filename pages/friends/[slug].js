import { FriendCard, Error, Button } from "@components";
import Link from "next/link";
import styles from "./friends.module.css";

// friend and error props are returned from getStaticProps
const Friend = ({ friend, error }) => {
  if (error) return <Error message={error} />;

  const { name, email, phone, friendLevel } = friend;

  return (
    <main className={styles.container}>
      <Link href="/friends">
        <Button variant="text" className={styles.back_btn}>
          Back to Friends
        </Button>
      </Link>
      <FriendCard
        name={name}
        email={email}
        phone={phone}
        friendLevel={friendLevel}
      />
    </main>
  );
};

export default Friend;

// get all paths at build time
export const getStaticPaths = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/friends`);
    const resJson = await res.json();

    const paths = resJson?.data?.map((friend) => ({
      params: { slug: friend.id },
    }));

    return { paths, fallback: false };
  } catch (e) {
    return { paths: [], fallback: false };
  }
};

// statically generate all pages at build time
export const getStaticProps = async ({ params }) => {
  try {
    const { slug: friendId } = params;

    const res = await fetch(`${process.env.API_URL}/api/friends/${friendId}`);
    const { data } = await res.json();

    return { props: { friend: data, title: `Friends -> ${data.name}` } };
  } catch (e) {
    return { props: { error: "404 Not Found" } };
  }
};
