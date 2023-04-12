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
  // pass page title as page props to be used in head title and nav title
  props: { title: "Home" },
});
