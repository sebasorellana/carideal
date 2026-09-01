"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { useFavorites } from "@/context/FavoritesContext";
import styles from "./page.module.css";

const vehicleId = "nissan-sentra-advance-2024";
const image = "/images/car-list/sedan-orange.webp";

const gallery = [
  { label: "Vista completa", origin: "center", position: "center", scale: 1 },
  { label: "Detalle del frente", origin: "78% 58%", position: "center", scale: 1.55 },
  { label: "Vista lateral", origin: "25% 54%", position: "center", scale: 1.45 },
  { label: "Detalle de rueda y carrocería", origin: "36% 66%", position: "center", scale: 2 },
];

const highlights = [
  { height: 68, icon: "/images/car-detail/touch-icon.png", label: "Pantalla táctil", width: 70 },
  { height: 64, icon: "/images/car-detail/camera-icon.png", label: "Cámara de reversa", width: 75 },
  { height: 63, icon: "/images/car-detail/air-icon.png", label: "Aire acondicionado", width: 64 },
  { height: 63, icon: "/images/car-detail/bluetooth-icon.png", label: "Bluetooth", width: 39 },
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

            <a className={styles.helpButton} href="mailto:ayuda@carideal.com">
              <Image alt="Ayuda" height={172} src="/images/onboarding-first-setup/help-icon.webp" width={172} />
            </a>
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
            <h1 className={styles.title} id="vehicle-title">Nissan Sentra Advance 2024</h1>

            <div className={styles.mileage}>
              <Image alt="" height={44} src="/images/car-detail/km-icon.png" width={51} />
              <span>125,000 km</span>
            </div>

            <dl className={styles.specifications}>
              <div className={styles.specification}>
                <Image alt="" height={79} src="/images/car-detail/transmition-icon.png" width={79} />
                <div><dt>Transmisión</dt><dd>Automático</dd></div>
              </div>
              <div className={styles.specification}>
                <Image alt="" height={73} src="/images/car-detail/gas-icon.png" width={73} />
                <div><dt>Combustible</dt><dd>Gasolina</dd></div>
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
            <ul className={styles.highlights}>
              {highlights.map(({ height, icon, label, width }) => (
                <li key={label}>
                  <span className={styles.highlightIcon}>
                    <Image alt="" height={height} src={icon} width={width} />
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>
      </div>

      <div className={styles.financeDock}>
        <div className={styles.financeSplitButton}>
          <Link className={styles.financeSecondary} href="/credit-simulator">
            Simular crédito
          </Link>
          <Link className={styles.financePrimary} href="/credit-simulator">
            Solicitar financiación
          </Link>
        </div>
      </div>

      <p aria-live="polite" className={styles.shareStatus}>{shareMessage}</p>
    </main>
  );
}
