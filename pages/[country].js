import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/countryDetails.module.css";
import Icon from "../components/Icon";

export default function Country({ shownCountry, countries }) {
  let country = shownCountry[0];
  const router = useRouter();

  const getBorderCountries = (alphaCode) => {
    let country = countries.find((country) => country.alpha3Code === alphaCode);
    return country.name;
  };

  return (
    <>
      <Head>
        <title>{`${country.name} details`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.country_details}>
        <div className={styles.country_details_inner}>
          <div className={styles.return_btn_cont}>
            <button className={styles.return_btn} onClick={() => router.back()}>
              <span className={styles.return_btn_icon}>
                <Icon type={["fas", "long-arrow-alt-left"]} />
              </span>
              <span>Back</span>
            </button>
          </div>
          <div className={styles.country}>
            <div className={styles.country_image_cont}>
              <Image
                src={country.flag}
                alt={`${country.name} flag`}
                layout="fill"
              />
            </div>
            <div className={styles.country_detail}>
              <h3 className={styles.country_name}>{country.name}</h3>
              <div className={styles.country_meta}>
                <div className={styles.country_meta_l}>
                  <p className={styles.meta_p}>
                    <span className={styles.meta_l}>Native Name: </span>
                    <span className={styles.meta_r}>{country.nativeName}</span>
                  </p>
                  <p className={styles.meta_p}>
                    <span className={styles.meta_l}>Population: </span>
                    <span className={styles.meta_r}>{country.population}</span>
                  </p>
                  <p className={styles.meta_p}>
                    <span className={styles.meta_l}>Region: </span>
                    <span className={styles.meta_r}>{country.region}</span>
                  </p>
                  <p className={styles.meta_p}>
                    <span className={styles.meta_l}>Sub Region: </span>
                    <span className={styles.meta_r}>{country.subregion}</span>
                  </p>
                  <p className={styles.meta_p}>
                    <span className={styles.meta_l}>Capital: </span>
                    <span className={styles.meta_r}>{country.capital}</span>
                  </p>
                </div>
                <div className={styles.country_meta_r}>
                  <p className={styles.meta_p}>
                    <span className={styles.meta_l}>Top Level Domain:</span>
                    <span className={styles.meta_r}>
                      {country.topLevelDomain}
                    </span>
                  </p>
                  <p className={styles.meta_p}>
                    <span className={styles.meta_l}>Currencies: </span>
                    <span className={styles.meta_r}>
                      {country.currencies.map((currency) => (
                        <span key={currency.code}>{currency.code}</span>
                      ))}
                    </span>
                  </p>
                  <p className={styles.meta_p}>
                    <span className={styles.meta_l}>Languages: </span>
                    <span className={styles.meta_r}>
                      {country.languages.map((language) => (
                        <span key={language.name}>{language.name}</span>
                      ))}
                    </span>
                  </p>
                </div>
              </div>
              <div className="border">
                <span className={`${styles.meta_l} ${styles.meta_l_border}`}>
                  Border Countries:{" "}
                </span>
                {country.borders.map((border) => (
                  <button className={styles.border_country_btn} key={border}>
                    {getBorderCountries(border)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://restcountries.eu/rest/v2/all?fields=name;capital;flag;population;region"
  );
  const countries = await res.json();

  const paths = countries.map((country) => ({
    params: { country: country.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/name/${params.country}`
  );
  const shownCountry = await res.json();

  const res2 = await fetch(
    `https://restcountries.eu/rest/v2/all?fields=name;alpha3Code`
  );

  const countries = await res2.json();

  return {
    props: {
      shownCountry,
      countries,
    },
  };
}
