"use client";

import { useSearchParams } from "next/navigation";
import { countActiveFilters } from "./activeFilters";
import { CarFilterSheet } from "./CarFilterSheet";
import { ClearFiltersButton } from "./ClearFiltersButton";

export function FilterControls() {
  const searchParams = useSearchParams();
  const filterCount = countActiveFilters(searchParams);

  return (
    <>
      <CarFilterSheet filterCount={filterCount} />
      {filterCount > 0 && <ClearFiltersButton />}
    </>
  );
}
