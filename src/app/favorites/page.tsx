import type { Metadata } from "next";
import { PlaceholderScreen } from "@/components/layout/PlaceholderScreen";

export const metadata: Metadata = {
  title: "Favoritos",
  robots: { index: false, follow: true },
};

export default function FavoritesPage() {
  return (
    <PlaceholderScreen
      description="Aquí encontrarás los autos que guardes como favoritos."
      title="Favoritos"
      titleId="favorites-title"
    />
  );
}
