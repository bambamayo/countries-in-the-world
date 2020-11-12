import Link from "next/link";

import Icon from "../Icon";

import styles from "./layout.module.css";

export default function Layout() {
  return (
    <nav className={styles.header_nav}>
      <Link classname={styles.header_link} href="/">
        <a>Where in the world?</a>
      </Link>
      <button className={styles.toggle_mode}>
        <span>
          <Icon type={["far", "moon"]} />
        </span>
        <span>Dark Mode</span>
      </button>
    </nav>
  );
}
