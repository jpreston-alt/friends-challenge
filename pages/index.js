import { Text } from "@components";

const Home = () => {
  return (
    <>
      <Text variant="h1">h1</Text>
      <Text variant="h2" color="secondary">
        h2
      </Text>
      <Text variant="h3" color="disabled">
        h3
      </Text>
      <Text variant="h4" color="white">
        h4
      </Text>
      <Text variant="h5" color="green">
        h5
      </Text>
      <Text color="blue">body</Text>
      <Text variant="label">label</Text>
      <br />
      <Text variant="chip">chip</Text>
    </>
  );
};

export default Home;

export const getStaticProps = () => ({
  props: { title: "Home" },
});
