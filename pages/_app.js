import Head from "next/head";
import { PageTemplate } from "@components";
import "@styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
      </Head>
      <PageTemplate pageName={pageProps.title}>
        <Component {...pageProps} />
      </PageTemplate>
    </>
  );
};

export default App;
