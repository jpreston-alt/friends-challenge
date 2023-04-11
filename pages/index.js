import { Text } from "@components";
import stylesGlobal from "@styles/globals.module.css";

const Home = () => {
  return (
    <main className={stylesGlobal.center}>
      <Text variant="h1">Welcome to the Clerkie Challenge!</Text>
    </main>
  );
};

export default Home;

export const getStaticProps = () => ({
  props: { title: "Home" },
});
