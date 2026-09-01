import type { Metadata } from "next";
import { FavoritesContent } from "./FavoritesContent";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Los autos que guardaste como favoritos.",
  robots: { index: false, follow: true },
};

export default function FavoritesPage() {
  return <FavoritesContent />;
}
