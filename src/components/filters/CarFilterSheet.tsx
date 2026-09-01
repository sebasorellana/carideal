import Image from "next/image";
import Link from "next/link";
import styles from "./car-filter-sheet.module.css";

export function CarFilterSheet() {
  return (
    <Link
      aria-label="Filtrar resultados"
      className={styles.trigger}
      href="/onboarding-first-setup"
    >
      <Image
        alt=""
        height={56}
        src="/images/car-list/filter-icon.png"
        width={61}
      />
    </Link>
  );
}
