const Home = () => {
  return <>home page</>;
};

export default Home;

export const getStaticProps = () => ({
  props: { title: "Home" },
});
