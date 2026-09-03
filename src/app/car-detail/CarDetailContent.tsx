"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CalendarIcon } from "@/components/icons/CalendarIcon";
import { DoorIcon } from "@/components/icons/DoorIcon";
import { EngineIcon } from "@/components/icons/EngineIcon";
import { FuelIcon } from "@/components/icons/FuelIcon";
import { GearIcon } from "@/components/icons/GearIcon";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { SeatIcon } from "@/components/icons/SeatIcon";
import { WheelIcon } from "@/components/icons/WheelIcon";
import { useFavorites } from "@/context/FavoritesContext";
import styles from "./page.module.css";

const vehicleId = "nissan-sentra-advance-2024";
const image = "/images/car-list/sedan-orange.webp";

const gallery = [
  { label: "Vista completa", origin: "center", position: "center", scale: 1 },
  { label: "Detalle del frente", origin: "78% 58%", position: "center", scale: 1.55 },
  { label: "Vista lateral", origin: "25% 54%", position: "center", scale: 1.45 },
  { label: "Detalle de rueda y carrocería", origin: "36% 66%", position: "center", scale: 2 },
  { label: "Detalle del faro", origin: "84% 60%", position: "center", scale: 2.1 },
  { label: "Vista del interior", origin: "50% 42%", position: "center", scale: 1.3 },
];

const vehicleDescription = [
  "El Nissan Sentra Advance 2024 combina un diseño moderno con tecnología de punta, ideal para el día a día en la ciudad y para viajes largos. Cuenta con un motor eficiente de 2.0L, transmisión automática suave y un interior cómodo pensado para toda la familia.",
  "Este seminuevo fue certificado por Carideal, lo que garantiza su historial verificado, inspección mecánica completa y el respaldo directo de Nissan.",
];

const featuredSpecs = [
  { icon: <SeatIcon />, label: "Interior", value: "Tela" },
  { icon: <DoorIcon />, label: "Nro. de puertas", value: "4 puertas" },
  { icon: <FuelIcon />, label: "Combustible", value: "Gasolina" },
  { icon: <GearIcon />, label: "Transmisión", value: "Automático" },
  { icon: <EngineIcon />, label: "Motor", value: "2.0L 4 cil." },
  { icon: <WheelIcon />, label: "Tracción", value: "Delantera" },
];

export function CarDetailContent() {
  const [activeImage, setActiveImage] = useState(0);
  const [shareMessage, setShareMessage] = useState("");
  const { isFavorite, toggleFavorite } = useFavorites();
  const isVehicleFavorite = isFavorite(vehicleId);

  async function handleShare() {
    const shareData = {
      text: "Mira este Nissan Sentra Advance 2024 en Carideal.",
      title: "Nissan Sentra Advance 2024",
      url: window.location.href,
    };

    try {
      if (navigator.share && (!navigator.canShare || navigator.canShare(shareData))) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(shareData.url);
      setShareMessage("Enlace copiado");
      window.setTimeout(() => setShareMessage(""), 2200);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setShareMessage("No se pudo compartir");
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section aria-label="Galería del vehículo" className={styles.gallery}>
          <div className={styles.hero}>
            <Image
              alt="Nissan Sentra Advance 2024 color naranja"
              className={styles.heroImage}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 64rem"
              src={image}
              style={{
                objectPosition: gallery[activeImage].position,
                transform: `scale(${gallery[activeImage].scale})`,
                transformOrigin: gallery[activeImage].origin,
              }}
            />

            <div className={styles.heroActions}>
              <button
                aria-label={isVehicleFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
                aria-pressed={isVehicleFavorite}
                className={`${styles.roundAction} ${isVehicleFavorite ? styles.favoriteActive : ""}`}
                onClick={() => toggleFavorite(vehicleId)}
                type="button"
              >
                <HeartIcon filled={isVehicleFavorite} />
              </button>
              <button aria-label="Compartir vehículo" className={styles.roundAction} onClick={handleShare} type="button">
                <Image
                  alt=""
                  className={styles.shareIcon}
                  height={60}
                  src="/images/car-detail/share-icon.png"
                  width={47}
                />
              </button>
            </div>
          </div>

          <div className={styles.thumbnails}>
            {gallery.map((item, index) => (
              <button
                aria-label={`Mostrar ${item.label.toLowerCase()}`}
                aria-pressed={activeImage === index}
                className={`${styles.thumbnail} ${activeImage === index ? styles.thumbnailActive : ""}`}
                key={item.label}
                onClick={() => setActiveImage(index)}
                type="button"
              >
                <Image
                  alt=""
                  fill
                  sizes="(max-width: 768px) 22vw, 12rem"
                  src={image}
                  style={{
                    objectFit: "cover",
                    objectPosition: item.position,
                    transform: `scale(${item.scale})`,
                    transformOrigin: item.origin,
                  }}
                />
              </button>
            ))}
          </div>
        </section>

        <div className={styles.content}>
          <section aria-labelledby="vehicle-title">
            <h1 className={styles.title} id="vehicle-title">Nissan Sentra Advance</h1>

            <dl className={styles.specifications}>
              <div className={styles.specification}>
                <span className={styles.specificationIcon}>
                  <CalendarIcon />
                </span>
                <div><dt>Año</dt><dd>2024</dd></div>
              </div>
              <div className={styles.specification}>
                <Image alt="" height={44} src="/images/car-detail/km-icon.png" width={51} />
                <div><dt>Kilómetros</dt><dd>125,000 km</dd></div>
              </div>
              <div className={styles.specification}>
                <span aria-hidden="true" className={styles.colorSwatch} />
                <div><dt>Color</dt><dd>Plata</dd></div>
              </div>
            </dl>
          </section>

          <section aria-label="Precio y financiamiento" className={styles.pricePanel}>
            <div className={styles.cashPrice}>
              <span>Precio de contado</span>
              <strong>$250,000</strong>
            </div>
            <div className={styles.monthlyPrice}>
              <span>Mensualidad estimada desde</span>
              <strong>$4,500 <small>/mes*</small></strong>
            </div>
          </section>

          <section aria-labelledby="highlights-title" className={styles.highlightsSection}>
            <h2 id="highlights-title">Características destacadas</h2>
            <dl className={styles.featuredSpecs}>
              {featuredSpecs.map(({ icon, label, value }) => (
                <div className={styles.featuredSpec} key={label}>
                  <span aria-hidden="true" className={styles.featuredSpecIcon}>
                    {icon}
                  </span>
                  <div className={styles.featuredSpecText}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="details-title" className={styles.detailsSection}>
            <h2 id="details-title">Más detalles</h2>
            {vehicleDescription.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        </div>
      </div>

      <div className={styles.financeDock}>
        <div className={styles.financeSplitButton}>
          <Link className={styles.financeSecondary} href="/credit-simulator">
            Simular crédito
          </Link>
          <Link className={styles.financePrimary} href="/financing-confirmation">
            De contado
          </Link>
        </div>
      </div>

      <p aria-live="polite" className={styles.shareStatus}>{shareMessage}</p>
    </main>
  );
}
