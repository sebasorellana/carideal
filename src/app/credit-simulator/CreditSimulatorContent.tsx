"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon";
import formStyles from "@/components/forms/form-controls.module.css";
import { PrimaryLink } from "@/components/forms/PrimaryLink";
import rangeStyles from "@/components/forms/range-slider.module.css";
import { ScreenIntro } from "@/components/layout/ScreenIntro";
import { BorderedPanel } from "@/components/ui/BorderedPanel";
import styles from "./page.module.css";

type RangeStyle = CSSProperties & {
  "--range-end": string;
  "--range-start": string;
};

const vehicle = {
  fuel: "Gasolina",
  image: "/images/car-list/sedan-orange.webp",
  mileage: "125,000 km",
  name: "Nissan Sentra Advance 2024",
  price: 250000,
  transmission: "Automático",
};

const downPaymentMinimum = 25000;
const downPaymentMaximum = 150000;
const termOptions = [24, 36, 48, 60, 72];
const annualRate = 0.185;

const currencyFormatter = new Intl.NumberFormat("en-US");
const currency = (value: number) => `$${currencyFormatter.format(Math.round(value))}`;

export function CreditSimulatorContent() {
  const [downPayment, setDownPayment] = useState(50000);
  const [term, setTerm] = useState(48);
  const [isExitConfirmOpen, setIsExitConfirmOpen] = useState(false);
  const allowBackRef = useRef(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.history.pushState({ creditSimulatorGuard: true }, "", window.location.href);

    function handlePopState() {
      if (allowBackRef.current) return;

      window.history.pushState(
        { creditSimulatorGuard: true },
        "",
        window.location.href,
      );
      setIsExitConfirmOpen(true);
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (!isExitConfirmOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsExitConfirmOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements.item(0);
      const lastElement = focusableElements.item(focusableElements.length - 1);

      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    noButtonRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isExitConfirmOpen]);

  function handleCancelExit() {
    setIsExitConfirmOpen(false);
  }

  function handleConfirmExit() {
    allowBackRef.current = true;
    setIsExitConfirmOpen(false);
    window.history.go(-2);
  }

  const monthlyPayment = useMemo(() => {
    const financedAmount = vehicle.price - downPayment;
    const monthlyRate = annualRate / 12;
    const payment =
      (financedAmount * monthlyRate) / (1 - (1 + monthlyRate) ** -term);

    return Math.max(payment, 0);
  }, [downPayment, term]);

  const progress =
    ((downPayment - downPaymentMinimum) /
      (downPaymentMaximum - downPaymentMinimum)) *
    100;
  const rangeStyle: RangeStyle = {
    "--range-end": `${progress}%`,
    "--range-start": "0%",
  };

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <ScreenIntro
          title="Simulación de crédito"
          titleId="credit-simulator-title"
        />

        <div className={styles.vehicleCard}>
          <div className={styles.vehicleImageWrap}>
            <Image
              alt={vehicle.name}
              className={styles.vehicleImage}
              fill
              sizes="(max-width: 480px) 40vw, 13.5rem"
              src={vehicle.image}
            />
          </div>

          <div className={styles.vehicleDetails}>
            <p className={styles.vehicleName}>{vehicle.name}</p>
            <p className={styles.vehicleSpecs}>
              {vehicle.transmission} · {vehicle.fuel} · {vehicle.mileage}
            </p>

            <div className={styles.divider} />

            <div className={styles.priceStack}>
              <span className={styles.fieldLabel}>Precio del vehículo</span>
              <span className={styles.priceValue}>{currency(vehicle.price)}</span>
            </div>
          </div>
        </div>

        <BorderedPanel>
          <div className={styles.fieldRow}>
            <span className={styles.fieldLabel}>Enganche</span>
            <span className={styles.fieldValue}>{currency(downPayment)}</span>
          </div>

          <div
            className={`${rangeStyles.track} ${rangeStyles.singleTrack}`}
            style={rangeStyle}
          >
            <input
              aria-label="Enganche"
              aria-valuetext={currency(downPayment)}
              className={`${rangeStyles.input} ${rangeStyles.singleInput}`}
              max={downPaymentMaximum}
              min={downPaymentMinimum}
              onChange={(event) => setDownPayment(Number(event.target.value))}
              step={5000}
              type="range"
              value={downPayment}
            />
          </div>

          <div className={styles.rangeCaption}>
            <span>{currency(downPaymentMinimum)}</span>
            <span>{currency(downPaymentMaximum)}</span>
          </div>

          <div className={styles.divider} />

          <div className={styles.termRow}>
            <span className={styles.fieldLabel}>Plazo del crédito</span>
            <div className={styles.termControl}>
              <select
                aria-label="Plazo del crédito"
                className={styles.termSelect}
                onChange={(event) => setTerm(Number(event.target.value))}
                value={term}
              >
                {termOptions.map((option) => (
                  <option key={option} value={option}>
                    {option} meses
                  </option>
                ))}
              </select>
              <ChevronDownIcon />
            </div>
          </div>
        </BorderedPanel>

        <BorderedPanel>
          <div className={styles.resultPanel}>
            <p className={styles.fieldLabel}>Mensualidad estimada</p>
            <p className={styles.resultValue}>
              {currency(monthlyPayment)} <small>/mes*</small>
            </p>
            <p className={styles.resultCat}>
              CAT promedio {(annualRate * 100).toFixed(1)}% sin IVA
            </p>
            <p className={styles.disclaimer}>
              *Consulta{" "}
              <Link
                className={formStyles.termsLink}
                href="/terms-and-conditions"
              >
                Términos y condiciones
              </Link>
              .
            </p>
          </div>
        </BorderedPanel>
      </div>

      <div className={styles.footerDock}>
        <PrimaryLink href="/financing-confirmation" shape="pill">
          Continuar solicitud
        </PrimaryLink>
      </div>

      {isExitConfirmOpen && (
        <div className={styles.exitOverlay}>
          <button
            aria-label="Cancelar"
            className={styles.exitBackdrop}
            onClick={handleCancelExit}
            tabIndex={-1}
            type="button"
          />

          <div
            aria-labelledby="exit-confirm-question"
            aria-modal="true"
            className={styles.exitDialog}
            ref={dialogRef}
            role="alertdialog"
          >
            <p className={styles.exitQuestion} id="exit-confirm-question">
              ¿Seguro deseas salir?
            </p>

            <div className={styles.exitActions}>
              <button
                className={styles.exitNo}
                onClick={handleCancelExit}
                ref={noButtonRef}
                type="button"
              >
                No
              </button>
              <button
                className={styles.exitYes}
                onClick={handleConfirmExit}
                type="button"
              >
                Sí
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
