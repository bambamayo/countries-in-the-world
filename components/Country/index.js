import Image from "next/image";

import styles from "./country.module.css";

export default function Country({
  countryFlagAlt,
  countryFlagSrc,
  countryName,
  countryCount,
  countryRegion,
  countryCapital,
}) {
  return (
    <div className={styles.country}>
      <aside className={styles.country_imagecont}>
        <button className={styles.country_imagebtn}>
          <Image
            src={countryFlagSrc}
            alt={countryFlagAlt}
            width={265}
            height={160}
          />
        </button>
      </aside>
      <div className={styles.country_details}>
        <h2 className={styles.country_name}>{countryName}</h2>
        <p className={styles.country_info}>
          <span>Population:</span> <span>{countryCount}</span>
        </p>
        <p className={styles.country_info}>
          <span>Region:</span> <span>{countryRegion}</span>
        </p>
        <p className={styles.country_info}>
          <span>Capital:</span> <span>{countryCapital}</span>
        </p>
      </div>
    </div>
  );
}
