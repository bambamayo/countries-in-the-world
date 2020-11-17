import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../styles/home.module.css";
import Icon from "../components/Icon";
import Dropdown from "../components/Dropdown";
import regions from "../data/regions";
import Country from "../components/Country";

export default function Home({ countries }) {
  const [shownCountries, setShownCountries] = React.useState(countries);
  const [regionInView, setRegionInView] = React.useState(null);
  const [showDropdown, setShowDropdown] = React.useState(false);

  const handleShowDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const router = useRouter();

  console.log(regionInView);

  // HANDLE REGION FILTERING
  React.useEffect(() => {
    if (regionInView) {
      let shown = [...countries];
      let filteredShown = shown.filter(
        (country) => country.region === regionInView
      );
      setShownCountries(filteredShown);
      router.push(`/?region=${regionInView}`);
    } else {
      setShownCountries(countries);
    }
  }, [regionInView]);

  const handleRegion = (region) => {
    setRegionInView(region);
    setShowDropdown((prevState) => !prevState);
  };

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
            itemClicked={handleRegion}
            handleShowDropdown={handleShowDropdown}
            showDropdown={showDropdown}
          />
        </div>
        <div className={styles.country_list}>
          {shownCountries.map((country) => (
            <Country
              key={country.name}
              countryFlagAlt={`${country.name} flag`}
              countryFlagSrc={country.flag}
              countryName={country.name}
              countryCount={country.population}
              countryRegion={country.region}
              countryCapital={country.capital}
            />
          ))}
        </div>
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
