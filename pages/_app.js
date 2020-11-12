import Layout from "../components/Layout";
import "../styles/globals.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

library.add(faMoon);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
