import React from "react";
import Link from "next/link";
import ThemeContext from "../../context/ThemeContext";

import Icon from "../Icon";
import styles from "./layout.module.css";

export default function Layout({ children, className }) {
  const { theme, handleSetTheme } = React.useContext(ThemeContext);

  let passedValue = theme === "light" ? "dark" : "light";

  return (
    <div className={className}>
      <nav className={styles.header_nav}>
        <div className={styles.header_nav_inner}>
          <Link href="/">
            <a className={styles.header_link}>Where in the world?</a>
          </Link>
          <button
            className={styles.toggle_btn}
            onClick={() => handleSetTheme(passedValue)}
          >
            <span className={styles.toggle_btn_icon}>
              <Icon type={["far", "moon"]} />
            </span>
            <span className={styles.toggle_btn_text}>
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </span>
          </button>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
