"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HeartIcon } from "@/components/icons/HeartIcon";
import styles from "./vehicle-card.module.css";

export type Vehicle = {
  fuel: string;
  image: string;
  mileage: string;
  monthlyPayment: string;
  name: string;
  price: string;
  transmission: string;
  year: number;
};

type VehicleCardProps = {
  vehicle: Vehicle;
};

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

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
            aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
            aria-pressed={isFavorite}
            className={`${styles.favorite} ${isFavorite ? styles.favoriteActive : ""}`}
            onClick={() => setIsFavorite((current) => !current)}
            type="button"
          >
            <HeartIcon filled={isFavorite} />
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
