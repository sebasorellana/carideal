"use client";

import { HeartIcon } from "@/components/icons/HeartIcon";
import { PrimaryLink } from "@/components/forms/PrimaryLink";
import { ScreenIntro } from "@/components/layout/ScreenIntro";
import layoutStyles from "@/components/layout/screen-layout.module.css";
import { VehicleCard } from "@/components/ui/VehicleCard";
import { useFavorites } from "@/context/FavoritesContext";
import { vehicles } from "@/data/vehicles";
import styles from "./page.module.css";

export function FavoritesContent() {
  const { favoriteIds } = useFavorites();
  const favoriteVehicles = vehicles.filter((vehicle) =>
    favoriteIds.includes(vehicle.id),
  );

  if (favoriteVehicles.length === 0) {
    return (
      <main className={layoutStyles.page}>
        <section
          aria-labelledby="favorites-title"
          className={layoutStyles.content}
        >
          <ScreenIntro title="Favoritos" titleId="favorites-title">
            Todavía no guardaste autos. Tocá el corazón en cualquier auto
            para agregarlo acá.
          </ScreenIntro>

          <div className={styles.emptyState}>
            <span aria-hidden="true" className={styles.emptyIcon}>
              <HeartIcon />
            </span>
            <PrimaryLink href="/car-list" shape="pill">
              Explorar autos
            </PrimaryLink>
          </div>
        </section>
      </main>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section aria-labelledby="favorites-title">
          <h1 className={styles.title} id="favorites-title">
            Favoritos
          </h1>
          <p className={styles.subtitle}>
            {favoriteVehicles.length}{" "}
            {favoriteVehicles.length === 1 ? "auto guardado" : "autos guardados"}
          </p>

          <div className={styles.list}>
            {favoriteVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
