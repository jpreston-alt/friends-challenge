import Head from "next/head";
import { PageTemplate } from "@components";
import "@styles/globals.css";

const App = ({ Component, pageProps }) => {
  const title = `${pageProps.title} | Clerkie`;
  return (
    <>
      <Head>
        <meta name="description" content="Clerkie friends challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      <PageTemplate pageName={pageProps.title}>
        <Component {...pageProps} />
      </PageTemplate>
    </>
  );
};

export default App;
