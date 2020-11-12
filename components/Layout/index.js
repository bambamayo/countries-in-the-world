import Link from "next/link";

import Icon from "../Icon";

import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <nav className={styles.header_nav}>
        <div className={styles.header_nav_inner}>
          <Link href="/">
            <a className={styles.header_link}>Where in the world?</a>
          </Link>
          <button className={styles.toggle_btn}>
            <span className={styles.toggle_btn_icon}>
              <Icon type={["far", "moon"]} />
            </span>
            <span className={styles.toggle_btn_text}>Dark Mode</span>
          </button>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
