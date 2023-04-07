import Head from "next/head";
import { Inter } from "next/font/google";
import "@styles/globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["500", "600", "700"] });

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
