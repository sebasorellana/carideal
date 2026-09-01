import type { Metadata } from "next";
import { CarFilterSheet } from "@/components/filters/CarFilterSheet";
import { VehicleCard } from "@/components/ui/VehicleCard";
import { vehicles } from "@/data/vehicles";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Autos para ti",
  description: "Explora los autos seminuevos que coinciden con tu búsqueda.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CarListPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section aria-labelledby="car-list-title">
          <div className={styles.introRow}>
            <div>
              <h1 className={styles.title} id="car-list-title">
                Resultados para ti
              </h1>
              <p className={styles.subtitle}>
                {vehicles.length} coincidencias de tu búsqueda
              </p>
            </div>

            <CarFilterSheet />
          </div>

          <div className={styles.list}>
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
