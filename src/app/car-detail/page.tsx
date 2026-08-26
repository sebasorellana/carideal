import type { Metadata } from "next";
import { CarDetailContent } from "./CarDetailContent";

export const metadata: Metadata = {
  title: "Nissan Sentra Advance 2024",
  description: "Conoce los detalles y opciones de financiamiento de este Nissan Sentra Advance 2024.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CarDetailPage() {
  return <CarDetailContent />;
}
