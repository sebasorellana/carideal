"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SingleRangeSlider } from "@/components/forms/RangeSlider";
import { CloseIcon } from "@/components/icons/CloseIcon";
import styles from "./car-filter-sheet.module.css";

const priceOptions = ["$150,000", "$200,000", "$250,000", "$300,000", "$400,000"];
const yearOptions = ["2020", "2021", "2022", "2023", "2024", "2025"];
const mileageOptions = ["25,000 km", "50,000 km", "75,000 km", "100,000 km", "150,000 km"];

type SelectFieldProps = {
  defaultLabel: string;
  id: string;
  name: string;
  options: string[];
};

function SelectField({ defaultLabel, id, name, options }: SelectFieldProps) {
  return (
    <select className={styles.select} defaultValue="" id={id} name={name}>
      <option value="">{defaultLabel}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export function CarFilterSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const [distance, setDistance] = useState(20);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !sheetRef.current) return;

      const focusableElements = sheetRef.current.querySelectorAll<HTMLElement>(
        'select, input, button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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

    closeButtonRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        aria-controls="car-filter-sheet"
        aria-expanded={isOpen}
        aria-label="Filtrar resultados"
        className={styles.trigger}
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <Image
          alt=""
          height={56}
          src="/images/car-list/filter-icon.png"
          width={61}
        />
      </button>

      <div
        aria-hidden={!isOpen}
        className={`${styles.layer} ${isOpen ? styles.open : ""}`}
        inert={!isOpen}
      >
        <button
          aria-label="Cerrar filtros"
          className={styles.backdrop}
          onClick={() => setIsOpen(false)}
          tabIndex={-1}
          type="button"
        />

        <section
          aria-label="Filtros de autos"
          aria-modal="true"
          className={styles.sheet}
          id="car-filter-sheet"
          ref={sheetRef}
          role="dialog"
        >
          <div className={styles.handle} aria-hidden="true" />

          <header className={styles.header}>
            <h2>Filtros</h2>
            <button
              aria-label="Cerrar filtros"
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              ref={closeButtonRef}
              type="button"
            >
              <CloseIcon />
            </button>
          </header>

          <form
            className={styles.form}
            onReset={() => setDistance(20)}
            onSubmit={(event) => {
              event.preventDefault();
              setIsOpen(false);
            }}
          >
            <div className={styles.fields}>
              <div className={styles.row}>
                <label htmlFor="vehicle-type">Tipo</label>
                <SelectField
                  defaultLabel="Todos los tipos"
                  id="vehicle-type"
                  name="vehicleType"
                  options={["Sedán", "SUV", "Hatchback", "Pickup"]}
                />
              </div>

              <div className={styles.row}>
                <label htmlFor="vehicle-model">Modelo</label>
                <SelectField
                  defaultLabel="Todos los modelos"
                  id="vehicle-model"
                  name="vehicleModel"
                  options={["Sentra", "Versa", "Kicks", "Altima", "X-Trail"]}
                />
              </div>

              <div className={styles.row}>
                <span className={styles.groupLabel}>Precio</span>
                <div className={styles.doubleFields}>
                  <label className={styles.visuallyHidden} htmlFor="minimum-price">
                    Precio mínimo
                  </label>
                  <SelectField
                    defaultLabel="Desde"
                    id="minimum-price"
                    name="minimumPrice"
                    options={priceOptions}
                  />
                  <label className={styles.visuallyHidden} htmlFor="maximum-price">
                    Precio máximo
                  </label>
                  <SelectField
                    defaultLabel="Hasta"
                    id="maximum-price"
                    name="maximumPrice"
                    options={priceOptions}
                  />
                </div>
              </div>

              <div className={styles.row}>
                <span className={styles.groupLabel}>Año</span>
                <div className={styles.doubleFields}>
                  <label className={styles.visuallyHidden} htmlFor="minimum-year">
                    Año mínimo
                  </label>
                  <SelectField
                    defaultLabel="Desde"
                    id="minimum-year"
                    name="minimumYear"
                    options={yearOptions}
                  />
                  <label className={styles.visuallyHidden} htmlFor="maximum-year">
                    Año máximo
                  </label>
                  <SelectField
                    defaultLabel="Hasta"
                    id="maximum-year"
                    name="maximumYear"
                    options={yearOptions}
                  />
                </div>
              </div>

              <div className={styles.row}>
                <span className={styles.groupLabel}>Kilómetros</span>
                <div className={styles.doubleFields}>
                  <label className={styles.visuallyHidden} htmlFor="minimum-mileage">
                    Kilometraje mínimo
                  </label>
                  <SelectField
                    defaultLabel="Desde"
                    id="minimum-mileage"
                    name="minimumMileage"
                    options={mileageOptions}
                  />
                  <label className={styles.visuallyHidden} htmlFor="maximum-mileage">
                    Kilometraje máximo
                  </label>
                  <SelectField
                    defaultLabel="Hasta"
                    id="maximum-mileage"
                    name="maximumMileage"
                    options={mileageOptions}
                  />
                </div>
              </div>

              <div className={styles.row}>
                <label htmlFor="transmission">Transmisión</label>
                <SelectField
                  defaultLabel="Todas las opciones"
                  id="transmission"
                  name="transmission"
                  options={["Automático", "Manual", "CVT"]}
                />
              </div>

              <div className={styles.distanceRow}>
                <SingleRangeSlider
                  label="Cerca de mí"
                  maximum={100}
                  minimum={5}
                  name="distance"
                  onChange={setDistance}
                  step={5}
                  value={distance}
                  valueDescription={`(radio máximo de ${distance} km)`}
                />
              </div>
            </div>

            <footer className={styles.actions}>
              <button className={styles.resetButton} type="reset">
                Limpiar filtros
              </button>
              <button className={styles.applyButton} type="submit">
                Ver 24 resultados
              </button>
            </footer>
          </form>
        </section>
      </div>
    </>
  );
}
