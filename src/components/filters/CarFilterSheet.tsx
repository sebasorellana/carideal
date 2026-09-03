import Image from "next/image";
import Link from "next/link";
import styles from "./car-filter-sheet.module.css";

type CarFilterSheetProps = {
  filterCount?: number;
};

export function CarFilterSheet({ filterCount = 0 }: CarFilterSheetProps) {
  return (
    <Link
      aria-label={
        filterCount > 0
          ? `Filtrar resultados, ${filterCount} ${filterCount === 1 ? "filtro activo" : "filtros activos"}`
          : "Filtrar resultados"
      }
      className={styles.trigger}
      href="/onboarding-first-setup"
    >
      <Image
        alt=""
        height={56}
        src="/images/car-list/filter-icon.png"
        width={61}
      />
      {filterCount > 0 && (
        <span aria-hidden="true" className={styles.badge}>
          {filterCount}
        </span>
      )}
    </Link>
  );
}
