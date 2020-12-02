import Image from "next/image";
import Link from "next/link";

import styles from "./country.module.css";

export default function Country({
  countryFlagAlt,
  countryFlagSrc,
  countryName,
  countryCount,
  countryRegion,
  countryCapital,
  pathname,
}) {
  return (
    <div className={styles.country}>
      <aside className={styles.country_imagecont}>
        <Link href={pathname}>
          <a className={styles.country_imagelink}>
            <Image
              src={countryFlagSrc}
              alt={countryFlagAlt}
              width={265}
              height={160}
            />
          </a>
        </Link>
      </aside>
      <div className={styles.country_details}>
        <h2 className={styles.country_name}>{countryName}</h2>
        <p className={styles.country_info}>
          <span className={styles.bold}>Population:</span>{" "}
          <span>{countryCount}</span>
        </p>
        <p className={styles.country_info}>
          <span className={styles.bold}>Region:</span>{" "}
          <span>{countryRegion}</span>
        </p>
        <p className={styles.country_info}>
          <span className={styles.bold}>Capital:</span>{" "}
          <span>{countryCapital}</span>
        </p>
      </div>
    </div>
  );
}
