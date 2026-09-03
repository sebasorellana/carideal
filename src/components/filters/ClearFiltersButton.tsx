import Link from "next/link";
import { RefreshIcon } from "@/components/icons/RefreshIcon";
import styles from "./clear-filters-button.module.css";

export function ClearFiltersButton() {
  return (
    <Link aria-label="Limpiar filtros" className={styles.clearButton} href="/car-list">
      <RefreshIcon />
    </Link>
  );
}
