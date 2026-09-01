"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon";
import styles from "./form-controls.module.css";

type SelectFieldProps = {
  disabled?: boolean;
  id: string;
  label: string;
  name: string;
  onChange?: (value: string) => void;
  openDirection?: "down" | "up";
  options: string[];
  placeholder?: string;
  required?: boolean;
  size?: "regular" | "compact";
  swatches?: Record<string, string>;
  value?: string;
};

export function SelectField({
  disabled = false,
  id,
  label,
  name,
  onChange,
  openDirection = "down",
  options,
  placeholder = "Selecciona una opción",
  required,
  size = "regular",
  swatches,
  value,
}: SelectFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelected, setInternalSelected] = useState("");
  const selected = value ?? internalSelected;
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxId = `${id}-listbox`;

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleSelect(option: string) {
    if (value === undefined) {
      setInternalSelected(option);
    }
    onChange?.(option);
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div
      className={`${styles.field} ${size === "compact" ? styles.compact : ""}`}
      ref={rootRef}
    >
      <label className={styles.label} htmlFor={id}>
        {label}
        {required && (
          <span aria-hidden="true" className={styles.requiredMark}>
            {" "}
            *
          </span>
        )}
      </label>

      <div className={styles.selectWrap}>
        <button
          aria-controls={listboxId}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          className={styles.select}
          disabled={disabled}
          id={id}
          onClick={() => setIsOpen((open) => !open)}
          ref={triggerRef}
          type="button"
        >
          <span
            className={`${styles.selectValue} ${!selected ? styles.selectPlaceholder : ""}`}
          >
            {selected && swatches?.[selected] && (
              <span
                aria-hidden="true"
                className={styles.swatch}
                style={{ background: swatches[selected] }}
              />
            )}
            {selected || placeholder}
          </span>
          <span aria-hidden="true" className={styles.selectChevron}>
            <ChevronDownIcon />
          </span>
        </button>

        {isOpen && !disabled && (
          <ul
            aria-label={label}
            className={`${styles.listbox} ${openDirection === "up" ? styles.listboxAbove : ""}`}
            id={listboxId}
            role="listbox"
          >
            {options.map((option) => (
              <li
                aria-selected={option === selected}
                className={styles.listboxOption}
                key={option}
                onClick={() => handleSelect(option)}
                role="option"
              >
                {swatches?.[option] && (
                  <span
                    aria-hidden="true"
                    className={styles.swatch}
                    style={{ background: swatches[option] }}
                  />
                )}
                {option}
              </li>
            ))}
          </ul>
        )}

        <input name={name} required={required} type="hidden" value={selected} />
      </div>
    </div>
  );
}
