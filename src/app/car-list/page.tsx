import type { Metadata } from "next";
import { CarFilterSheet } from "@/components/filters/CarFilterSheet";
import { VehicleCard, type Vehicle } from "@/components/ui/VehicleCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Autos para ti",
  description: "Explora los autos seminuevos que coinciden con tu búsqueda.",
  robots: {
    index: false,
    follow: true,
  },
};

const vehicles: Vehicle[] = [
  {
    name: "Nissan Sentra Advance",
    year: 2024,
    transmission: "Automático",
    fuel: "Gasolina",
    mileage: "130,000 km",
    price: "$250,000",
    monthlyPayment: "$4,500",
    image: "/images/car-list/sedan-orange.webp",
  },
  {
    name: "Nissan Versa Sense",
    year: 2024,
    transmission: "Automático",
    fuel: "Gasolina",
    mileage: "150,000 km",
    price: "$220,000",
    monthlyPayment: "$4,000",
    image: "/images/car-list/sedan-orange.webp",
  },
  {
    name: "Nissan Kicks Advance",
    year: 2024,
    transmission: "Automático",
    fuel: "Gasolina",
    mileage: "98,000 km",
    price: "$275,000",
    monthlyPayment: "$4,800",
    image: "/images/car-list/suv-graphite.webp",
  },
  {
    name: "Nissan Kicks Advance",
    year: 2024,
    transmission: "Automático",
    fuel: "Gasolina",
    mileage: "98,000 km",
    price: "$275,000",
    monthlyPayment: "$4,800",
    image: "/images/car-list/suv-graphite.webp",
  },
  {
    name: "Nissan Altima Exclusive",
    year: 2023,
    transmission: "Automático",
    fuel: "Gasolina",
    mileage: "75,000 km",
    price: "$320,000",
    monthlyPayment: "$5,600",
    image: "/images/car-list/sedan-orange.webp",
  },
  {
    name: "Nissan X-Trail Exclusive",
    year: 2024,
    transmission: "Automático",
    fuel: "Gasolina",
    mileage: "62,000 km",
    price: "$390,000",
    monthlyPayment: "$6,900",
    image: "/images/car-list/suv-graphite.webp",
  },
];

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
              <p className={styles.subtitle}>24 coincidencias de tu búsqueda</p>
            </div>

            <CarFilterSheet />
          </div>

          <div className={styles.list}>
            {vehicles.map((vehicle, index) => (
              <VehicleCard key={`${vehicle.name}-${index}`} vehicle={vehicle} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
