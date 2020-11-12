import Head from "next/head";

import styles from "../styles/home.module.css";
import Icon from "../components/Icon";
import Dropdown from "../components/Dropdown";
import regions from "../data/regions";

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>Countries in the world</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.home}>
        <div className={styles.search_filter_cont}>
          <div className={styles.search_cont}>
            <input
              className={styles.search_input}
              type="text"
              placeholder="Search for a country..."
            />
            <span className={styles.search_icon}>
              <Icon type={["fas", "search"]} />
            </span>
          </div>
          <Dropdown
            title="Filter by Region"
            items={regions}
            ddCont={styles.dropdown_cont}
            ddTitle={styles.dropdown_title}
            ddList={styles.dropdown_list}
            ddListItem={styles.dropdown_listitem}
          />
        </div>
        <div className={styles.country_list}></div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://restcountries.eu/rest/v2/all?fields=name;capital;flag;population;region"
  );
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
}
