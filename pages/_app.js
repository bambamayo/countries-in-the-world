import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/theme.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import {
  faSearch,
  faAngleDown,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../context/ThemeContext";

library.add(faMoon, faSearch, faAngleDown, faLongArrowAltLeft);

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = React.useState("light");

  const handleSetTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("mode", theme);
  };

  React.useEffect(() => {
    if (localStorage.getItem("mode")) {
      let mode = localStorage.getItem("mode");
      setTheme(mode);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, handleSetTheme }}>
      <Layout className={theme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default MyApp;
