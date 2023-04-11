import { FriendCard, Error, Button } from "@components";
import Link from "next/link";
import styles from "./friends.module.css";

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
