"use client";

import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { useFavorites } from "@/context/FavoritesContext";
import type { Vehicle } from "@/data/vehicles";
import styles from "./vehicle-card.module.css";

export type { Vehicle };

type VehicleCardProps = {
  vehicle: Vehicle;
};

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isVehicleFavorite = isFavorite(vehicle.id);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          alt={`${vehicle.name} disponible`}
          className={styles.vehicleImage}
          fill
          sizes="(max-width: 640px) 42vw, 270px"
          src={vehicle.image}
        />
      </div>

      <div className={styles.details}>
        <div className={styles.headingRow}>
          <h2 className={styles.name}>{vehicle.name}</h2>
          <button
            aria-label={isVehicleFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
            aria-pressed={isVehicleFavorite}
            className={`${styles.favorite} ${isVehicleFavorite ? styles.favoriteActive : ""}`}
            onClick={() => toggleFavorite(vehicle.id)}
            type="button"
          >
            <HeartIcon filled={isVehicleFavorite} />
          </button>
        </div>

        <p className={styles.specs}>
          <span>{vehicle.year} / {vehicle.transmission}</span>
          <span>{vehicle.fuel} / {vehicle.mileage}</span>
        </p>

        <div className={styles.pricing}>
          <p className={styles.label}>Precio de lista</p>
          <p className={styles.price}>{vehicle.price}</p>
          <p className={styles.label}>Mensualidad desde</p>
          <p className={styles.monthly}>
            {vehicle.monthlyPayment} <span>/mes*</span>
          </p>
        </div>

        <Link className={styles.financeButton} href="/car-detail">
          Ver financiamiento
        </Link>
      </div>
    </article>
  );
}
