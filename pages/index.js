import { Text } from "@components";
import stylesGlobal from "@styles/globals.module.css";

const Home = () => {
  return (
    <div className={stylesGlobal.center}>
      <Text variant="h1">Welcome to the Clerkie Challenge!</Text>
    </div>
  );
};

export default Home;

export const getStaticProps = () => ({
  props: { title: "Home" },
});
